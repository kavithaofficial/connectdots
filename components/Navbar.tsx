import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/discover', label: 'Discover' },
    { href: '/projects', label: 'Projects' },
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
          <Link href="/dashboard" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Dashboard
          </Link>
          <Link href="/auth/login" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
