import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const nav = {
  backgroundColor: "#d16f68",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const childNav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'PT Sans Narrow', sans-serif",
  color: "white",
  fontSize: "40px"
}

// this section will only show on page load and on scrolling up; 
// dissapears on scroll down

class Navigation extends Component {
  render(){
    return(
      <div>
        <Row style={nav}>
        <NavLink to="/intro">
            <Col style={childNav} sm={4}>Introduction</Col>
          </NavLink>
          <NavLink to="/aboutme">
            <Col style={childNav} sm={4}>About Me</Col>
          </NavLink>
          <NavLink to="/portfolio">
            <Col style={childNav} sm={4}>Portfolio</Col>
          </NavLink>          
          <NavLink to="/contact">
            <Col style={childNav} sm={4}>Contact</Col>
          </NavLink>
        </Row>
      </div>
    )}
} 

  export default Navigation;