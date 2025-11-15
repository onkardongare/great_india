"use client";
import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import YourProgress from "@/components/skills/YourProgress";
import YourSkills from "@/components/skills/YourSkills";
import TargetSkills from "@/components/skills/TargetSkills";
import TopSkills from "@/components/skills/TopSkills";
import Explore from "@/components/skills/Explore";

export default function SkillManagement() {
  const filters: string[] = [
    "Explore",
    "Your Progress",
    "Your Skills",
    "Target Skills",
    "Top Skills"
  ];

  const [selectedFilter, setSelectedFilter] = useState<string>(filters[0]);

  return (
    <div className="flex flex-col lg:p-3 min-h-screen w-full lg:max-w-6xl">
      {/* Header */}
      <div className="py-1">
        <h1 className="text-2xl font-bold text-gray-800">Skill Management</h1>
      </div>

      {/* FilterBar */}
      <FilterBar
        filters={filters}
        selected={selectedFilter}
        onSelect={setSelectedFilter}
      />

      {/* Content */}
      <div className="flex-1 shadow-lg">
        {selectedFilter === "Your Progress" && <YourProgress />}
        {selectedFilter === "Your Skills" && <YourSkills />}
        {selectedFilter === "Target Skills" && <TargetSkills />}
        {selectedFilter === "Top Skills" && <TopSkills />}
        {selectedFilter === "Explore" && <Explore />}
      </div>
    </div>
  );
}
