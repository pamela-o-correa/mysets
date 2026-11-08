-- ============================================================================
-- mysets — Schema Supabase + Row Level Security (RLS)
-- Execute este script no SQL Editor do seu projeto Supabase.
-- ============================================================================

-- 1. Tabela de Perfis de Usuários
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null default '' check (char_length(name) <= 80),
  weekly_goal integer not null default 4 check (weekly_goal between 1 and 14),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "Usuários visualizam o próprio perfil" on public.profiles;
create policy "Usuários visualizam o próprio perfil"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Usuários inserem o próprio perfil" on public.profiles;
create policy "Usuários inserem o próprio perfil"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "Usuários atualizam o próprio perfil" on public.profiles;
create policy "Usuários atualizam o próprio perfil"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- 2. Tabela de Fichas Personalizadas
create table if not exists public.custom_workouts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  workout_key text not null check (workout_key in ('A', 'B', 'C', 'D', 'E', 'F')),
  name text not null check (char_length(name) between 1 and 80),
  day text not null default 'Livre' check (char_length(day) <= 40),
  items jsonb not null default '[]'::jsonb check (jsonb_typeof(items) = 'array' and jsonb_array_length(items) <= 40),
  updated_at timestamptz not null default now(),
  unique (user_id, workout_key)
);

alter table public.custom_workouts enable row level security;

drop policy if exists "Usuários gerenciam as próprias fichas" on public.custom_workouts;
create policy "Usuários gerenciam as próprias fichas"
  on public.custom_workouts for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 3. Tabela de Exercícios Personalizados
create table if not exists public.custom_exercises (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 80),
  group_name text not null check (char_length(group_name) <= 40),
  equipment text not null default 'Equipamento livre' check (char_length(equipment) <= 80),
  video text default '' check (char_length(video) <= 500),
  how text not null check (char_length(how) <= 1000),
  care text not null default '' check (char_length(care) <= 1000),
  symbol text not null default '✣' check (char_length(symbol) <= 4),
  updated_at timestamptz not null default now(),
  unique (user_id, name)
);

alter table public.custom_exercises enable row level security;

drop policy if exists "Usuários gerenciam os próprios exercícios" on public.custom_exercises;
create policy "Usuários gerenciam os próprios exercícios"
  on public.custom_exercises for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 4. Tabela de Sessões de Treino Concluídas
create table if not exists public.workout_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  workout_key text not null check (char_length(workout_key) between 1 and 8),
  workout_name text not null check (char_length(workout_name) between 1 and 80),
  session_date timestamptz not null default now(),
  minutes integer not null default 1 check (minutes between 1 and 600),
  exercises_count integer not null default 0 check (exercises_count between 0 and 100),
  sets_count integer not null default 0 check (sets_count between 0 and 500),
  avg_weight numeric(6,2) not null default 0 check (avg_weight between 0 and 2000),
  max_weight numeric(6,2) not null default 0 check (max_weight between 0 and 2000),
  details jsonb not null default '[]'::jsonb check (jsonb_typeof(details) = 'array' and jsonb_array_length(details) <= 60),
  created_at timestamptz not null default now(),
  unique (user_id, session_date)
);

alter table public.workout_sessions enable row level security;

drop policy if exists "Usuários gerenciam as próprias sessões" on public.workout_sessions;
create policy "Usuários gerenciam as próprias sessões"
  on public.workout_sessions for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
