-- Contact form submissions
create table if not exists contact_submissions (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  company    text,
  phone      text,
  message    text        not null,
  source     text,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_email_idx      on contact_submissions (email);
create index if not exists contact_submissions_created_at_idx on contact_submissions (created_at desc);
