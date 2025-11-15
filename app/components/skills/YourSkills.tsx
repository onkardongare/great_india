"use client";
import ImpactCard from "@/components/ImpactCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSkills } from "@/slices/userSkillSlice";
import type { RootState } from "@/redux/store";

export default function YourSkills() {
  const dispatch = useDispatch();
  const { userSkills, loading } = useSelector((s: RootState) => s.userSkill);

  useEffect(() => {
    dispatch<any>(fetchUserSkills());
  }, [dispatch]);

  return (
    <div className="p-4 space-y-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {loading && <div className="text-sm text-gray-500">Loading your skills...</div>}
      {!loading && userSkills?.map((us: any) => {
        const name = us?.skillId?.name || us?.name || "Skill";
        const category = us?.skillId?.category || us?.category;
        const impact = category ? `Category: ${category}` : "";
        const key = us.id || us._id || name;
        return <ImpactCard key={key} skill={name} impact={impact} />;
      })}
    </div>
  );
}
