"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Next.js's optimized Image component
import { useTranslations } from "next-intl"
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import {
  Heart,
  Target,
  Users,
  TreePine,
  GraduationCap,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar,
  Zap,
  Globe,
  HandHeart,
  BookOpen,
  Award,
  TrendingUp,
  Play,
} from "lucide-react"; // Import web-compatible icons
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { icons } from "@/constants/index";

export default function OverviewPage() {
  const t = useTranslations("IndexPage")
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];


  useEffect(() => {
    const initialize = async () => {
      try {
        await checkFirstTime();
      } catch (error) {
        console.error("Error during initialization:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initialize();
  }, [dispatch, loggedIn]);

  const checkFirstTime = async () => {
    try {
      const hasSeenIntro = localStorage.getItem("hasSeenIntro");
      console.log("isfirstsss", hasSeenIntro);
      if (hasSeenIntro === "true") {
        setIsFirstTime(false);
        if (loggedIn) {
          // Use router.replace with a string path for Next.js
          router.replace("/home"); // Adjust to your actual Next.js path
        }
      }
    } catch (error) {
      console.error("Error checking first time status:", error);
    }
  };

  function handleLanguageChange(nextLocale: string) {
    // Remove current locale prefix from pathname
    const segments = pathname.split("/");
    const currentLocale = segments[1]; // e.g. "en" or "hi"
  
    // If the first segment is a supported locale, strip it
    const pathWithoutLocale = routing.locales.includes(currentLocale as any)
      ? "/" + segments.slice(2).join("/")
      : pathname;
  
    // Build new path with next locale
    const newPath = `/${nextLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  
    router.replace(newPath);
  }

  const getLanguageName = (lang: string) => {
    switch (lang) {
      case "en":
        return "English";
      case "hi":
        return "हिंदी";
      default:
        return "English";
    }
  };

  const handleGetStarted = async () => {
    try {
      localStorage.setItem("hasSeenIntro", "true");
      router.replace("/register");
    } catch (error) {
      console.error("Error setting hasSeenIntro:", error);
    }
  };

  // Your data arrays remain the same
  const missionPoints = [
    { icon: Heart, color: "bg-red-500", title: "Build Stronger Communities", description: "Connect neighbors and create lasting bonds through shared civic activities" },
    { icon: Globe, color: "bg-blue-500", title: "Drive Positive Change", description: "Tackle local challenges through collective action and community engagement" },
    { icon: HandHeart, color: "bg-green-500", title: "Empower Every Citizen", description: "Make civic participation accessible, rewarding, and impactful for everyone" },
  ];

  const howItWorks = [
    { step: "1", title: "Join Your Community", description: "Sign up and connect with your local neighborhood", icon: Users, color: "bg-blue-500" },
    { step: "2", title: "Choose Your Impact", description: "Select causes you care about: environment, education, social welfare", icon: Target, color: "bg-green-500" },
    { step: "3", title: "Take Action", description: "Participate in activities, challenges, and community projects", icon: Zap, color: "bg-purple-500" },
    { step: "4", title: "Earn Recognition", description: "Gain points, badges, and rewards while making a real difference", icon: Award, color: "bg-orange-500" },
  ];

  const impactAreas = [
    {
      icon: TreePine,
      title: "Environmental Action",
      description: "Tree planting, cleanup drives, sustainability projects",
      activities: ["Community Gardens", "Beach Cleanups", "Recycling Drives", "Green Energy Projects"],
      color: "bg-green-100",
      participants: "2,847",
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Teaching, mentoring, and educational resource sharing",
      activities: ["Digital Literacy", "Tutoring Programs", "Library Support", "STEM Workshops"],
      color: "bg-blue-100",
      participants: "1,923",
    },
    {
      icon: HandHeart,
      title: "Social Welfare",
      description: "Supporting vulnerable community members and families",
      activities: ["Food Drives", "Elder Care", "Homeless Support", "Community Kitchens"],
      color: "bg-purple-100",
      participants: "3,156",
    },
  ];

  const platformStats = [
    { label: "Active Citizens", value: "12,847", icon: Users },
    { label: "Projects Completed", value: "1,234", icon: CheckCircle },
    { label: "Communities Served", value: "89", icon: MapPin },
    { label: "Impact Hours", value: "45,678", icon: Calendar },
  ];

  const gamificationFeatures = [
    { title: "Points & Rewards", color: "bg-yellow-300", description: "Earn points for every activity and redeem them for local business discounts", icon: Star },
    { title: "Achievement Badges", color: "bg-red-500", description: "Unlock special badges as you reach milestones in different impact areas", icon: Trophy },
    { title: "Community Challenges", color: "bg-green-500", description: "Join weekly and monthly challenges with your neighbors", icon: Target },
    { title: "Leaderboards", color: "bg-blue-500", description: "See how your contributions compare and celebrate top contributors", icon: TrendingUp },
  ];

  // While loading, don't render page yet. Do NOT hide the page when user has seen the intro;
  // previously `!isFirstTime` was included here which returns `null` for returning visitors
  // (so only navbar/layout remained visible). Keep the page visible after initialization.
  if (isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="bg-blue-600 p-5 rounded-lg flex flex-col items-center mt-3">
          <div className="p-0">
            {/* <Image
              src={icons.logo_fit} // Replace with your actual image path
              alt="Logo"
              width={152} // Corresponds to w-38 (38 * 4 = 152)
              height={64} // Corresponds to h-16 (16 * 4 = 64)
              className="object-contain"
            /> */}
          </div>
          {/* Language Selection */}
          <div className="p-2">
            <div className="flex flex-row space-x-2">
              {['en', 'hi'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2 rounded-full ${
                    currentLocale === lang ? 'bg-yellow-400' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`font-semibold ${
                      currentLocale === lang ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    {getLanguageName(lang)}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <p className="text-white/90 text-lg text-center mb-4 pt-2">
            Transform your community through gamified civic engagement. Make a difference, earn rewards, and build lasting connections.
          </p>
        </div>

        {/* Platform Stats */}
        <div className="bg-white p-5 flex flex-wrap justify-between">
          {platformStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="w-[49%] mb-1 p-2 flex flex-col items-center rounded-xl bg-yellow-400">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  <Icon color="#2563eb" size={32} />
                </div>
                <h2 className="text-2xl font-bold">{stat.value}</h2>
                <p className="text-gray-800">{stat.label}</p>
              </div>
            );
          })}
        </div>
        
        {/* Platform Stats */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platformStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe every citizen has the power to create positive change. Our platform makes civic engagement fun,
                rewarding, and impactful.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {missionPoints.map((point, index) => {
                const IconComponent = point.icon
                return (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardHeader>
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{point.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{point.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">How It Works</h2>
              <p className="text-xl text-gray-600">
                Getting started is simple. Follow these four steps to begin making an impact.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {howItWorks.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="text-center relative">
                    <div
                      className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 relative z-10`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                      <div className="absolute -top-2 -right-2 bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-gray-200">
                        {step.step}
                      </div>
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 z-0"></div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Areas of Impact</h2>
              <p className="text-xl text-gray-600">
                Choose the causes that matter most to you and start making a difference today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {impactAreas.map((area, index) => {
                const IconComponent = area.icon
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`${area.color} p-3 rounded-lg`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <Badge variant="outline">{area.participants} active</Badge>
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 mb-2">Popular Activities:</h4>
                        {area.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{activity}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4">Explore {area.title}</Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Gamification Features */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Stay Motivated</h2>
              <p className="text-xl text-gray-600">
                Our gamification system keeps you engaged and celebrates your contributions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {gamificationFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>        
        {/* Get Started Section */}
        <div className="bg-blue-500 p-6 border-1 rounded-md">
          <h2 className="text-white text-3xl font-bold text-center mb-2">Ready to Make a Difference?</h2>
          <p className="text-blue-200 text-center mb-4">
            Join thousands of citizens who are already transforming their communities.
          </p>
          <div className="flex justify-center p-3 pt-2">
            <button
              onClick={() => handleGetStarted()}
              className="bg-white px-4 py-2 rounded-lg flex items-center border-4 border-yellow-500"
            >
              <Play size={24} color="#2563eb" />
              <span className="text-black ml-2 font-bold text-xl">Get Started Today</span>
            </button>
          </div>
          <div className="bg-blue-800 p-4 rounded-xl mb-4">
            <h3 className="text-white text-xl font-semibold mb-2">What You'll Get:</h3>
            {[
              "Personalized activity recommendations",
              "Real-time impact tracking",
              "Community recognition and rewards",
              "Connection with like-minded neighbors",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center mb-1">
                <CheckCircle size={16} color="#2dd4bf" />
                <p className="text-white ml-2">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}