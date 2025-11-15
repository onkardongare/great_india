import { LucideIcon } from "lucide-react";

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
  stats: { label: string; value: string }[];
  governmentActions: { title: string; slug: string }[];
  challenges: { title: string; slug: string }[];
  solutions: { title: string; slug: string }[];
  contribution: { title: string; slug: string }[];
  chartData: {
    title: string;  // ✅ include inside chartData
    data: { name: string; value: number }[];
  };
};

