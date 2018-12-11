import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const nav = {
  backgroundColor: "#d16f68",
  fontSize: "40px",
  // height: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px"
}

const childNav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'PT Sans Narrow', sans-serif",
  color: "white",
  textDecoration: "none"
}

// this section will only show on page load and on scrolling up; 
// dissapears on scroll down

class Navigation extends Component {
  render(){
    return(
      <div>
        <Row style={nav} className="mediaNav">
          <NavLink style={childNav} to="/intro">
            <Col md={4}>Introduction</Col>
          </NavLink>
          <NavLink style={childNav} to="/aboutme">
            <Col md={4}>Experience</Col>
          </NavLink>
          <NavLink style={childNav} to="/portfolio">
            <Col md={4}>Portfolio</Col>
          </NavLink>     
          <NavLink style={childNav} to="/contact">
            <Col md={4}>Contact</Col>
          </NavLink>
        </Row>
      </div>
    )}
} 

  export default Navigation;