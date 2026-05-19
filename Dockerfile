# From https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
#
# ENOSPC during `next build` means the Docker host (or Docker Desktop disk image) is full.
# Free space there first: `docker system prune -af` and `docker builder prune -af`, or raise the disk limit.

FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
# Note: We install ALL dependencies (including devDependencies) for the build stage
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY scripts ./scripts
# Drop package-manager caches so the deps layer (and Docker's storage) stays smaller.
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile && yarn cache clean; \
    elif [ -f package-lock.json ]; then npm ci --include=dev --no-audit --no-fund && npm cache clean --force; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile && pnpm store prune; \
    else echo "Lockfile not found." && exit 1; \
    fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build arguments for sync script (passed from Jenkins)
ARG NEXT_PUBLIC_PAYLOAD_ADMIN_URL
ARG PAYLOAD_URL
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_SITE_DOMAIN
ARG CMS_SYNC_URL
ARG CMS_SYNC_SECRET
ARG SKIP_SYNC_ON_BUILD

# Set environment variables from build args for the sync script
ENV NEXT_PUBLIC_PAYLOAD_ADMIN_URL=${NEXT_PUBLIC_PAYLOAD_ADMIN_URL}
ENV PAYLOAD_URL=${PAYLOAD_URL}
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV NEXT_PUBLIC_SITE_DOMAIN=${NEXT_PUBLIC_SITE_DOMAIN}
ENV CMS_SYNC_URL=${CMS_SYNC_URL}
ENV CMS_SYNC_SECRET=${CMS_SYNC_SECRET}
ENV SKIP_SYNC_ON_BUILD=${SKIP_SYNC_ON_BUILD}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Avoid webpack filesystem cache filling the build layer (see ENOSPC on space-constrained CI agents).
ENV DISABLE_WEBPACK_CACHE=1

# Build, then remove Next's build cache dir to shrink the builder layer (helps disk on the Docker host).
RUN \
    if [ -f yarn.lock ]; then yarn run build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi \
    && rm -rf .next/cache

# Run sync-pages script after build (while source files still exist)
# tsx is now explicitly installed as a devDependency
RUN echo "Running page sync..." && npm run sync || echo "Sync failed but continuing build..."

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Remove this line if you do not have this folder
# COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs///advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# HTTP-layer HTML minifier (improves text-to-HTML ratio site-wide; see
# scripts/html-minify-preload.mjs and src/lib/html/minifyHtml.ts).
COPY --from=builder --chown=nextjs:nodejs /app/scripts/html-minify-preload.mjs ./html-minify-preload.mjs

USER nextjs

EXPOSE 3001

ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

CMD ["node", "--import", "./html-minify-preload.mjs", "server.js"]
