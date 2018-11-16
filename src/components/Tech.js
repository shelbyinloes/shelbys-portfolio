import React, {Component} from "react";
import {Row, Col, Grid} from "react-bootstrap";




// This section will be the resume section;
// each part will show on scroll;

class Tech extends Component {
  render(){
    return(
      <div>
          <Grid>
            <h1>MERN Stack Developer</h1>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node</li>
                <li>Bootstrap</li>
                <li>Mocha</li>
                <li>HTML5</li>
                <li>CSS</li>
            </Grid>
      </div>
    )}
} 

  export default Tech;