import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import logo_transparent from "../images/logo_transparent.png";
import ReactPlayer from 'react-player';
// import stockholm from '../images/stockholm.mp4';


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
    // height: '600px',
    backgroundColor: "#dbc4a7",
    display: "flex inline-block",
    justifyContent: "center",
    alignItems: "center", 
    textAlign: "center",
    padding: "0px 50px",
    color: "white",
    fontFamily: "'PT Sans Narrow', sans-serif",
    fontSize: "25px"
}

const shelbylogo = {
  height: '480px',
  paddingTop: '30px'
}

// this section will have a video with play button (or timeout?)

class Intro extends Component {
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
            <div><img src={logo_transparent} style={shelbylogo} alt={"Shelby's logo"} /></div>
            <div>Hello World! ***This is just a start to my portfolio. Changes/additions coming weekly. Video bio to be up by end of December.</div>
          </Col>
        </Row>
      </div>
    )}
} 

  export default Intro;