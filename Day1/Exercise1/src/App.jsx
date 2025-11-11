import React from 'react';
import './App.css'; // Optional: if you have global styles
import ProfileCard from './components/ProfileCard'; // Assuming you moved the card into a separate component

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ProfileCard />
    </div>
  );
}

export default App;