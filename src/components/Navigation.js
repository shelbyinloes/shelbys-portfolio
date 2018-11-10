import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const nav = {
  backgroundColor: "pink",
  height: "65px",
  display: "flex",
  alignItems: "center"
}


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