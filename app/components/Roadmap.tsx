"use client";

import { useState } from 'react';
import { 
School, Server, MapPinned, Lightbulb, Leaf, ShieldCheck, 
TrendingUp, Target, Calendar, Award, ArrowRight, CheckCircle,
Users, Building, Zap, Globe, Heart, Star,
} from 'lucide-react';
import { SectionTitle, Container } from './UI';

const IndiaRoadmap2047 = () => {

interface Milestone {
  year: number;
  phase: string;
  status: string;
  gdp: string;
  perCapitaIncome: string;
  achievements: {
    pillar: string;
    icon: any;
    title: string;
    description: string;
  }[];
  color: string;
  textColor: string;
}

const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
const [currentYear, setCurrentYear] = useState(2025);

const roadmapData = [
{
year: 2025,
phase: "Foundation Phase",
status: "current",
gdp: "$4.2T",
perCapitaIncome: "$3000",
achievements: [
  { pillar: "Education & Skilling", icon: School, title: "NEP 2020 Full Implementation", description: "Complete rollout of National Education Policy across all states" },
  { pillar: "Digital Infrastructure", icon: Server, title: "5G Coverage 80%", description: "Nationwide 5G deployment covering major cities and towns" },
  { pillar: "Infrastructure", icon: MapPinned, title: "100 Smart Cities", description: "Complete smart city development in 100 urban centers" },
],
color: "bg-blue-500",
textColor: "text-blue-600"
},
{
year: 2027,
phase: "Acceleration Phase",
status: "upcoming",
gdp: "$5.5T",
perCapitaIncome: "$3900",
achievements: [
  { pillar: "Innovation & Industry", icon: Lightbulb, title: "Unicorn Nation", description: "200+ unicorn startups, leading global innovation ecosystem" },
  { pillar: "Environment & Energy", icon: Leaf, title: "50% Renewable Energy", description: "Clean energy transition with 500GW renewable capacity" },
  { pillar: "Good Governance", icon: ShieldCheck, title: "Digital Governance 2.0", description: "AI-powered citizen services and transparent governance" },
],
color: "bg-green-500",
textColor: "text-green-600"
},
{
year: 2030,
phase: "SDG Achievement",
status: "planned",
gdp: "$7.8T",
perCapitaIncome: "$5400",
achievements: [
  { pillar: "Education & Skilling", icon: School, title: "100% Literacy", description: "Universal literacy and digital skills for all citizens" },
  { pillar: "Infrastructure", icon: MapPinned, title: "Bullet Train Network", description: "High-speed rail connecting major economic corridors" },
  { pillar: "Environment & Energy", icon: Leaf, title: "Carbon Neutral Cities", description: "Top 20 cities achieve carbon neutrality" },
],
color: "bg-purple-500",
textColor: "text-purple-600"
},
{
year: 2035,
phase: "Innovation Leadership",
status: "vision",
gdp: "$12.5T",
perCapitaIncome: "$8500",
achievements: [
  { pillar: "Innovation & Industry", icon: Lightbulb, title: "Global Tech Hub", description: "World's largest startup ecosystem and R&D center" },
  { pillar: "Digital Infrastructure", icon: Server, title: "Quantum Internet", description: "Quantum communication network for secure digital infrastructure" },
  { pillar: "Good Governance", icon: ShieldCheck, title: "AI Governance", description: "Fully integrated AI-driven public service delivery" },
],
color: "bg-orange-500",
textColor: "text-orange-600"
},
{
year: 2040,
phase: "Prosperity Phase",
status: "vision",
gdp: "$18.2T",
perCapitaIncome: "$12000",
achievements: [
  { pillar: "Infrastructure", icon: MapPinned, title: "Hyperloop Network", description: "Next-gen transportation connecting metros in <2 hours" },
  { pillar: "Environment & Energy", icon: Leaf, title: "Net Zero Economy", description: "Complete carbon neutrality across all sectors" },
  { pillar: "Education & Skilling", icon: School, title: "Global Education Hub", description: "Top destination for international students and research" },
],
color: "bg-indigo-500",
textColor: "text-indigo-600"
},
{
year: 2047,
phase: "Developed Nation",
status: "goal",
gdp: "$30T",
perCapitaIncome: "$20000",
achievements: [
  { pillar: "All Pillars", icon: Star, title: "Developed Nation Status", description: "India emerges as a fully developed, prosperous nation" },
  { pillar: "Global Leadership", icon: Globe, title: "Vishwa Guru", description: "Leading global solutions for climate, technology, and peace" },
  { pillar: "Human Development", icon: Heart, title: "100% Human Prosperity", description: "Universal healthcare, education, and quality of life" },
],
color: "bg-gradient-to-r from-orange-500 to-green-500",
textColor: "text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600"
}
];

const getStatusIcon = (status: string) => {
switch(status) {
case 'current': return <Calendar className="w-4 h-4" />;
case 'upcoming': return <TrendingUp className="w-4 h-4" />;
case 'planned': return <Target className="w-4 h-4" />;
case 'vision': return <Award className="w-4 h-4" />;
case 'goal': return <Star className="w-4 h-4" />;
default: return <CheckCircle className="w-4 h-4" />;
}
};

const progressPercentage = ((currentYear - 2025) / (2047 - 2025)) * 100;

return (
  <section id="roadmap" className="py-8 sm:py-16 bg-white overflow-hidden scroll-mt-32">
    <Container>
      <SectionTitle title="Roadmap" subtitle="India's Path to Developed Nation by 2047" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Main Timeline */}
        <div className="relative">
          {/* Central Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-300 via-green-300 to-orange-300 h-full"></div>
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-300 via-green-300 to-orange-300 h-full"></div>

          {roadmapData.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = getStatusIcon(milestone.status);
            
            return (
              <div key={milestone.year} className={`relative mb-8 md:mb-20 ${
                // Mobile: all items left-aligned, Desktop: alternating
                isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
              } pl-16 md:pl-0`}>
                
                {/* Timeline Node */}
                <div className={`absolute ${
                  // Mobile positioning
                  'left-6 md:left-auto top-6 md:top-12'
                } ${
                  // Desktop positioning  
                  isLeft ? 'md:right-0' : 'md:left-0'
                } w-4 h-4 md:w-8 md:h-8 rounded-full border-2 md:border-4 border-white shadow-lg transition-all duration-500 ${
                  milestone.color
                } z-10`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="w-1 h-1 md:w-3 md:h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`${
                  // Mobile: full width with left margin, Desktop: alternating with constraints
                  'w-full md:max-w-lg'
                } ${isLeft ? 'md:mr-12 md:ml-auto' : 'md:ml-12 md:mr-auto'}`}>
                  
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-4 md:p-8 transform transition-all duration-500 hover:scale-[1.02] border border-gray-100">
                    
                    {/* Year and Phase */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                      <div className="mb-2 md:mb-0">
                        <h3 className={`text-2xl md:text-4xl font-bold ${milestone.textColor} mb-1`}>
                          {milestone.year}
                        </h3>
                        <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                          {milestone.phase}
                        </h4>
                      </div>
                      <div className={`p-2 md:p-3 rounded-xl ${milestone.color} text-white w-fit`}>
                        {IconComponent}
                      </div>
                    </div>

                    {/* Economic Indicators */}
                    <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8 p-3 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                      <div className="text-center md:text-left">
                        <p className="text-xs md:text-sm text-gray-600 mb-1">GDP Target</p>
                        <p className="text-lg md:text-2xl font-bold text-gray-800">{milestone.gdp}</p>
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-xs md:text-sm text-gray-600 mb-1">Per Capita Income</p>
                        <p className="text-lg md:text-2xl font-bold text-gray-800">{milestone.perCapitaIncome}</p>
                      </div>
                    </div>

                    {/* Key Achievements Section */}
                    <div className="mb-4">
                      <h5 className="text-sm md:text-lg font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                        <Target size={16} className="mr-2 text-blue-600" />
                        Key Achievements
                      </h5>
                      
                      <div className="space-y-2 md:space-y-4">
                        {milestone.achievements.map((achievement, achIndex) => {
                          const AchIcon = achievement.icon;
                          return (
                            <div 
                              key={achIndex}
                              className="group p-3 md:p-4 rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-md"
                              onClick={() => setSelectedMilestone(milestone)}
                            >
                              <div className="flex items-start space-x-3 md:space-x-4">
                                <div className={`p-2 md:p-3 rounded-xl ${milestone.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                  <AchIcon size={16} className="md:w-5 md:h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h6 className="font-bold text-gray-800 text-sm md:text-base mb-1 group-hover:text-blue-800 transition-colors">
                                        {achievement.title}
                                      </h6>
                                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                        {achievement.description}
                                      </p>
                                      <span className="inline-block mt-2 px-2 md:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                        {achievement.pillar}
                                      </span>
                                    </div>
                                    <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                        <span className="flex items-center bg-blue-50 px-2 md:px-3 py-1 rounded-full">
                          <Users size={12} className="mr-1" />
                          Population Impact
                        </span>
                        <span className="flex items-center bg-green-50 px-2 md:px-3 py-1 rounded-full">
                          <TrendingUp size={12} className="mr-1" />
                          Economic Growth
                        </span>
                        <span className="flex items-center bg-purple-50 px-2 md:px-3 py-1 rounded-full">
                          <Globe size={12} className="mr-1" />
                          Global Impact
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Metrics Dashboard */}
      {/* <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            Vision 2047: Developed India at a Glance
          </h3>
          
          // Primary Metrics 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
            {[
              { icon: Users, label: "Population", value: "1.5B", subtext: "Demographic dividend", color: "text-blue-400" },
              { icon: Building, label: "Urban Population", value: "60%", subtext: "Smart urbanization", color: "text-green-400" },
              { icon: Zap, label: "Clean Energy", value: "100%", subtext: "Carbon neutral", color: "text-yellow-400" },
              { icon: Globe, label: "Global GDP Rank", value: "Top 3", subtext: "Economic powerhouse", color: "text-purple-400" }
            ].map((metric, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className={`inline-flex p-3 md:p-6 rounded-2xl bg-gray-700 ${metric.color} mb-3 md:mb-6 group-hover:bg-gray-600 transition-colors`}>
                  <metric.icon size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm md:text-base font-semibold">{metric.label}</div>
                <div className="text-gray-500 text-xs md:text-sm">{metric.subtext}</div>
              </div>
            ))}
          </div>

          //  Secondary Metrics Grid 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 md:p-8 text-white">
              <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Economic Transformation</h4>
              <div className="space-y-2 md:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">GDP Growth</span>
                  <span className="font-bold text-sm md:text-lg">8-9% CAGR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Manufacturing Share</span>
                  <span className="font-bold text-sm md:text-lg">25% of GDP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Service Exports</span>
                  <span className="font-bold text-sm md:text-lg">$1T annually</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-4 md:p-8 text-white">
              <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Social Progress</h4>
              <div className="space-y-2 md:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Literacy Rate</span>
                  <span className="font-bold text-sm md:text-lg">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Life Expectancy</span>
                  <span className="font-bold text-sm md:text-lg">80+ years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Healthcare Access</span>
                  <span className="font-bold text-sm md:text-lg">Universal</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-4 md:p-8 text-white">
              <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Innovation Leadership</h4>
              <div className="space-y-2 md:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">R&D Investment</span>
                  <span className="font-bold text-sm md:text-lg">3% of GDP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Patent Filings</span>
                  <span className="font-bold text-sm md:text-lg">Top 3 globally</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base">Unicorn Companies</span>
                  <span className="font-bold text-sm md:text-lg">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Achievement Detail Modal */}
      {/* {selectedMilestone && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => setSelectedMilestone(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              ×
            </button>
            
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <selectedMilestone.icon size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedMilestone.title}
                </h3>
                <p className="text-gray-600">{selectedMilestone.year}</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {selectedMilestone.description}
            </p>
            
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
              <strong>Pillar:</strong> {selectedMilestone.pillar}
            </div>
          </div>
        </div>
      )} */}
    </Container>
  </section>
);
};

export default IndiaRoadmap2047;