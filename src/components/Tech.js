import React, {Component} from "react";
import {Col, Grid} from "react-bootstrap";


const techTitle = {
  textAlign: "center"
}

// This section will be the resume section;
// each part will show on scroll;

class Tech extends Component {
  render(){
    return(
      <div>
          <Grid>
            <h1 style={techTitle}>MERN Stack Developer</h1>
            <Col sm={4}>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>            
            </Col>
            <Col sm={4}>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node</li>
            </Col>
            <Col sm={4}>
              <li>Bootstrap</li>
              <li>Mocha</li>
              <li>HTML5</li>
              <li>CSS</li>
            </Col>
            </Grid>
      </div>
    )}
} 

  export default Tech;