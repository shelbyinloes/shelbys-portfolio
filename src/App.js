import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Video from './components/Video.js';


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
        </Grid>
      </div>
    );
  }
}

export default App;
