import React, {Component} from "react";
import {Row, Col, Grid} from "react-bootstrap";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import gmail from "../images/gmail.png";
import copyright from "../images/copyright.png";

const foot = {
  backgroundColor: "#d16f68",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'PT Sans Narrow', sans-serif",
  color: 'white',
  fontSize: '30px'
}

const iconImg = {
  height: '130px',
  width: '130px',
  margin: '20px'
}

const copyImg = {
  height: '40px',
  width: '40px',
  margin: '20px'
}


// this section will only show on page load and on scrolling up; 
// dissapears on scroll down

class Footer extends Component {
  render(){
    return(
      <div style={foot}>
        <Grid>
          <Col md={12}>
          <Row style={foot}>
          <a href="https://github.com/shelbyinloes"><img style={iconImg} src={github} alt={"GitHub"} /></a>
          <a href="https://www.linkedin.com/in/shelbyinloes/"><img style={iconImg} src={linkedin} alt={"LinkedIn"} /></a>
          <a href="mailto:contact@shelbyinloes.com?subject=Hey Shelby!"><img style={iconImg} src={gmail} alt={"Gmail"} /></a>
          </Row>
          </Col>
          <Col md={12} style={foot}>
          <Row>
          <img style={copyImg} src={copyright} alt={"CC Shelby Inloes"} />Shelby Inloes, 2018
          </Row>
          </Col>
      </Grid>
      </div>
    )}
} 

  export default Footer;