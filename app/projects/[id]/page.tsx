'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type Project = {
  id?: number | string;
  title: string;
  domain: string;
  description: string;
  roles: string;
  stage: string;
  members: number;
  lookingFor: number;
};

const fallbackProjects: Project[] = [
  {
    id: 'ai-career-coach',
    title: 'AI Career Coach',
    domain: 'AI & Product',
    description: 'A personalized guidance platform helping students and early professionals navigate career transitions with AI-powered mentoring.',
    roles: 'Product, AI, UX, Growth',
    stage: 'Early stage',
    members: 5,
    lookingFor: 3,
  },
  {
    id: 'creator-commerce',
    title: 'Creator Commerce',
    domain: 'Startup',
    description: 'A commerce suite for creators to launch niche products, build trust, and manage community-driven growth.',
    roles: 'Marketing, Design, Frontend, Data',
    stage: 'Prototype',
    members: 4,
    lookingFor: 2,
  },
  {
    id: 'skill-exchange-network',
    title: 'Skill Exchange Network',
    domain: 'Community',
    description: 'An exchange hub where people discover complementary skills and collaborators for meaningful projects.',
    roles: 'Research, Product, Community, Design',
    stage: 'Research',
    members: 3,
    lookingFor: 2,
  },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('connectdots-projects') || '[]');
    const allProjects = [...stored, ...fallbackProjects];
    const found = allProjects.find((item: Project) => String(item.id) === String(projectId));
    setProject(found || allProjects[0]);
  }, [projectId]);

  const summaryStats = useMemo(
    () => [
      { label: 'Members', value: String(project?.members || 0) },
      { label: 'Open roles', value: String(project?.lookingFor || 0) },
      { label: 'Stage', value: project?.stage || 'Early stage' },
      { label: 'Domain', value: project?.domain || 'AI & Product' },
    ],
    [project]
  );

  const handleApply = () => {
    const list = JSON.parse(localStorage.getItem('connectdots-applications') || '[]');
    const entry = {
      id: Date.now(),
      projectTitle: project?.title,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    localStorage.setItem('connectdots-applications', JSON.stringify([entry, ...list]));
    setApplied(true);
  };

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-100 p-10 text-slate-900">
        <div className="container">Loading project...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="container py-10">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/projects" className="text-sm font-semibold text-blue-600 hover:text-blue-700">← Back to projects</Link>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">{project.stage}</span>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{project.domain}</p>
              <h1 className="mt-3 text-4xl font-black">{project.title}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.roles.split(',').map((role) => (
                  <span key={role} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">{role.trim()}</span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <h2 className="text-2xl font-black">Why this project matters</h2>
              <div className="mt-5 space-y-4 text-slate-600">
                <p>
                  This project is designed for people who want meaningful collaboration, strong product execution, and the chance to build something with visible traction.
                </p>
                <p>
                  The team is looking for complementary talent across product, design, engineering, and go-to-market to move quickly from concept to real-world value.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black">Project snapshot</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                    <div className="mt-2 text-2xl font-black text-slate-900">{stat.value}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleApply}
                className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {applied ? 'Application sent' : 'Apply to join'}
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black">Ideal teammate</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>• Product-minded and execution-focused</li>
                <li>• Comfortable collaborating across design and engineering</li>
                <li>• Strong communication and ownership mindset</li>
                <li>• Excited by early-stage, high-impact work</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
