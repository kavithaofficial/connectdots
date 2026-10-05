import Navbar from '@/components/Navbar';
import { matches, projectFeed } from '@/lib/mock-data';

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Discover</p>
            <h1 className="mt-2 text-4xl font-black">People and projects worth connecting with</h1>
          </div>
          <div className="flex gap-3">
            <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500" placeholder="Search skills, roles, projects" />
            <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">Search</button>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <h3 className="text-lg font-bold">Filters</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div>
                <div className="mb-2 font-semibold text-slate-800">Skills</div>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'UX', 'Product', 'Marketing', 'Frontend', 'Data'].map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-2 py-1">{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold text-slate-800">Availability</div>
                <div className="space-y-2">
                  {['Open to work', 'Available this month', 'Looking for co-founders'].map((item) => (
                    <label key={item} className="flex items-center gap-2"><input type="checkbox" /> {item}</label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            {matches.map((person) => (
              <div key={person.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-2xl font-bold">{person.name}</div>
                    <div className="text-sm text-slate-500">{person.role}</div>
                  </div>
                  <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Connect</button>
                </div>
                <p className="mt-4 text-sm text-slate-600">{person.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {person.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{tag}</span>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-black">Projects matching your profile</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {projectFeed.map((project) => (
                  <div key={project.title} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-bold">{project.title}</div>
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">{project.stage}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{project.summary}</p>
                    <div className="mt-3 text-xs text-slate-500">Roles: {project.roles}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
