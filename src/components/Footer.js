import React, { Component } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="container-f">
        <div className="box box1 box4">
          <b>&#169;</b> 2020&nbsp;{" "}
          <Link to="/" className="link-foot">
            Shivanshu
          </Link>
        </div>
        <Link to="/" className="link-foot">
          <div className="box box2">
            <MoreHorizIcon />
            <ViewColumnIcon />
            <MoreHorizIcon />
          </div>
        </Link>
        <div className="box box3 box4">
          <a
            href="https://github.com/singhshivanshu/Blog"
            className="link-foot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code" />&nbsp;source
          </a>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Footer;
