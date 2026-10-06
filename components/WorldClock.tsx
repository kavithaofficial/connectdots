'use client';

import { useEffect, useState } from 'react';

type TimeZoneInfo = {
  name: string;
  label: string;
  offset: number;
};

const timeZones: TimeZoneInfo[] = [
  { name: 'America/New_York', label: 'New York', offset: -5 },
  { name: 'Europe/London', label: 'London', offset: 0 },
  { name: 'Europe/Paris', label: 'Paris', offset: 1 },
  { name: 'Asia/Dubai', label: 'Dubai', offset: 4 },
  { name: 'Asia/Kolkata', label: 'Bengaluru', offset: 5.5 },
  { name: 'Asia/Bangkok', label: 'Bangkok', offset: 7 },
  { name: 'Asia/Tokyo', label: 'Tokyo', offset: 9 },
  { name: 'Australia/Sydney', label: 'Sydney', offset: 10 },
];

type ZoneClock = TimeZoneInfo & {
  time: string;
  date: string;
};

export default function WorldClock() {
  const [clocks, setClocks] = useState<ZoneClock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      const updatedClocks = timeZones.map((tz) => {
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const localTime = new Date(utc + 3600000 * tz.offset);

        const time = localTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });

        const date = localTime.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });

        return {
          ...tz,
          time,
          date,
        };
      });

      setClocks(updatedClocks);
      setLoading(false);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-slate-500">Loading clocks...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Global Time Zones</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Team Around the World</h2>
        <p className="mt-2 text-slate-600">Stay connected across time zones</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {clocks.map((clock) => (
          <div
            key={clock.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-slate-900">{clock.label}</div>
                <div className="mt-1 text-xs text-slate-500">{clock.name}</div>
              </div>
              <div className="text-2xl">🌍</div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="font-mono text-3xl font-black text-blue-600">{clock.time}</div>
              <div className="text-sm text-slate-500">{clock.date}</div>
            </div>

            <div className="mt-3 rounded-lg bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700">
              UTC {clock.offset > 0 ? '+' : ''}{clock.offset}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
