import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const nav = {
  height: "200px"
}

// this section will have basic footer info - copywrite, contact, funny

class Footer extends Component {
  render(){
    return(
      <div>
        <Row style={nav}>
          <Col sm={12}>Footer</Col>
        </Row>
      </div>
    )}
} 

  export default Footer;