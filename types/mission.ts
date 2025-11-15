import { LucideIcon } from "lucide-react";

export type Mission = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stats: { label: string; value: number }[];
  chart: {
    type: "line" | "pie" | "bar";
    title: string;
    data: { name: string; value: number }[];
  };
  governmentActions: { title: string; slug: string }[];
  challenges: { title: string; slug: string }[];
  contributions: { title: string; slug: string }[];
};
