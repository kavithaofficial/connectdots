import Navbar from '@/components/Navbar';

const pricing = [
  {
    name: 'Free',
    price: '$0',
    features: ['Create profile', 'Limited recommendations', 'Basic networking'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    features: ['Unlimited matches', 'Priority discovery', 'Advanced filters', 'Team invites'],
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$49',
    features: ['Everything in Pro', 'Hiring tools', 'Project dashboards', 'Insights'],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Pricing</p>
          <h1 className="mt-3 text-4xl font-black">Choose the plan that fits your growth.</h1>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div key={plan.name} className={`rounded-3xl border p-6 shadow-soft ${plan.highlighted ? 'border-blue-500 bg-blue-600 text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
              <div className="text-xl font-bold">{plan.name}</div>
              <div className="mt-5 text-4xl font-black">{plan.price}<span className="text-lg font-medium">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl px-4 py-3 font-semibold ${plan.highlighted ? 'bg-white text-blue-600' : 'bg-slate-900 text-white'}`}>
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
