'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

type Connection = {
  id: number;
  name: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
};

export default function ConnectionsPage() {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [tab, setTab] = useState<'pending' | 'accepted'>('pending');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('connectdots-connections') || '[]');
    setConnections(saved);
  }, []);

  const handleAccept = (id: number) => {
    const updated = connections.map((c) => (c.id === id ? { ...c, status: 'accepted' as const } : c));
    setConnections(updated);
    localStorage.setItem('connectdots-connections', JSON.stringify(updated));
  };

  const filtered = connections.filter((c) => c.status === tab);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Network</p>
          <h1 className="mt-2 text-4xl font-black">Connections</h1>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-6 flex gap-4 border-b border-slate-200 pb-4">
            <button onClick={() => setTab('pending')} className={`pb-2 font-semibold transition ${tab === 'pending' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-600'}`}>
              Pending ({connections.filter((c) => c.status === 'pending').length})
            </button>
            <button onClick={() => setTab('accepted')} className={`pb-2 font-semibold transition ${tab === 'accepted' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-600'}`}>
              Accepted ({connections.filter((c) => c.status === 'accepted').length})
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <p className="text-slate-500">No {tab} connections yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((connection) => (
                <div key={connection.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                  <div>
                    <div className="font-semibold">{connection.name}</div>
                    <div className="text-xs text-slate-500">Requested {new Date(connection.createdAt).toLocaleDateString()}</div>
                  </div>
                  {tab === 'pending' && (
                    <div className="flex gap-2">
                      <button onClick={() => handleAccept(connection.id)} className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700">
                        Accept
                      </button>
                      <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Decline</button>
                    </div>
                  )}
                  {tab === 'accepted' && <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Connected</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
