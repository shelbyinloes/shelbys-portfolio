import React, {Component} from "react";
import {Row, Col, Grid} from "react-bootstrap";

const edTitle = {
    color: "#00B2B4",
    textAlign: "center",
    marginTop: "40px"
}

// This section will be the resume section;
// each part will show on scroll;

class Education extends Component {
  render(){
    return(
      <div>
      <Grid>
        <Row>
            <h1 style={edTitle}>Education</h1>
            <Col mdOffset={1} md={5}>
            <h2>University of Southern Mississippi</h2>
                        <h3>Bachelors of Kinesiology, Minor in Psychology</h3>
                        <li>GPA 3.6</li>
                        <li>Graduated with Honors</li>
                        <li>Lambda Sigma Honor Society - Care Package Chair</li>
                        <li>Phi Mu Sorority - Academic Excellence Chair</li>
            </Col>
            <Col md={5}>
            <h2>Austin Coding Academy</h2>
                        <h3>Full Stack Web Development - JavaScript</h3>
                        <li>JavaScript - MERN Stack</li>
                        <li>Completed all three courses offered (9 months)</li>
                        <li>Built several full stack websites over three courses</li>
                        <li>*see more in technologies section*</li>
            </Col>
        </Row>
        </Grid>
      </div>
    )}
} 

  export default Education;