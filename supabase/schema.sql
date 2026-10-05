-- Supabase schema for ConnectDots
-- Run these SQL statements in Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete cascade,
  full_name text,
  email text,
  role text,
  bio text,
  city text,
  website text,
  skills text[] default '{}',
  portfolio text[] default '{}',
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  title text not null,
  domain text,
  description text,
  roles text,
  stage text default 'Early stage',
  members_count integer default 1,
  open_roles integer default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists connections (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid references auth.users(id) on delete cascade,
  receiver_id uuid references auth.users(id) on delete cascade,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  project_id uuid references projects(id) on delete cascade,
  status text default 'pending',
  message text,
  created_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  type text,
  message text,
  seen boolean default false,
  created_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid references auth.users(id) on delete cascade,
  receiver_id uuid references auth.users(id) on delete cascade,
  body text not null,
  created_at timestamptz default now()
);

create index if not exists profiles_user_id_idx on profiles(user_id);
create index if not exists projects_owner_id_idx on projects(owner_id);
create index if not exists connections_sender_receiver_idx on connections(sender_id, receiver_id);
create index if not exists applications_user_project_idx on applications(user_id, project_id);
