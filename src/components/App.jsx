import React, { Component } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Cases from './Cases/Cases';
import Blog from './Blog/Blog';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

export class App extends Component {
  render() {
    return (
      <>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contact />
        <Footer />
      </>
    );
  }
}
