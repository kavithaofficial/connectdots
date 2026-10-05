'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const session = localStorage.getItem('connectdots-session');
    const savedUser = localStorage.getItem('connectdots-user');

    if (session) {
      setUser(JSON.parse(session));
      return;
    }

    if (savedUser) {
      setUser(JSON.parse(savedUser));
      return;
    }

    setUser({
      name: 'Demo User',
      role: 'Product Strategist',
      bio: 'Helping founders and creators turn early ideas into real opportunities.',
      skills: ['Product Strategy', 'UX Research', 'AI', 'Growth Hacking'],
      portfolio: ['Portfolio', 'GitHub', 'LinkedIn'],
      location: 'Bengaluru',
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-black text-white">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'D'}
              </div>
              <div>
                <div className="text-3xl font-black">{user?.name || 'Demo User'}</div>
                <div className="text-sm text-slate-500">{user?.role || 'Product Strategist'}</div>
              </div>
            </div>
            <Link href="/profile/edit" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              Edit profile
            </Link>
          </div>

          <p className="mt-6 max-w-2xl text-slate-600">
            {user?.bio || 'Helping founders and creators turn early ideas into real opportunities.'}
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <div className="text-lg font-bold">Skills</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {(user?.skills || ['Product Strategy', 'UX Research', 'AI', 'Growth Hacking']).map((skill: string) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-lg font-bold">Portfolio</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {(user?.portfolio || ['Portfolio', 'GitHub', 'LinkedIn']).map((link: string) => (
                  <span key={link} className="rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700">{link}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            Location: <span className="font-semibold text-slate-800">{user?.location || 'Bengaluru'}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
