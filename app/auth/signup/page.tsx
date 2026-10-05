'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const emptyForm = {
  name: '',
  email: '',
  password: '',
  role: '',
  location: '',
};

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  const updateField = (field: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError('Please complete all required fields.');
      return;
    }

    const userProfile = {
      ...form,
      bio: 'Helping founders and creators turn early ideas into real opportunities.',
      skills: ['Product', 'AI', 'Growth', 'Strategy'],
      interests: ['Startups', 'Community', 'Education'],
      portfolio: ['Portfolio', 'GitHub', 'LinkedIn'],
    };

    localStorage.setItem('connectdots-user', JSON.stringify(userProfile));
    localStorage.setItem(
      'connectdots-session',
      JSON.stringify({
        name: userProfile.name,
        email: userProfile.email,
        role: userProfile.role,
        location: userProfile.location,
      })
    );

    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="text-3xl font-black text-slate-900">Join ConnectDots</div>
          <p className="mt-2 text-sm text-slate-500">Build your network and discover meaningful collaborations.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Role</label>
            <input
              value={form.role}
              onChange={(e) => updateField('role', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="Product Designer"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
            <input
              value={form.location}
              onChange={(e) => updateField('location', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="Bengaluru, India"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => updateField('password', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {error && <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}

          <div className="md:col-span-2">
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
              Create account
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Already a member? <Link href="/auth/login" className="font-semibold text-blue-600">Log in</Link>
        </div>
      </div>
    </main>
  );
}
