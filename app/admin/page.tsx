import Navbar from '@/components/Navbar';

const metrics = [
  { label: 'Active users', value: '52,420' },
  { label: 'New matches this week', value: '12,310' },
  { label: 'Revenue', value: '$94,200' },
  { label: 'Projects launched', value: '4,870' },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Admin</p>
          <h1 className="mt-2 text-4xl font-black">Platform overview</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-3 text-3xl font-black">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold">Recent user activity</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              {['New profiles completed', '4 new team matches created', '19 project requests posted', '3 premium upgrades'].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold">Growth insights</h3>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">Conversion rate: 31% </div>
              <div className="rounded-2xl bg-slate-50 p-4">Avg. time to first meaningful match: 4.2 days</div>
              <div className="rounded-2xl bg-slate-50 p-4">Enterprise interest trending upward</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
