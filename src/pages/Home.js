import React, { Component } from 'react';

// Components
import Hero from '../components/global/Hero';
import About from '../components/home/About';
import Philosophy from '../components/home/Philosophy';
import Contact from '../components/home/Contact';

export default class Home extends Component {
  state = {
    data: {
      "heroCard": true,
      "title": "The Kinetic Foot & Ankle Clinic",
      "content": "Advanced compassionate podiatry solutions in Denver",
      "buttonText": "visit our clinic",
      "link": "https://www.google.com/maps?q=kinetic+foot+and+ankle+clinic&rlz=1C5CHFA_enUS797US797&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi7mLL13NbcAhVmw4MKHSOwAW0Q_AUICigB/"
    }
  }

  render() {
    return (
      <div className="homepage">
        <Hero
          heroCard={this.state.heroCard}
          title={this.state.title}
          content={this.state.content}
          buttonText={this.state.buttonText}
          link={this.state.link}
        />
        <About />
        <Philosophy />
        <Contact />
      </div>
    )
  }
}
