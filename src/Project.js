import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NextWeekIcon from "@material-ui/icons/NextWeek";

import Button from "react-bootstrap/Button";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          topic: "World.",
          technology: ["ReactJS"],
          breif:
            "A Web-app where you can find all the informantions about all the countries in the world, It has been made using ReatJS, and Vanilla CSS ",
          date: "Aug - 2020",
          logo: "fas fa-globe-asia",
          pro_link: "https://all-countries.netlify.app",
        },
        {
          topic: "Bank Transaction web-app",
          technology: [
            "ReactJS",
            "MaterialUI",
            "Bootstrap",
            "react-pdf",
            "react-router"
          ],
          breif: "A web-app that allows user to do all kind of transactions, along with keeping track of all the past transactions one can also apply for loans by uploading their documents(that can also be previewed ).",
          date: "July - 2020",
          logo: "fas fa-caret-square-right",
          pro_link: "https://github.com/singhshivanshu/Peach-bank"

        },
        {
          topic: "Online shoe store.",
          technology: [
            "ReactJS",
            "MaterialUI",
            "Axios",
            "react-credit-card",
          ],
          breif:
            "A basic prototype of a online shoe store with the functionality of filtering and payment, session storage is used to store the bought items. It has been made using Reactjs, Material-UI, react-credit-cards, axios",
          date: "June - 2020",
          logo: "fab fa-shopify",
          pro_link:
            "https://github.com/singhshivanshu/Happy-Feet-Online-shoe-store",
        },
        {
          topic: "Handwritten text recognizer.",
          technology: [
            "ReactJS",
            "React Bootstrap",
            "Axios",
            "React file reader",
          ],
          breif:
            "A Web-app which recognize all the texts inside an image. It has been made using Reactjs, react bootstarp, axios and react-file-reader.  Google vision API has been used to get the text out of image.",
          date: "May - 2020",
          logo: "fas fa-caret-square-right",
          pro_link:
            "https://github.com/singhshivanshu/Handwritten-text-generator",
        },
        {
          topic: "CSV File Reader.",
          technology: ["ReactJS"],
          breif:
            "A Web-app which reads csv file and covert it into tabular form. It has been made using Reactjs.",
          date: "May - 2020",
          logo: "fas fa-caret-square-right",
          pro_link: "https://github.com/singhshivanshu/CSV-File-Reader",
        },
        {
          topic: "Built a Movie website using API of TMDB.",
          technology: ["ReactJS"],
          breif:
            "This website has list of movies and Tv shows that are trending, highest rated, latest etc. along with the functionality of searching (everything related to movies)",
          date: "April - 2019",
          logo: "fas fa-caret-square-right",
          pro_link: "https://github.com/singhshivanshu/movieOn",
        },
        {
          topic: "Built a responsive personal website from scratch.",
          technology: ["ReactJS", "Bootstrap", "JavaScript"],
          breif:
            "Using React, some NPM packages(vertical-timeline, react-typed etc.) and font-awesome built a personal blog website ",
          date: "Mar - 2020",
          logo: "fab fa-staylinked",
          pro_link: "https://github.com/singhshivanshu/Blog",
        },
        {
          topic: "Speech Processing using wavelet transform.",
          technology: ["MATLAB"],
          breif:
            "Using wavelet transform in speech enhancement system got the utmost details of the speech signal by maintaining the quality and intelligibility of the speech ",
          date: "Jan - 2019",
          logo: "fab fa-audible",
          pro_link: "#",
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
                  <a
                    href={elem.pro_link}
                    style={{ color: "rgb(0, 59, 92)" }}
                    target="_blank"
                    rel="noopener noreferrer"
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
}

export default Project;
