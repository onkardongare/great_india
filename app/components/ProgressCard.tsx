"use client";

interface ProgressCardProps {
  skill: string;
  progress: number; // 0 to 1
  impact: string;
}

export default function ProgressCard({ skill, progress, impact }: ProgressCardProps) {
  const percentage = Math.min(Math.max(progress * 100, 0), 100); // clamp 0–100

  return (
    <div className="bg-gradient-to-r from-gray-400 to-yellow-500 p-4 rounded-lg shadow-lg mb-3">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill}</h3>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-2 bg-blue-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-2 text-gray-600 text-sm">{impact}</p>
    </div>
  );
}
