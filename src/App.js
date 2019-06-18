import React from 'react';
import './App.css';
import SimpleAppBar from './component/Navbar';
import LandingPage from './pages/LandingPage';
import SecondPage from './pages/SecondPage';



function App() {
  return (
    <div className="App">
      <SimpleAppBar />
      <LandingPage />
      <SecondPage />
    </div>
  );
}

export default App;
