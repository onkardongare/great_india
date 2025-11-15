"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { updateUserProfile } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";

export default function EditProfilePage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const user = useSelector((state: any) => state.auth.userData);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [learningPreference, setLearningPreference] = useState("");
  const [targetSkill, setTargetSkill] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setLocation(user.location || "");
      setLanguage(user.language || "");
      setHobbies((user.hobbies || []).join(", "));
      setLearningPreference((user.learningPreference || []).join(", "));
      setTargetSkill((user.targetSkill || []).join(", "));
      setBio(user.bio || "");
      setAvatar(user.avatar || "");
    }
  }, [user]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  const handleSave = () => {
    const updatedData = {
      name,
      location,
      language,
      hobbies: hobbies.split(",").map((h) => h.trim()),
      learningPreference: learningPreference.split(",").map((lp) => lp.trim()),
      targetSkill: targetSkill.split(",").map((ts) => ts.trim()),
      bio,
      avatar,
    };

    dispatch(updateUserProfile(updatedData as any));
    router.back();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">
      {/* Avatar Upload */}
      <div className="flex flex-col items-center mb-6">
        <label className="cursor-pointer">
          <img
            src={avatar || "https://via.placeholder.com/120"}
            alt="Avatar"
            className="w-32 h-32 rounded-full object-cover mb-2"
          />
          <input type="file" className="hidden" onChange={handleAvatarChange} />
        </label>
        <p className="text-blue-500 text-sm">Change Avatar</p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <input
          className="w-full border rounded-md p-3 text-base"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="w-full border rounded-md p-3 text-base"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <input
          className="w-full border rounded-md p-3 text-base"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="Language"
        />
        <input
          className="w-full border rounded-md p-3 text-base"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
          placeholder="Hobbies (comma separated)"
        />
        <input
          className="w-full border rounded-md p-3 text-base"
          value={learningPreference}
          onChange={(e) => setLearningPreference(e.target.value)}
          placeholder="Learning Preference (comma separated)"
        />
        <input
          className="w-full border rounded-md p-3 text-base"
          value={targetSkill}
          onChange={(e) => setTargetSkill(e.target.value)}
          placeholder="Target Skills (comma separated)"
        />
        <textarea
          className="w-full border rounded-md p-3 text-base h-28"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Save
      </button>
    </div>
  );
}
