import React from "react";
import NewsCard from "./NewsCard";

export default function App() {
  const articles = [
    {
      category: "Politics",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      headline: "Nigeria Launches Green Energy Initiative",
      excerpt:
        "In a major step toward sustainability, Nigeria has unveiled a nationwide program focusing on solar and wind power development.",
      author: "Chinonso Eze",
      date: "Nov 12, 2025",
      readTime: "3 min read",
      link: "#",
    },
    {
      category: "Sports",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      headline: "Super Eagles Qualify for AFCON Finals",
      excerpt:
        "Nigeria’s national team secured their place in the AFCON finals after a thrilling 3-2 victory over Senegal last night.",
      author: "Ngozi Okafor",
      date: "Nov 10, 2025",
      readTime: "2 min read",
      link: "#",
    },
    {
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      headline: "Nollywood Star Wins International Award",
      excerpt:
        "Nigerian actress Teniola Ojo wins Best Actress at the African Movie Academy Awards for her stunning performance.",
      author: "Ibrahim Musa",
      date: "Nov 8, 2025",
      readTime: "5 min read",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-extrabold text-green-700">
          Latest News from Nigeria
        </h1>
        <p className="text-gray-600 mt-2">
          Stay informed with top stories in Politics, Sports, and Entertainment.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
}
