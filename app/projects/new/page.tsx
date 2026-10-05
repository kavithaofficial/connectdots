'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NewProjectPage() {
  const [form, setForm] = useState({
    title: '',
    domain: 'AI & Product',
    description: '',
    roles: '',
    stage: 'Looking for team',
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('connectdots-projects') || '[]');
    const newProject = { ...form, id: Date.now() };
    localStorage.setItem('connectdots-projects', JSON.stringify([newProject, ...existing]));
    window.location.href = '/projects';
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="container py-10">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Create project</p>
            <h1 className="mt-2 text-4xl font-black">Post a new opportunity</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Project title</label>
              <input value={form.title} onChange={(e) => updateField('title', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="AI Career Coach" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Domain</label>
              <select value={form.domain} onChange={(e) => updateField('domain', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500">
                <option>AI & Product</option>
                <option>Design & UX</option>
                <option>Education</option>
                <option>Startup</option>
                <option>Community</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Describe the project</label>
              <textarea value={form.description} onChange={(e) => updateField('description', e.target.value)} className="min-h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="Tell people what you are building, what problem it solves, and what kind of teammates you need." />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Roles needed</label>
              <input value={form.roles} onChange={(e) => updateField('roles', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="Product, AI, Marketing, Design" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Stage</label>
              <select value={form.stage} onChange={(e) => updateField('stage', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500">
                <option>Looking for team</option>
                <option>Prototype</option>
                <option>Early stage</option>
                <option>Research</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button type="submit" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
                Publish project
              </button>
              <Link href="/projects" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
