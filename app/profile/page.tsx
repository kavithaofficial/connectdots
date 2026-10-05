import Navbar from '@/components/Navbar';

const profile = {
  name: 'Aadya Verma',
  role: 'Product Strategist',
  bio: 'Helping early-stage founders turn ideas into smart digital experiences and sustainable product paths.',
  skills: ['Product Strategy', 'UX Research', 'AI', 'Growth Hacking'],
  links: ['Portfolio', 'GitHub', 'LinkedIn'],
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-black text-white">AV</div>
              <div>
                <div className="text-3xl font-black">{profile.name}</div>
                <div className="text-sm text-slate-500">{profile.role}</div>
              </div>
            </div>
            <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">Edit profile</button>
          </div>

          <p className="mt-6 max-w-2xl text-slate-600">{profile.bio}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <div className="text-lg font-bold">Skills</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-lg font-bold">Portfolio</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.links.map((link) => (
                  <span key={link} className="rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700">{link}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
