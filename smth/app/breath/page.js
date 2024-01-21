"use client"
import React, { useState } from 'react';
import BreathingComponent from './BreathingComponent';
import PageTitle from '../components/PageTitle';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Breathe');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <PageTitle title={selectedTab} size="4" />
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-3/5 min-h-3/5 mx-auto text-align-center">
        <h1>
        Square breathing, also known as box breathing or the 4×4 technique, is a powerful breath exercise that can help you to quickly change your body’s energy, reduce stress, and calm your mind.
It is a really great way to step back and reset your energy whenever you feel stressed or triggered, but don’t necessarily have time to sit down for a full meditation practice.
        </h1>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <a href="https://thejoywithin.org/breath-exercises/square-breathing" className='text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-align-center'>https://thejoywithin.org/breath-exercises/square-breathing</a>
      </div>
      <div className="Breath1">
        <header className="App-header">
          {selectedTab === 'Breathe' && <BreathingComponent/>}
        </header>
      </div>
    </>
  );
};

export default App;
