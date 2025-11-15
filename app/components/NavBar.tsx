"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#top", label: "Domains" }, 
  { href: "#mission", label: "Goals" },
  { href: "#programs", label: "Missions" },
  { href: "#act", label: "How You Help" },
  { href: "#stats", label: "Stats" },
  { href: "#stories", label: "Stories" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
  { href: "#pledge", label: "Pledge" },
];

const SectionNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LinkItem = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className="flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
    >
      {label}
    </a>
  );

  return (
    <nav
      className={`fixed top-16 z-40 w-full border-b backdrop-blur transition-colors ${
        scrolled ? "bg-white/90" : "bg-white/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop - inline horizontal menu */}
        <div className="hidden md:flex gap-4 items-center h-12">
          {links.map((link) => (
            <LinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Mobile - scrollable horizontal nav */}
        <div className="flex md:hidden overflow-x-auto no-scrollbar space-x-2 h-12 items-center">
          {links.map((link) => (
            <LinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SectionNav;
