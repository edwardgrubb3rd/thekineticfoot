import React, { Component } from 'react';

// Components
import Hero from '../components/global/Hero';
import About from '../components/home/About';
import Philosophy from '../components/home/Philosophy';
import Contact from '../components/home/Contact';

export default class Home extends Component {
  state = {
  }

  componentDidMount() {
    if(this.props.get) {
      this.props.get('home');
    }
  }

  render() {
    return (
      <div className="homepage">
        {
          this.props.data !== undefined ?
          <Hero
            heroCard={this.props.data.heroCard}
            title={this.props.data.title}
            content={this.props.data.content}
            buttonText={this.props.data.buttonText}
            link={this.props.data.link}
          />
          :
          <span>...loading</span>
        }
        <About get={this.props.get} data={this.props.about} />
        <Philosophy get={this.props.get} data={this.props.philosophy} />
        <Contact get={this.props.get} data={this.props.contact} />
      </div>
    )
  }
}
