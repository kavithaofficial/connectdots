'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

type Match = {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  score: number;
  reason: string;
};

export default function DiscoverPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [filters, setFilters] = useState({ skill: '', availability: 'all' });

  useEffect(() => {
    const defaultMatches: Match[] = [
      {
        id: '1',
        name: 'Aarav Sharma',
        role: 'Product Lead @ AI Studio',
        bio: 'Looking for a design-led product partner to build a community-driven AI product.',
        skills: ['AI', 'Product', 'Startup', 'Strategy'],
        score: 94,
        reason: 'Shared interests in AI, startup building, and product strategy',
      },
      {
        id: '2',
        name: 'Naina Patel',
        role: 'UX Researcher',
        bio: 'Helps early teams transform chaotic ideas into user-validated products.',
        skills: ['UX', 'Research', 'Design', 'Growth'],
        score: 89,
        reason: 'Your design interests align with their UX expertise',
      },
      {
        id: '3',
        name: 'Kabir Singh',
        role: 'Backend Engineer',
        bio: 'Builds scalable systems and strong technical architecture for product teams.',
        skills: ['Backend', 'Architecture', 'System Design', 'API'],
        score: 91,
        reason: 'Complementary technical skills for product building',
      },
    ];

    setMatches(defaultMatches);
  }, []);

  const handleConnect = (name: string) => {
    const connections = JSON.parse(localStorage.getItem('connectdots-connections') || '[]');
    const newConnection = { id: Date.now(), name, status: 'pending', createdAt: new Date().toISOString() };
    localStorage.setItem('connectdots-connections', JSON.stringify([newConnection, ...connections]));
    alert(`Connection request sent to ${name}`);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Discover</p>
            <h1 className="mt-2 text-4xl font-black">People worth connecting with</h1>
          </div>
          <div className="flex gap-3">
            <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500" placeholder="Search by skill or role" />
            <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Search</button>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft h-fit">
            <h3 className="text-lg font-bold">Filters</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div>
                <div className="mb-2 font-semibold text-slate-800">Top skills</div>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Product', 'Design', 'Marketing', 'Backend', 'Data'].map((item) => (
                    <button key={item} onClick={() => setFilters({ ...filters, skill: item })} className={`rounded-full px-2 py-1 text-xs transition ${
                      filters.skill === item ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold text-slate-800">Availability</div>
                <div className="space-y-2">
                  {['Open to work', 'Available this month', 'Looking for co-founders'].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-xs">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            {matches.map((person) => (
              <div key={person.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="text-2xl font-bold">{person.name}</div>
                    <div className="text-sm text-slate-500">{person.role}</div>
                    <p className="mt-3 text-sm text-slate-600">{person.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {person.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{skill}</span>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-700">
                      ✓ {person.reason}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="rounded-full bg-emerald-100 px-3 py-2 text-center text-sm font-bold text-emerald-700">
                      {person.score}%<br />match
                    </div>
                    <button onClick={() => handleConnect(person.name)} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
