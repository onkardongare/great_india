"use client";
import ImpactCard from "../ImpactCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from "@/slices/skillSlice";
import type { RootState } from "@/redux/store";

export default function TargetSkills() {
  const dispatch = useDispatch();
  const { skills, loading } = useSelector((s: RootState) => s.skill);

  useEffect(() => {
    dispatch<any>(fetchSkills());
  }, [dispatch]);
  // fallback target skills
  const fallbackSkills = [
    { id: 't1', name: 'Gardening Basics', category: 'Environment' },
    { id: 't2', name: 'Digital Literacy', category: 'Education' },
    { id: 't3', name: 'Waste Management', category: 'Sustainability' },
  ];

  return (
    <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-150px)]">
      {loading && <div className="text-sm text-gray-500">Loading target skills...</div>}
      {!loading && (skills && skills.length > 0 ? skills : fallbackSkills)?.map((s: any) => {
        const key = s.id || s._id || s.name;
        return (
          <ImpactCard key={key} skill={s.name} impact={s.category ? `Category: ${s.category}` : ""} />
        );
      })}
    </div>
  );
}
