import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const about = {
 
}
const education = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: "20px 0px"
  }

  const work = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  padding: "20px 0px"
}

const tech = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  padding: "20px 0px"
}

const southernImg = {
  width: "100%",
  height: "100%"
}

const imgContainers = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

// This section will be the resume section;
// each part will show on scroll;

class AboutMe extends Component {
  render(){
    return(
      <div>
        <Row style={about}>
          <Col style={education} sm={12}>
          <Row>
            <Col mdOffset={2} md={5}>
            <h1>EDUCATION</h1>
                    <h3>University of Southern Mississippi</h3>
                        <h5>Bachelors of Kinesiology, Minor in Psychology</h5>
                        <li>GPA 3.6</li>
                        <li>Graduated with Honors</li>
                        <li>Lambda Sigma Honor Society - Care Package Chair</li>
                        <li>Phi Mu Sorority - Academic Excellence Chair</li>
                    <h3>Austin Coding Academy</h3>
                        <h5>Full Stack Web Development - JavaScript</h5>
                        <li>JavaScript - MERN Stack</li>
                        <li>Completed all three courses offered (9 months)</li>
                        <li>Built several full stack websites over three courses</li>
                        <li>*see more in technologies section*</li>
            </Col>
            <Col md={3} style={imgContainers}>
              <img style={southernImg} alt="University of Southern Mississippi" src="https://www.usm.edu/sites/default/files/about/gallery/hattiesburg-campus-photo-gallery/img_1007.jpg"></img>
            </Col>
          </Row>

          </Col>
          <Col style={tech} sm={12}>
                <Row>
                    <Col mdOffset={2} md={4}>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                    </Col>
                    <Col md={6}>
                        <li>Node</li>
                        <li>Bootstrap</li>
                        <li>Mocha</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                    </Col>
                </Row>
          </Col>
          <Col style={work} sm={12}>
          <Row>
            <Col mdOffset={2} md={4}>
            <h3>Austin Coding Academy</h3>
                    <h4>Teachers Assistant</h4>
                    <li>Aided instructor through all aspects of Web 101 course</li>
                    <li>Helped & mentored students both in person and remote via web conferencing</li>
                    <li>Graded, commented, and merged homeworks/pull requests</li>
                    <li>Troubleshot students problems with either code, environment set up, terminal/bash, and GitHub</li>
            </Col>
            <Col md={4}>
            <h3>Airrosti</h3>
                    <h4>Certified Recovery Specialist</h4>
                    <li>Work one on one with patients in 30 minute blocks</li>
                    <li>Educate patients on their current condition through demonstration and visuals</li>
                    <li>Create a personlized exercise regimin for them to complete at home during treatment plan</li>
                    <li>Detail my documentation to represent patients homework and progress</li>
                    <li>Build external relationships and engagement via web, events, and marketing efforts</li>
            </Col>
          </Row>
          </Col>
        </Row>
      </div>
    )}
} 

  export default AboutMe;