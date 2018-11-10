import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const videoContainer = {

}

const video = {
    height: "600px",
    backgroundColor: "blue"
}

const about = {
    height: '600px',
    backgroundColor: "green"
}


class Video extends Component {
  render(){
    return(
      <div>
        <Row style={videoContainer}>
          <Col sm={7} style={video}>VIDEO</Col>
          <Col sm={5} style={about}>About Me</Col>
        </Row>
      </div>
    )}
} 

  export default Video;