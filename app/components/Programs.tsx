"use client";

import { Container, SectionTitle } from "./UI";

const Programs = () => {
  const programs = [
    { title: "Skilling 10M Youth", impact: "Micro‑credentials, apprenticeships, local jobs", tag: "Skills" },
    { title: "Digital Inclusion", impact: "Connectivity + DPI access for 100% households", tag: "Digital" },
    { title: "Clean & Green Cities", impact: "Waste segregation, EV transition, urban forests", tag: "Climate" },
    { title: "Agri Productivity 2x", impact: "Irrigation, cold‑chain, value‑addition, markets", tag: "Agri" },
    { title: "Health & Nutrition", impact: "Preventive health, telemedicine, fortified foods", tag: "Health" },
    { title: "Manufacturing Push", impact: "Supply chains, quality, exports, logistics", tag: "Industry" },
  ];

  return (
    <section id="programs" className="py-8 sm:py-16 bg-white scroll-mt-32">
      <Container>
        <SectionTitle
          eyebrow="Missions"
          title="Flagship missions you can align with"
          subtitle="Plug your project into a mission stream to collaborate, find mentors, and measure impact with shared metrics."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1">{p.tag}</span>
              </div>
              <p className="mt-2 text-sm text-gray-700">{p.impact}</p>
              <div className="mt-4 flex gap-2">
                <a href="#pledge" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-gray-50">Join</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Programs;