'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [selected, setSelected] = useState<'starter' | 'pro' | 'scale'>('pro');

  const plans = [
    { id: 'starter', name: 'Starter', price: '$0', description: 'Perfect for early exploration and profile setup.', features: ['1 profile', 'Basic discovery', '3 project applications'] },
    { id: 'pro', name: 'Pro', price: '$19', description: 'For founders and builders ready to grow faster.', features: ['Unlimited profiles', 'Priority matching', 'Weekly analytics', 'Advanced project discovery'] },
    { id: 'scale', name: 'Scale', price: '$49', description: 'For teams and operators seeking a premium network.', features: ['Team spaces', 'AI recommendations', 'Advanced dashboards', 'Priority support'] },
  ];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="container py-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Pricing</p>
          <h1 className="mt-2 text-5xl font-black">Choose a plan that fits your momentum</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.id} className={`rounded-3xl border p-6 shadow-soft ${selected === plan.id ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white'}`}>
              <div className="text-2xl font-black">{plan.name}</div>
              <div className="mt-4 text-4xl font-black">{plan.price}<span className="text-base text-slate-500">/mo</span></div>
              <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
              <button onClick={() => setSelected(plan.id)} className={`mt-6 w-full rounded-xl px-4 py-3 font-semibold ${selected === plan.id ? 'bg-blue-600 text-white' : 'border border-slate-200 bg-white text-slate-800'}`}>
                {selected === plan.id ? 'Selected' : 'Get started'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/auth/signup" className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800">Start free</Link>
        </div>
      </div>
    </main>
  );
}
