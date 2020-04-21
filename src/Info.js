import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Info extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          border="secondary"
          style={{ width: "700px", borderRadius: 0 }}
          className="skills-card"
        >
          <div style={{ backgroundColor: "#343a40" }}>
            <Card
              style={{
                width: "18rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card.Img variant="top" src="" />
            </Card>
          </div>
        </Card>
      </div>
    );
  }
}

export default Info;
