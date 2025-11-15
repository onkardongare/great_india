"use client";

import { useRouter } from "next/navigation";
import { Users } from "lucide-react";

interface ChallengeProps {
  id: string;
  title: string;
  description: string;
  progress: number;
  participants: number;
  daysLeft: number;
}

export default function ChallengeCard({
  id,
  title,
  description,
  progress,
  participants,
  daysLeft,
}: ChallengeProps) {
  const router = useRouter();

  const handleRoute = (id: string) => {
    router.push(`/challenges/${id}`);
  };

  return (
    <div className="bg-green-500 rounded-xl p-4 shadow-lg mb-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 pr-2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-green-100 mt-1">{description}</p>
        </div>
        <div className="bg-white rounded-full px-3 py-1">
          <span className="text-green-600 font-semibold">{daysLeft} days left</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-white">Your Progress</span>
          <span className="text-sm text-white">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-green-200 rounded-full overflow-hidden">
          <div
            className="h-3 bg-blue-600"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Users className="w-4 h-4 text-white" />
          <span className="text-sm text-white ml-2">
            {participants.toLocaleString()} participants
          </span>
        </div>

        <button
          onClick={() => handleRoute(id)}
          className="bg-white px-4 py-2 rounded-full hover:bg-gray-100 transition"
        >
          <span className="text-green-600 font-semibold">See Progress</span>
        </button>
      </div>
    </div>
  );
}
