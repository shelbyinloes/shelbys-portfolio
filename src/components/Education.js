import React, {Component} from "react";
import {Row, Col, Grid} from "react-bootstrap";
import usmlogo from "../images/usmlogo.png";
import acalogo from "../images/acalogo.png";


const halfTextUsm ={
      backgroundColor: '#FED259'
}

const halfTextAca ={
    backgroundColor: '#074565'
}

const southernImg = {
    height: "200px",
    marginBottom: "50px",
    marginTop: "50px",
    paddingLeft: "100px"
}

const codingImg = {
    height: "200px",
    marginBottom: "50px",
    marginTop: "50px"
}


// This section will be the resume section;
// each part will show on scroll;

class Education extends Component {
  render(){
    return(
      <div>
      <Grid>
        <Row>
            <Col sm={12} md={7}>
            <h1 style={halfTextUsm}>University of Southern Mississippi</h1>
                        <h2>Bachelors of Kinesiology, Minor in Psychology</h2>
                        <li>GPA 3.6</li>
                        <li>Graduated with Honors</li>
                        <li>Lambda Sigma Honor Society - Care Package Chair</li>
                        <li>Phi Mu Sorority - Academic Excellence Chair</li>
            </Col>
            <Col smHidden md={5}>
                <img src={usmlogo} style={southernImg} alt={"Shelby's logo"} />
            </Col>
        </Row>
        <Row>
            <Col md={7} smHidden>
                <img src={acalogo} style={codingImg} alt={"Shelby's logo"} />
            </Col>
            <Col md={5}>
            <h1 style={halfTextAca}>Austin Coding Academy</h1>
                        <h2>Full Stack Web Development - JavaScript</h2>
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