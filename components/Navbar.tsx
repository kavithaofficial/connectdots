'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState<{ name?: string; role?: string; skills?: string[] } | null>(null);
  const [connectionCount, setConnectionCount] = useState(0);

  useEffect(() => {
    const session = localStorage.getItem('connectdots-session');
    if (session) {
      setUser(JSON.parse(session));
    }

    const connections = JSON.parse(localStorage.getItem('connectdots-connections') || '[]');
    setConnectionCount(connections.filter((item: { status?: string }) => item.status === 'pending').length);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/discover', label: 'Discover' },
    { href: '/projects', label: 'Projects' },
    { href: '/connections', label: 'Connections' },
    { href: '/messages', label: 'Messages' },
    { href: '/pricing', label: 'Pricing' },
  ];

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">ConnectDots</Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/notifications" className="relative rounded-full bg-slate-100 p-2 hover:bg-slate-200">
            <span className="text-xl">🔔</span>
            {connectionCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">{connectionCount}</span>}
          </Link>

          {user ? (
            <>
              <Link href="/profile" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {user.name}
              </Link>
              <Link href="/dashboard" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Dashboard
              </Link>
              <Link href="/auth/login" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
