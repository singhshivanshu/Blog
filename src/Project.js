import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import Button from "react-bootstrap/Button";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          topic: "Speech Processing using wavelet transform.",
          technology: ["MATLAB"],
          breif:
            "Using wavelet transform in speech enhancement system got the utmost details of the speech signal by maintaining the quality and intelligibility of the speech ",
          date: "Jan - April' 2019",
        },
      ],
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="container project-container">
        <VerticalTimeline>
          {projects.map((elem) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date={elem.date}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h4
                  className="vertical-timeline-element-title"
                  style={{ marginBottom: "16px" }}
                >
                  <i className={"fab fa-audible fa-sm"} />&nbsp;{elem.topic}
                </h4>
                <h6 className="vertical-timeline-element-subtitle">
                  {elem.technology.map((e) => {
                    return (
                      <Button
                        variant="outline-secondary"
                        id="skill-card-button"
                        style={{
                          fontSize: "10px",
                          color: "black",
                          borderColor: "none",
                        }}
                      >
                        {e}
                      </Button>
                    );
                  })}
                </h6>
                <p>{elem.breif}</p>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default Project;
