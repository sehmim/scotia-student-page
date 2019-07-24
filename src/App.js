import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './component/Navbar';
import LandingPage from './pages/LandingPage';
import SecondPage from './pages/SecondPage';
import WhyScotia from './pages/WhyScotia';
import MeetTheTeam from './pages/MeetTheTeam';
import WhyScotiaWordy from './pages/WhyScotiaWordy';
import CampusEvents from './pages/CampusEvents';
import Program from './pages/Program';
import WhyScotiaBenifits from './pages/WhyScotiaBenifits';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <LandingPage />
        <WhyScotiaWordy />
        <WhyScotia />
        <WhyScotiaBenifits />
        <Program />
        <CampusEvents />
        <MeetTheTeam />
      </div>
    )
  }
}