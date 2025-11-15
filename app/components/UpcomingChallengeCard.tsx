"use client";

import { Challenge } from "@/types/challenge";
import { Star } from "lucide-react";
import React from "react";

// type UpcomingChallengeCardProps = {
//   icon: React.ReactNode;
//   iconBgClassName?: string;
//   title: string;
//   description: string;
//   startText: string;
//   expectedParticipantsText: string;
//   points: number;
//   onPressReminder?: () => void;
//   containerClassName?: string;
//   reminderLabel?: string;
// };

export default function UpcomingChallengeCard({challenge}: {challenge: Challenge}) {
  const onPressReminder = ()=>{
    console.log("onPressReminder")
    alert("on press reminder")
  }
  return (
    <div
      className={`bg-gradient-to-r from-yellow-500 to-orange-300 rounded-xl p-4 shadow-2xl border-blue-300 border-2 mb-3`}
    >
      {/* Header */}
      <div className="flex items-center mb-2">
        {/* <div className={`p-2 rounded-lg mr-3`}>{challenge.icon}</div> */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-xl">{challenge.title}</h3>
          <p className="text-gray-600 text-sm">{challenge.description}</p>
        </div>
      </div>

      {/* Details */}
      <div className="flex justify-between items-center mt-1">
        <div>
          <div className="flex items-center space-x-1">
            <span className="text-gray-500 text-md">{challenge.startDate}</span>
          </div>
          <div className="flex items-center space-x-1 mt-1 m-1">
            <span className="text-gray-500 text-sm italic pr-1">
            {challenge.participants}
            </span>
          </div>
        </div>

        {/* Points + Reminder */}
        <div className="text-right">
          <div className="flex items-center space-x-1 justify-end">
            <Star size={16} className="text-yellow-700" />
            <span className="text-gray-800 text-sm pl-1 font-semibold">
              {challenge.pointsReward} pts
            </span>
          </div>

            <button
              onClick={onPressReminder}
              className="bg-blue-500 px-3 py-1 rounded-full mt-2 text-white text-sm hover:bg-blue-600 transition"
            >
              set reminder
            </button>
  
        </div>
      </div>
    </div>
  );
}
