"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container, SectionTitle } from "./UI";

const Pledge = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with POST to your API route
    setSubmitted(true);
  };

  return (
    <section id="pledge" className="py-8 sm:py-16 bg-white scroll-mt-32">
      <Container>
        <SectionTitle eyebrow="Join" title="Pledge your contribution" subtitle="Tell us how you'll help—volunteer hours, a project, or mentorship. We'll nudge you with monthly check‑ins." center />
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          {submitted ? (
            <div className="text-center">
              <h3 className="text-xl font-semibold">Thank you for pledging! 🎉</h3>
              <p className="mt-2 text-sm text-gray-700">
                We've recorded your interest. We'll email next steps and local opportunities.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                <input id="name" required value={name} onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="how" className="block text-sm font-medium text-gray-700">How will you contribute?</label>
                <select id="how" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500">
                  <option>Volunteer weekly</option>
                  <option>Start/scale a project</option>
                  <option>Mentor/Train others</option>
                  <option>Provide resources</option>
                </select>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700">
                Submit pledge <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Pledge;