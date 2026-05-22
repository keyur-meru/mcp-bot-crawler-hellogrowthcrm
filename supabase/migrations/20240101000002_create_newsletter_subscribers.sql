-- Newsletter subscribers
create table if not exists newsletter_subscribers (
  id                 uuid        primary key default gen_random_uuid(),
  email              text        not null unique,
  name               text,
  status             text        not null default 'pending'
                                 check (status in ('pending', 'confirmed', 'unsubscribed')),
  confirmation_token text,
  unsubscribe_token  text        unique default gen_random_uuid()::text,
  subscribed_at      timestamptz not null default now(),
  confirmed_at       timestamptz,
  updated_at         timestamptz not null default now()
);

create index if not exists newsletter_subscribers_status_idx on newsletter_subscribers (status);
create index if not exists newsletter_subscribers_email_idx  on newsletter_subscribers (email);

create trigger newsletter_subscribers_set_updated_at
  before update on newsletter_subscribers
  for each row execute function set_updated_at();
