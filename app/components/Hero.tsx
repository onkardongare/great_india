"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Building2,
  IndianRupee,
  Leaf,
  Lightbulb,
  School,
  Server,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Container, Pill } from "./UI";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white scroll-mt-">
      <Container className="pt-14 pb-7 sm:pt-16 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Viksit Bharat, Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-lg text-gray-700"
            >
              A citizen-led platform to accelerate India's journey to a developed nation—through skills, innovation, infrastructure, sustainability, and good governance.
            </motion.p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href="#pledge" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700">
                Make a Pledge <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Pill><Users className="h-4 w-4" /> 1k+ Citizens</Pill>
              <Pill><Wrench className="h-4 w-4" /> 100+ Projects</Pill>
              <Pill><ShieldCheck className="h-4 w-4" /> Open & Transparent</Pill>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 p-6 flex items-center justify-center">
              <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full h-full">
              {[
                { icon: School, label: "Education", href: "/pillars/education" },
                { icon: Brain, label: "AI", href: "/pillars/ai" },
                { icon: Lightbulb, label: "Innovation", href: "/pillars/innovation" },
                { icon: Server, label: "Digital", href: "/pillars/digital" },
                { icon: Building2, label: "Infra", href: "/pillars/infra" },
                { icon: ShieldCheck, label: "Governance", href: "/pillars/governance" },
                { icon: Wrench, label: "Skilling", href: "/pillars/skilling" },
                { icon: IndianRupee, label: "Economy", href: "/pillars/economy" },
                { icon: Leaf, label: "Environment", href: "/pillars/environment" },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-2 sm:p-4 shadow block text-center"
                  >
                    <Icon className="h-6 w-6 mx-auto" />
                    <p className="mt-1 sm:mt-2 sm:text-lg text-sm font-medium text-gray-800">
                      {label}
                    </p>
                  </motion.a>
                ))}

              </div> 
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;