"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Share2 } from "lucide-react";

export default function CelebrationModal() {
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 10000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showCelebration) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl text-center animate-bounce">
        <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h2>
        <p className="text-gray-600 mb-4">You earned the Climate Champion badge!</p>
        <div className="flex space-x-2 justify-center">
          <Button size="sm"
            className="flex items-center bg-blue-600 hover:bg-blue-700">
            <Share2 className="h-4 w-4 mr-2" />
            Share on Facebook
          </Button>
          <Button size="sm" variant="outline">
            <div className="flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Share on Twitter
            </div>
            </Button>
        </div>
      </div>
    </div>
  );
}