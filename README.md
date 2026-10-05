# ConnectDots

ConnectDots is a premium startup collaboration network where founders, operators, and builders discover aligned collaborators, projects, and opportunities.

## Problem
Most networking platforms are too generic. Founders and builders need a more intentional way to find aligned collaborators who match their stage, interests, and goals.

## Solution
A premium founder-first collaboration platform that helps users:
- discover high-fit people
- see project opportunities
- manage connection requests
- track project matches
- build a credible personal profile

## Current status
The frontend MVP is implemented as a polished Next.js app with:
- premium landing page
- discover flow
- project details flow
- messaging page
- pricing page
- admin dashboard
- profile and editing flow
- notification-aware navigation
- resilient local persistence for demo/user flows

## Tech stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase (configured and ready for final real auth/data integration)
- Vercel (deployment target)

## Supabase setup
1. Create a Supabase project.
2. Copy the project URL and anon key into `.env.local`.
3. Run the SQL from `supabase/schema.sql` in the Supabase SQL editor.
4. Use the auth pages at `/auth/login` and `/auth/signup`.

Example:

```bash
cp .env.example .env.local
```

Then update the values with your Supabase credentials.

## Local demo mode
If Supabase is not configured yet, the app automatically falls back to resilient local demo data so the product still works during development.

## Project architecture
- `app/` contains route-based screens
- `components/` contains reusable UI blocks
- `lib/` contains shared logic and Supabase client configuration
- `supabase/schema.sql` stores database structure for users, projects, and collaboration records

## Final milestones
- add real auth with Supabase
- connect profile, projects, and connection records to live data
- deploy to Vercel
- document the project and prepare the final presentation
