import React from 'react';
import './StressComponent.css'; // Import the CSS file for styling

const StressComponent = () => {
  return (
    <div className="center-container">
      <input type="range" min="0" max="100" value="40" className="range range-accent" />
    </div>
  );
};

export default StressComponent;
