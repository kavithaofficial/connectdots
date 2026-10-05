'use client';

import Navbar from '@/components/Navbar';

const stats = [
  { value: '12k+', label: 'builders matched' },
  { value: '87%', label: 'project-fit score' },
  { value: '4.9/5', label: 'founder satisfaction' },
  { value: '2.3x', label: 'faster collaboration' },
];

const features = [
  {
    title: 'Find aligned builders',
    text: 'Discover startup-minded people whose skills, energy, and goals match your vision.',
  },
  {
    title: 'Pitch projects with context',
    text: 'Launch projects with clear role needs, traction goals, and talent fit requirements.',
  },
  {
    title: 'Build with intent',
    text: 'Move from connection to collaboration faster with a stronger, more trustworthy network.',
  },
];

const testimonials = [
  { name: 'Ari N.', role: 'Founder', quote: 'It feels like the network we wanted before hiring or building a full team.' },
  { name: 'Meera T.', role: 'Product Lead', quote: 'The match quality is clearly stronger than generic networking platforms.' },
  { name: 'Kabir S.', role: 'Engineer', quote: 'It finally helps builders find the right people instead of endless cold outreach.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="container grid items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Premium startup network
          </div>
          <h1 className="max-w-xl text-5xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            Find the right people to build what’s next.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-300">
            ConnectDots helps founders, operators, and builders discover aligned collaborators, projects, and opportunities with real startup intent.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/auth/signup" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">Get started</a>
            <a href="/discover" className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-100 hover:border-slate-500">Explore network</a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>Founder-first</span>
            <span>Operator-grade</span>
            <span>Built for high-conviction teams</span>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 shadow-2xl shadow-blue-950/30">
          <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Match score</div>
                <div className="mt-2 text-4xl font-black text-white">94%</div>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">Strong fit</div>
            </div>

            <div className="space-y-4">
              {[
                ['Product strategy', 'A+', '92'],
                ['AI systems', 'A', '88'],
                ['Startup execution', 'A+', '96'],
              ].map(([label, grade, score]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{label}</span>
                    <span>{grade}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-100">AS</div>
                <div>
                  <div className="font-semibold text-white">Aarav Sharma</div>
                  <div className="text-xs text-slate-400">Product Lead · AI Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/80">
        <div className="container grid gap-6 py-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Why ConnectDots</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white">A network designed for ambitious builders.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400"></div>
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="mt-4 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Loved by builders</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white">The right people change everything.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-800 pt-4">
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-slate-400">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="rounded-[32px] border border-blue-500/30 bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Ready to build smarter?</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white">Start with the right network.</h2>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/auth/signup" className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-slate-100">Join now</a>
            <a href="/discover" className="rounded-xl border border-white/40 bg-transparent px-6 py-3 font-semibold text-white hover:bg-white/10">Explore people</a>
          </div>
        </div>
      </section>
    </main>
  );
}
