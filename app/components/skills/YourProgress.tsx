"use client";
import ProgressCard from "@/components/ProgressCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSkills } from "@/slices/userSkillSlice";
import type { RootState } from "@/redux/store";

export default function YourProgress() {
  const dispatch = useDispatch();
  const { userSkills, loading } = useSelector((s: RootState) => s.userSkill);

  useEffect(() => {
    dispatch<any>(fetchUserSkills());
  }, [dispatch]);

  // fallback dummy data when API fails or returns empty
  const fallbackUserSkills = [
    { id: 'f1', name: 'Community Organizing', progress: 72, skillId: { name: 'Community Organizing', category: 'Social' } },
    { id: 'f2', name: 'Tree Planting', progress: 45, skillId: { name: 'Tree Planting', category: 'Environment' } },
    { id: 'f3', name: 'Basic Coding', progress: 28, skillId: { name: 'Basic Coding', category: 'Education' } },
  ];

  return (
    <div className="p-2 space-y-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {loading && <div className="text-sm text-gray-500">Loading progress...</div>}
      {!loading && (userSkills && userSkills.length > 0 ? userSkills : fallbackUserSkills)?.map((us: any) => {
        const name = us?.skillId?.name || us?.name || "Skill";
        const progress = typeof us?.progress === 'number' ? us.progress / 100 : 0;
        const impact = us?.skillId?.category ? `Category: ${us.skillId.category}` : "";
        const key = us.id || us._id || name;
        return (
          <ProgressCard
            key={key}
            skill={name}
            progress={progress}
            impact={impact}
          />
        );
      })}
    </div>
  );
}
