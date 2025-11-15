"use client";

import { useParams } from "next/navigation";
import { missions } from "../missions";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

export default function MissionPage() {

  const { slug } = useParams();
  const mission = missions.find((m) => m.slug === slug);

  if (!mission) return <div className="p-10 text-center">Mission not found</div>;

  const Icon = mission.icon;
  let chartEl: React.ReactElement | null = null;

  if (mission.chart.type === "line") {
    chartEl = (
      <LineChart data={mission.chart.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#6366f1"
          strokeWidth={3}
          dot={{ r: 5, fill: "#6366f1" }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    );
  }
  
  if (mission.chart.type === "bar") {
    chartEl = (
      <BarChart data={mission.chart.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 0, 0]} />
      </BarChart>
    );
  }
  
  if (mission.chart.type === "pie") {
    chartEl = (
      <PieChart>
        <Pie
          data={mission.chart.data}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
          label
        >
          {mission.chart.data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }

  return (
    <div className="p-10 space-y-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <Icon className="h-14 w-14 mx-auto text-indigo-600" />
        <h1 className="text-4xl font-bold mt-4">{mission.title}</h1>
        <p className="text-lg text-gray-700 mt-2">{mission.subtitle}</p>
      </motion.div>

      {/* Chart */}
      <div>
        <h2 className="text-xl font-semibold mb-4">{mission.chart.title}</h2>
        <div className="w-full h-80">
        <div className="w-full h-80">
            {chartEl && (
                <ResponsiveContainer width="100%" height="100%">
                {chartEl}
                </ResponsiveContainer>
            )}
        </div>


        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mission.stats.map((s, i) => (
          <div
            key={i}
            className="p-4 bg-white shadow rounded-xl text-center"
          >
            <p className="text-2xl font-bold text-indigo-600">{s.value}</p>
            <p className="text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Govt Actions / Challenges / Contributions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Government Actions</h3>
          <ul className="space-y-2">
            {mission.governmentActions.map((a) => (
              <li key={a.slug}>
                <a
                  href={`/article/${a.slug}`}
                  className="text-indigo-600 hover:underline"
                >
                  {a.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Challenges</h3>
          <ul className="space-y-2">
            {mission.challenges.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/article/${c.slug}`}
                  className="text-red-600 hover:underline"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">How You Can Contribute</h3>
          <ul className="space-y-2">
            {mission.contributions.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/article/${c.slug}`}
                  className="text-green-600 hover:underline"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
