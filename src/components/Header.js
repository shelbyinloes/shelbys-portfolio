import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import nameonly from '../images/nameonly.png';

const header = {
  backgroundColor: "#EEE",
  fontFamily: "'Rochester', cursive",
}

// this section will stay fixed, but will become opaque

class Header extends Component {
  render(){
    return(
      <div>
        <Row style={header}>
          <Col sm={12}>
            {/* need to get image responsive */}
            {/* need to make header sticky (react-sticky-header?) */}
            <img src={nameonly} alt={"Shelby Inloes, Web Developer"}/>
          </Col>
        </Row>
      </div>
    )}
} 

  export default Header;