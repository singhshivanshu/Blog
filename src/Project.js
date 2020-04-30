import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NextWeekIcon from '@material-ui/icons/NextWeek';

import Button from "react-bootstrap/Button";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          topic: "Built a responsive personal website from scratch.",
          technology: ["ReactJS", "Bootstrap", "JavaScript"],
          breif:
            "Using React, some NPM packages(vertical-timeline, react-typed etc.) and font-awesome built a personal blog website ",
          date: "April' 2020",
          logo: "fa-staylinked",
        },
        {
          topic: "Speech Processing using wavelet transform.",
          technology: ["MATLAB"],
          breif:
            "Using wavelet transform in speech enhancement system got the utmost details of the speech signal by maintaining the quality and intelligibility of the speech ",
          date: "Jan - April' 2019",
          logo: "fa-audible",
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
                icon={<NextWeekIcon />}
              >
                <h4
                  className="vertical-timeline-element-title"
                  style={{ marginBottom: "16px" }}
                >
                  <i className={`fab ${elem.logo} fa-sm`} />
                  &nbsp;{elem.topic}
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
        </VerticalTimeline>
      </div>
    );
  }
}

export default Project;
