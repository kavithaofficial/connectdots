'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<string>('Aarav Sharma');
  const [messages, setMessages] = useState<Record<string, { sender: 'me' | 'them'; text: string }[]>>({
    'Aarav Sharma': [
      { sender: 'them', text: 'Hey! I saw your profile and think our product interests align.' },
      { sender: 'me', text: 'Absolutely — I’d love to explore a collaboration.' },
      { sender: 'them', text: 'Great. Let’s connect on the AI Coach concept.' },
    ],
    'Naina Patel': [
      { sender: 'them', text: 'Could we discuss the user interview process for your idea?' },
    ],
    'Kabir Singh': [
      { sender: 'them', text: 'I can help with architecture and API planning.' },
    ],
  });

  const [draft, setDraft] = useState('');

  const chats = [
    { name: 'Aarav Sharma', last: 'Let’s connect on the AI Coach concept.' },
    { name: 'Naina Patel', last: 'Could we discuss the user interview process?' },
    { name: 'Kabir Singh', last: 'I can help with architecture and API planning.' },
  ];

  const sendMessage = () => {
    if (!draft.trim()) return;

    setMessages((prev) => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), { sender: 'me', text: draft }],
    }));
    setDraft('');
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="container py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Inbox</p>
          <h1 className="mt-2 text-4xl font-black">Messages</h1>
        </div>

        <div className="grid min-h-[720px] gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="border-r border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg font-bold">Chats</div>
              <button className="rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white">New</button>
            </div>
            <div className="space-y-2">
              {chats.map((chat) => (
                <button
                  key={chat.name}
                  onClick={() => setSelectedChat(chat.name)}
                  className={`w-full rounded-2xl border p-3 text-left transition ${
                    selectedChat === chat.name ? 'border-blue-200 bg-blue-50' : 'border-slate-200 bg-white hover:bg-slate-100'
                  }`}
                >
                  <div className="font-semibold">{chat.name}</div>
                  <div className="mt-1 truncate text-xs text-slate-500">{chat.last}</div>
                </button>
              ))}
            </div>
          </aside>

          <section className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div>
                <div className="text-xl font-bold">{selectedChat}</div>
                <div className="text-xs text-slate-500">Active now</div>
              </div>
              <Link href="/discover" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                View profile
              </Link>
            </div>

            <div className="flex-1 space-y-4 bg-white p-5">
              {(messages[selectedChat] || []).map((msg, index) => (
                <div key={`${selectedChat}-${index}`} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md rounded-2xl px-4 py-3 text-sm ${msg.sender === 'me' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 p-4">
              <div className="flex gap-3">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Write a message..."
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500"
                />
                <button onClick={sendMessage} className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
