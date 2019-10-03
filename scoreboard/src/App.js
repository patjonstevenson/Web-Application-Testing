import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const addBall = () => {
    setBalls(balls + 1);
  };

  const addStrike = () => {
    setStrikes(strikes + 1);
  };

  const foul = () => {
    if (strikes < 2) {
      addStrike();
    }
  }

  const hit = () => {
    setBalls(0);
    setStrikes(0);
  }

  useEffect(() => {
    if (balls > 3 || strikes > 2) {
      setBalls(0);
      setStrikes(0);
    }
  }, [balls, strikes]);

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard addBall={addBall} addStrike={addStrike} foul={foul} hit={hit} />
    </div>
  );
}

export default App;
