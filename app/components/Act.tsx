"use client";

import { CheckCircle2 } from "lucide-react";
import { Container, SectionTitle } from "./UI";

const Act = () => {
  const actions = [
    {
      title: "Volunteer locally",
      desc: "Mentor students, green your neighborhood, support health camps.",
      steps: ["Pick a cause", "Set weekly hours", "Report impact"],
    },
    {
      title: "Upskill & employ",
      desc: "Complete micro‑courses, get certified, and hire/train 1 person.",
      steps: ["Choose a path", "Earn a credential", "Share your story"],
    },
    {
      title: "Build MSMEs & startups",
      desc: "Solve Indian problems—agri, health, logistics, fintech, edu.",
      steps: ["Validate demand", "Ship an MVP", "Create jobs"],
    },
    {
      title: "Leverage digital public goods",
      desc: "Use UPI, ONDC, Aadhaar‑enabled services to reach more people.",
      steps: ["Map to DPI", "Integrate", "Scale access"],
    },
    {
      title: "Adopt climate action",
      desc: "Reduce, reuse, electrify—solar rooftops, EVs, waste segregation.",
      steps: ["Measure baseline", "Act monthly", "Offset residuals"],
    },
    {
      title: "Participate in governance",
      desc: "Join consultations, track budgets, file feedback, vote responsibly.",
      steps: ["Know rights", "Use portals", "Mobilize community"],
    },
  ];

  return (
    <section id="act" className="py-8 sm:py-16 bg-gradient-to-b from-white to-indigo-50 scroll-mt-32">
      <Container>
        <SectionTitle
          eyebrow="Citizen Action"
          title="What people can do—practical steps that add up"
          subtitle="Every pledge is a project. Start small, collaborate locally, measure and share results."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((a) => (
            <div key={a.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{a.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {a.steps.map((s) => (
                  <li key={s} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5" />{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Act;