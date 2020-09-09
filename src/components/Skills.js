import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

import {skillsets} from "../data/data.js"

function Skills() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        border="secondary"
        style={{
          width: "700px",
          borderRadius: 0,
          boxShadow: "0px 1px 2px 0px",
          border: "0",
        }}
        className="skills-card"
      >
        <Card.Header style={{ padding: "0" }}>
          <Navbar variant="dark">
            <Navbar.Brand className="skill-head mx-auto">SKILLS</Navbar.Brand>
          </Navbar>
        </Card.Header>
        <Card.Body>
          {skillsets.map((elem) => {
            return (
              <div>
                <div className="row">
                  <div className="col-md-3 col-skill-type">
                    <h5 style={{ marginTop: "8px" }}>
                      <i className={`fas ${elem.icon} fa-sm`} />
                      &nbsp; {elem.type}
                    </h5>
                  </div>
                  <div className="col-md col-skill-button">
                    {elem.skills.map((e) => {
                      return (
                        <Button
                          variant={`outline-${e.but}`}
                          id="skill-card-button"
                        >
                          {e.skill}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
    // </div>
  );
}

export default Skills;
