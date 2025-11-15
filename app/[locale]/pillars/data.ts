import { LucideIcon } from 'lucide-react';
import { BookOpen } from 'lucide-react'; // For education icon, add more for other pillars

export interface PillarData {
  title: string;
  description: string;
  icon: LucideIcon;
  stats: { value: string; label: string }[];
  chartData: { title: string; data: { name: string; value: number }[] };
  roles: { text: string; desc: string; link: string }[];
  governmentEfforts: {
    intro: string;
    initiatives: { text: string; desc: string; link: string }[];
    fundingChart: { title: string; data: { year: string; value: number }[] };
  };
  challenges: {
    list: { title: string; desc: string }[];
    pieChart: { title: string; data: { name: string; value: number }[] };
  };
  obstacles: { obstacle: string; desc: string; solution: string; link: string }[];
  skillsGap: { text: string; desc: string; link?: string }[];
  reforms: { text: string; desc?: string; link?: string }[];
}

export const pillarsData: Record<string, PillarData> = {
  education: {
    title: "Education",
    description: "Empowering India's youth through education, innovation, and skills to build a developed nation by 2047, aiming for 100% literacy and global competitiveness.",
    icon: BookOpen,
    stats: [
      { value: "77.7%", label: "Literacy Rate (2021)" },
      { value: "28.4%", label: "GER in Higher Education" },
      { value: "4.6%", label: "GDP Allocation (2024)" },
    ],
    chartData: {
      title: "Key Education Metrics",
      data: [
        { name: "Literacy Gap", value: 22 },
        { name: "FLN Deficiency", value: 30 },
        { name: "Gender Disparity", value: 25 },
        { name: "Digital Access", value: 15 },
        { name: "Skill Mismatch", value: 8 },
      ],
    },
    roles: [
      { text: "Pursue Skill-Based Learning", desc: "Enroll in vocational courses on platforms like SWAYAM or Coursera to gain practical skills in AI, sustainability, and entrepreneurship.", link: "https://swayam.gov.in/" },
      { text: "Engage in Innovation Projects", desc: "Participate in hackathons, innovation challenges, or Atal Tinkering Labs to prototype ideas for real-world issues.", link: "https://aim.gov.in/atl.php" },
      { text: "Promote Inclusivity", desc: "Volunteer in community education initiatives to help underprivileged students, ensuring equitable access to quality learning.", link: "https://www.teachforindia.org/" },
      { text: "Adopt Lifelong Learning", desc: "Stay updated with emerging technologies and trends through webinars, certifications, and online resources.", link: "https://www.coursera.org/" },
      { text: "Advocate for Change", desc: "Share ideas on social media or forums about improving education, inspiring collective action toward 100% literacy.", link: "https://x.com/" },
    ],
    governmentEfforts: {
      intro: "The Indian government, through the Ministry of Education and NITI Aayog, is driving transformative changes via the National Education Policy (NEP) 2020 and related initiatives.",
      initiatives: [
        { text: "NEP 2020", desc: "Emphasizes multidisciplinary education, flexibility in curricula, and vocational training from Class 6 onward.", link: "https://www.education.gov.in/nep" },
        { text: "Skill Development Programs", desc: "Initiatives like Pradhan Mantri Kaushal Vikas Yojana (PMKVY) aim to train millions in job-ready skills.", link: "https://www.pmkvyofficial.org/" },
        { text: "Digital Integration", desc: "Digital India promotes online learning and AI-driven personalization, with tools like SWAYAM and DIKSHA.", link: "https://digitalindia.gov.in/" },
        { text: "Teacher Training", desc: "NISHTHA and other programs upgrade teacher capabilities and establish innovation hubs.", link: "https://nishtha.ncert.gov.in/" },
        { text: "Inclusivity Focus", desc: "Schemes like Samagra Shiksha ensure 100% enrollment and reduced dropouts in rural and marginalized areas.", link: "https://samagra.education.gov.in/" },
      ],
      fundingChart: {
        title: "Education Funding Trend (% of GDP)",
        data: [
          { year: "2015", value: 4.1 },
          { year: "2020", value: 4.5 },
          { year: "2024", value: 4.6 },
          { year: "2030 (Projected)", value: 6.0 },
        ],
      },
    },
    challenges: {
      list: [
        { title: "Rote Learning Dominance", desc: "Prioritizes memorization over critical thinking, stifling creativity and problem-solving skills." },
        { title: "High Dropout Rates", desc: "Significant dropouts among disadvantaged groups, with financial and socioeconomic barriers." },
        { title: "Foundational Literacy Gap", desc: "Over 50 million elementary students lack foundational literacy and numeracy (FLN)." },
        { title: "Gender Disparities", desc: "Lower female literacy (70.3%) and barriers like lack of facilities and norms limiting STEM access." },
        { title: "Digital Divide", desc: "Limited internet and tech access in rural areas, exacerbating inequalities." },
      ],
      pieChart: {
        title: "Distribution of Challenges",
        data: [
          { name: "FLN Deficiency", value: 30 },
          { name: "Gender Gap", value: 25 },
          { name: "Dropout Rates", value: 20 },
          { name: "Digital Divide", value: 15 },
          { name: "Quality Issues", value: 10 },
        ],
      },
    },
    obstacles: [
      { obstacle: "Fear of Failure", desc: "Cultural emphasis on perfection discourages experimentation.", solution: "Embrace a growth mindset: View failures as learning opportunities. Join innovation clubs.", link: "https://failory.com/" },
      { obstacle: "Limited Resources", desc: "Lack of access to tools, mentors, or funding in under-resourced areas.", solution: "Leverage free online platforms like Khan Academy and seek virtual mentorship via LinkedIn.", link: "https://www.khanacademy.org/" },
      { obstacle: "Rigid Schedules", desc: "Overloaded curricula leave no time for creative pursuits.", solution: "Prioritize time management: Use techniques like Pomodoro and integrate creativity into academics.", link: "https://tomato-timer.com/" },
      { obstacle: "Societal Pressure", desc: "Expectations to follow traditional career paths over innovative ones.", solution: "Build a support network: Participate in student-led innovation challenges.", link: "https://www.hackerearth.com/challenges/" },
      { obstacle: "Skill Gaps", desc: "Theory-heavy education without real-world exposure.", solution: "Seek internships or freelance gigs on platforms like Internshala to apply ideas practically.", link: "https://internshala.com/" },
    ],
    skillsGap: [
      { text: "Industry-Academia Collaboration", desc: "Partner with companies for curriculum updates, internships, and guest lectures.", link: "https://www.nasscom.in/" },
      { text: "Vocational Training", desc: "Integrate apprenticeships and learning factories for hands-on experience.", link: "https://www.nsdcindia.org/" },
      { text: "Focus on Emerging Skills", desc: "Emphasize critical thinking, communication, and tech skills like data analytics.", link: "https://www.coursera.org/learn/critical-thinking-skills" },
      { text: "Government-Led Initiatives", desc: "Expand Skill India to match training with market needs.", link: "https://www.skillindia.gov.in/" },
    ],
    reforms: [
      { text: "Increase Funding", desc: "Achieve NEP's 6% GDP target for education, prioritizing rural infrastructure.", link: undefined },
      { text: "Curriculum Overhaul", desc: "Mandate project-based, skill-oriented learning and mother-tongue instruction.", link: "https://www.cbse.gov.in/cbsenew/cbse.html" },
      { text: "Teacher Empowerment", desc: "Invest in continuous training, better pay, and tech tools.", link: "https://nishtha.ncert.gov.in/" },
      { text: "Promote Equity", desc: "Bridge digital divides with subsidized devices and scholarships for underrepresented groups.", link: "https://www.india.gov.in/spotlight/national-scholarship-portal" },
      { text: "Foster Innovation Ecosystems", desc: "Establish incubation centers and public-private partnerships for R&D.", link: "https://aim.gov.in/" },
    ],
  },
  // Add more pillars here with placeholder or real data as needed, e.g., environment: { ... }
};