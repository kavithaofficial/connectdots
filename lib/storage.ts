export type AppUser = {
  name?: string;
  role?: string;
  title?: string;
  bio?: string;
  skills?: string[];
  portfolio?: string[] | string;
  location?: string;
  city?: string;
  email?: string;
  website?: string;
};

export type AppProject = {
  id?: number | string;
  title: string;
  stage?: string;
  domain?: string;
  description?: string;
  roles?: string;
  members?: number;
  lookingFor?: number;
  summary?: string;
};

export const defaultUser: AppUser = {
  name: 'Demo User',
  role: 'Product Strategist',
  bio: 'Helping founders and creators turn early ideas into real opportunities.',
  skills: ['Product Strategy', 'UX Research', 'AI', 'Growth Hacking'],
  portfolio: ['Portfolio', 'GitHub', 'LinkedIn'],
  location: 'Bengaluru',
};

export function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJSON<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getStoredUser(): AppUser {
  const session = readJSON<any>('connectdots-session', null);
  const savedUser = readJSON<any>('connectdots-user', null);

  const source = session || savedUser || defaultUser;

  return {
    ...defaultUser,
    ...source,
    role: source?.role || source?.title || defaultUser.role,
    skills: Array.isArray(source?.skills) ? source.skills : defaultUser.skills,
    portfolio: Array.isArray(source?.portfolio)
      ? source.portfolio
      : typeof source?.portfolio === 'string'
        ? source.portfolio.split(',').map((entry: string) => entry.trim()).filter(Boolean)
        : defaultUser.portfolio,
    location: source?.location || source?.city || defaultUser.location,
  };
}

export function saveStoredUser(user: AppUser): void {
  writeJSON('connectdots-session', user);
  writeJSON('connectdots-user', user);
}

export function getStoredProjects(): AppProject[] {
  const storedProjects = readJSON<AppProject[]>('connectdots-projects', []);
  const defaultProjects: AppProject[] = [
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

  return [...storedProjects, ...defaultProjects];
}

export function saveStoredProjects(projects: AppProject[]): void {
  writeJSON('connectdots-projects', projects);
}

export function getStoredConnections(): any[] {
  return readJSON<any[]>('connectdots-connections', []);
}
