import React from 'react';
import BreathingComponent from './BreathingComponent';
import PageTitle from '../components/PageTitle';

function App() {
  return (
    <>
    <PageTitle title="Breath" size="4"/>
    <div className="Breath1">
      <header className="App-header">
        <BreathingComponent />
      </header>
    </div>
    </>
  );
}

export default App;
