// import React from 'react';

// function App() {
//   return (
//     <div className="bg-gray-50 min-h-screen text-gray-800">
//       {/* Featured Image */}
//       <div className="w-full h-64 md:h-96 overflow-hidden">
//         <img
//           src="https://via.placeholder.com/1200x400?text=Featured+Image"
//           alt="Featured"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Article Section */}
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         {/* Title & Metadata */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">
//             The Vibrant Culture of Nigerian Street Food
//           </h1>
//           <p className="text-sm text-gray-600">
//             By <span className="font-medium text-green-700">Omodolapo</span> • Nov 11, 2025 • 5 min read
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6 leading-relaxed text-lg">
//             <p>
//               Nigerian street food is more than just a quick bite — it's a celebration of flavor, culture,
//               and community. From the smoky aroma of suya to the sweet crunch of chin chin, every dish tells
//               a story.
//             </p>
//             <p>
//               In Lagos, vendors line the streets with colorful stalls, offering everything from puff puff to
//               spicy jollof rice. These foods are not only delicious but also deeply rooted in tradition.
//             </p>
//             <p>
//               Whether you're sipping palm wine under a mango tree or enjoying akara at dawn, Nigerian street
//               food connects people across generations and regions.
//             </p>
//           </div>

//           {/* Sidebar */}
//           <aside className="space-y-4">
//             <h2 className="text-xl font-semibold border-b pb-2">Related Posts</h2>
//             <ul className="space-y-3 text-sm">
//               <li className="hover:text-green-700 cursor-pointer">🥘 Top 5 Nigerian Dishes to Try</li>
//               <li className="hover:text-green-700 cursor-pointer">🧵 The Story Behind Ankara Prints</li>
//               <li className="hover:text-green-700 cursor-pointer">🍢 Suya: Spice, Smoke & Street Life</li>
//               <li className="hover:text-green-700 cursor-pointer">🍷 Palm Wine Tapping Traditions</li>
//             </ul>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      {/* Featured Image */}
      <section className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
          alt="Featured"
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md"
        />
      </section>

      {/* Title + Metadata */}
      <header className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
          Building a Digital Future for Nigeria
        </h1>
        <p className="text-gray-500 text-sm">
          By <span className="font-semibold text-green-700">Odushile Omodolapo O.</span> •{" "}
          Nov 11, 2025 • 7 min read
        </p>
      </header>

      {/* Main Content + Sidebar */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Article (2/3 width) */}
        <article className="md:col-span-2 space-y-6 leading-relaxed text-gray-700">
          <p>
            Nigeria is witnessing a rapid transformation as technology reshapes
            commerce, education, and innovation. Entrepreneurs and creators are
            leveraging digital platforms to reach audiences across the nation and
            beyond.
          </p>
          <p>
            With access to affordable smartphones and faster internet, more
            citizens are engaging in e-commerce, online learning, and tech-driven
            services than ever before. This digital growth is empowering a new
            generation of Nigerian innovators.
          </p>
          <h2 className="text-2xl font-semibold text-green-700 mt-8">
            Empowering Local Innovation
          </h2>
          <p>
            The rise of local startups is proof of Nigeria’s creative potential.
            Government and private sectors are collaborating to support tech hubs,
            digital skills programs, and funding initiatives that foster
            entrepreneurship.
          </p>
          <p>
            As the digital landscape expands, inclusive policies and reliable
            infrastructure will be key to ensuring everyone benefits from this
            technological progress.
          </p>
        </article>

        {/* Sidebar (1/3 width) */}
        <aside className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <h3 className="text-xl font-bold text-green-700 border-b pb-2">
            Related Posts
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-600 font-medium">
                How Tech Is Changing Lagos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 font-medium">
                The Future of African Startups
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 font-medium">
                Why Digital Literacy Matters
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 font-medium">
                Top Innovation Hubs in Nigeria
              </a>
            </li>
          </ul>
        </aside>
      </main>
    </div>
  );
}
