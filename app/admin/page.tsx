'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    setMetrics([
      { label: 'New signups', value: '1,284', change: '+12%' },
      { label: 'Project matches', value: '542', change: '+18%' },
      { label: 'Connection requests', value: '289', change: '+9%' },
      { label: 'Engagement score', value: '87%', change: '+5%' },
    ]);
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Admin</p>
          <h1 className="mt-2 text-4xl font-black">Platform overview</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-sm text-slate-500">{metric.label}</div>
              <div className="mt-3 text-3xl font-black">{metric.value}</div>
              <div className="mt-2 text-sm font-semibold text-emerald-600">{metric.change}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">Growth overview</h2>
            <div className="mt-6 space-y-4">
              {[['Product matches', '72%'], ['New connections', '65%'], ['Project applications', '59%'], ['Return users', '81%']].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm text-slate-600">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-blue-600" style={{ width: value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">Top actions</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              {['Approve new creator onboarding', 'Review product match AI score', 'Sync project analytics feed', 'Launch new community feature'].map((action) => (
                <div key={action} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">{action}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
