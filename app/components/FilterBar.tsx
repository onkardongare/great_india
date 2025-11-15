// components/FilterBar.tsx
"use client";

import React from "react";

interface FilterBarProps {
  filters: string[];
  selected: string;
  onSelect: (filter: string) => void;
}

export default function FilterBar({ filters, selected, onSelect }: FilterBarProps) {
  return (
    <div className="p-1 w-full">
      <div className="flex overflow-x-auto space-x-2 max-h-14 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onSelect(filter)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selected === filter ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } font-medium`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
