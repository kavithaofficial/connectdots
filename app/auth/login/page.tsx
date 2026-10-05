export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="text-3xl font-black text-slate-900">ConnectDots</div>
          <p className="mt-2 text-sm text-slate-500">Welcome back</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-blue-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account? <a href="/auth/signup" className="font-semibold text-blue-600">Create one</a>
        </div>
      </div>
    </main>
  );
}
