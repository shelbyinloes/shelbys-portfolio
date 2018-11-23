import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Video from './components/Video.js';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Portfolio.js';
import Footer from './components/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Grid fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            <Navigation />
          </Row>
          <Row>
            <Video />
          </Row>
          <Row>
            <AboutMe />
          </Row>
          <Row>
            <Portfolio />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
