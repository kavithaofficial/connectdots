import Navbar from '@/components/Navbar';

const messages = [
  { user: 'Maya', text: 'Hey! I’d love to collaborate on your AI product idea.', time: '2m ago' },
  { user: 'Rohit', text: 'I can help with the backend and architecture.', time: '18m ago' },
  { user: 'Ananya', text: 'Your portfolio looks strong. Want to build a prototype together?', time: '1h ago' },
];

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Inbox</p>
            <h1 className="mt-2 text-4xl font-black">Messages</h1>
          </div>
          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">New message</button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="space-y-4">
              {['Maya', 'Rohit', 'Ananya', 'Karan'].map((name) => (
                <div key={name} className="rounded-2xl bg-slate-50 px-4 py-3 font-medium text-slate-700">
                  {name}
                </div>
              ))}
            </div>
          </aside>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-5 border-b border-slate-200 pb-4">
              <div className="text-xl font-bold">Maya</div>
              <div className="text-sm text-slate-500">Product designer and startup builder</div>
            </div>
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.user} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-900">{message.user}</span>
                    <span className="text-slate-500">{message.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{message.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <input className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" placeholder="Write a message..." />
              <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
