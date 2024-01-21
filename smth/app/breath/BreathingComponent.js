"use client"
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const BreathingComponent = () => {
  const [breathingState, setBreathingState] = useState('inhale');
  const [seconds, setSeconds] = useState(0);

  const inhale = useSpring({
    from: { scale: 1 },
    to: { scale: breathingState === 'inhale' ? 1.2 : 1 },
  });

  const exhale = useSpring({
    from: { scale: 1 },
    to: { scale: breathingState === 'exhale' ? 1.2 : 1 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);

      if (breathingState === 'inhale' && seconds === 4) {
        setBreathingState('hold');
        setSeconds(0);
      } else if (breathingState === 'hold' && seconds === 4) {
        setBreathingState('exhale');
        setSeconds(0);
      } else if (breathingState === 'exhale' && seconds === 4) {
        setBreathingState('inhale');
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [breathingState, seconds]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: '24px',
      }}
    >
      <h1>{breathingState.toUpperCase()}</h1>
      <animated.div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'lightblue',
          borderRadius: '80%',
          margin: '20px',
          ...inhale,
        }}
      />
      <animated.div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'lightcoral',
          borderRadius: '80%',
          margin: '20px',
          ...exhale,
        }}
      />
      <p>Time Left: {4 - seconds} seconds</p>
    </div>
  );
};

export default BreathingComponent;
