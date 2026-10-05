import Navbar from '@/components/Navbar';

const stats = [
  { label: 'Active builders', value: '120K+' },
  { label: 'Professional matches', value: '3.2M' },
  { label: 'Projects launched', value: '18K' },
];

const features = [
  {
    icon: '🎯',
    title: 'AI smart matching',
    description: 'Match with the right people based on skills, career goals, and project alignment.',
  },
  {
    icon: '🤝',
    title: 'Team building',
    description: 'Build teams for startups, hackathons, freelance work, and product launches.',
  },
  {
    icon: '📈',
    title: 'Career growth',
    description: 'Discover new opportunities, mentors, and projects that accelerate your growth.',
  },
  {
    icon: '🔒',
    title: 'Verified profiles',
    description: 'Trust profiles backed by portfolios, badges, recommendations, and role verification.',
  },
];

const logos = ['OpenAI', 'Stripe', 'Notion', 'GitHub', 'Figma', 'Vercel'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%)]">
        <div className="container grid items-center gap-12 py-20 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              Built for ambitious creators, teams, and professionals
            </div>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-950">
              Find the people who turn your ideas into momentum.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              ConnectDots helps you discover collaborators, mentors, and opportunities through intelligent matching, rich profiles, and a premium collaboration experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/auth/signup" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-blue-700">
                Get started
              </a>
              <a href="/discover" className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50">
                Explore matches
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-black text-slate-950">{item.value}</div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur">
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Top match</p>
                  <h3 className="mt-2 text-2xl font-bold">Aarav Sharma</h3>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">94% fit</div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Why match</p>
                  <p className="mt-2 text-sm text-slate-200">Shared interests in AI, startup building, product strategy, and community growth.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-800 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Skills</p>
                    <p className="mt-2 text-sm text-slate-200">Product • AI • Strategy</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Availability</p>
                    <p className="mt-2 text-sm text-slate-200">Open to project work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-5">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Trusted by builders and teams</p>
          <div className="flex flex-wrap items-center gap-8 text-lg font-semibold text-slate-400">
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Why it matters</p>
          <h2 className="mt-4 text-4xl font-black text-slate-900">A smarter way to build your network.</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Built to scale</p>
            <h2 className="mt-4 text-4xl font-black">A premium collaboration ecosystem for ambitious people.</h2>
          </div>
          <div className="space-y-6 text-slate-300">
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <h3 className="text-lg font-semibold text-white">Professional profiles</h3>
              <p className="mt-2 text-sm">Showcase skills, portfolio, endorsements, and collaboration readiness.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <h3 className="text-lg font-semibold text-white">Project discovery</h3>
              <p className="mt-2 text-sm">Find and join teams around real opportunities, ideas, and startup ambitions.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <h3 className="text-lg font-semibold text-white">AI-powered recommendations</h3>
              <p className="mt-2 text-sm">Get smarter introductions, meaningful matches, and stronger collaboration outcomes.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
