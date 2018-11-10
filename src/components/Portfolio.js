import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const portfolio = {
  height: "700px"
}
const projectDescription = {
  backgroundColor: "rgba(226, 152, 74, 0.85)", 
  height: "700px"
}
const projects = {
  backgroundColor: "rgba(224, 226, 74, 0.85)", 
  height: "700px"
}

// this section will have a carousel-type motion to scroll through various projects  

class Portfolio extends Component {
  render(){
    return(
      <div>
        <Row style={portfolio}>
          <Col style={projectDescription} sm={7}>Porfolio description</Col>
          <Col style={projects} sm={5}>Project carousel</Col>
        </Row>
      </div>
    )}
} 

  export default Portfolio;