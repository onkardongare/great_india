import { School, Server, MapPinned, Lightbulb, Leaf, ShieldCheck } from "lucide-react";
import { Mission } from "@/types/mission";

export const missions: Mission[] = [
  {
    slug: "education",
    title: "Education for All",
    subtitle: "Empowering every child with knowledge and skills",
    description: "Universal access to quality education with focus on skill development, digital learning, and inclusion.",
    icon: School,
    stats: [
      { label: "Literacy Rate", value: 77 },
      { label: "Enrollment", value: 92 },
      { label: "Dropout Rate", value: 12 },
    ],
    chart: {
      type: "line",
      title: "Literacy Growth Over Years",
      data: [
        { name: "2000", value: 61 },
        { name: "2010", value: 69 },
        { name: "2020", value: 77 },
        { name: "2030 (proj.)", value: 85 },
      ],
    },
    governmentActions: [
      { title: "National Education Policy 2020", slug: "nep-2020" },
      { title: "PM eVIDYA Initiative", slug: "pm-evidya" },
    ],
    challenges: [
      { title: "Digital Divide", slug: "digital-divide" },
      { title: "Teacher Shortage", slug: "teacher-shortage" },
    ],
    contributions: [
      { title: "Volunteer to Teach", slug: "volunteer-teach" },
      { title: "Donate Learning Materials", slug: "donate-learning" },
    ],
  },
  {
    slug: "digital",
    title: "Digital India",
    subtitle: "Bridging the digital divide",
    description: "Expand digital infrastructure, increase internet penetration, and build cyber-resilient governance.",
    icon: Server,
    stats: [
      { label: "Internet Users", value: 850 },
      { label: "Rural Penetration %", value: 45 },
      { label: "Digital Transactions (Bn)", value: 90 },
    ],
    chart: {
      type: "bar",
      title: "Digital Payments Growth (UPI Transactions)",
      data: [
        { name: "2017", value: 0.1 },
        { name: "2020", value: 2 },
        { name: "2023", value: 9 },
      ],
    },
    governmentActions: [
      { title: "BharatNet Connectivity", slug: "bharatnet" },
      { title: "Digital Literacy Mission", slug: "digital-literacy" },
    ],
    challenges: [
      { title: "Urban-Rural Divide", slug: "urban-rural-digital-divide" },
      { title: "Cybersecurity Threats", slug: "cybersecurity-threats" },
    ],
    contributions: [
      { title: "Teach Digital Skills Locally", slug: "teach-digital-skills" },
      { title: "Promote Cyber Safety", slug: "promote-cyber-safety" },
    ],
  },
  {
    slug: "infrastructure",
    title: "Modern Infrastructure",
    subtitle: "Building resilient and future-ready infrastructure",
    description: "Transform India with modern transport, housing, and urban planning while ensuring inclusivity.",
    icon: MapPinned,
    stats: [
      { label: "Highway Length (km)", value: 145000 },
      { label: "Metro Cities", value: 20 },
      { label: "Smart Cities", value: 100 },
    ],
    chart: {
      type: "bar",
      title: "Highway Growth (km)",
      data: [
        { name: "2010", value: 75000 },
        { name: "2020", value: 120000 },
        { name: "2024", value: 145000 },
      ],
    },
    governmentActions: [
      { title: "PM GatiShakti", slug: "pm-gatishakti" },
      { title: "Smart Cities Mission", slug: "smart-cities" },
    ],
    challenges: [
      { title: "Urban Congestion", slug: "urban-congestion" },
      { title: "Land Acquisition Issues", slug: "land-acquisition" },
    ],
    contributions: [
      { title: "Support Sustainable Housing", slug: "sustainable-housing" },
      { title: "Advocate Public Transport", slug: "advocate-public-transport" },
    ],
  },
  {
    slug: "innovation",
    title: "Innovation & Entrepreneurship",
    subtitle: "Make India a global innovation hub",
    description: "Boost research, startups, and indigenous innovation to power India's growth story.",
    icon: Lightbulb,
    stats: [
      { label: "Startups", value: 100000 },
      { label: "Unicorns", value: 110 },
      { label: "R&D Spending % GDP", value: 0.7 },
    ],
    chart: {
      type: "bar",
      title: "Startup Growth in India",
      data: [
        { name: "2016", value: 5000 },
        { name: "2020", value: 50000 },
        { name: "2024", value: 100000 },
      ],
    },
    governmentActions: [
      { title: "Startup India Mission", slug: "startup-india" },
      { title: "Atal Innovation Mission", slug: "atal-innovation" },
    ],
    challenges: [
      { title: "Low R&D Investment", slug: "low-rd-investment" },
      { title: "Access to Funding", slug: "access-to-funding" },
    ],
    contributions: [
      { title: "Mentor Startups", slug: "mentor-startups" },
      { title: "Invest in Innovation", slug: "invest-innovation" },
    ],
  },
  {
    slug: "environment",
    title: "Green India",
    subtitle: "Sustainable future for generations",
    description: "Tackle climate change, increase renewable energy, and conserve biodiversity.",
    icon: Leaf,
    stats: [
      { label: "Renewable Energy %", value: 41 },
      { label: "Forest Cover %", value: 24 },
      { label: "Solar Capacity (GW)", value: 70 },
    ],
    chart: {
      type: "pie",
      title: "Energy Mix in India",
      data: [
        { name: "Coal", value: 55 },
        { name: "Renewables", value: 41 },
        { name: "Nuclear", value: 4 },
      ],
    },
    governmentActions: [
      { title: "National Solar Mission", slug: "solar-mission" },
      { title: "EV Adoption Scheme", slug: "ev-scheme" },
    ],
    challenges: [
      { title: "Air Pollution", slug: "air-pollution" },
      { title: "Deforestation", slug: "deforestation" },
    ],
    contributions: [
      { title: "Plant Trees", slug: "plant-trees" },
      { title: "Switch to Clean Energy", slug: "switch-clean-energy" },
    ],
  },
  {
    slug: "governance",
    title: "Good Governance",
    subtitle: "Transparent, accountable, and citizen-first governance",
    description: "Build an efficient, corruption-free, and people-centric governance model.",
    icon: ShieldCheck,
    stats: [
      { label: "Ease of Doing Biz Rank", value: 63 },
      { label: "Digital Services %", value: 80 },
      { label: "Direct Benefit Transfers (Bn)", value: 120 },
    ],
    chart: {
      type: "line",
      title: "Digital Services Growth",
      data: [
        { name: "2010", value: 20 },
        { name: "2015", value: 45 },
        { name: "2020", value: 65 },
        { name: "2024", value: 80 },
      ],
    },
    governmentActions: [
      { title: "Digital Governance", slug: "digital-governance" },
      { title: "Jan Dhan Yojana", slug: "jan-dhan" },
    ],
    challenges: [
      { title: "Corruption", slug: "corruption" },
      { title: "Bureaucratic Delays", slug: "bureaucratic-delays" },
    ],
    contributions: [
      { title: "Report Corruption", slug: "report-corruption" },
      { title: "Engage in Local Governance", slug: "local-governance" },
    ],
  },
];
