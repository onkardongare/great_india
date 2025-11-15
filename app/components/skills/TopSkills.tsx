"use client";
import ImpactCard from "../ImpactCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkillRecommendations } from "@/slices/userSkillSlice";
import type { RootState } from "@/redux/store";

export default function TopSkills() {
  const dispatch = useDispatch();
  const { recommendations, loading } = useSelector((s: RootState) => s.userSkill);

  useEffect(() => {
    dispatch<any>(fetchSkillRecommendations());
  }, [dispatch]);
  // fallback dummy recommendations
  const fallbackRecommendations = [
    { id: 'r1', name: 'First Aid', category: 'Health' },
    { id: 'r2', name: 'Sustainable Farming', category: 'Environment' },
    { id: 'r3', name: 'Public Speaking', category: 'Communication' },
  ];

  return (
    <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-150px)]">
      {loading && <div className="text-sm text-gray-500">Loading recommendations...</div>}
      {!loading && (recommendations && recommendations.length > 0 ? recommendations : fallbackRecommendations)?.map((s: any) => {
        const key = s.id || s._id || s.name;
        return (
          <ImpactCard key={key} skill={s.name} impact={s.category ? `Category: ${s.category}` : ""} />
        );
      })}
    </div>
  );
}
