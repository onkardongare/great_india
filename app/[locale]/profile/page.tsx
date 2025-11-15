"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { 
  Heart, Star, Trophy, Calendar, MapPin, Edit, Share2, Users, LogOutIcon, 
  LogIn
} from "lucide-react";
type RootState = {
  auth: {
    userData: UserData | null;
  };
};import { UserData } from "@/types/user";

export default function ProfilePage() {
  const router = useRouter();
  const { userData }: { userData: UserData | null } = useSelector(
    (state: RootState) => state.auth
  );

  const userProfile = userData || {
    name: "Guest User",
    email: "guest@email.com",
    joinDate: "N/A",
    location: "Unknown",
    bio: "No bio available",
    avatar: "https://via.placeholder.com/120",
  };

  const userStats = userData?.userStats || {
    totalPoints: 0,
    currentStreak: 0,
    longestStreak: 0,
    tasksCompleted: 0,
    hoursVolunteered: 0,
    rank: 0,
  };

  const userBadges = userData?.badges || [
    { name: "Climate Champion", icon: Heart, color: "bg-red-500", earned: true, earnedDate: "3 days ago", progress: 100 },
  ];

  const recentActivities = userData?.recentActivities || [
    { title: "Planted trees in Central Park", date: "2 days ago", points: 150, participants: 23 },
    { title: "Taught coding to kids", date: "5 days ago", points: 200, participants: 12 },
  ];

  const availableRewards = userData?.availableRewards || [
    { title: "Coffee Shop 20% Off", description: "Valid at local cafes", cost: 500, available: true },
    { title: "Volunteer T-Shirt", description: "Official CivicConnect merch", cost: 1000, available: false },
  ];

  return (
    <div className="min-h-screen lg:pt-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Profile Info */}
        <div className="bg-white rounded-xl p-6 shadow-2xl text-center">
          {userProfile.avatar?.startsWith("file://") ? (
            <img
              src={userProfile.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mx-auto"
            />
          ) : (
            <Image
              src={userProfile.avatar}
              alt="User Avatar"
              width={96}
              height={96}
              className="rounded-full mx-auto"
            />
          )}
          <h1 className="text-3xl font-bold text-gray-900 mt-3">{userProfile.name}</h1>
          <p className="font-semibold italic text-gray-600">{userProfile.email}</p>
  
          {/* Location + Join date */}
          <div className="mt-3 space-y-1 text-sm">
            <div className="flex justify-center items-center gap-1">
              <MapPin size={16} />
              <span className="font-semibold italic">{userProfile.location}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <Calendar size={16} />
              <span className="font-semibold italic">
                Joined {userProfile.joinDate}
              </span>
            </div>
          </div>
  
          <p className="mt-4 font-bold text-sm">{userProfile.bio}</p>
  
          {/* Buttons */}
          {userData ? (
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <button
                onClick={() => router.push("/edit-profile")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                <Edit size={16} /> Edit Profile
              </button>
              <button
                onClick={() => router.push("/logout")}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Logout <LogOutIcon size={16} />
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => router.push("/login")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                <LogIn size={16} /> Login
              </button>
            </div>
          )}
        </div>
  
        {/* Stats */}
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <h2 className="text-lg font-bold mb-4">Your Stats</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <StatItem label="Total Points" value={userStats.totalPoints} color="text-blue-600" />
            <StatItem label="Current Streak" value={userStats.currentStreak} color="text-orange-600" />
            <StatItem label="Tasks Completed" value={userStats.tasksCompleted} color="text-green-600" />
            <StatItem label="Community Rank" value={`#${userStats.rank}`} color="text-purple-600" />
          </div>
          <div className="mt-4 border-t pt-4 space-y-1">
            <div className="flex justify-between text-sm">
              <span>Hours Volunteered</span>
              <span>{userStats.hoursVolunteered}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Longest Streak</span>
              <span>{userStats.longestStreak} days</span>
            </div>
          </div>
        </div>
  
        {/* Badges */}
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={20} className="text-yellow-600" />
            <h2 className="font-bold">Your Badges</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {userBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center">
                  <div className={`w-12 h-12 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <Icon size={20} color="white" />
                  </div>
                  <p className="font-medium">{badge.name}</p>
                  <p className="text-xs text-gray-500">
                    {badge.earned ? `Earned ${badge.earnedDate}` : `${badge.progress}% complete`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
  
        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <h2 className="text-lg font-bold mb-4">Recent Activities</h2>
          {recentActivities.map((act, idx) => (
            <div key={idx} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-3">
              <div>
                <p className="font-medium">{act.title}</p>
                <div className="flex gap-3 text-sm text-gray-600">
                  <span>{act.date}</span>
                  <div className="flex items-center gap-1">
                    <Users size={12} /> {act.participants} participants
                  </div>
                </div>
              </div>
              <div className="flex items-center text-green-600">
                <Star size={14} />
                <span className="ml-1 font-medium">+{act.points}</span>
              </div>
            </div>
          ))}
        </div>
  
        {/* Rewards */}
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <h2 className="text-lg font-bold mb-4">Available Rewards</h2>
          {availableRewards.map((rw, idx) => (
            <div key={idx} className={`p-4 border rounded-lg mb-3 ${!rw.available ? "opacity-50" : ""}`}>
              <div className="flex justify-between">
                <p className="font-medium">{rw.title}</p>
                <div className="flex items-center">
                  <Star size={12} className="text-yellow-500" />
                  <span className="ml-1">{rw.cost}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{rw.description}</p>
              <button
                disabled={!rw.available || userStats.totalPoints < rw.cost}
                className={`w-full py-2 rounded-lg ${
                  rw.available && userStats.totalPoints >= rw.cost
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {rw.available && userStats.totalPoints >= rw.cost ? "Claim" : "Not Available"}
              </button>
            </div>
          ))}
        </div>
  
        {/* Share */}
        <div className="bg-indigo-600 rounded-xl p-6 text-center shadow-2xl text-white">
          <h2 className="text-xl font-bold mb-2">Share Your Impact</h2>
          <p className="text-indigo-200 mb-4">
            Show your friends how you're making a difference
          </p>
          <button className="flex items-center justify-center bg-white text-blue-600 w-full py-2 rounded-lg">
            <Share2 size={16} className="mr-2" /> Share Profile
          </button>
        </div>
      </div>
    </div>
  );
  
}

function StatItem({ label, value, color }: { label: string; value: number | string; color: string }) {
  return (
    <div>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  );
}
