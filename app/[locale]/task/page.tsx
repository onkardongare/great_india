"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { CalendarCheck, Target, History, CalendarClock } from "lucide-react";
import PersonalizedTaskCard from "@/components/PersonalizedTaskCard";
import ChallengeCard from "@/components/ChallengeCard";
import UpcomingChallengeCard from "@/components/UpcomingChallengeCard";
import HistoryCard from "@/components/HistoryCard";
import InfoModal from "@/components/InfoModal";
import { fetchUserChallenges } from "@/redux/slices/challengeSlice";
import { UserChallenge , Challenge} from "@/types/challenge";
import { useTranslations } from "next-intl"

// type Challenge = {
//   id: number;
//   title: string;
//   description: string;
//   progress: number;
//   participants: number;
//   daysLeft: number;
// };

// type upcomingChallenge = {
//   id: number;
//   icon: React.ReactNode;
//   iconBgClassName: string;
//   title: string;
//   description: string;
//   startText: string;
//   expectedParticipantsText: string;
//   points: number;
// };

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations("IndexPage")
  const router = useRouter();
  const [showInfoModal, setShowInfoModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [upcomingOffsetY, setUpcomingOffsetY] = useState(0);

  const currentChallenges: UserChallenge[] = useSelector((state: RootState) => state.challenge.currentChallenges);
  const challengesHistory: UserChallenge[] = useSelector((state: RootState) => state.challenge.challengesHistory);
  const recommendedChallenges: Challenge[] = useSelector((state: RootState) => state.challenge.recommendedChallenges);
  const upcomingChallenges: Challenge[] = useSelector((state: RootState) => state.challenge.recommendedChallenges);

  useEffect(() => {
    console.log("UserChallenges", currentChallenges);
    dispatch(fetchUserChallenges());
  }, [dispatch]);

  // Mock personalized tasks
  // const personalizedTasks = [
  //   {
  //     title: "Teach Digital Literacy",
  //     description: "Help seniors learn smartphone basics",
  //     points: 150,
  //     difficulty: "Medium",
  //     category: "Education",
  //     participants: 12,
  //   },
  //   {
  //     title: "Community Garden Care",
  //     description: "Water and maintain the local garden",
  //     points: 100,
  //     difficulty: "Easy",
  //     category: "Environment",
  //     participants: 8,
  //   },
  //   {
  //     title: "Food Drive Organization",
  //     description: "Collect donations for local food bank",
  //     points: 200,
  //     difficulty: "Hard",
  //     category: "Social",
  //     participants: 25,
  //   },
  // ];

  // const upcomingChallenges: upcomingChallenge[] = [
  //   {
  //     id: 1,
  //     icon: <CalendarCheck size={20} className="text-blue-600" />,
  //     iconBgClassName: "bg-blue-100",
  //     title: "Education Heroes",
  //     description: "Teach skills to community members",
  //     startText: "Starts Next Monday",
  //     expectedParticipantsText: "~800 expected",
  //     points: 400,
  //   },
  //   {
  //     id: 2,
  //     icon: <Target size={20} className="text-purple-600" />,
  //     iconBgClassName: "bg-purple-100",
  //     title: "Recycling Champions",
  //     description: "Organize recycling drives in your area",
  //     startText: "Starts in 2 weeks",
  //     expectedParticipantsText: "~600 expected",
  //     points: 350,
  //   },
  // ];

  // const historyData = [
  //   {
  //     id: 1,
  //     title: "Completed: Green Week Challenge",
  //     description: "Planted 5 trees in the community park",
  //     date: "2 days ago",
  //     points: 250,
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Completed: Digital Literacy Workshop",
  //     description: "Taught smartphone basics to seniors",
  //     date: "1 week ago",
  //     points: 150,
  //     completed: true,
  //   },
  //   {
  //     id: 3,
  //     title: "In Progress: Community Cleanup",
  //     description: "Cleaning up the local park - 60% complete",
  //     date: "In progress",
  //     points: 180,
  //     completed: false,
  //   },
  // ];

  return (
    <div className="flex-1 lg:p-6 " ref={scrollRef}>
      {/* Info Modal */}
      <InfoModal
        visible={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        title={t("title")}
        message={
          "Join community challenges and make a difference while earning rewards"
        }
        confirmText={t ? t("ok") : "OK"}
      />

      {/* Challenges */}
      <div className="flex pb-2 items-center">
        <CalendarCheck size={20} className="text-blue-600" />
        <h2 className="ml-2 text-xl lg:text-2xl font-bold text-black">Challenges</h2>
        <button
          className="ml-2 text-blue-600"
          onClick={() => setShowInfoModal(true)}
        >
          ℹ️
        </button>
      </div>

      {currentChallenges && currentChallenges.length > 0 ? (
        currentChallenges.map((challenge) => {
          const completedTasks = challenge.tasks.filter(task => task.completed).length;
          const progress = challenge.tasks.length > 0
              ? Math.round((completedTasks / challenge.tasks.length) * 100)
              : 0;

          const today = new Date();
          const endDate = new Date(challenge.challengeId.endDate!);
          const daysLeft = Math.ceil(
            (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
          );

          return (
            <ChallengeCard
              key={challenge.id}
              id={challenge.challengeId.id}
              title={challenge.challengeId.title}
              description={challenge.challengeId.description}
              progress={progress}
              participants={challenge.challengeId.participants || 0}
              daysLeft={daysLeft > 0 ? daysLeft : 0}
            />
          );
        })
      ) : (
        <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center border border-gray-200">
          <span className="text-3xl text-blue-600">＋</span>
          <p className="text-gray-800 mt-3">No active challenges yet</p>
          <p className="text-gray-500 text-sm mt-1 text-center">
            Accept a new challenge to get started
          </p>
          <button
            className="mt-4 bg-blue-600 px-4 py-2 rounded-full text-white font-semibold"
            onClick={() =>
              scrollRef.current?.scrollTo({
                top: upcomingOffsetY,
                behavior: "smooth",
              })
            }
          >
            Accept New Challenge
          </button>
        </div>
      )}

      {/* Recommended Tasks */}
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <Target size={20} className="text-blue-600" />
          <h2 className="ml-2 text-xl lg:text-2xl font-bold text-black">
            Recommended for You
          </h2>
        </div>
        <div className="space-y-4">
          {recommendedChallenges && recommendedChallenges.length > 0 ? (
            recommendedChallenges.map((task, index) => {
              return(
                <PersonalizedTaskCard key={index} task={task} />
              )}
          )): null}
        </div>
      </div>
      {/* Upcoming Challenges */}
      <div
        className="mt-6">
        <div className="flex items-center mb-4">
          <CalendarClock size={22} className="text-blue-600" />
          <h2 className="ml-2 text-xl lg:text-2xl font-bold text-black">
            Upcoming Challenges
          </h2>
        </div>
        {upcomingChallenges && upcomingChallenges.length > 0 ? (
          upcomingChallenges.map((challenge, index) => (
                <UpcomingChallengeCard key={index} challenge = {challenge}/>          
            ))
        ) : (
          <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center border border-gray-200">
            <span className="text-3xl text-blue-600">＋</span>
            <p className="text-gray-800 mt-3">No upcoming challenges yet</p>
            <p className="text-gray-500 text-sm mt-1 text-center">
              Accept a new challenge to get started
            </p>
          </div>
        )}
      </div>
      {/* History */}
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <History size={20} className="text-blue-600" />
          <h2 className="ml-2 text-xl lg:text-2xl font-bold text-black">
            Your Challenge History
          </h2>
        </div>
        {challengesHistory && challengesHistory.length > 0 ?(
          <div className="space-y-3">
          {challengesHistory.map((item, index) => (
                <HistoryCard key={index} history={item}/>
          ))}
        </div>
        ) 
        :(
          <div className="bg-white p-4 rounded-xl mb-4 shadow-sm">
            <p className="text-gray-500 text-center">No history available</p>
          </div>
        )}
      </div>
    </div>
  );
}
