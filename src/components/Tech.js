import React, {Component} from "react";
import {Row, Col, Grid} from "react-bootstrap";


const techTitle = {
  textAlign: "center",
  color: "#00B2B8"
}

const gap = {
  marginTop: "54px"
}

// This section will be the resume section;
// each part will show on scroll;

class Tech extends Component {
  render(){
    return(
      <div>
          <Grid>
            <h1 style={techTitle}>JavaScript Developer</h1>
            <Row>
              <Col mdOffset={1} md={4} sm={6}>
                <h2>Projects</h2>
                <h3>E-commerce/Shopping Cart</h3>
                  <li>Fetch API's to recieve data</li>
                  <li>Mongoose & Express for backend</li>
                <h3>'Netflix' look-a-like</h3>
                  <li>Search functionality</li>
                  <li>React & Express</li>
                <h3>Weather App</h3>
                  <li>React & Fetch API's</li>
                <h3>Dashboard App</h3>
                  <li>Client Side Routing w/ React Router</li>
              </Col>
              <Col md={4} sm={6} style={gap}>
                <h3>Node Games</h3>
                  <li>Checkers</li>
                  <li>Towers of Hanoi</li>
                  <li>Tic-Tac-Toe</li>
                  <li>Rock, Paper, Scissors</li>
                <h3>JavaScript DOM Apps</h3>
                  <li>Calculator</li>
                  <li>Dice Roll (Yahtzee)</li>
                  <li>Rock, Paper, Scissors</li>
                <h3>& much more!</h3>
              </Col>
              <Col md={3} sm={12} className="techSpacing">
                <h2>Tech Stack</h2>
                  <li>React</li>
                  <li>Redux</li>
                  <li>MongoDB (Mongoose & mLab)</li>
                  <li>Bootstrap (CSS and React)</li>
                  <li>ES6 JavaScript</li>
                  <li>Express</li>
                  <li>Node.js & NPM</li>
                  <li>Git / GitHub</li>
                  <li>HTML & CSS</li>
                  <li>Mocha & Jest</li>
              </Col>
            </Row>
          </Grid>
      </div>
    )}
} 

  export default Tech;