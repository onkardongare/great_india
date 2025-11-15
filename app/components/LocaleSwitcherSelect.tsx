"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { Globe, X, Check } from "lucide-react";

type Props = {
  currentLocale: string;
};

export default function LocaleSwitcherModal({ currentLocale }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
    setOpen(false);
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white shadow-sm hover:bg-gray-50 transition"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <h2 className="text-lg font-semibold text-center mb-4">
              Select Language
            </h2>

            <div className="space-y-2">
              {routing.locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border text-sm transition ${
                    currentLocale === locale
                      ? "bg-green-100 border-green-300 text-green-700 font-semibold"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="capitalize">{locale}</span>
                  {currentLocale === locale && (
                    <Check className="w-4 h-4 text-green-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
