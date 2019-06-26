import React from 'react';
import './App.css';
import SimpleAppBar from './component/Navbar';
import LandingPage from './pages/LandingPage';
import SecondPage from './pages/SecondPage';
import WhyScotia from './pages/WhyScotia';



function App() {
  return (
    <div className="App">
      <SimpleAppBar />
      <LandingPage />
      {/* <SecondPage /> */}
      <WhyScotia />
    </div>
  );
}

export default App;
