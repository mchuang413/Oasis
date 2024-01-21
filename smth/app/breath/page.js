"use client"
import React, { useState } from 'react';
import BreathingComponent from './BreathingComponent';
import PageTitle from '../components/PageTitle';
import Tab from './Tab';
import StressComponent from './StressComponent'

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Breathe');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <PageTitle title={selectedTab} size="4" />
      <Tab selectedTab={selectedTab} onTabClick={handleTabClick} />
      <div className="Breath1">
        <header className="App-header">
          {selectedTab === 'Breathe' && <BreathingComponent/>}
          {selectedTab === 'Stress' && <StressComponent/>}
        </header>
      </div>
    </>
  );
};

export default App;
