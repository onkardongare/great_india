"use client";

import { useEffect } from "react";

type InfoModalProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  dismissOnBackdropPress?: boolean;
};

export default function InfoModal({
  visible,
  onClose,
  title = "",
  message = "",
  confirmText = "OK",
  dismissOnBackdropPress = true,
}: InfoModalProps) {
  // Handle ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (visible) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={dismissOnBackdropPress ? onClose : undefined}
    >
      <div
        className="bg-white rounded-lg p-6 mx-4 w-[90%] max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {title ? (
          <h2 className="text-xl text-green-800 font-bold mb-4">{title}</h2>
        ) : null}

        {message ? (
          <p className="text-gray-800 mb-6">{message}</p>
        ) : null}

        <button
          className="w-full bg-teal-500 p-3 rounded-lg text-white font-semibold hover:bg-teal-600 transition"
          onClick={onClose}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}
