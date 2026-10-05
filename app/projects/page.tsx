import Navbar from '@/components/Navbar';
import { projectFeed } from '@/lib/mock-data';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Opportunities</p>
            <h1 className="mt-2 text-4xl font-black">Projects and team ideas</h1>
          </div>
          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">Post project</button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectFeed.map((project) => (
            <div key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="font-bold text-xl">{project.title}</div>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">{project.stage}</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{project.summary}</p>
              <div className="mt-5 text-sm font-medium text-slate-700">Looking for: {project.roles}</div>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                <span>{project.members} members</span>
                <span>{project.lookingFor} positions open</span>
              </div>
              <button className="mt-6 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-100">Apply or join</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
