import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Video from './components/Video.js';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Portfolio.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const content = {
  flex: 1
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Grid style={content} fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            <Navigation />
          </Row>
        </Grid>
        
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/intro' component={Video} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' />
      </Switch>

      <Footer />
        {/* <Grid fluid>
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
        </Grid> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
