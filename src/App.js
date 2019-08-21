import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './component/Navbar';
import LandingPage from './pages/LandingPage';
import WhyScotia from './pages/WhyScotia';
import MeetTheTeam from './pages/MeetTheTeam';
import WhyScotiaWordy from './pages/WhyScotiaWordy';
import CampusEvents from './pages/CampusEvents';
import Program from './pages/Program';
import WhyScotiaBenifits from './pages/WhyScotiaBenifits';

export default class App extends Component {
  constructor(props) {
    super(props)

  };

  render() {
    return (
      <div className="App">
        <LandingPage />
        <SimpleAppBar />
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


