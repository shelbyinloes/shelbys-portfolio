import React, {Component} from "react";
import {Row, Col, Grid} from "react-bootstrap";




// This section will be the resume section;
// each part will show on scroll;

class Work extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col mdOffset={1} md={5}>
            <h3>Austin Coding Academy</h3>
                    <h4>Teachers Assistant</h4>
                    <li>Aided instructor through all aspects of Web 101 course</li>
                    <li>Helped & mentored students both in person and remote via web conferencing</li>
                    <li>Graded, commented, and merged homeworks/pull requests</li>
                    <li>Troubleshot students problems with either code, environment set up, terminal/bash, and GitHub</li>
            </Col>
            <Col md={5}>
            <h3>Airrosti</h3>
                    <h4>Certified Recovery Specialist</h4>
                    <li>Work one on one with patients in 30 minute blocks</li>
                    <li>Educate patients on their current condition through demonstration and visuals</li>
                    <li>Create a personlized exercise regimin for them to complete at home during treatment plan</li>
                    <li>Detail my documentation to represent patients homework and progress</li>
                    <li>Build external relationships and engagement via web, events, and marketing efforts</li>
            </Col>
          </Row>
        </Grid>

      </div>
    )}
} 

  export default Work;