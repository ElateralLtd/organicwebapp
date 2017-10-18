import React, { Component } from 'react';

import NavBar from './NavBar';
import HeaderWrap from './HeaderWrap';
import Services from './Services';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import FooterWrap from './FooterWrap';
import AdSense from './AdSense';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeaderWrap />

        <div className="div-pattern2"></div>

        <Services />
        <Hero />

        <div className="div-pattern2"></div>

        <About />
        <Portfolio />
        <Team />
        <Contact />

        <FooterWrap />

        <AdSense />

      </div>
    );
  }
}

export default App;
