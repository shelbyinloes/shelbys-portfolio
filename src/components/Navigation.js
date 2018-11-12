import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const nav = {
  backgroundColor: "#d16f68",
  height: "65px",
  display: "flex",
  alignItems: "center"
}

// this section will only show on page load and on scrolling up; 
// dissapears on scroll down

class Navigation extends Component {
  render(){
    return(
      <div>
        <Row style={nav}>
          <Col sm={4}>About Me</Col>
          <Col sm={4}>Portfolio</Col>
          <Col sm={4}>Contact</Col>
        </Row>
      </div>
    )}
} 

  export default Navigation;