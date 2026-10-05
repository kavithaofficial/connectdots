'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

type Project = {
  title: string;
  stage: string;
  summary: string;
  roles: string;
  members: number;
  lookingFor: number;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('connectdots-projects') || '[]');
    const combined = [...storedProjects, ...defaultProjects];
    setProjects(combined);
  }, []);

  const defaultProjects: Project[] = [
    {
      title: 'AI Career Coach',
      stage: 'Early stage',
      summary: 'Building a personalized guidance platform for students and early professionals.',
      roles: 'Product, AI, UX, Growth',
      members: 5,
      lookingFor: 3,
    },
    {
      title: 'Creator Commerce',
      stage: 'Prototype',
      summary: 'Creating a platform for creators to monetize communities and drive audience trust.',
      roles: 'Marketing, Design, Frontend, Data',
      members: 4,
      lookingFor: 2,
    },
    {
      title: 'Skill Exchange Network',
      stage: 'Research',
      summary: 'A collaborative platform that helps people discover complementary skills and opportunities.',
      roles: 'Research, Product, Community, Design',
      members: 3,
      lookingFor: 2,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Opportunities</p>
            <h1 className="mt-2 text-4xl font-black">Projects and team ideas</h1>
          </div>
          <Link href="/projects/new" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">Post project</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={`${project.title}-${project.stage}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
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
