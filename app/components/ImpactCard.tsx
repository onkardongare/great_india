"use client";

import { Resource } from "@/types/resource";

interface ImpactCardProps {
  skill: string;
  impact: string;
  rating?: number; // 1–5 stars
  resources?: Resource[];
}

export default function ImpactCard({ skill, impact, rating, resources }: ImpactCardProps) {
  return (
    <div className="bg-gradient-to-r from-gray-400 to-yellow-500 p-4 rounded-lg shadow mb-3">
      <h3 className="text-lg font-semibold text-gray-800">{skill}</h3>

      {rating && (
        <p className="text-yellow-500">
          {"⭐".repeat(rating)}
        </p>
      )}

      <p className="text-gray-600 mt-1">{impact}</p>

      {resources && resources.length > 0 && (
        <div className="mt-3 space-y-1">
          {resources.map((res, idx) => (
            <a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 transition"
            >
              {res.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
