import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import logo_transparent from "../images/logo_transparent.png";



const about = {
    // height: '600px',
    backgroundColor: "#dbc4a7",
    // display: "flex inline-block",
    // justifyContent: "center",
    // alignItems: "center", 
    // textAlign: "center",
    padding: "50px",
    color: "white",
    fontFamily: "'PT Sans Narrow', sans-serif",
    fontSize: "25px",
    margin: "50px"
}

const shelbylogo = {
  display: "flex", 
  justifyContent: "center"
}

const shelbyimg = {
  height: "400px"
}

// this section will have a video with play button (or timeout?)

class IntroHolder extends Component {
  render(){
    return(
      <div>
        <Row className="mediaIntro" style={about}>
          <Col lg={4}>
            <div style={shelbylogo}><img style={shelbyimg} src={logo_transparent} alt={"Shelby's logo"} /></div>
          </Col>
          <Col lgOffset={1} lg={7}>
            <h1>Hey there, I'm Shelby.</h1>
            <p>
                I am a physical therapist turned coder (want to know why? Keep reading!). So
                I got my undergraduate degree in Kinesiology. I really loved learning about the 
                human body, how it worked, and how to make it the best it can be. Once I started 
                working in my field, I quickly realized I was destined for more.
            </p>
            <p>
                I was (& currently) living in Austin, TX and was surrounded by so many tech companies 
                and influences. Once I started doing some research on tech careers I was hooked. I 
                didn't know much about tech growing up in small town Ohio, it just wasn't a thing. 
                The idea of totally changing course of my career was inticing because I'm a learner at 
                heart. Not only did I find something that I could gain a new skill in, but it's something 
                that is always changing (so I could keep changing and adapting!). 
            </p>
            <p>
                After checking out some self-learning materials online, I realized I would 
                benefit from a more structured and personal approach to learning. I took a leap 
                of faith and enrolled in Austin Coding Academy. Nine months of hard work (after 
                my 40+ hour full time job, mind you), I now have this new skill and knowledge 
                base that is begging for more.
            </p>
            <p>
                So take the time to look around, reach out, and take a chance on me. 
            </p>
          </Col>
        </Row>
      </div>
    )}
} 

  export default IntroHolder;