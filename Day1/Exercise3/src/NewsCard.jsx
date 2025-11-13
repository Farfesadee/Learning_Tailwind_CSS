import React from "react";

const categoryColors = {
  Politics: "bg-green-600",
  Sports: "bg-yellow-500",
  Entertainment: "bg-emerald-500",
};

export default function NewsCard({
  category = "Politics",
  image = "https://images.unsplash.com/photo-1581090464401-3c7b1c49bda1",
  headline = "Nigerian Senate Approves New Economic Reform Bill",
  excerpt = "The Nigerian Senate has passed a new economic reform bill aimed at improving trade efficiency, encouraging investment, and boosting employment opportunities across major sectors.",
  author = "Adeola Ogunleye",
  date = "Nov 12, 2025",
  readTime = "4 min read",
  link = "#",
}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-green-100 transition-transform duration-300 hover:shadow-lg">
      {/* Featured Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category Badge */}
        <span
          className={`inline-block ${
            categoryColors[category] || "bg-green-600"
          } text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full`}
        >
          {category}
        </span>

        {/* Headline */}
        <h2 className="text-lg font-bold text-gray-900 leading-snug">
          {headline}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>

        {/* Author & Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <div>
            <span className="font-medium text-green-700">{author}</span> •{" "}
            <span>{date}</span>
          </div>
          <span className="italic text-gray-400">{readTime}</span>
        </div>

        {/* Read More */}
        <a
          href={link}
          className="inline-block mt-3 text-green-700 font-medium hover:text-green-800 transition-colors"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
