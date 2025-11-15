import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from "@/slices/skillSlice";
import type { RootState } from "@/redux/store";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillDevelopmentPage() {
  const dispatch = useDispatch();
  const { skills, loading } = useSelector((s: RootState) => s.skill);

  useEffect(() => {
    dispatch<any>(fetchSkills());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-yellow-50 p-8 overflow-y-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-10 text-center text-gray-800"
      >
        Skill Development
      </motion.h1>

      {loading && (
        <div className="text-center text-gray-500 animate-pulse">Loading skills...</div>
      )}

      <div className="grid gap-8 max-w-5xl mx-auto">
        {/* fallback skills when API returns none */}
        {/** local fallback data */}
        {!loading && (skills && skills.length > 0 ? skills : [
          { id: 's-f1', name: 'Community Gardening', progress: 12, category: 'Environment', description: 'Learn the basics of urban gardening.', resources: [{title:'Intro to Gardening', url:'#', type:'Article'}] },
          { id: 's-f2', name: 'Basic First Aid', progress: 60, category: 'Health', description: 'Essential first aid skills for emergencies.', resources: [{title:'First Aid 101', url:'#', type:'Video'}] },
          { id: 's-f3', name: 'Recycling & Compost', progress: 35, category: 'Sustainability', description: 'Practical steps for household waste management.', resources: [{title:'Compost Basics', url:'#', type:'Article'}] }
        ])?.map((skill: any, i: number) => (
          <motion.div
            key={skill.id || skill._id || skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="shadow-lg rounded-3xl bg-white/70 backdrop-blur hover:shadow-2xl transition">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{skill.name}</h2>
                  <Target size={28} className="text-blue-600" />
                </div>

                {skill.progress !== undefined && (
                  <div className="mb-4">
                    <Progress value={skill.progress} className="h-3 rounded-full" />
                    <p className="text-sm text-gray-600 mt-1">Progress: {skill.progress}%</p>
                  </div>
                )}

                <div className="mb-4 space-y-1">
                  <p className="text-sm text-gray-700"><span className="font-semibold">Category:</span> {skill.category}</p>
                  {skill.level && <p className="text-sm text-gray-700"><span className="font-semibold">Level:</span> {skill.level}</p>}
                  {skill.tags && skill.tags.length > 0 && (
                    <p className="text-sm text-gray-600"><span className="font-semibold">Tags:</span> {skill.tags.join(", ")}</p>
                  )}
                </div>

                {skill.description && (
                  <p className="text-base text-gray-700 italic mb-4">“{skill.description}”</p>
                )}

                {/* Resources */}
                {skill.resources && skill.resources.length > 0 && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800 mb-2">📚 Resources:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                      {skill.resources.map((res: any, idx: number) => (
                        <li key={idx}>
                          <a href={res.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">
                            {res.title} ({res.type})
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Community Actions */}
                {skill.community_actions && skill.community_actions.length > 0 && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800 mb-2">🤝 Community Actions:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {skill.community_actions.map((a: any, idx: number) => (
                        <li key={idx}>{a.action} <span className="text-xs text-gray-500">(Impact: {a.impact_area}, Difficulty: {a.difficulty})</span></li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Opportunities */}
                {skill.opportunities && skill.opportunities.length > 0 && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800 mb-2">🚀 Opportunities:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {skill.opportunities.map((o: any, idx: number) => (
                        <li key={idx}>{o.type}: {o.description} {o.link && (<a href={o.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">Learn More</a>)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-between items-center mt-6">
                  <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 flex items-center shadow hover:scale-105 transition">
                    <BookOpen size={18} className="mr-2" />
                    Continue Learning
                  </Button>

                  {skill.progress >= 50 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex items-center text-yellow-600 text-sm font-semibold"
                    >
                      <Award size={20} className="mr-1" /> Achievement Unlocked
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Motivation Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 p-8 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 rounded-3xl shadow-xl max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Why Skills Matter?</h2>
        <p className="text-base text-gray-700 text-center mb-6">
          Every skill you learn contributes not only to your growth but also to the vision of a
          self-reliant and developed India. 🇮🇳
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-xl text-blue-700">5000+</p>
            <p className="text-sm text-gray-600">Learners Skilled</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-xl text-green-700">120+</p>
            <p className="text-sm text-gray-600">Communities Impacted</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-xl text-purple-700">300+</p>
            <p className="text-sm text-gray-600">Opportunities Created</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-xl text-yellow-700">50K+</p>
            <p className="text-sm text-gray-600">Impact Points Earned</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}