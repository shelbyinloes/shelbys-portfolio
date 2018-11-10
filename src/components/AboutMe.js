import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const about = {
  
}
const education = {
    backgroundColor: "rgba(63, 191, 191,  0.4)"
  }

  const work = {
  backgroundColor: "rgba(63, 191, 191,  0.7)"
}

const tech = {
  backgroundColor: "rgba(63, 191, 191,  1)"
}

// This section will be the resume section;
// each part will show on scroll;

class AboutMe extends Component {
  render(){
    return(
      <div>
        <Row style={about}>
          <Col style={education} sm={12}>
            <h1>Education</h1>
          </Col>
          <Col style={work} sm={12}>
            <h1>Work</h1>
          </Col>
          <Col style={tech} sm={12}>
            <h1>Tech</h1>
          </Col>
        </Row>
      </div>
    )}
} 

  export default AboutMe;