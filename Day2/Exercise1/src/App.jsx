import React from 'react';

const products = [
  { name: 'Jollof Rice', price: '₦1,500', image: 'https://i.pinimg.com/1200x/fd/88/3a/fd883a5609b95898efc4071a018697a9.jpg' },
  { name: 'Ankara Fabric', price: '₦5,000', image: 'https://i.pinimg.com/1200x/42/33/c4/4233c4c7dad34ad0fa9fbcca3ccf5095.jpg' },
  { name: 'Suya', price: '₦1,000', image: 'https://i.pinimg.com/736x/40/b9/10/40b910113a87d494387860771d3fadae.jpg' },
  { name: 'Aso-Ebi', price: '₦15,000', image: 'https://i.pinimg.com/1200x/38/08/57/380857bed7d7e5278fe90309f7b708c6.jpg' },
  { name: 'Palm Wine', price: '₦1,200', image: 'https://i.pinimg.com/736x/33/da/1c/33da1cfb0d0944e5257663f90f18db9f.jpg' },
  { name: 'Agbada', price: '₦25,000', image: 'https://i.pinimg.com/1200x/87/43/91/8743918bd41cb75d372d9c3642f50959.jpg' },
  { name: 'Chin Chin', price: '₦500', image: 'https://i.pinimg.com/1200x/8c/43/51/8c43517573225c2ba7b4eb857acf5c2d.jpg' },
  { name: 'Puff Puff', price: '₦300', image: 'https://i.pinimg.com/1200x/3d/a9/dd/3da9dd02d13dcf4d9c8e4e0c6b04a25a.jpg' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🛍️ Nigerian Market Picks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-100 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-green-600 font-bold mb-3">{product.price}</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;