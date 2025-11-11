import React from 'react';

const naijaGreenShades = [
  { name: 'green-50', hex: '#f0fdf4' },
  { name: 'green-100', hex: '#dcfce7' },
  { name: 'green-200', hex: '#bbf7d0' },
  { name: 'green-300', hex: '#86efac' },
  { name: 'green-400', hex: '#4ade80' },
  { name: 'green-500', hex: '#22c55e' },
  { name: 'green-600', hex: '#16a34a' },
  { name: 'green-700', hex: '#15803d' },
  { name: 'green-800', hex: '#166534' },
  { name: 'green-900', hex: '#14532d' },
  { name: 'green-950', hex: '#052e16' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Nigerian Flag */}
      <div className="flex h-16 mb-8 rounded overflow-hidden shadow">
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-green-600"></div>
      </div>

      {/* Naija Green Grid */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Naija Green Shades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {naijaGreenShades.map((shade) => (
          <div key={shade.name} className="flex flex-col items-center">
            <div
              className="w-20 h-20 rounded shadow border"
              style={{ backgroundColor: shade.hex }}
            ></div>
            <p
              className="mt-2 text-sm font-medium"
              style={{
                color:
                  parseInt(shade.hex.slice(1), 16) > 0xffffff / 2
                    ? '#1f2937'
                    : '#f9fafb',
              }}
            >
              {shade.name}
            </p>
            <p className="text-xs text-gray-500">{shade.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;