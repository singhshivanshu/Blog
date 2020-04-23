import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";

class Academia extends Component {
  render() {
    return (
      <div className="container academia">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2015 - 2019"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">
              <i className={"fas fa-university fa-sm"} />
              &nbsp;Birla Institute of Technology, Mesra
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              <i className={"fas fa-graduation-cap fa-sm"} />
              &nbsp; Bachelor of Electronics & Communications Engineering
            </h6>
            <p>
              <i className={"fas fa-map-marker fa-sm"} />
              &nbsp; Mesra, Ranchi, Jharkhand
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013 - 2015"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">
              <i className={"fas fa-university fa-sm"} />
              &nbsp;D.Singh International, Jamui
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              <i className={"fas fa-graduation-cap fa-sm"} />
              &nbsp; Higher Secondary
            </h6>
            <p>
              <i className={"fas fa-map-marker fa-sm"} />
              &nbsp; Jamui, Bihar
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April-2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">
              <i className={"fas fa-university fa-sm"} />
              &nbsp;D.A.V Public School, Jamui
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              <i className={"fas fa-graduation-cap fa-sm"} />
              &nbsp; Secondary School
            </h6>
            <p>
              <i className={"fas fa-map-marker fa-sm"} />
              &nbsp; Jamui, Bihar
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default Academia;
