import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const header = {
  backgroundColor: "purple",
  height: "100px"
}


class Header extends Component {
  render(){
    return(
      <div>
        <Row style={header}>
          <Col sm={12}>
            <h1>Shelby</h1>
          </Col>
        </Row>
      </div>
    )}
} 

  export default Header;