import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import logo_transparent from "../images/logo_transparent.png";
import ReactPlayer from 'react-player';
import stockholm from '../images/stockholm.mp4';


const videoContainer = {
  display: "flex",
  height: "600px",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#EEE"
}

// const video = {
//     height: "200px",
//     width: "300px"
// }

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
        <Row>
          <Col sm={7} style={videoContainer}>    
          <ReactPlayer url="https://www.youtube.com/watch?v=d-zKJCKsoWw" 
            playing 

          />
          </Col>
          <Col sm={5} style={about}>
            <img src={logo_transparent} style={shelbylogo} alt={"Shelby's logo"} />
          </Col>
        </Row>
      </div>
    )}
} 

  export default Video;