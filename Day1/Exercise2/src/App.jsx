import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4 p-6">
      {/* Primary Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
        Primary
      </button>

      {/* Secondary Button */}
      <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-4 rounded">
        Secondary
      </button>

      {/* Danger Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
        Danger
      </button>

      {/* Success Button */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
        Success
      </button>

      {/* Large Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded text-lg">
        Large Button
      </button>

      {/* Small Button */}
      <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-3 rounded text-sm">
        Small Button
      </button>
    </div>
  );
}

export default App;