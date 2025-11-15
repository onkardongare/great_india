"use client";

import { Skill } from "@/types/skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-3">
      <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
      <p className="text-gray-500">{skill.level}</p>
    </div>
  );
}
