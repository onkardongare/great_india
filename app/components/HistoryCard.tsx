"use client";

import { CheckCircle } from "lucide-react";
import { UserChallenge } from "@/types/challenge";

// type HistoryItem = {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   points: number;
//   completed: boolean;
// };

const HistoryCard = ({ history }: {history: UserChallenge}) => {

  return (
    <div className="bg-gradient-to-r to-gray-400 from-yellow-500 bg-white p-4 rounded-xl shadow-2xl border-2 border-blue-300 hover:border-blue-400 transition cursor-pointer">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{history.challengeId.title}</h3>
              <p className="text-gray-600 mt-1">{history.challengeId.description}</p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{history.endDate}</span>
                <div className="flex items-center">
                  <span className="text-black font-medium">
                    +{history.pointsEarned} pts
                  </span>
                  {history.completed && (
                    <CheckCircle className="w-4 h-4 text-black ml-1" />
                  )}
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default HistoryCard;
