'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfileEditPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    title: '',
    bio: '',
    city: '',
    portfolio: '',
    skills: '',
  });

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('connectdots-session') || '{}');
    setForm({
      name: session.name || 'Ava Thompson',
      title: session.role || 'Product Designer',
      bio: session.bio || 'Building products that help people collaborate better and grow faster.',
      city: session.city || 'New York',
      portfolio: session.portfolio || 'https://portfolio.example.com',
      skills: session.skills || 'Product Strategy, UX, AI, Research',
    });
  }, []);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const saveProfile = () => {
    const nextSession = {
      ...JSON.parse(localStorage.getItem('connectdots-session') || '{}'),
      ...form,
      skills: form.skills.split(',').map((item) => item.trim()).filter(Boolean),
    };

    localStorage.setItem('connectdots-session', JSON.stringify(nextSession));
    router.push('/profile');
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="container py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Profile</p>
            <h1 className="mt-2 text-4xl font-black">Edit your profile</h1>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
              <input value={form.name} onChange={(e) => updateField('name', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Title</label>
              <input value={form.title} onChange={(e) => updateField('title', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Bio</label>
              <textarea value={form.bio} onChange={(e) => updateField('bio', e.target.value)} className="min-h-28 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
              <input value={form.city} onChange={(e) => updateField('city', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Portfolio</label>
              <input value={form.portfolio} onChange={(e) => updateField('portfolio', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Skills</label>
              <input value={form.skills} onChange={(e) => updateField('skills', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" />
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button onClick={saveProfile} className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">Save profile</button>
            <button onClick={() => router.push('/profile')} className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">Cancel</button>
          </div>
        </div>
      </div>
    </main>
  );
}
