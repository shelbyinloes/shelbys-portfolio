import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import Education from "./Education.js";
import Tech from "./Tech.js";
import Work from "./Work.js";

const aboutContainer = {
  fontFamily: "'PT Sans Narrow', sans-serif",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  margin : "100px",
  paddingTop: "50px",
  paddingBottom: "50px"
}

// This section will be the resume section;
// each part will show on scroll;

class AboutMe extends Component {
  render(){
    return(
      <div style={aboutContainer}>
        <Col>
          <Row>
            <Education />
          </Row>
          <Row>
            <Tech />
          </Row>   
          <Row>
            <Work />
          </Row>   
        </Col>

      </div>
    )}
} 

  export default AboutMe;