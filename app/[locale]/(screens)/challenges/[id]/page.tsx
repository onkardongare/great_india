"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Challenge, UserChallenge } from "@/types/challenge";
import { Trophy, ListChecks } from "lucide-react";

export default function ChallengeDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const userChallenges: UserChallenge[] = useSelector((state: RootState) => state.challenge.currentChallenges);
  const challenges: Challenge[] = useSelector((state: RootState) => state.challenge.challenges);

  let challenge: Challenge | undefined = useMemo(
() => challenges.find((c) => String(c.id) === String(id)),
    [challenges, id]
  );

  const userChallenge = useMemo(() => userChallenges.find((uc: any) => String(uc.challengeId.id) === String(id)),[userChallenges, id]
  );

  const finalChallenge: Challenge | undefined =
    userChallenge?.challengeId || challenge;

  if (!finalChallenge) {
    return (
      <div className="flex-1 bg-white p-4">
        <h2 className="text-xl font-extrabold">Challenge not found</h2>
        <p className="text-gray-500">ID: {id}</p>
      </div>
    );
  }

  const totalTasks = finalChallenge.tasks.length;
  const completedTasks = userChallenge?.completedTasks?.length || 0;
  const progress =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const pointsEarned = userChallenge?.pointsEarned || 0;
  const rank = userChallenge?.rank || "N/A";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center p-4 bg-green-600 text-white shadow-md">
        <button onClick={() => router.back()} className="mr-3 text-lg hover:opacity-80">
          ⬅
        </button>
        <h1 className="text-2xl font-extrabold">{finalChallenge.title}</h1>
      </header>
  
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Top section: Image + Meta */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              {finalChallenge.imageUrl ? (
                <Image
                  src={finalChallenge.imageUrl}
                  alt={finalChallenge.title}
                  width={800}
                  height={400}
                  className="w-full h-64 rounded-xl object-cover shadow"
                />
              ) : (
                <div className="w-full h-64 rounded-xl bg-gray-200" />
              )}
            </div>
  
            <div className="flex flex-col justify-center space-y-3">
              <p className="text-lg font-semibold text-gray-700">
                {cap(finalChallenge.category)} • {cap(finalChallenge.difficulty)} •{" "}
                {cap(finalChallenge.frequency)}
              </p>
  
              {typeof finalChallenge.pointsReward === "number" && (
                <p className="text-md font-bold text-yellow-600">
                  ⭐ {finalChallenge.pointsReward} points
                </p>
              )}
  
              {typeof finalChallenge.durationDays === "number" && (
                <p className="text-sm text-gray-600">
                  Duration: {finalChallenge.durationDays} days
                </p>
              )}
  
              <p className="text-sm text-gray-600">
                Period: {formatDate(finalChallenge.startDate)} →{" "}
                {finalChallenge.endDate ? formatDate(finalChallenge.endDate) : "—"}
              </p>
  
              {finalChallenge.createdBy && (
                <p className="text-sm text-gray-600">
                  Created by: {finalChallenge.createdBy}
                </p>
              )}
            </div>
          </div>
  
          {/* Description + Requirements */}
          <Section title="Description">
            <p className="text-md text-gray-800">{finalChallenge.description}</p>
          </Section>
  
          <Section title="Requirements">
            {finalChallenge.requirements?.length === 0 ? (
              <p className="text-md text-gray-800">None</p>
            ) : (
              finalChallenge.requirements?.map((req, idx) => <Bullet key={idx} text={req} />)
            )}
          </Section>
  
          {/* Tasks */}
          <Section title="Tasks">
            {finalChallenge.tasks.length === 0 ? (
              <p className="text-md text-gray-800">No tasks added.</p>
            ) : (
              <div className="space-y-3">
                {finalChallenge.tasks.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-gray-100 p-3 rounded-lg">
                    <span className="w-5 text-base leading-5 mt-0.5">
                      {userChallenge?.completedTasks?.includes(t.taskTitle) ? "☑︎" : "☐"}
                    </span>
                    <div className="flex-1">
                      <p className="text-md font-semibold">{t.taskTitle}</p>
                      {t.taskDescription && (
                        <p className="text-sm text-gray-600 mt-0.5">{t.taskDescription}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Section>
  
          {/* Progress or Not Started */}
          {userChallenge ? (
            <div className="bg-white shadow rounded-xl p-6 border border-blue-100">
              <h2 className="text-xl font-bold mb-4 text-blue-800">Your Progress</h2>
  
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-blue-700">Progress</p>
                  <p className="text-sm font-medium text-blue-700">{progress}%</p>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
  
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-800">{pointsEarned}</p>
                  <p className="text-xs text-blue-600">Points Earned</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-800">
                    {completedTasks}/{totalTasks}
                  </p>
                  <p className="text-xs text-blue-600">Tasks Completed</p>
                </div>
                <div>
                  <div className="flex justify-center items-center gap-1">
                    <Trophy className="w-5 h-5 text-blue-700" />
                    <p className="text-2xl font-bold text-blue-800">{rank}</p>
                  </div>
                  <p className="text-xs text-blue-600">Your Rank</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-center">
              <h3 className="text-lg font-bold mb-2 text-amber-800">Not Started Yet</h3>
              <p className="text-amber-700">
                Join this challenge to start tracking your progress and earn points!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
  
}

// --- small UI helpers ---
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex gap-2 mb-1.5">
      <span className="text-md leading-5">•</span>
      <p className="text-md text-gray-800">{text}</p>
    </div>
  );
}

function formatDate(iso?: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString();
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
