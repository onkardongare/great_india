"use client";

import { useEffect } from "react";
import { Leaf, Lightbulb, MapPinned, School, Server, ShieldCheck } from "lucide-react";
import { Container, SectionTitle } from "../../components/UI";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import Act from "../../components/Act";
import Programs from "../../components/Programs";
import Roadmap from "../../components/Roadmap";
import Stats from "../../components/Stats";
import Stories from "../../components/Stories";
import FAQ from "../../components/FAQ";
import Pledge from "../../components/Pledge";
import Footer from "../../components/Footer";
import MissionPills from "@/components/MissionPills";

export default function Home() {
  useEffect(() => {
    // enable smooth anchor scrolling
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 w-full overflow-x-hidden">
      <NavBar />
      <Hero />
      <section id="mission" className="py-6 sm:py-12 bg-white scroll-mt-32">
        <Container>
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-indigo-50 p-8 shadow-sm">
            <SectionTitle title="Mission" subtitle="Catalyze millions of citizens and organizations to execute projects across six pillars, openly track progress, and make India a developed, inclusive, and sustainable nation by 2047." />
            <MissionPills></MissionPills>
          </div>
        </Container>
      </section>
      <Programs />
      <Act />
      <Stats />
      <Stories />
      <Roadmap />
      <FAQ />
      <Pledge />
      <Footer />
    </main>
  );
}
