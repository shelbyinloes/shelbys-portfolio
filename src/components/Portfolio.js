import React, {Component} from "react";
// import {Row, Col} from "react-bootstrap";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
// import portCalc from "../images/portCalc.png";
// import portPass from "../images/portPass.png";
// import portTic from "../images/portTic.png";
import portGit from "../images/portGit.png";
import calligraphy from "../images/calligraphy.png";

const portTitle = {
  textAlign: "center",
  color: "#00B2B8"
}
// this section will have a carousel-type motion to scroll through various projects  

class Portfolio extends Component {
  render(){
    return(
      <div>
        <h1 style={portTitle}>Working on something special for my porfolio page. In the meantime, checkout my GitHub page!</h1>
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              '@media (max-width: 900px)': {
                width: '600px',
                height: '300px'
              },
              '@media (min-width: 900px)': {
                width: '960px',
                height: '600px'
              }
            }}
          >
            <img src={portGit} alt={"Shelby's GitHub"} data-action="https://github.com/shelbyinloes" />
            <img src={calligraphy} alt={"Canvas Calligraphy"} data-action="https://shelbyinloes.github.io/calligraphy/" />
            {/* <img src={portCalc} alt={"Simple Calculator"} data-action="https://codepen.io/shelbyinloes/pen/qVXPpL?editors=1010" /> */}
          </Coverflow>
        </StyleRoot>
      </div>
    )}
} 

  export default Portfolio;