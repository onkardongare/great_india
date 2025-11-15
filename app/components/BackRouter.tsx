"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackRouter = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
    >
      <ArrowLeft className="w-6 h-6 text-white" />
    </button>
  );
};

export default BackRouter;
