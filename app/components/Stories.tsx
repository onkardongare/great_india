"use client";

import { Container, SectionTitle } from "./UI";

const Stories = () => {
  const stories = [
    {
      title: "Rural solar rooftops in Bundelkhand",
      text: "A women‑led SHG installed 2,000+ rooftops, cutting bills by 40% and creating local jobs.",
      author: "Sahila Devi, SHG Lead",
    },
    {
      title: "Anganwadi learning outcomes jump",
      text: "Simple weekly reading circles boosted FLN scores by 22% in 9 months.",
      author: "Suresh Kumar, Volunteer",
    },
    {
      title: "ONDC helps my kirana go online",
      text: "Neighborhood store now sells to three nearby pincodes with digital payments and delivery.",
      author: "Shabnam, Entrepreneur",
    },
  ];

  return (
    <section id="stories" className="py-8 sm:py-16 bg-white scroll-mt-32">
      <Container>
        <SectionTitle eyebrow="Stories" title="From ideas to outcomes" subtitle="Real people, real change. Replace these with your verified case studies." center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.text}</p>
              <p className="mt-4 text-xs text-gray-500">— {s.author}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stories;