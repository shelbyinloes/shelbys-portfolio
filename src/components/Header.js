import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const header = {
  backgroundColor: "rgb(127, 191, 63)",
  height: "100px"
}

// this section will stay fixed, but will become opaque

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