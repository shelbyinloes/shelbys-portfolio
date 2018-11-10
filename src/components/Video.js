import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

const videoContainer = {

}

const video = {
    height: "600px",
    backgroundColor: "rgba(127, 63, 191, 0.9)"
}

const about = {
    height: '600px',
    backgroundColor: "rgba(191, 63, 127, 0.9)"
}

// this section will have a video with play button (or timeout?)

class Video extends Component {
  render(){
    return(
      <div>
        <Row style={videoContainer}>
          <Col sm={7} style={video}>
            VIDEO
          </Col>
          <Col sm={5} style={about}>
            About Me
          </Col>
        </Row>
      </div>
    )}
} 

  export default Video;