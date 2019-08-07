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
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    };
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 7000)
  }
  render() {
    return (
      this.state.isLoading ?
        <div className="App2" >
        </div>
        : <div>
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
        </div>
    )
  }
}


