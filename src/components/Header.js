import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import nameonly from '../images/nameonly.png';
import {NavLink} from 'react-router-dom';
import '../App.css';

const header = {
  backgroundColor: "#EEE",
  fontFamily: "'Rochester', cursive"
}


// this section will stay fixed, but will become opaque

class Header extends Component {
  render(){
    return(
      <div>
        <NavLink to="/">
        <Row style={header}>
          <Col sm={12}>
            {/* need to get image responsive */}
            {/* need to make header sticky (react-sticky-header?) */}
            <img src={nameonly} className="mediaHeader" alt={"Shelby Inloes, Web Developer"}/>
          </Col>
        </Row>
        </NavLink>
      </div>
    )}
} 

  export default Header;