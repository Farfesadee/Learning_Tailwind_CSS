import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        {/* Featured Image */}
        <img
          src="https://via.placeholder.com/600x300"
          alt="Featured"
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Politics
          </span>

          {/* Headline */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Nigeria's Electoral Reform Gains Momentum
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            The National Assembly has passed a new bill aimed at strengthening transparency and voter confidence...
          </p>

          {/* Author & Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <span>By Amina Yusuf · Nov 10, 2025</span>
            <span>4 min read</span>
          </div>

          {/* Read More */}
          <a
            href="#"
            className="text-green-700 font-semibold text-sm hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;