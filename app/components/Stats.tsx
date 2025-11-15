"use client";

import { Container, SectionTitle } from "./UI";

const Stats = () => {
  const stats = [
    { label: "Citizens pledged", value: 1245323, goal: 5000000 },
    { label: "Active projects", value: 12540, goal: 50000 },
    { label: "Districts covered", value: 712, goal: 776 },
    { label: "Volunteer hours", value: 3821490, goal: 10000000 },
  ];

  const fmt = (n: number) => new Intl.NumberFormat().format(n);

  return (
    <section id="stats" aria-labelledby="stats" className="py-8 sm:py-16 bg-white scroll-mt-32">
      <Container>
        <SectionTitle eyebrow="Impact" title="Open metrics that matter" subtitle="These are example numbers. Connect your backend/analytics to render live progress." center />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((s) => {
            const pct = Math.min(100, Math.round((s.value / s.goal) * 100));
            return (
              <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">{s.label}</p>
                  <p className="text-sm text-gray-600">Goal: {fmt(s.goal)}</p>
                </div>
                <p className="mt-1 text-2xl font-bold">{fmt(s.value)}</p>
                <div className="mt-4 h-3 w-full rounded-full bg-gray-100">
                  <div className="h-3 rounded-full bg-indigo-600" style={{ width: `${pct}%` }} />
                </div>
                <p className="mt-2 text-xs text-gray-600">{pct}% achieved</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Stats;