import React, {Component} from "react";
import {Row, Col, Grid} from "react-bootstrap";

const companyTitle = {
  color: "#00B2B8",
  textAlign: "center",
  paddingTop: "40px"
}


// This section will be the resume section;
// each part will show on scroll;

class Work extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Row>
          <h1 style={companyTitle}>Austin Coding Academy</h1>
            <Col mdOffset={1} md={11}>
            <Row>
              <Col md={6}>
              <h2>Teachers Assistant</h2>
                    <h3>June 2018 - September 2018</h3>
                    <li>Aided instructor through all aspects of Web 101 course</li>
                    <li>Helped & mentored students both in person and remote via web conferencing</li>
                    <li>Graded, commented, and merged homeworks/pull requests</li>
                    <li>Troubleshot students problems with either code, environment set up, terminal/bash, and GitHub</li>
              </Col>
              <Col md={5}>
              <h2>Substitue Teacher</h2>
                    <h3>December 2018 - Current</h3>
                    <li>Available to teach for any of the three JavaScript classes (Intro, Intermediate JS, and Advanced JS)</li>
                    <li>Instructing full class lecture plus giving in class assignments/homework</li>
              </Col>
            </Row>
            </Col>
            <Row></Row>
            <h1 style={companyTitle}>Airrosti</h1>
            <Col mdOffset={1} md={11}>
                    <h2>Certified Recovery Specialist</h2>
                    <h3>Oct 2016 - Current</h3>
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