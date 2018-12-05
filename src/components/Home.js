import React, {Component} from "react";
import {Grid, Col} from "react-bootstrap";
import computers from "../images/computers.jpeg";

const fill = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  background: `url(${computers}) no-repeat center center`,
  width: '100%',
  height: '500px'
}

// const imgStyle ={
//   flexShrink: '0',
//   height: '100%',
//   width: '100%'
// }

class Home extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Col style={fill}>
          </Col>
        </Grid>
      </div>
    )}
} 

  export default Home;