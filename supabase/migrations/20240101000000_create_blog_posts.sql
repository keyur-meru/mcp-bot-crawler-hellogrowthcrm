-- Blog posts table
create table if not exists blog_posts (
  slug             text        primary key,
  title            text        not null,
  content          text        not null,
  author           text        not null default 'Rushabh Shah',
  category         text,
  meta_description text        check (char_length(meta_description) <= 160),
  cover_image      text,
  published_at     timestamptz not null default now(),
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists blog_posts_category_idx    on blog_posts (category);
create index if not exists blog_posts_published_at_idx on blog_posts (published_at desc);

-- Auto-update updated_at
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger blog_posts_set_updated_at
  before update on blog_posts
  for each row execute function set_updated_at();
