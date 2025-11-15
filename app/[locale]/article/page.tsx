"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Filter } from "lucide-react";
import { fetchArticles } from "@/redux/slices/articleSlice";
import { AppDispatch, RootState } from "@/redux/store";
import FilterBar from "@/components/FilterBar";

type Article = {
  id: string;
  title: string;
  author: string;
  content: string;
  category: string;
  image: string;
  publishedAt: string;
  likes: number;
  comments: number;
};

export default function ArticlePage() {
  const filters: string[] = ["All", "Cleanliness", "Tree Planting", "Donation", "Technology", "Economy"];
  const [selectedFilter, setSelectedFilter] = useState<string>(filters[0]);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const articles = useSelector((state: RootState) => state.article.articles) || [];

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const filteredArticles =
    selectedFilter === "All"
      ? articles
      : articles.filter((a: Article) => a.category === selectedFilter);

  // Local fallback articles — will be used when the network request returns no articles
  const fallbackArticles: Article[] = [
    {
      id: "fallback-1",
      title: "How Community Donations Transform Lives",
      author: "Asha",
      category: "Donation",
      image: "/placeholder.svg?height=200&width=300",
      publishedAt: new Date().toLocaleDateString(),
      likes: 128,
      comments: 24,
      content:
        "Community-driven donations help seed local projects — from education to health — and create sustainable impact when managed transparently.",
    },
    {
      id: "fallback-2",
      title: "City Tree Planting: A Simple Guide",
      author: "Ravi",
      category: "Tree Planting",
      image: "/placeholder.svg?height=200&width=300",
      publishedAt: new Date().toLocaleDateString(),
      likes: 89,
      comments: 12,
      content:
        "Planting trees in urban areas improves air quality, reduces heat islands, and brings communities together for a visible environmental win.",
    },
    {
      id: "fallback-3",
      title: "Cleanliness Drives That Work",
      author: "Onkar",
      category: "Cleanliness",
      image: "/placeholder.svg?height=200&width=300",
      publishedAt: new Date().toLocaleDateString(),
      likes: 54,
      comments: 8,
      content:
        "Organized neighborhood cleanups followed by awareness sessions can reduce litter and encourage long-term behaviour change.",
    },
  ];

  // Choose source list: prefer server articles, otherwise use fallbacks
  const sourceArticles = (articles && articles.length > 0) ? articles : fallbackArticles;

  const displayedArticles =
    selectedFilter === "All"
      ? sourceArticles
      : sourceArticles.filter((a: Article) => a.category === selectedFilter);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden lg:max-w-6xl">
      {/* Header */}
      <div className="flex justify-between items-center py-2">
        <h1 className="text-2xl font-bold text-gray-900">Articles</h1>
        <button className="flex items-center">
          <Filter size={22} className="text-blue-600" />
        </button>
      </div>

      {/* Filter Bar */}
        <FilterBar
          filters={filters}
          selected={selectedFilter}
          onSelect={setSelectedFilter}
        />

      {/* Articles List */}
      <div className="px-2 pb-6 space-y-5 w-full">
        {displayedArticles.map((item: Article) => (
          <div
            key={item.id}
            onClick={() => router.push(`/articles/${item.id}`)}
            className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition w-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover max-w-full"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                By {item.author} · {item.publishedAt}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-600">{item.category}</span>
                <span className="text-sm text-gray-600">
                  ⭐ {item.likes} · 💬 {item.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
