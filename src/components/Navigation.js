import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

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
  fontFamily: "'Rochester', cursive",
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
          <Col style={childNav} sm={4}>About Me</Col>
          <Col style={childNav} sm={4}>Portfolio</Col>
          <Col style={childNav} sm={4}>Contact</Col>
        </Row>
      </div>
    )}
} 

  export default Navigation;