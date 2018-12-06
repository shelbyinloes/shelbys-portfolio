import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";



class Contact extends Component {
  render(){
    return(
      <div>
        <Row>
          <Col mdOffset={3} md={6}>    
            <h2>E-mail: shelbyinloes@gmail.com</h2>
            <h2>LinkedIn: www.linkedin.com/in/shelbyinloes</h2>
            <h2>GitHub: www.github.com/shelbyinloes</h2>
          </Col>
        </Row>
      </div>
    )}
} 

  export default Contact;