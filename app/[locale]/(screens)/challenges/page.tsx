"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import {
  fetchChallenges,
  fetchUserChallenges,
  selectUserChallenge,
} from "@/redux/slices/challengeSlice";
import { Challenge, UserChallenge } from "@/types/challenge";

// --- Chip component ---
function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-full px-3 py-1 bg-gray-200 text-sm text-gray-800">
      {label}
    </span>
  );
}

// --- Card component ---
function Card({
  item,
  onJoinPress,
  isSelected,
}: {
  item: Challenge;
  onJoinPress: (challengeId: string) => void;
  isSelected: boolean;
}) {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
      <Link href={`/challenges/${item.id}`}>
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={600}
            height={200}
            className="w-full h-40 object-cover"
          />
        ) : (
          <div className="w-full h-40 bg-gray-200" />
        )}
      </Link>

      <div className="p-3">
        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          <Chip label={`Category: ${item.category}`} />
          <Chip label={`Difficulty: ${item.difficulty}`} />
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <Chip label={`Frequency: ${item.frequency}`} />
          {typeof item.durationDays === "number" && (
            <Chip label={`Duration: ${item.durationDays}d`} />
          )}
        </div>

        <p className="mt-2 text-sm text-gray-500">
          {formatDate(item.startDate)} →{" "}
          {item.endDate ? formatDate(item.endDate) : "—"}
        </p>

        <div className="flex justify-between items-center mt-2">
          {typeof item.pointsReward === "number" && (
            <span className="text-sm font-semibold">
              ⭐ {item.pointsReward} pts
            </span>
          )}
          <button
            disabled={isSelected}
            onClick={() => !isSelected && onJoinPress(item.id)}
            className={`px-3 py-1 rounded-full text-white font-medium ${
              isSelected ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSelected ? "Selected" : "Join Challenge"}
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function ChallengeListScreen() {

  const challenges: Challenge[] = useSelector((state: RootState) => state.challenge.challenges) || [];
  const userChallenges: UserChallenge[] = useSelector((state: RootState) => state.challenge.currentChallenges) || [];

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (challenges.length === 0) {
      dispatch(fetchChallenges());
    }
    if (userChallenges.length === 0) {
      dispatch(fetchUserChallenges());
    }
  }, [dispatch, challenges.length, userChallenges.length]);

  const handleJoinChallenge = async (challengeId: string) => {
    try {
      const startDate = new Date().toISOString();
      const challengeData = {
        challengeId,
        startDate,
        status: "in_progress",
      };
      const result = await dispatch(selectUserChallenge(challengeData as any)).unwrap();
      await dispatch(fetchUserChallenges());
      window.alert("Success: " + result.message);
    } catch (error) {
      window.alert("Failed: " + error);
    }
  };

  console.log("userchallenges", userChallenges)
  console.log("challenges", challenges)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center p-4 bg-green-600 text-white shadow-md">
        <Link href="/" className="mr-3 text-lg hover:opacity-80">
          ⬅
        </Link>
        <h1 className="text-2xl font-extrabold">Challenges</h1>
      </header>
  
      {/* Content */}
      <main className="flex-1 p-6">
        {challenges.length === 0 ? (
          <p className="text-gray-600 text-center mt-10">No challenges found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => {
              const isSelected = userChallenges.some(
                (uc: any) => uc.challengeId.id === item.id
              );
              return (
                <Card
                  key={item.id}
                  item={item}
                  onJoinPress={handleJoinChallenge}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}  

// --- helpers ---
function formatDate(iso?: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString();
}
