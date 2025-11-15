"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";

export default function LogoutPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const confirmLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      dispatch(logout());
      router.replace("/login"); // navigate to login page
    } else {
      router.back(); // go back if cancelled
    }
  };

  useEffect(() => {
    confirmLogout();
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <p className="text-lg text-gray-700">Please confirm logout...</p>
    </div>
  );
}
