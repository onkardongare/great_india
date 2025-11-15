"use client";

import { ArrowRight } from "lucide-react";
import { Container, SectionTitle } from "./UI";

const FAQ = () => {
  const faqs = [
    {
      q: "Is this government‑run?",
      a: "This is a citizen‑first platform that can partner with governments, industry, and civil society. It's non‑partisan and impact‑oriented.",
    },
    {
      q: "How do I track impact?",
      a: "Create a project, set goals, log activities monthly, and share evidence (photos, docs, metrics). Aggregate to district/state/national dashboards.",
    },
    {
      q: "Is there a cost?",
      a: "You can start for free. Some advanced services (e.g., training, verification) may be paid. Scholarships/sponsorships available.",
    },
    {
      q: "Can students participate?",
      a: "Absolutely. Schools and colleges can run micro‑projects mapped to the six pillars and earn credentials.",
    },
  ];

  return (
    <section id="faq" className="py-8 sm:py-16 bg-gradient-to-b from-white to-indigo-50 scroll-mt-32 ">
      <Container>
        <SectionTitle eyebrow="FAQ" title="Good questions, clear answers" center />
        <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-base font-semibold text-gray-900">{f.q}</span>
                <span className="transition group-open:rotate-180"><ArrowRight className="h-5 w-5" /></span>
              </summary>
              <p className="mt-3 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
