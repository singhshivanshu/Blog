import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillsets: [
        {
          type: "Platforms",
          icon: "fa-rocket",
          skills: [
            { skill: "Windows", level: "daily-use", but: "success" },
            { skill: "OSX", level: "moderate", but: "info" },
          ],
        },
        {
          type: "Languages",
          icon: "fa-language",
          skills: [
            { skill: "JavaScript", level: "daily-use", but: "success" },
            { skill: "ES6", level: "daily-use", but: "success" },
            { skill: "Python", level: "moderate", but: "info" },
          ],
        },
        {
          type: "Web",
          icon: "fa-globe",
          skills: [
            { skill: "HTML5", level: "moderate", but: "info" },
            { skill: "CSS3", level: "moderate", but: "info" },
            { skill: "Bootstrap", level: "moderate", but: "info" },
            { skill: "MaterialUI", level: "moderate", but: "info" },
            { skill: "React", level: "moderate", but: "info" },
            { skill: "GatsbyJS", level: "Beginner", but: "danger" },
          ],
        },
        {
          type: "Frameworks",
          icon: "fa-desktop",
          skills: [{ skill: "Django", level: "beginner", but: "danger" }],
        },
        {
          type: "Databases",
          icon: "fa-database",
          skills: [
            { skill: "MySQL", level: "moderate", but: "info" },
            { skill: "PostgreSQL", level: "beginner", but: "danger" },
          ],
        },
        {
          type: "Tools",
          icon: "fa-cogs",
          skills: [
            { skill: "Git", level: "moderate", but: "info" },
            { skill: "GraphQL", level: "moderate", but: "info" },
          ],
        },
        {
          type: "Others",
          icon: "fa-plus",
          skills: [
            { skill: "Data structure", level: "moderate", but: "info" },
            { skill: "Operating systems", level: "moderate", but: "info" },
          ],
        },
        {
          type: "Notations",
          icon: "fa-map",
          skills: [
            { skill: "Beginner", but: "danger" },
            { skill: "Moderate", but: "info" },
            { skill: "Expert", but: "success" },
          ],
        },
      ],
    };
  }
  render() {
    const { skillsets } = this.state;
    return (
      // <div className="container">
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
}

export default Skills;
