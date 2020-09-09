import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NextWeekIcon from "@material-ui/icons/NextWeek";

import Button from "react-bootstrap/Button";

import {projects} from "../data/data.js"

function Project() {
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
                <a
                  href={elem.pro_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="vertical-timeline-heading-link"
                >
                  <i className={`${elem.logo} fa-sm`} />
                  &nbsp;{elem.topic}
                </a>
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

export default Project;
