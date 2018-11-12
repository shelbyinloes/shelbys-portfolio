import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import logo_transparent from "../images/logo_transparent.png"

const videoContainer = {

}

const video = {
    height: "600px",
    backgroundColor: "rgba(127, 63, 191, 0.9)"
}

const about = {
    height: '600px',
    backgroundColor: "#dbc4a7",
    display: "flex",
    justifyContent: "space-around"
}

const shelbylogo = {
  height: '500px',
  paddingTop: '30px'
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
            <img src={logo_transparent} style={shelbylogo} alt={"Shelby's logo"} />
          </Col>
        </Row>
      </div>
    )}
} 

  export default Video;