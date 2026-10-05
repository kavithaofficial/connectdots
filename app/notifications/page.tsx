'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

type Notification = {
  id: number;
  type: 'match' | 'connection' | 'project' | 'message';
  title: string;
  text: string;
  timestamp: string;
  read: boolean;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const defaultNotifications: Notification[] = [
      {
        id: 1,
        type: 'match',
        title: 'New perfect match',
        text: 'Aarav Sharma matches 94% of your profile based on shared AI and product interests.',
        timestamp: '2 minutes ago',
        read: false,
      },
      {
        id: 2,
        type: 'project',
        title: 'New role opened',
        text: 'AI Career Coach project is looking for a Growth lead. Your skills match perfectly.',
        timestamp: '1 hour ago',
        read: false,
      },
      {
        id: 3,
        type: 'connection',
        title: 'Connection request',
        text: 'Rohit wants to connect and discuss a research collaboration opportunity.',
        timestamp: '3 hours ago',
        read: true,
      },
    ];

    setNotifications(defaultNotifications);
  }, []);

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="container py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Activity</p>
          <h1 className="mt-2 text-4xl font-black">Notifications</h1>
        </div>

        <div className="mx-auto max-w-2xl space-y-4">
          {notifications.map((notif) => (
            <div key={notif.id} onClick={() => markAsRead(notif.id)} className={`rounded-2xl border p-5 cursor-pointer transition ${
              notif.read ? 'border-slate-200 bg-white' : 'border-blue-200 bg-blue-50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold">{notif.title}</div>
                    {!notif.read && <div className="h-2 w-2 rounded-full bg-blue-600"></div>}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{notif.text}</p>
                  <div className="mt-3 text-xs text-slate-500">{notif.timestamp}</div>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{notif.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
