import React, {Component} from "react";
import {Grid} from "react-bootstrap";
import acalogo from "../images/acalogo.png";




// This section will be the resume section;
// each part will show on scroll;

class Home extends Component {
  render(){
    return(
      <div>
        <Grid>
        <img src={acalogo} alt={"Shelby's logo"} />
        </Grid>
      </div>
    )}
} 

  export default Home;