import React from "react";

// ---------- Utility Components ----------
export const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const SectionTitle: React.FC<{ eyebrow?: string; title: string; subtitle?: string; center?: boolean }>
= ({ eyebrow, title, subtitle, center }) => (
  <div className={`mb-10 ${center ? "text-center" : ""}`}>
    {eyebrow && (
      <p className="uppercase tracking-widest text-xs font-semibold text-indigo-600">{eyebrow}</p>
    )}
    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
    {subtitle && (
      <p className={`mt-3 text-gray-600 ${center ? "mx-auto max-w-2xl" : ""}`}>{subtitle}</p>
    )}
  </div>
);

export const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/60 px-2 py-1 text-sm text-gray-700 shadow-sm backdrop-blur
               overflow-hidden text-ellipsis whitespace-nowrap"
  >
    {children}
  </span>
);