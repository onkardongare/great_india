import Link from "next/link";
import { Pill } from "./UI";
import { Lightbulb, Leaf, ShieldCheck, BookOpen, Sprout, HeartPulse, Rocket } from "lucide-react";

const missions = [
  { icon: BookOpen, label: "Educated India", slug: "education" },
  { icon: Sprout, label: "Proseperous Farmers", slug: "agriculture" },
  { icon: HeartPulse, label: "Healthy India", slug: "healthcare" },
  { icon: Rocket, label: "Self-Reliant India", slug: "economy" },
  { icon: Lightbulb, label: "Digital India", slug: "digital" },
  { icon: Leaf, label: "Sustainable India", slug: "environment" },
  { icon: ShieldCheck, label: "Just & Inclusive India", slug: "governance" },
];

export default function MissionPills() {
  return (
    <div className="flex flex-wrap gap-3">
      {missions.map(({ icon: Icon, label, slug }) => (
        <Link key={slug} href={`/mission/${slug}`}>
          <Pill>
            <Icon className="h-4 w-4" /> {label}
          </Pill>
        </Link>
      ))}
    </div>
  );
}
