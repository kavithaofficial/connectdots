'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (field: 'email' | 'password', value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('connectdots-user') || 'null');
    const demoUser = {
      name: 'Demo User',
      email: 'demo@connectdots.com',
      password: 'demo123',
      role: 'Product Strategist',
      location: 'Bengaluru',
    };

    const validUser = savedUser || demoUser;

    if (
      (validUser.email === form.email && validUser.password === form.password) ||
      (form.email === 'demo@connectdots.com' && form.password === 'demo123')
    ) {
      localStorage.setItem(
        'connectdots-session',
        JSON.stringify({
          name: validUser.name,
          email: validUser.email,
          role: validUser.role,
          location: validUser.location,
        })
      );
      router.push('/dashboard');
      return;
    }

    setError('No account found. Use demo@connectdots.com / demo123 or create one.');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="text-3xl font-black text-slate-900">ConnectDots</div>
          <p className="mt-2 text-sm text-slate-500">Welcome back</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {error && <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}

          <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account? <Link href="/auth/signup" className="font-semibold text-blue-600">Create one</Link>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs text-slate-600">
          Demo login: demo@connectdots.com / demo123
        </div>
      </div>
    </main>
  );
}
