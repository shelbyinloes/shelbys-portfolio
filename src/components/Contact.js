import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import headshot from "../images/headshot.jpg";

const bold = {
    fontWeight: 'bold',
    color: '#00B2B8'
}

const info = {
    paddingLeft: '30px'
}

const conCon = {
   padding: '50px',
   fontFamily: "'PT Sans Narrow', sans-serif"
}

const photoCon = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px'
}

class Contact extends Component {
  render(){
    return(
      <div>
        <Row>
          <Col mdOffset={2} md={4} style={conCon}>    
            <h2 style={bold}>E-mail:</h2><h2 style={info}>shelbyinloes@gmail.com</h2>
            <h2 style={bold}>LinkedIn:</h2><h2 style={info}>www.linkedin.com/in/shelbyinloes</h2>
            <h2 style={bold}>GitHub:</h2><h2 style={info}>www.github.com/shelbyinloes</h2>
            <br></br><h4>*contact for series inquries only
            </h4>
          </Col>
          <Col md={4} style={photoCon}>
            <img src={headshot} alt={"Shelby's headshot"} />
          </Col>
        </Row>
      </div>
    )}
} 

  export default Contact;