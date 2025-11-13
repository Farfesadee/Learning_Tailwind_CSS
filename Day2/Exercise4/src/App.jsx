
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-10 text-center">
        Our Pricing Plans
      </h1>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Basic Plan */}
        <div className="bg-white border border-green-200 rounded-2xl shadow-md p-8 flex flex-col text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Basic</h2>
          <p className="text-3xl font-bold text-green-800 mb-4">₦5,000<span className="text-base font-medium">/month</span></p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>✔️ Access to basic features</li>
            <li>✔️ Email support</li>
            <li>✔️ 5GB storage</li>
          </ul>
          <button className="mt-auto bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
            Choose Plan
          </button>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="bg-green-700 text-white rounded-2xl shadow-lg p-10 flex flex-col text-center transform md:scale-105 border-4 border-green-600">
          <h2 className="text-2xl font-bold mb-2">Pro</h2>
          <p className="text-4xl font-bold mb-4">₦15,000<span className="text-base font-medium">/month</span></p>
          <ul className="space-y-2 mb-6">
            <li>✔️ All Basic features</li>
            <li>✔️ Priority support</li>
            <li>✔️ 50GB storage</li>
          </ul>
          <button className="mt-auto bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition">
            Choose Pro
          </button>
          <p className="mt-3 text-sm text-green-100 font-medium">Most Popular</p>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white border border-green-200 rounded-2xl shadow-md p-8 flex flex-col text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Enterprise</h2>
          <p className="text-3xl font-bold text-green-800 mb-4">₦50,000<span className="text-base font-medium">/month</span></p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>✔️ All Pro features</li>
            <li>✔️ Dedicated account manager</li>
            <li>✔️ Unlimited storage</li>
          </ul>
          <button className="mt-auto bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


















// import React from 'react';

// function App() {
//   const plans = [
//     {
//       title: 'Basic',
//       price: '₦5,000/month',
//       features: ['1 user', 'Email support', 'Access to basic features'],
//       highlighted: false,
//     },
//     {
//       title: 'Pro',
//       price: '₦15,000/month',
//       features: ['5 users', 'Priority support', 'Advanced analytics', 'Custom reports'],
//       highlighted: true,
//     },
//     {
//       title: 'Enterprise',
//       price: '₦50,000/month',
//       features: ['Unlimited users', 'Dedicated account manager', 'Full feature access'],
//       highlighted: false,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6">
//       <h1 className="text-3xl font-bold text-center mb-10 text-green-700">Choose Your Plan</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`flex flex-col justify-between rounded-lg shadow-lg p-6 border ${
//               plan.highlighted
//                 ? 'bg-green-700 text-white scale-105'
//                 : 'bg-white text-gray-800'
//             } transition-transform duration-300`}
//           >
//             <div>
//               <h2 className="text-xl font-bold mb-2 text-center">{plan.title}</h2>
//               <p className="text-2xl font-semibold mb-4 text-center">{plan.price}</p>
//               <ul className="space-y-2 mb-6 text-sm">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center">
//                     <span className="mr-2 text-green-600 font-bold">✓</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <button
//               className={`mt-auto py-2 px-4 rounded font-semibold ${
//                 plan.highlighted
//                   ? 'bg-white text-green-700 hover:bg-green-100'
//                   : 'bg-green-600 text-white hover:bg-green-700'
//               }`}
//             >
//               {plan.highlighted ? 'Get Pro' : 'Choose Plan'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;













// Practice
// import React from 'react'

// const App = () => {
//   return (
//     <div className='p-4 space-y-8'>
//       <h1>Grid Basics</h1>
//       {/* 2 columns */}
//       <div className='grid grid-cols-2 gap-4'>
//         <div className='bg-blue-500 p-4 text-white'>1</div>
//         <div className='bg-blue-500 p-4 text-white'>2</div>
//         <div className='bg-blue-500 p-4 text-white'>3</div>
//         <div className='bg-blue-500 p-4 text-white'>4</div>
//       </div>

//       {/* 3 columns */}
//       <div className='grid grid-cols-3 gap-4'>
//         <div className='bg-green-500 p-4  text-white'>1</div>
//         <div className='bg-green-500 p-4 text-white'>2</div>
//         <div className='bg-green-500 p-4 text-white'>3</div>
//         <div className='bg-green-500 p-4 text-white'>4</div>
//         <div className='bg-green-500 p-4 text-white'>5</div>
//         <div className='bg-green-500 p-4 text-white'>6</div>
//       </div>

//       {/* 4 columns */}
//       <div className='grid grid-cols-4 gap-4'>
//         <div className='bg-red-500 p-4 text-white'>1</div>
//         <div className='bg-red-500 p-4 text-white'>2</div>
//         <div className='bg-red-500 p-4 text-white'>3</div>
//         <div className='bg-red-500 p-4 text-white'>4</div>
//       </div>

//       <div className='grid grid-cols-3 gap-4 p-4'>
//         <h1>Grid Span</h1>
//         {/* Span 2 columns */}
//         <div className='col-span-2 bg-blue-500 p-4 text-white'>Span 2 columns</div>
//         <div className='bg-green-500 p-4 text-white'>1 column</div>

//         {/* Span 3 columns (full width) */}
//         <div className='col-span-3 bg-red-500 p-4 text-white'>Spans 3 columns (full width)</div>

//         <div className='bg-purple-500 p-4 text-white'>1</div>
//         <div className='bg-purple-500 p-4 text-white'>2</div>
//         <div className='bg-purple-500 p-4 text-white'>3</div>
//       </div>

//       <div>
//         <h1>Grid Row</h1>
//         <div className='grid grid-cols-3 grid-rows-2 gap-4 p-4 h-96'>
//           <div className='bg-blue-500 '></div>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default App;