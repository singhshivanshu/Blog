import React, { Component } from "react";
import Typed from "react-typed";
import Card from "react-bootstrap/Card";

// const divStyle ={
//   text_align: 'center'
// };

class Welcome extends Component {
  render() {
    return (
      <div
        className="welcome"
        style={{
          display: "flex",
          justifyContent: "center",
          // background: "black"
        }}
      >
        <Card
          // border="abc"
          style={{
            width: "400px",
            height: "370px",
            textAlign: "center",
            borderRadius: 0,
            marginTop: "2rem",
            marginBottom: "2rem",
            boxShadow: "0px 1px 2px 0px",
            border: "0",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "rgb(0, 59, 92)",
              color: "white",
              borderRadius: "0",
            }}
          >
            guest@shivanshu.live:~/
          </Card.Header>
          <Card.Body>
            <Card.Text
              style={{
                textAlign: "left",
                fontFamily: "monospace",
                fontSize: "15px",
              }}
            >
              {" "}
              <Typed
                strings={[
                  "Hello world! <br/>I'm Shivanshu<br/><br/>Human..... since 1998<br/>Programmer..... since 2020<br/><br/>Self-critic, Agnostic, Beliver..<br/>Look around to know more..",
                ]}
                typeSpeed={70}
                // backSpeed={0}
                // backDelay={1}
                smartBackspace
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Welcome;
