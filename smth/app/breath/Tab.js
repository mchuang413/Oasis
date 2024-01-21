import React from 'react';

const Tab = ({ selectedTab, onTabClick }) => {
  const tabs = ['Breathe', 'Stress', 'Music'];

  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg">
      {tabs.map((tab) => (
        <a
          key={tab}
          role="tab"
          className={`tab ${selectedTab === tab ? 'tab-active' : ''}`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

export default Tab;
