import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import portCalc from "../images/portCalc.png";
import portPass from "../images/portPass.png";
import portTic from "../images/portTic.png";



const portfolio = {
  height: "700px",
  backgroundColor: "white"
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
            <img src={portTic} alt={"Tic-Tac-Toe"} data-action="https://shelbyinloes.github.io/web-workbook/08week/tic-tac-toe/index.html" />
            <img src={portPass} alt={"Password Strength Meter"} data-action="https://codepen.io/shelbyinloes/pen/zpzQMr" />
            <img src={portCalc} alt={"Simple Calculator"} data-action="https://codepen.io/shelbyinloes/pen/qVXPpL?editors=1010" />
          </Coverflow>
        </StyleRoot>
      </div>
    )}
} 

  export default Portfolio;