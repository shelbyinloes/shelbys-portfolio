import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const contact = {
  height: "300px"
}

// this section will be contact - email, linkedin, etc

class Contact extends Component {
  render(){
    return(
      <div>
        <Row style={contact}>
          <Col sm={12}>Contact</Col>
        </Row>
      </div>
    )}
} 

  export default Contact;