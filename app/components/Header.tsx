"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, LucideSidebarClose } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import { icons } from "@/constants/index";
import Image from "next/image";

const tabs = [
  { href: "/home", label: "Home" },
  { href: "/skill_up", label: "Skill Up" },
  { href: "/community", label: "Community" },
  { href: "/article", label: "Articles" },
  { href: "/profile", label: "Profile" },
];


export default function Header() {
  const pathname = usePathname();
  const normalizedPath = pathname.replace(/^\/(en|hi)/, ""); // remove locale prefix
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    // Header 
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <Link href="/home" className="flex items-start space-x-2 md:space-x-4">
              <div className="p-0">
                <Image
                  src={icons.logo_fit} // Replace with your actual image path
                  alt="Logo"
                  width={152} // Corresponds to w-38 (38 * 4 = 152)
                  height={64} // Corresponds to h-16 (16 * 4 = 64)
                  className="object-contain"
                />
            </div>
            </Link>

          {/* Navigation - Desktop only */}
          <nav className="hidden md:flex space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`tab ${
                  normalizedPath.startsWith(tab.href)
                    ? "text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 relative group hover:text-gray-900 transition"
                }`}
              >
                {tab.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Sidebar open button */}
          <button onClick={() => setSidebarOpen(true)} aria-label="Open sidebar" className="ml-4">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
      {/* Sidebar and overlay */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar overlay"
          />
          {/* Sidebar */}
          <aside className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg flex flex-col p-4 border-l border-gray-200 transition-transform duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
                  <LucideSidebarClose className="h-6 w-6 text-blue-900"></LucideSidebarClose>
              </button>
            </div>
            <div className="mb-4">
              <LocaleSwitcher/>
            </div>
            {/* Navigation links: only on mobile */}
            <nav className="flex flex-col gap-2 md:hidden">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`px-4 py-2 rounded text-sm ${normalizedPath.startsWith(tab.href)
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
