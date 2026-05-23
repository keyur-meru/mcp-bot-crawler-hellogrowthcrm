import { z } from "zod";
import { defineTool, fail, ok } from "./tool-types.js";
import { INTEGRATIONS_REPORT_CATALOG } from "./generated-integrations-report-catalog.js";

// ─────────────────────────────────────────────────────────────────────────────
// Integration catalog — curated rich data (90+ integrations) merged with the
// auto-generated report catalog (477+ integrations). Curated entries win on
// duplicate slugs; the generated catalog fills in every other integration.
// ─────────────────────────────────────────────────────────────────────────────

interface IntegrationEntry {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  whatItDoes: string;
  setupSteps: string[];
  usefulFor: string;
  useCases: string[];
  status?: "live" | "backend-ready" | "scaffolded";
  url: string;
}

interface IntegrationCategory {
  slug: string;
  title: string;
  shortLabel: string;
  integrations: Omit<IntegrationEntry, "category" | "categorySlug" | "url">[];
}

const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  {
    slug: "email-marketing",
    title: "Email marketing & CRM sync",
    shortLabel: "Email marketing",
    integrations: [
      {
        slug: "mailchimp",
        name: "Mailchimp",
        whatItDoes: "Syncs CRM leads and contacts to Mailchimp audiences with a one-way push.",
        setupSteps: [
          "Open Settings → Integrations → Mailchimp.",
          "Connect with your Mailchimp API key.",
          "Choose the target audience or list.",
          "Map fields (name, email, tags) between CRM and Mailchimp.",
          'Click "Sync Now" or run on a schedule if available.',
        ],
        usefulFor: "Email drip campaigns, newsletters, and marketing automation driven by CRM lead data.",
        useCases: [
          "Nurture inbound leads with segmented Mailchimp journeys.",
          "Keep marketing lists aligned when reps qualify or disqualify leads.",
        ],
      },
      {
        slug: "brevo",
        name: "Brevo (Sendinblue)",
        whatItDoes: "Creates and updates contacts in Brevo lists with field mapping and tags.",
        setupSteps: [
          "Go to Settings → Integrations → Brevo.",
          "Paste your Brevo API key.",
          "Select the contact list to sync into.",
          "Configure field mapping and tags.",
          "Run a manual sync or enable on-demand sync.",
        ],
        usefulFor: "Transactional email, SMS campaigns, and marketing automation using CRM contact data.",
        useCases: [
          "Trigger Brevo automations when CRM lifecycle stages change.",
          "Maintain one profile per contact across CRM and Brevo.",
        ],
      },
      {
        slug: "klaviyo",
        name: "Klaviyo",
        whatItDoes: "Pushes customer profiles and CRM lifecycle events (lead created, deal won, etc.) to Klaviyo.",
        setupSteps: [
          "Open Settings → Integrations → Klaviyo.",
          "Enter your private API key.",
          "Map profile fields between CRM and Klaviyo.",
          "Choose which CRM events to send (e.g. lead created, deal won).",
          "Enable sync and verify events in Klaviyo.",
        ],
        usefulFor: "Advanced ecommerce-style email and SMS flows, behavior-based automation, and segmentation using CRM events.",
        useCases: [
          "Build flows off pipeline milestones and product usage signals.",
          "Align revenue teams with lifecycle marketing in Klaviyo.",
        ],
      },
      {
        slug: "constant-contact",
        name: "Constant Contact",
        whatItDoes: "Syncs CRM contacts to Constant Contact lists for email campaigns, event marketing, and list segmentation with field mapping.",
        setupSteps: [
          "Open Settings → Integrations → Constant Contact.",
          "Authorize via OAuth with your Constant Contact account.",
          "Select the target list or segment.",
          "Map CRM fields (name, email, company, tags) and enable sync.",
        ],
        usefulFor: "SMBs and nonprofits that run newsletters and event invites alongside pipeline work in CRM.",
        useCases: [
          "Keep marketing lists aligned when reps qualify or disqualify leads.",
          "Trigger list membership updates when deal stage changes.",
        ],
      },
      {
        slug: "sendgrid",
        name: "SendGrid",
        whatItDoes: "High-volume transactional and marketing email delivery with CRM-triggered sends and bounce/engagement webhooks.",
        setupSteps: [
          "Open Settings → Integrations → SendGrid.",
          "Paste your API key and verify the sending domain.",
          "Map CRM events to templates and webhook endpoints for delivery events.",
        ],
        usefulFor: "Teams that outgrow basic SMTP and need scalable, measurable outbound email from CRM workflows.",
        useCases: [
          "Alert reps when a high-value lead opens a proposal email.",
          "Sync suppression lists when contacts bounce or unsubscribe.",
        ],
      },
      {
        slug: "activecampaign",
        name: "ActiveCampaign",
        whatItDoes: "Contact sync and marketing automation triggers so CRM stages and tags drive ActiveCampaign automations.",
        setupSteps: [
          "Settings → Integrations → ActiveCampaign.",
          "Enter API URL and key.",
          "Map lists, tags, and field pairs; enable deal-stage webhooks if available.",
        ],
        usefulFor: "SMBs that want deep nurture automation alongside pipeline ownership in CRM.",
        useCases: ["Start a nurture sequence when a lead is recycled from an opportunity."],
      },
      {
        slug: "resend",
        name: "Resend Email API",
        whatItDoes: "Developer-friendly transactional email API with high deliverability for CRM notifications and system mail.",
        setupSteps: [
          "Settings → Integrations → Resend.",
          "Add your API key and verified sending domain.",
          "Choose which CRM notifications route through Resend.",
        ],
        usefulFor: "Teams that want modern SMTP/API delivery with strong domain reputation tooling.",
        useCases: ["Passwordless alerts, workflow emails, and internal routing from CRM automations."],
      },
    ],
  },
  {
    slug: "communication",
    title: "Communication & messaging",
    shortLabel: "Communication",
    integrations: [
      {
        slug: "slack",
        name: "Slack",
        whatItDoes: "Rich CRM notifications in Slack channels (new leads, deal updates, task reminders).",
        setupSteps: [
          "Open Settings → Integrations → Slack.",
          "Authorize your Slack workspace.",
          "Pick the channel for notifications.",
          "Select which CRM events should post messages.",
        ],
        usefulFor: "Keeping sales teams informed without constantly switching to the CRM.",
        useCases: [
          "Manager visibility on high-value new leads.",
          "Deal stage alerts for account executives.",
        ],
      },
      {
        slug: "discord",
        name: "Discord",
        whatItDoes: "CRM notifications with rich embeds via webhook to your server channels.",
        setupSteps: [
          "Go to Settings → Integrations → Discord.",
          "Paste your Discord webhook URL.",
          "Choose which CRM events trigger notifications.",
        ],
        usefulFor: "Teams that coordinate on Discord internally.",
        useCases: [
          "Startup or gaming-adjacent sales pods.",
          "Lightweight alerts without full Slack rollout.",
        ],
      },
      {
        slug: "microsoft-teams",
        name: "Microsoft Teams",
        whatItDoes: "Adaptive Card notifications in Teams channels for CRM events and deep links to records.",
        setupSteps: [
          "Open Settings → Integrations → Teams.",
          "Configure the incoming webhook URL for your channel.",
          "Select notification events from the CRM.",
        ],
        usefulFor: "Enterprises standardized on Microsoft 365.",
        useCases: [
          "Revenue reviews with notifications in the same hub as documents and meetings.",
        ],
      },
      {
        slug: "whatsapp-meta",
        name: "WhatsApp Business API",
        whatItDoes: "Template messages with delivery tracking; send and receive WhatsApp conversations with leads (sent, delivered, read).",
        setupSteps: [
          "Configure Meta Business and WhatsApp in the Super Admin panel.",
          "Use Meta-approved message templates where required.",
          "Respect the 24-hour messaging window for free-form replies after user contact.",
        ],
        usefulFor: "Direct customer engagement, follow-ups, and support on WhatsApp.",
        useCases: [
          "High-touch B2C or SMB sales with WhatsApp-first buyers.",
          "Appointment reminders and quick qualification.",
        ],
      },
      {
        slug: "intercom",
        name: "Intercom",
        whatItDoes: "Creates and updates Intercom contacts from CRM records; adds internal notes for support context.",
        setupSteps: [
          "Go to Settings → Integrations → Intercom.",
          "Enter your Intercom API token.",
          "Sync contacts and map fields.",
          "Add notes from the lead or contact detail view when needed.",
        ],
        usefulFor: "Bridging sales and support so agents see CRM context in Intercom.",
        useCases: ["Escalations from AE to support with full deal history."],
      },
      {
        slug: "gmail-google-workspace",
        name: "Gmail & Google Workspace",
        whatItDoes: "Gmail, Calendar, Sheets, and Drive integration: mailbox sync to leads and contacts plus Workspace productivity context alongside pipeline work.",
        setupSteps: [
          "Open Settings → Integrations → Gmail (or Google Workspace / Email).",
          "Sign in with the Google account to connect; a Workspace admin may need to allow the CRM app in the Google Admin console.",
          "Accept the requested OAuth scopes for mailbox sync or send-as shown in the app.",
          "Confirm folder or label behavior, then send or receive a test message and verify it appears on a CRM record.",
        ],
        usefulFor: "Teams that live in Gmail or Google Workspace and want customer conversations next to pipeline and tasks.",
        useCases: [
          "Shared account visibility when multiple reps email the same prospect.",
          "Faster handoffs — history stays on the contact without forwarding long threads.",
        ],
      },
      {
        slug: "outlook-microsoft-365",
        name: "Microsoft Outlook",
        whatItDoes: "Outlook email and calendar sync: mailboxes on Microsoft 365 log to CRM records with deals and contacts; pairs with Outlook Calendar for meetings.",
        setupSteps: [
          "Go to Settings → Integrations → Outlook / Microsoft 365 (Email).",
          "Sign in with Microsoft; complete admin consent in Entra ID if your IT policy requires it.",
          "Select the mailbox or shared mailbox and confirm sync folders (e.g. Sent, Inbox).",
          "Run a test send or receive and confirm the activity attaches to the correct lead or contact.",
        ],
        usefulFor: "Organizations on Microsoft 365 that want one place to see pipeline, tasks, and customer email.",
        useCases: [
          "Enterprise sellers moving between Outlook and CRM without copy-paste.",
          "Compliance-friendly retention of customer email alongside deal updates.",
        ],
      },
      {
        slug: "instagram-facebook-messenger",
        name: "Instagram & Facebook Messenger",
        whatItDoes: "Social messaging integration: route Meta inbox conversations into CRM threads with contact linkage.",
        setupSteps: [
          "Settings → Integrations → Meta (Instagram / Messenger).",
          "Connect your Meta Business portfolio and grant page permissions.",
          "Map inboxes to queues or owners and enable webhook ingestion.",
        ],
        usefulFor: "Teams that sell and support where buyers already message on Instagram or Facebook.",
        useCases: ["Social ad replies becoming qualified leads with attribution."],
      },
      {
        slug: "telegram-bot",
        name: "Telegram Bot",
        whatItDoes: "Bot integration for messaging and notifications from CRM events to Telegram chats or channels.",
        setupSteps: [
          "Create a bot with BotFather and copy the token.",
          "Settings → Integrations → Telegram → paste token and allowed chat IDs.",
          "Choose which CRM alerts post to Telegram.",
        ],
        usefulFor: "Distributed teams and founders who live in Telegram for fast operational pings.",
        useCases: ["Instant deal-won alerts to a private founder channel."],
      },
      {
        slug: "crisp-tidio",
        name: "Crisp & Tidio",
        whatItDoes: "Third-party live chat integration: sync visitors and transcripts into CRM leads and activities.",
        setupSteps: [
          "Settings → Integrations → Crisp or Tidio.",
          "Paste workspace or site API keys.",
          "Map visitor identity fields and transcript logging rules.",
        ],
        usefulFor: "SMBs using external chat widgets while keeping CRM as the system of record.",
        useCases: ["Chat-qualified leads with full transcript on the contact record."],
      },
      {
        slug: "built-in-live-chat-widget",
        name: "Built-in Live Chat Widget",
        whatItDoes: "Embeddable on-site chat with AI auto-responses and human handoff to CRM owners.",
        setupSteps: [
          "Settings → Chat Widget → design, placement, and business hours.",
          "Enable AI drafts and escalation rules to reps.",
          "Embed the snippet on your marketing site or product.",
        ],
        usefulFor: "Teams that want native chat without a separate vendor for basic capture and routing.",
        useCases: ["Capture anonymous visitors and promote them to owned leads when email is shared."],
      },
    ],
  },
  {
    slug: "voice-telephony",
    title: "Voice & telephony",
    shortLabel: "Voice",
    integrations: [
      {
        slug: "twilio",
        name: "Twilio (Voice, SMS, SIP)",
        whatItDoes: "Browser calling, SMS, recording, and SIP trunking for programmable voice and messaging with full CRM logging.",
        setupSteps: [
          "Open Settings → Integrations → Twilio.",
          "Enter Account SID, Auth Token, and phone number.",
          "Place calls from lead profiles and confirm logging settings.",
        ],
        usefulFor: "Outbound and inbound sales calls, SMS follow-up, and compliant call logging.",
        useCases: [
          "Power dialer workflows tied to CRM tasks.",
          "SMS sequences after calls or demos.",
        ],
      },
      {
        slug: "elevenlabs",
        name: "ElevenLabs AI Voice",
        whatItDoes: "Ultra-realistic AI voice agents for automated outbound and inbound call flows.",
        setupSteps: [
          "Open Settings → AI Agent (or Voice).",
          "Configure voice, personality, and greeting.",
          "Deploy the agent for selected lead segments or queues.",
        ],
        usefulFor: "Automated qualification calls and appointment scheduling.",
        useCases: ["After-hours lead response with human-like voice."],
      },
      {
        slug: "vapi",
        name: "Vapi AI Voice",
        whatItDoes: "AI voice agent platform for automated outbound calls and conversational telephony.",
        setupSteps: [
          "Configure Vapi in telephony or AI agent settings.",
          "Assign assistants to call workflows or queues.",
        ],
        usefulFor: "Teams that want advanced conversational AI on top of telephony.",
        useCases: ["Complex conversational calling scenarios beyond simple scripts."],
      },
      {
        slug: "exotel",
        name: "Exotel",
        whatItDoes: "Cloud telephony for Indian businesses: virtual numbers, IVR, and call flows integrated with CRM activity.",
        setupSteps: [
          "Settings → Integrations → Exotel.",
          "Enter API key, SID, and token from the Exotel dashboard.",
          "Map numbers and call disposition fields to CRM.",
        ],
        usefulFor: "India SMBs needing local telco-friendly routing with CRM call logs.",
        useCases: ["Inbound support lines that create or update CRM leads automatically."],
      },
      {
        slug: "myoperator",
        name: "MyOperator",
        whatItDoes: "Cloud call center for Indian SMBs with distributed agents and CRM-tied call analytics.",
        setupSteps: [
          "Settings → Integrations → MyOperator.",
          "Authenticate and map agent or extension IDs to CRM users.",
          "Enable call logging webhooks into CRM activities.",
        ],
        usefulFor: "Teams scaling phone support and sales with India-first operators.",
        useCases: ["Queue-based routing with SLA reporting on first response."],
      },
    ],
  },
  {
    slug: "calendar",
    title: "Calendar & scheduling",
    shortLabel: "Calendar",
    integrations: [
      {
        slug: "google-calendar",
        name: "Google Calendar",
        whatItDoes: "Two-way sync of events; can auto-generate Google Meet links for meetings.",
        setupSteps: [
          "Settings → Integrations → Google Calendar → Connect.",
          "Authorize your Google account.",
          "Confirm which calendars sync and event field mapping.",
        ],
        usefulFor: "Scheduling with leads, demos, and internal coordination.",
        useCases: ["Rep calendars visible next to tasks and pipeline work."],
      },
      {
        slug: "outlook-calendar",
        name: "Outlook Calendar",
        whatItDoes: "Syncs events with Microsoft Outlook.",
        setupSteps: ["Settings → Integrations → Outlook → Authorize your Microsoft account."],
        usefulFor: "Organizations on Microsoft 365.",
        useCases: ["Enterprise sales teams living in Outlook."],
      },
      {
        slug: "calendly",
        name: "Calendly",
        whatItDoes: "Ingests bookings as CRM activities and leads via webhook.",
        setupSteps: [
          "In Calendly, add a webhook pointing to your CRM endpoint.",
          "Map booking fields to CRM lead and activity fields.",
        ],
        usefulFor: "Self-serve scheduling without manual lead entry.",
        useCases: ["Inbound demo requests becoming qualified leads automatically."],
      },
      {
        slug: "cal-com",
        name: "Cal.com",
        whatItDoes: "Same pattern as Calendly — bookings ingested with deduplication rules.",
        setupSteps: ["Configure webhook in Cal.com toward your CRM ingestion endpoint."],
        usefulFor: "Open-source friendly scheduling with CRM sync.",
        useCases: ["Teams preferring Cal.com over Calendly for cost or hosting."],
      },
      {
        slug: "zoom-google-meet",
        name: "Zoom & Google Meet",
        whatItDoes: "Video meeting scheduling: generate and sync conference links with CRM activities (Zoom and Google Meet).",
        setupSteps: [
          "Connect Zoom or ensure Google Meet is enabled via Google Calendar integration.",
          "Map meeting types in CRM to default video providers.",
          "Confirm conference URLs appear on scheduled activities and invites.",
        ],
        usefulFor: "Remote sales teams that need reliable video links on every customer touchpoint.",
        useCases: ["Demo and discovery calls with join links stored on the deal timeline."],
      },
    ],
  },
  {
    slug: "analytics-ads",
    title: "Analytics & ad tracking",
    shortLabel: "Analytics & ads",
    integrations: [
      {
        slug: "google-ads-offline",
        name: "Google Ads",
        whatItDoes: "Offline conversions and performance data: upload CRM milestones (qualified lead, won deal) to Google Ads using GCLID.",
        setupSteps: [
          "Settings → Integrations → Google Ads.",
          "Configure conversion actions in Google Ads.",
          "Map CRM milestones to those conversions for automatic upload.",
        ],
        usefulFor: "Optimizing paid search toward real revenue outcomes, not just clicks.",
        useCases: ["B2B teams proving pipeline impact on Search and Performance Max."],
      },
      {
        slug: "meta-capi",
        name: "Meta Conversions API (CAPI)",
        whatItDoes: "Server-side events to Meta with hashed user data for attribution.",
        setupSteps: [
          "Settings → Integrations → Meta CAPI.",
          "Enter Pixel ID and access token.",
          "Choose CRM events to send (e.g. lead, purchase).",
        ],
        usefulFor: "More reliable Facebook and Instagram attribution under privacy constraints.",
        useCases: ["iOS and cookie limitations mitigated with server events."],
      },
      {
        slug: "ga4-measurement",
        name: "Google Analytics (GA4)",
        whatItDoes: "GA4 Measurement Protocol: send CRM lifecycle events (e.g. lead_qualified, deal_won) into Google Analytics.",
        setupSteps: [
          "Settings → Integrations → GA4.",
          "Enter Measurement ID and API secret.",
          "Map CRM events to GA4 event names.",
        ],
        usefulFor: "Full-funnel reporting from marketing touch to closed revenue.",
        useCases: ["Marketing and RevOps aligning on one GA4 funnel view."],
      },
    ],
  },
  {
    slug: "lead-capture",
    title: "Lead capture",
    shortLabel: "Lead capture",
    integrations: [
      {
        slug: "meta-lead-ads",
        name: "Meta Lead Ads",
        whatItDoes: "Auto-ingest leads from Meta Lead Ads (Facebook and Instagram) with campaign and form attribution.",
        setupSteps: [
          "Configure webhook in Meta Business Manager to your CRM endpoint.",
          "Verify field mapping and deduplication rules.",
        ],
        usefulFor: "Instant lead capture from paid social campaigns.",
        useCases: ["High-volume top-of-funnel from Meta ads."],
      },
      {
        slug: "google-lead-forms",
        name: "Google Lead Forms",
        whatItDoes: "Auto-ingest leads from Google Ads lead form extensions and in-ad capture.",
        setupSteps: ["Configure webhook in Google Ads to your CRM lead endpoint."],
        usefulFor: "Search and YouTube campaigns with in-ad lead forms.",
        useCases: ["High-intent search leads without a landing page click-out."],
      },
      {
        slug: "indiamart",
        name: "IndiaMART",
        whatItDoes: "Auto-imports buyer inquiries from IndiaMART Lead Manager into CRM leads with source attribution.",
        setupSteps: [
          "On seller.indiamart.com, open Lead Manager → CRM Integration and generate your CRM Key.",
          "Paste the CRM Key in HelloGrowthCRM, run Test Connection, then Connect & Start Syncing.",
        ],
        usefulFor: "B2B manufacturers and suppliers capturing IndiaMART inquiries into the CRM pipeline.",
        useCases: [
          "Industrial buyers and RFQs from IndiaMART into the same pipeline as other inbound leads.",
          "Teams that want Lead Manager sync without manual CSV exports.",
        ],
      },
      {
        slug: "justdial",
        name: "JustDial",
        whatItDoes: "Turns JustDial notification emails into CRM leads via forwarding rules or a direct webhook POST.",
        setupSteps: [
          "Copy the webhook URL from the JustDial card (or set up Gmail forwarding / filters).",
          "Enable the integration, turn on email notifications if you want admin alerts, then Save Settings.",
          "Use Send Test Lead to confirm a sample lead is created in the CRM.",
        ],
        usefulFor: "Local services and SMB teams that receive JustDial inquiries by email and want them in the pipeline automatically.",
        useCases: [
          "Route JustDial mail into the CRM without manual data entry.",
          "Use Zapier, Pabbly, or Make to POST parsed email data to the webhook when needed.",
        ],
      },
      {
        slug: "linkedin-lead-gen",
        name: "LinkedIn Lead Gen",
        whatItDoes: "B2B lead capture from LinkedIn Lead Gen Forms and sponsored campaigns into CRM with UTM and campaign IDs.",
        setupSteps: [
          "Settings → Integrations → LinkedIn Marketing.",
          "Connect OAuth and select ad accounts or pages.",
          "Map form fields and enable webhook ingestion for new submissions.",
        ],
        usefulFor: "Outbound and inbound teams running LinkedIn as a primary pipeline channel.",
        useCases: ["ABM lists where every form fill is tied to a target account in CRM."],
      },
      {
        slug: "form-tools-typeform-tally-google",
        name: "Typeform, Tally.so & Google Forms",
        whatItDoes: "Form submission ingestion to CRM leads via native connectors or webhooks (Typeform, Tally.so, Google Forms).",
        setupSteps: [
          "Configure each form's webhook URL to your CRM ingestion endpoint.",
          "Map question fields to CRM lead fields.",
          "Enable deduplication on email or phone.",
        ],
        usefulFor: "Marketing and event teams that collect leads without a custom landing stack.",
        useCases: ["Webinar and content downloads flowing straight into routing rules."],
      },
      {
        slug: "lead-enrichment-providers",
        name: "Apollo, Hunter, Clearbit, ZoomInfo, Lusha & Snov.io",
        whatItDoes: "Lead data enrichment from 6+ providers: firmographics, verified emails, and social profiles on CRM records.",
        setupSteps: [
          "Settings → Integrations → Enrichment.",
          "Add API keys per provider you license.",
          "Map enrichment fields and refresh cadence (manual vs. on-record-open).",
        ],
        usefulFor: "SDRs and AEs who need accurate titles, emails, and company firmographics before outreach.",
        useCases: ["Auto-fill gaps when a lead is created from a partial form or LinkedIn URL."],
      },
    ],
  },
  {
    slug: "automation",
    title: "Automation & webhooks",
    shortLabel: "Automation",
    integrations: [
      {
        slug: "zapier",
        name: "Zapier",
        whatItDoes: "Connects the CRM to thousands of apps via outbound webhooks and triggers.",
        setupSteps: [
          "Settings → Integrations → Zapier.",
          "Paste the webhook URL from your Zap.",
          "Select CRM events that fire the webhook.",
        ],
        usefulFor: "No-code automation such as deal won → invoice tool, or form → CRM enrich.",
        useCases: ["Quick integrations without engineering for niche tools."],
      },
      {
        slug: "make-com",
        name: "Make.com",
        whatItDoes: "Make.com (formerly Integromat) lets you build visual scenarios that connect HelloGrowthCRM to thousands of apps using modules, webhooks, and routers — with branching and error handling beyond simple one-step automations.",
        setupSteps: [
          "In Make.com, create a scenario with HelloGrowthCRM as a module or use an HTTP webhook to receive CRM events.",
          "Configure triggers (e.g. new lead, deal updated) and actions in other apps.",
          "Test with a small dataset, then enable scheduling.",
        ],
        usefulFor: "Teams that need multi-step logic, iterators, and error handling beyond simple Zaps.",
        useCases: [
          "Sync CRM deals to project tools or accounting when a stage changes.",
          "Route form submissions through transforms before CRM create.",
        ],
      },
      {
        slug: "integrately",
        name: "Integrately",
        whatItDoes: "One-click automation recipes connecting HelloGrowthCRM webhooks and REST API to popular SaaS tools with minimal setup.",
        setupSteps: [
          "In Integrately, choose HelloGrowthCRM or a webhook source as the trigger.",
          "Paste your CRM webhook URL or API credentials from Settings → Integrations.",
          "Map fields and activate the automation.",
        ],
        usefulFor: "Small teams that want fast automations without building full scenarios.",
        useCases: [
          "New row in Google Sheets → create lead in CRM.",
          "Slack notification from CRM event via Integrately.",
        ],
      },
      {
        slug: "google-sheets-sync",
        name: "Google Sheets Sync",
        whatItDoes: "Pushes CRM reports or record lists to Google Sheets on a schedule, or ingests rows as leads via a mapped sheet and webhook.",
        setupSteps: [
          "Settings → Integrations → Google Sheets → Connect Google account.",
          "Choose a spreadsheet and tab or create a template from the CRM export wizard.",
          "Define sync direction (CRM → Sheet or Sheet → CRM) and column mapping.",
        ],
        usefulFor: "Finance and RevOps teams that live in spreadsheets for ad-hoc analysis and stakeholder sharing.",
        useCases: [
          "Weekly pipeline snapshot to a shared workbook.",
          "Import event attendee lists from a Sheet into CRM leads.",
        ],
      },
      {
        slug: "hubspot-migration",
        name: "HubSpot Migration Tool",
        whatItDoes: "Guided migration from HubSpot: contacts, companies, deals, owners, and pipelines are mapped into HelloGrowthCRM with deduplication and stage mapping.",
        setupSteps: [
          "Settings → Integrations → HubSpot Migration → Connect HubSpot OAuth.",
          "Select objects and date range to export.",
          "Map HubSpot pipelines to CRM stages and owners to users.",
          "Run a dry run, review errors, then execute full migration.",
        ],
        usefulFor: "Teams switching from HubSpot Sales Hub to HelloGrowthCRM without losing history.",
        useCases: [
          "Consolidate HubSpot CRM and marketing contacts into one CRM.",
          "Pilot migration for a single pipeline before cutover.",
        ],
      },
    ],
  },
  {
    slug: "crm-platform-sync",
    title: "CRM platform sync",
    shortLabel: "CRM sync",
    integrations: [
      {
        slug: "hubspot-sync",
        name: "HubSpot Sync",
        whatItDoes: "Bidirectional contact and deal sync with HubSpot so both systems stay aligned during coexistence or phased migration.",
        setupSteps: [
          "Settings → Integrations → HubSpot Sync.",
          "OAuth to HubSpot and select objects (contacts, companies, deals).",
          "Define conflict rules (system of record per field) and sync frequency.",
        ],
        usefulFor: "Teams running HelloGrowthCRM alongside HubSpot or migrating in stages.",
        useCases: ["Marketing-qualified handoffs visible in both CRMs until cutover."],
      },
      {
        slug: "salesforce-sync",
        name: "Salesforce Sync",
        whatItDoes: "Enterprise CRM sync for accounts, contacts, opportunities, and activities with field-level mapping.",
        setupSteps: [
          "Settings → Integrations → Salesforce.",
          "Connect via OAuth or connected app credentials.",
          "Map objects and enable incremental sync with conflict resolution.",
        ],
        usefulFor: "Revenue orgs that must keep Salesforce and HelloGrowthCRM aligned during pilots or division rollouts.",
        useCases: ["Regional teams on HelloGrowthCRM while HQ remains on Salesforce."],
      },
      {
        slug: "pipedrive-sync",
        name: "Pipedrive Sync",
        whatItDoes: "Contact and deal sync with Pipedrive pipelines, stages, and owners.",
        setupSteps: [
          "Settings → Integrations → Pipedrive.",
          "Paste API token and select pipelines to mirror.",
          "Map stages and dedupe keys (email, organization).",
        ],
        usefulFor: "Teams migrating off Pipedrive or running a subset of reps in HelloGrowthCRM.",
        useCases: ["Side-by-side comparison during evaluation without double entry."],
      },
      {
        slug: "multi-crm-sync-zoho-freshsales-copper-insightly",
        name: "Freshsales, Zoho, Copper & Insightly",
        whatItDoes: "Multi-CRM bidirectional sync for popular SMB platforms including Zoho CRM, Freshsales, Copper, and Insightly.",
        setupSteps: [
          "Settings → Integrations → Multi-CRM.",
          "Choose the external CRM and authenticate.",
          "Map entities, owners, and stage dictionaries; run a validation sync.",
        ],
        usefulFor: "Consolidation projects and partner agencies managing multiple CRM backends.",
        useCases: ["Agency holding shared pipelines while clients stay on their CRM of choice."],
      },
    ],
  },
  {
    slug: "pm-support",
    title: "Project management & support",
    shortLabel: "PM & support",
    integrations: [
      {
        slug: "jira",
        name: "Jira",
        whatItDoes: "Creates Jira issues from CRM tasks for engineering and bug tracking.",
        setupSteps: [
          "Settings → Integrations → Jira.",
          "Enter site URL and credentials.",
          "Create issues from task detail views in the CRM.",
        ],
        usefulFor: "Linking customer-facing requests to dev backlogs.",
        useCases: ["Sales-surfaced bugs routed to the right Jira project."],
      },
      {
        slug: "linear",
        name: "Linear",
        whatItDoes: "Creates Linear issues from CRM tasks via the GraphQL API.",
        setupSteps: ["Settings → Integrations → Linear → API key → map projects."],
        usefulFor: "Modern product teams using Linear for delivery.",
        useCases: ["Feature requests from enterprise AEs tracked in Linear."],
      },
      {
        slug: "zendesk",
        name: "Zendesk",
        whatItDoes: "Creates support tickets from CRM records.",
        setupSteps: ["Settings → Integrations → Zendesk → subdomain and credentials."],
        usefulFor: "Escalating issues from sales to support with full context.",
        useCases: ["B2B handoffs when onboarding stalls."],
      },
      {
        slug: "freshdesk",
        name: "Freshdesk",
        whatItDoes: "Creates Freshdesk tickets from CRM records.",
        setupSteps: ["Settings → Integrations → Freshdesk → domain and API key."],
        usefulFor: "Teams standardized on Freshdesk for support.",
        useCases: ["SMB support queues fed from CRM escalations."],
      },
      {
        slug: "notion",
        name: "Notion",
        whatItDoes: "Pushes CRM data to Notion databases with custom field mapping.",
        setupSteps: ["Authorize Notion → pick database → map CRM fields."],
        usefulFor: "Wikis, project hubs, and exec summaries in Notion.",
        useCases: ["Living account plans mirrored from CRM milestones."],
      },
      {
        slug: "asana",
        name: "Asana",
        whatItDoes: "Creates and updates Asana tasks and projects from CRM deals and tasks; syncs status and due dates so implementation and sales stay aligned.",
        setupSteps: [
          "Settings → Integrations → Asana → OAuth with your workspace.",
          "Map CRM deal stages or task types to Asana projects or sections.",
          "Choose which CRM events create or complete Asana tasks.",
        ],
        usefulFor: "Customer onboarding and project delivery that must mirror CRM commitments.",
        useCases: [
          "Deal won → kickoff project in Asana with assignees.",
          "Sales tasks mirrored to implementation pods.",
        ],
      },
      {
        slug: "airtable",
        name: "Airtable",
        whatItDoes: "Push CRM data to Airtable bases and tables for stakeholder views, partner reporting, and lightweight apps.",
        setupSteps: [
          "Settings → Integrations → Airtable.",
          "Paste a personal access token and select the target base.",
          "Map CRM objects to tables and field types.",
        ],
        usefulFor: "Ops and RevOps teams that pair CRM truth with flexible Airtable views.",
        useCases: ["Partner co-sell trackers fed from CRM deal stages."],
      },
    ],
  },
  {
    slug: "e-sign",
    title: "E-signatures",
    shortLabel: "E-signatures",
    integrations: [
      {
        slug: "docusign",
        name: "DocuSign",
        whatItDoes: "Send documents for e-signature and track status (sent, viewed, signed, declined).",
        setupSteps: [
          "Settings → Integrations → DocuSign → authorize.",
          "Send documents from lead or deal views.",
          "Monitor envelope status in the CRM.",
        ],
        usefulFor: "Proposals, MSAs, and order forms with audit trails.",
        useCases: ["Enterprise deals with legal review and signature order."],
      },
      {
        slug: "zoho-sign",
        name: "Zoho Sign",
        whatItDoes: "E-signature workflows with status tracking, similar to DocuSign.",
        setupSteps: ["Settings → Integrations → Zoho Sign → credentials → send from records."],
        usefulFor: "Teams already using Zoho apps.",
        useCases: ["Zoho One or Zoho CRM adjacent stacks."],
      },
      {
        slug: "signeasy",
        name: "Signeasy",
        whatItDoes: "Digital document signing with mobile-friendly flows and status synced back to CRM records.",
        setupSteps: [
          "Settings → Integrations → Signeasy.",
          "OAuth or API key → map templates to deal types.",
          "Send agreements from lead or opportunity views.",
        ],
        usefulFor: "SMBs that need lightweight e-sign without enterprise DocuSign overhead.",
        useCases: ["Order forms and MSAs for mid-market deals."],
      },
    ],
  },
  {
    slug: "ecommerce",
    title: "eCommerce",
    shortLabel: "eCommerce",
    integrations: [
      {
        slug: "shopify",
        name: "Shopify",
        whatItDoes: "Syncs customers, products, orders, abandoned carts, and order history.",
        setupSteps: [
          "Settings → Integrations → Shopify.",
          "Enter store URL and API credentials.",
          "Map objects to the ecommerce dashboard in CRM.",
        ],
        usefulFor: "Unified view of store behavior and sales outreach.",
        useCases: ["DTC brands aligning support and sales with order history."],
      },
      {
        slug: "stripe",
        name: "Stripe",
        whatItDoes: "Syncs payment status, failed charges, refunds, and transaction history.",
        setupSteps: ["Settings → Integrations → Stripe → API keys → map customers."],
        usefulFor: "Subscription health and payment risk on the account record.",
        useCases: ["CS and AMs seeing churn risk from failed payments."],
      },
      {
        slug: "razorpay",
        name: "Razorpay",
        whatItDoes: "Payment events with HMAC-SHA256 webhook verification.",
        setupSteps: ["Settings → Integrations → Razorpay → Key ID, secret, webhook URL."],
        usefulFor: "India-focused businesses using Razorpay.",
        useCases: ["INR billing with CRM-tied payment status."],
      },
      {
        slug: "woocommerce",
        name: "WooCommerce",
        whatItDoes: "Syncs WooCommerce customers, orders, products, and abandoned carts to HelloGrowthCRM so sales and support see full purchase history on the contact record.",
        setupSteps: [
          "Settings → Integrations → WooCommerce.",
          "Enter your WordPress site URL and REST API credentials (Application Password or OAuth).",
          "Map WooCommerce order statuses to CRM lifecycle stages.",
          "Enable webhooks for real-time order and refund events.",
        ],
        usefulFor: "WordPress + WooCommerce stores that run B2B or hybrid sales alongside ecommerce.",
        useCases: [
          "Prioritize high-LTV customers for outreach.",
          "Recover abandoned carts with CRM sequences.",
        ],
      },
      {
        slug: "paypal",
        name: "PayPal",
        whatItDoes: "International payment capture and status sync for PayPal transactions linked to CRM accounts and orders.",
        setupSteps: [
          "Settings → Integrations → PayPal.",
          "Connect REST API credentials and webhook ID.",
          "Map PayPal payer IDs to CRM contacts and enable event subscriptions.",
        ],
        usefulFor: "Global SMBs and marketplaces that accept PayPal alongside cards.",
        useCases: ["Subscription and one-off payments visible on the customer timeline."],
      },
      {
        slug: "cashfree",
        name: "Cashfree",
        whatItDoes: "Indian payments with UPI, cards, and netbanking; webhooks update CRM payment status on orders and invoices.",
        setupSteps: [
          "Settings → Integrations → Cashfree.",
          "Add client ID, secret, and webhook secret for signature verification.",
          "Map order references to CRM deals or invoices.",
        ],
        usefulFor: "India-first GTM teams needing Cashfree alongside Razorpay options.",
        useCases: ["COD and prepaid flows with reconciliation on the account."],
      },
      {
        slug: "phonepe",
        name: "PhonePe",
        whatItDoes: "UPI payment collection for invoices and payment links with CRM-tied settlement status.",
        setupSteps: [
          "Settings → Integrations → PhonePe (merchant dashboard).",
          "Configure API keys and callback URL to CRM.",
          "Map merchant transaction IDs to CRM payment records.",
        ],
        usefulFor: "Indian SMBs that collect UPI-heavy payments from customers.",
        useCases: ["Field sales sending payment links after verbal commits."],
      },
      {
        slug: "instamojo",
        name: "Instamojo",
        whatItDoes: "Payment links and storefront checkout for Indian SMBs; sync paid orders and customers into CRM.",
        setupSteps: [
          "Settings → Integrations → Instamojo.",
          "Paste API key and salt; enable webhook forwarding.",
          "Map product and payment link metadata to CRM fields.",
        ],
        usefulFor: "Creators, coaches, and small retailers using Instamojo payment pages.",
        useCases: ["Lead magnets with instant payment → CRM customer record."],
      },
    ],
  },
  {
    slug: "accounting",
    title: "Accounting & finance",
    shortLabel: "Accounting",
    integrations: [
      {
        slug: "quickbooks",
        name: "QuickBooks Online",
        whatItDoes: "Syncs customers, invoices, payments, and items between HelloGrowthCRM and QuickBooks Online for aligned AR and revenue recognition.",
        setupSteps: [
          "Open Settings → Integrations → QuickBooks.",
          "Connect with Intuit OAuth and authorize your company.",
          "Map CRM accounts to QuickBooks customers and tax codes.",
          "Choose invoice and payment sync rules and run a test sync.",
        ],
        usefulFor: "SMBs that quote in CRM and need accounting in QuickBooks without double entry.",
        useCases: [
          "Invoice generation when a deal closes.",
          "Payment status updates on the account record.",
        ],
      },
      {
        slug: "xero",
        name: "Xero",
        whatItDoes: "Connects contacts and invoices to Xero (UK, AU, NZ, global) so finance and sales share one customer record and payment status.",
        setupSteps: [
          "Settings → Integrations → Xero → Connect with Xero OAuth.",
          "Select organization and map CRM fields to Xero contacts.",
          "Configure invoice sync and tax rates per region.",
        ],
        usefulFor: "UK and APAC teams that standardize on Xero for bookkeeping.",
        useCases: [
          "Multi-currency quotes with Xero invoice follow-up.",
          "Reconciliation of CRM won revenue with Xero invoices.",
        ],
      },
      {
        slug: "freshbooks",
        name: "FreshBooks",
        whatItDoes: "Creates and updates FreshBooks clients and invoices from CRM accounts and won deals, with payment status sync.",
        setupSteps: [
          "Settings → Integrations → FreshBooks → OAuth.",
          "Map CRM companies to FreshBooks clients.",
          "Define when to create invoices from CRM milestones.",
        ],
        usefulFor: "Agencies and consultancies that invoice in FreshBooks.",
        useCases: ["Time-and-materials projects linked to CRM opportunities."],
      },
      {
        slug: "wave-accounting",
        name: "Wave Accounting",
        whatItDoes: "Syncs CRM contacts to Wave customers and pushes invoice events for simple AR tracking for very small businesses.",
        setupSteps: [
          "Settings → Integrations → Wave → OAuth.",
          "Map CRM fields to Wave customer fields.",
          "Enable invoice sync from closed-won deals.",
        ],
        usefulFor: "Freelancers and micro SMBs using Wave for free accounting.",
        useCases: ["Lightweight CRM + invoicing without enterprise complexity."],
      },
      {
        slug: "tally",
        name: "Tally (India)",
        whatItDoes: "Imports or exports ledger-aligned customer and invoice data with TallyPrime / Tally ERP via bridge or file connector for Indian GST compliance.",
        setupSteps: [
          "Settings → Integrations → Tally.",
          "Configure the Tally bridge (local gateway or approved connector) per your IT policy.",
          "Map GSTIN, HSN, and state codes between CRM and Tally.",
          "Run a trial sync and validate tax summaries.",
        ],
        usefulFor: "Indian SMBs that treat Tally as the source of truth for statutory books.",
        useCases: [
          "GST invoicing and credit notes aligned with CRM deals.",
          "Party master sync for B2B accounts.",
        ],
      },
      {
        slug: "zoho-books",
        name: "Zoho Books",
        whatItDoes: "Accounting software sync for contacts, estimates, invoices, and payments alongside Zoho ecosystem tools.",
        setupSteps: [
          "Settings → Integrations → Zoho Books.",
          "OAuth to Zoho and select the organization.",
          "Map CRM accounts to Books contacts and tax preferences.",
        ],
        usefulFor: "India and global SMBs standardizing on Zoho Books next to CRM.",
        useCases: ["Quote-to-invoice when deals close without retyping line items."],
      },
      {
        slug: "gstin-pan-verification",
        name: "GSTIN & PAN Verification",
        whatItDoes: "KYC compliance for Indian businesses: validate GSTIN and PAN before high-value deals or invoicing.",
        setupSteps: [
          "Settings → Integrations → India KYC.",
          "Add government or vendor API credentials as required.",
          "Map verification status fields on company and contact records.",
        ],
        usefulFor: "Finance and legal teams that must prove business identity for B2B India sales.",
        useCases: ["Block invoice generation until GSTIN validates."],
      },
    ],
  },
  {
    slug: "indic-ai-identity",
    title: "Indic AI & India identity",
    shortLabel: "Indic AI & KYC",
    integrations: [
      {
        slug: "sarvam-ai",
        name: "Sarvam AI",
        whatItDoes: "Indic-language voice notes, speech-to-text transcription, and regional-language AI across Hindi, Tamil, Telugu, and 9 more languages.",
        setupSteps: [
          "Enable Sarvam AI in Settings → Integrations → Indic AI.",
          "Select languages your team uses.",
          "Test voice note recording on a lead record.",
        ],
        usefulFor: "Field sales teams, regional language markets, and voice-first workflows.",
        useCases: [
          "Record voice notes in Hindi and get auto-transcription.",
          "Transcribe inbound calls in regional languages.",
          "Draft WhatsApp messages in Tamil or Telugu.",
        ],
        status: "live",
      },
      {
        slug: "digilocker",
        name: "DigiLocker",
        whatItDoes: "Paperless KYC via India's government-backed document platform — pull verified Aadhaar, PAN, driving licence, and other documents directly into CRM records.",
        setupSteps: [
          "Enable DigiLocker in Settings → Integrations → India KYC.",
          "Configure consent capture flow.",
          "Test document pull on a test contact.",
        ],
        usefulFor: "NBFCs, insurance distributors, real estate developers, and regulated businesses.",
        useCases: [
          "Aadhaar-based identity verification at onboarding.",
          "PAN verification for high-value contracts.",
          "DPDPA-compliant consent logging.",
        ],
        status: "live",
      },
      {
        slug: "hyperverge",
        name: "HyperVerge",
        whatItDoes: "AI-powered face match and document OCR for fast KYC — verify selfies against Aadhaar or PAN photos and extract structured data from ID documents.",
        setupSteps: [
          "Add HyperVerge API key in Settings → Integrations → KYC.",
          "Choose verification modes (face match, OCR, liveness).",
          "Test verification on a sample document.",
        ],
        usefulFor: "Fintech, lending, insurance, and high-value B2B sales.",
        useCases: [
          "Selfie-to-Aadhaar face match for remote onboarding.",
          "OCR extraction from PAN cards and passports.",
          "Liveness detection to prevent spoofing.",
        ],
        status: "live",
      },
      {
        slug: "cleartax",
        name: "ClearTax",
        whatItDoes: "GST-compliant invoice generation, GSTIN validation, and e-invoicing (IRN) directly from CRM deals — no separate tax portal login needed.",
        setupSteps: [
          "Connect ClearTax account in Settings → Integrations → Compliance.",
          "Map CRM deal fields to invoice line items.",
          "Test invoice generation on a closed deal.",
        ],
        usefulFor: "B2B businesses, subscription companies, and businesses above ₹5Cr e-invoicing threshold.",
        useCases: [
          "Auto-generate GST invoice when deal moves to Closed Won.",
          "E-invoicing with IRN generation for compliant businesses.",
          "Scheduled recurring invoice generation for subscriptions.",
        ],
        status: "live",
      },
    ],
  },
  {
    slug: "crm-migration-competitors",
    title: "Switch from another CRM",
    shortLabel: "CRM migration",
    integrations: [
      {
        slug: "microsoft-dynamics-365",
        name: "Microsoft Dynamics 365",
        whatItDoes: "Migrate contacts, accounts, opportunities, activities, and custom fields from Microsoft Dynamics 365 to HelloGrowthCRM with full field mapping and historical data.",
        setupSteps: [
          "Export data from Dynamics 365 using the data export service.",
          "Map Dynamics fields to HelloGrowthCRM fields in the migration wizard.",
          "Run sandbox migration and validate.",
          "Go live.",
        ],
        usefulFor: "Enterprise teams on Dynamics, businesses reducing Microsoft licensing costs, and teams needing India-first CRM features.",
        useCases: [
          "Full historical data migration from Dynamics.",
          "Custom entity mapping to HelloGrowthCRM custom fields.",
          "Post-migration validation and duplicate cleanup.",
        ],
        status: "live",
      },
      {
        slug: "monday-com",
        name: "Monday.com",
        whatItDoes: "Migrate boards, items, contacts, and pipeline data from Monday.com CRM to HelloGrowthCRM — converting Monday's board structure to CRM pipelines.",
        setupSteps: [
          "Export Monday.com data via API or CSV.",
          "Map board columns to CRM fields.",
          "Import contacts and deals.",
          "Verify pipeline structure.",
        ],
        usefulFor: "Teams outgrowing Monday.com for sales, businesses needing dedicated CRM features, and India teams needing WhatsApp and local integrations.",
        useCases: [
          "Convert Monday boards to CRM pipelines.",
          "Migrate contact and deal history.",
          "Set up equivalent automations in HelloGrowthCRM.",
        ],
        status: "live",
      },
      {
        slug: "freshsales-migration",
        name: "Freshsales",
        whatItDoes: "Migrate leads, contacts, accounts, deals, emails, notes, and activities from Freshsales to HelloGrowthCRM with owner attribution and timeline preserved.",
        setupSteps: [
          "Export Freshsales data (Admin → Data Export).",
          "Map Freshsales modules to HelloGrowthCRM objects.",
          "Run import and verify record counts.",
          "Validate active pipeline.",
        ],
        usefulFor: "Freshsales teams switching to India-first CRM, teams needing better WhatsApp integration, and businesses reducing per-seat costs.",
        useCases: [
          "Full lead and contact history migration.",
          "Deal stage mapping from Freshsales pipelines.",
          "Activity timeline preservation.",
        ],
        status: "live",
      },
      {
        slug: "copper-crm-migration",
        name: "Copper CRM",
        whatItDoes: "Migrate Copper CRM contacts, opportunities, activities, and Google Workspace-linked data to HelloGrowthCRM.",
        setupSteps: [
          "Export Copper data via Settings → Export.",
          "Map Copper pipelines to HelloGrowthCRM pipelines.",
          "Import and verify contacts and deals.",
          "Reconnect Gmail integration.",
        ],
        usefulFor: "Google Workspace teams on Copper, businesses expanding beyond Google-only workflows, and teams needing India-specific features.",
        useCases: [
          "Contact and opportunity migration from Copper.",
          "Pipeline stage mapping.",
          "Gmail integration reconnection post-migration.",
        ],
        status: "live",
      },
      {
        slug: "insightly-migration",
        name: "Insightly",
        whatItDoes: "Migrate Insightly contacts, leads, opportunities, projects, and custom fields to HelloGrowthCRM with relationship mapping preserved.",
        setupSteps: [
          "Export Insightly data (System Settings → Data Export).",
          "Map Insightly custom fields to HelloGrowthCRM.",
          "Import records in order: contacts → organizations → opportunities.",
          "Validate relationships.",
        ],
        usefulFor: "SMBs outgrowing Insightly, teams needing better mobile CRM, and India-market focused businesses.",
        useCases: [
          "Contact and organization hierarchy migration.",
          "Opportunity and project history transfer.",
          "Custom field mapping to HelloGrowthCRM.",
        ],
        status: "live",
      },
    ],
  },
  {
    slug: "real-estate",
    title: "Real estate",
    shortLabel: "Real estate",
    integrations: [
      {
        slug: "99acres",
        name: "99acres",
        whatItDoes: "Ingests property inquiry leads from the 99acres portal.",
        setupSteps: ["Settings → Integrations → 99acres → API or webhook → map sources."],
        usefulFor: "Indian brokers aggregating portal leads.",
        useCases: ["Multi-brokerage lead routing with source badges."],
      },
      {
        slug: "magicbricks",
        name: "MagicBricks",
        whatItDoes: "Syncs leads from MagicBricks listings.",
        setupSteps: ["Settings → Integrations → MagicBricks → configure sync."],
        usefulFor: "Lead consolidation across Indian property marketplaces.",
        useCases: ["Same lead deduped across portals."],
      },
      {
        slug: "housing-com",
        name: "Housing.com",
        whatItDoes: "Captures leads from Housing.com listings with webhook ingestion.",
        setupSteps: ["Settings → Integrations → Housing.com → webhook → dedupe rules."],
        usefulFor: "Coverage of another major Indian property channel.",
        useCases: ["Developers with listings on Housing.com."],
      },
      {
        slug: "google-maps-api",
        name: "Google Maps API",
        whatItDoes: "Embeds maps on property or project pages and supports directions for site visits.",
        setupSteps: ["Settings → Integrations → Google Maps → API key → enable on project cards."],
        usefulFor: "Visual location context and visit planning.",
        useCases: ["Field sales and site visit scheduling."],
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & distribution",
    shortLabel: "Manufacturing",
    integrations: [
      {
        slug: "erpnext",
        name: "ERPNext",
        whatItDoes: "Syncs customers, quotations, orders, invoices, items, stock, warehouses, and payment status.",
        setupSteps: ["Settings → Integrations → ERPNext → URL and API credentials → map entities."],
        usefulFor: "Manufacturing and distribution teams needing ERP truth next to CRM.",
        useCases: ["Quote-to-cash visibility for account managers."],
      },
      {
        slug: "zoho-inventory",
        name: "Zoho Inventory",
        whatItDoes: "Items, stock, warehouses, orders, packages, and shipments.",
        setupSteps: ["Settings → Integrations → Zoho Inventory → OAuth or API → mapping."],
        usefulFor: "Real-time stock when talking to customers.",
        useCases: ["Available-to-promise conversations on calls."],
      },
      {
        slug: "unicommerce",
        name: "Unicommerce",
        whatItDoes: "Marketplace orders, inventory, fulfillment, returns, and channel data.",
        setupSteps: ["Settings → Integrations → Unicommerce → API configuration."],
        usefulFor: "Multi-channel ecommerce operations.",
        useCases: ["Ops and sales aligned on fulfillment status."],
      },
      {
        slug: "shiprocket",
        name: "Shiprocket",
        whatItDoes: "Order shipment status, courier assignment, tracking milestones, and exception visibility inside CRM timelines.",
        setupSteps: ["Settings → Integrations → Shiprocket → API credentials → map orders and shipment events."],
        usefulFor: "D2C, ecommerce, and distribution teams that need shipping context next to customer communication.",
        useCases: ["Proactive customer updates when dispatch, delay, or delivery exceptions happen."],
      },
      {
        slug: "delhivery",
        name: "Delhivery",
        whatItDoes: "Shipment tracking with AWB, status, NDR, returns, and ETA.",
        setupSteps: ["Settings → Integrations → Delhivery → API credentials."],
        usefulFor: "India logistics visibility on orders.",
        useCases: ["Proactive customer updates on delivery exceptions."],
      },
      {
        slug: "bluedart",
        name: "BlueDart",
        whatItDoes: "Waybill tracking, delivery attempts, POD, and returns.",
        setupSteps: ["Settings → Integrations → BlueDart → credentials."],
        usefulFor: "Premium courier tracking alongside other carriers.",
        useCases: ["Unified tracking UI for mixed logistics partners."],
      },
    ],
  },
  {
    slug: "ai-speech",
    title: "AI & speech intelligence",
    shortLabel: "AI & speech",
    integrations: [
      {
        slug: "openai-google-gemini",
        name: "OpenAI & Google Gemini",
        whatItDoes: "AI models powering CRM features: drafting, classification, summarization, and workflow copilots.",
        setupSteps: [
          "Settings → AI → Model provider.",
          "Add API keys for OpenAI and/or Google AI Studio (Gemini).",
          "Choose default models per feature (email assist, call summary, scoring).",
        ],
        usefulFor: "Teams that want best-in-class LLM backends behind CRM automation.",
        useCases: ["Policy-aware email drafts with human approval before send."],
      },
      {
        slug: "deepgram-assemblyai",
        name: "Deepgram & AssemblyAI",
        whatItDoes: "AI call transcription and diarization for dialer recordings with searchable text in CRM.",
        setupSteps: [
          "Settings → Integrations → Speech-to-text.",
          "Add Deepgram or AssemblyAI API keys.",
          "Map languages, redaction rules, and storage of transcripts.",
        ],
        usefulFor: "Compliance, coaching, and fast recall of what was said on calls.",
        useCases: ["Auto-summary of discovery calls attached to opportunities."],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Merge curated catalog with generated report catalog.
// Strategy: curated entries have richer descriptions and win on duplicate slugs.
// Generated catalog provides all remaining integrations (real-estate, verticals,
// advanced sales, helpdesk, dialers, survey tools, storage, etc.).
// ─────────────────────────────────────────────────────────────────────────────

type RawCategory = {
  slug: string;
  title: string;
  shortLabel: string;
  integrations: Array<{
    slug: string;
    name: string;
    whatItDoes: string;
    setupSteps: string[];
    usefulFor: string;
    useCases: string[];
    status?: string;
  }>;
};

function mergeCatalogs(
  curated: IntegrationCategory[],
  generated: RawCategory[],
): Array<{ slug: string; title: string; shortLabel: string; integrations: IntegrationEntry[] }> {
  const seenSlugs = new Set<string>();
  const categoryMap = new Map<string, { slug: string; title: string; shortLabel: string; integrations: IntegrationEntry[] }>();
  const ordered: Array<{ slug: string; title: string; shortLabel: string; integrations: IntegrationEntry[] }> = [];

  function addCategory(slug: string, title: string, shortLabel: string) {
    if (!categoryMap.has(slug)) {
      const cat = { slug, title, shortLabel, integrations: [] as IntegrationEntry[] };
      categoryMap.set(slug, cat);
      ordered.push(cat);
    }
    return categoryMap.get(slug)!;
  }

  // Curated first — their entries take priority
  for (const cat of curated) {
    const target = addCategory(cat.slug, cat.title, cat.shortLabel);
    for (const intg of cat.integrations) {
      if (seenSlugs.has(intg.slug)) continue;
      seenSlugs.add(intg.slug);
      target.integrations.push({
        ...intg,
        category: cat.title,
        categorySlug: cat.slug,
        url: `https://hellogrowthcrm.com/integrations/${intg.slug}`,
      });
    }
  }

  // Generated catalog fills in everything else
  for (const cat of generated) {
    const target = addCategory(cat.slug, cat.title, cat.shortLabel);
    for (const intg of cat.integrations) {
      if (seenSlugs.has(intg.slug)) continue;
      seenSlugs.add(intg.slug);
      target.integrations.push({
        slug: intg.slug,
        name: intg.name,
        whatItDoes: intg.whatItDoes,
        setupSteps: intg.setupSteps,
        usefulFor: intg.usefulFor,
        useCases: intg.useCases,
        status: (intg.status as IntegrationEntry["status"]) ?? undefined,
        category: cat.title,
        categorySlug: cat.slug,
        url: `https://hellogrowthcrm.com/integrations/${intg.slug}`,
      });
    }
  }

  return ordered.filter((c) => c.integrations.length > 0);
}

const MERGED_CATEGORIES = mergeCatalogs(
  INTEGRATION_CATEGORIES,
  INTEGRATIONS_REPORT_CATALOG as RawCategory[],
);

// Flat searchable list across all categories
const ALL_INTEGRATIONS: IntegrationEntry[] = MERGED_CATEGORIES.flatMap((c) => c.integrations);

const CATEGORY_SLUGS = MERGED_CATEGORIES.map((c) => c.slug);

// ── integrations_list_categories ──────────────────────────────────────────────

export const integrationsListCategories = defineTool({
  schema: z.object({}),
  definition: {
    name: "integrations_list_categories",
    description:
      "List all HelloGrowthCRM integration categories with their slugs, titles, and integration counts. Covers 477+ integrations across 40+ categories. Use this to discover what groups exist before drilling in.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  async handle() {
    try {
      return ok({
        total_categories: MERGED_CATEGORIES.length,
        total_integrations: ALL_INTEGRATIONS.length,
        categories: MERGED_CATEGORIES.map((cat) => ({
          slug: cat.slug,
          title: cat.title,
          shortLabel: cat.shortLabel,
          count: cat.integrations.length,
          integrations: cat.integrations.map((i) => ({ slug: i.slug, name: i.name })),
        })),
      });
    } catch (e) {
      return fail((e as Error).message);
    }
  },
});

// ── integrations_list ─────────────────────────────────────────────────────────

export const integrationsList = defineTool({
  schema: z.object({
    category: z
      .string()
      .optional()
      .describe(
        "Filter by category slug (e.g. 'email-marketing', 'voice-telephony', 'ecommerce'). Omit for all.",
      ),
    status: z
      .enum(["live", "backend-ready", "scaffolded", "all"])
      .default("all")
      .describe("Filter by integration status. Most integrations have no explicit status (unset = available)."),
    search: z
      .string()
      .optional()
      .describe("Keyword search across integration name, whatItDoes, and usefulFor fields."),
  }),
  definition: {
    name: "integrations_list",
    description:
      "List HelloGrowthCRM integrations (477+ total across 40+ categories). Filter by category slug, status, or keyword. Returns name, slug, category, what it does, and use cases for each match.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description:
            "Category slug filter — use integrations_list_categories to enumerate valid slugs. Omit to return all categories.",
        },
        status: {
          type: "string",
          enum: ["live", "backend-ready", "scaffolded", "all"],
          default: "all",
          description: "Filter by integration status. 'live' = fully available, others indicate build stage.",
        },
        search: {
          type: "string",
          description: "Keyword search across name, whatItDoes, and usefulFor.",
        },
      },
      additionalProperties: false,
    },
  },
  async handle(args) {
    try {
      let results = ALL_INTEGRATIONS;

      if (args.category) {
        if (!CATEGORY_SLUGS.includes(args.category)) {
          return fail(
            `Unknown category slug '${args.category}'. Valid slugs: ${CATEGORY_SLUGS.join(", ")}`,
          );
        }
        results = results.filter((i) => i.categorySlug === args.category);
      }

      if (args.status !== "all") {
        results = results.filter((i) => i.status === args.status);
      }

      if (args.search) {
        const kw = args.search.toLowerCase();
        results = results.filter(
          (i) =>
            i.name.toLowerCase().includes(kw) ||
            i.whatItDoes.toLowerCase().includes(kw) ||
            i.usefulFor.toLowerCase().includes(kw) ||
            i.useCases.some((u) => u.toLowerCase().includes(kw)),
        );
      }

      return ok({
        total: results.length,
        integrations: results.map((i) => ({
          slug: i.slug,
          name: i.name,
          category: i.category,
          categorySlug: i.categorySlug,
          whatItDoes: i.whatItDoes,
          usefulFor: i.usefulFor,
          useCases: i.useCases,
          status: i.status ?? "available",
          url: i.url,
        })),
      });
    } catch (e) {
      return fail((e as Error).message);
    }
  },
});

// ── integrations_get ──────────────────────────────────────────────────────────

export const integrationsGet = defineTool({
  schema: z.object({
    slug: z.string().describe("Integration slug, e.g. 'zapier', 'mailchimp', 'razorpay', 'indiamart'"),
  }),
  definition: {
    name: "integrations_get",
    description:
      "Get full details for a specific HelloGrowthCRM integration by slug — what it does, step-by-step setup guide, use cases, and the integration page URL.",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "Integration slug (use integrations_list to enumerate slugs)",
        },
      },
      required: ["slug"],
      additionalProperties: false,
    },
  },
  async handle(args) {
    try {
      const integration = ALL_INTEGRATIONS.find((i) => i.slug === args.slug);

      if (!integration) {
        const suggestions = ALL_INTEGRATIONS.filter(
          (i) =>
            i.slug.includes(args.slug.split("-")[0] ?? "") ||
            i.name.toLowerCase().includes(args.slug.replaceAll("-", " ")),
        )
          .slice(0, 5)
          .map((i) => ({ slug: i.slug, name: i.name }));

        const didYouMean =
          suggestions.length > 0
            ? ` Did you mean one of: ${suggestions.map((s) => s.slug).join(", ")}?`
            : "";
        return fail(`Integration '${args.slug}' not found.${didYouMean}`);
      }

      return ok({
        slug: integration.slug,
        name: integration.name,
        category: integration.category,
        categorySlug: integration.categorySlug,
        whatItDoes: integration.whatItDoes,
        setupSteps: integration.setupSteps,
        usefulFor: integration.usefulFor,
        useCases: integration.useCases,
        status: integration.status ?? "available",
        url: integration.url,
      });
    } catch (e) {
      return fail((e as Error).message);
    }
  },
});
