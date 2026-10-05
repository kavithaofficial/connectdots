'use client';

import Navbar from '@/components/Navbar';
import { matches, projectFeed, notifications, quickStats } from '@/lib/mock-data';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedSession = localStorage.getItem('connectdots-session');
    const savedUser = localStorage.getItem('connectdots-user');

    if (storedSession) {
      setUser(JSON.parse(storedSession));
      return;
    }

    if (savedUser) {
      setUser(JSON.parse(savedUser));
      return;
    }

    setUser({
      name: 'Demo User',
      role: 'Product Strategist',
      email: 'demo@connectdots.com',
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container grid gap-8 py-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-6 rounded-2xl bg-slate-900 p-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Profile score</p>
            <div className="mt-3 text-3xl font-black">88</div>
            <div className="mt-2 text-sm text-slate-300">{user?.name || 'Demo User'}</div>
          </div>
          <nav className="space-y-2 text-sm text-slate-600">
            {['Overview', 'Matches', 'Projects', 'Messages', 'Saved', 'Settings'].map((item) => (
              <div key={item} className="cursor-pointer rounded-xl px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Welcome back</p>
                <h1 className="mt-2 text-4xl font-black">{user?.name || 'Demo User'}</h1>
              </div>
              <div className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                {user?.role || 'Product Strategist'}
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-4">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="text-sm text-slate-500">{stat.label}</div>
                <div className="mt-2 text-3xl font-black text-slate-900">{stat.value}</div>
              </div>
            ))}
          </section>

          <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-black">Recommended people</h2>
                <a href="/discover" className="text-sm font-semibold text-blue-600">View all</a>
              </div>
              <div className="space-y-4">
                {matches.map((person) => (
                  <div key={person.name} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-lg font-bold">{person.name}</div>
                        <div className="text-sm text-slate-500">{person.role}</div>
                      </div>
                      <div className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">{person.score}% match</div>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{person.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {person.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black">Notifications</h2>
              <div className="mt-5 space-y-4">
                {notifications.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 p-4">
                    <div className="font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-black">Projects needing collaborators</h2>
              <a href="/projects" className="text-sm font-semibold text-blue-600">Open marketplace</a>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {projectFeed.map((project) => (
                <div key={project.title} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">{project.title}</div>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">{project.stage}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{project.summary}</p>
                  <div className="mt-3 text-xs text-slate-500">Looking for: {project.roles}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
