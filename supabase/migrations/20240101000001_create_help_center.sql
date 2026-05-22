-- Help center categories
create table if not exists help_categories (
  slug       text primary key,
  title      text not null,
  created_at timestamptz not null default now()
);

-- Help center articles
create table if not exists help_articles (
  slug               text        primary key,
  title              text        not null,
  category_slug      text        not null references help_categories (slug) on delete cascade,
  intro              text,
  estimated_minutes  integer     check (estimated_minutes > 0),
  steps              jsonb       not null default '[]'::jsonb,
  faqs               jsonb       not null default '[]'::jsonb,
  cover_image        text,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

create index if not exists help_articles_category_idx on help_articles (category_slug);

create trigger help_articles_set_updated_at
  before update on help_articles
  for each row execute function set_updated_at();
