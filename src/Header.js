import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" style={{}}>
          <Nav className="mx-auto">
            <Navbar.Brand
              href="/"
              style={{ letterSpacing: "8px", fontSize: "25px" }}
            >
              SHIVANSHU
            </Navbar.Brand>
          </Nav>
        </Navbar>
        <Navbar className="sec-nav" variant="dark">
          <Nav className="mx-auto" activeKey={window.location.pathname}>
            <Nav.Link href="/about" >
              <i className={"fas fa-male fa-sm"} />
              &nbsp;ABOUT
            </Nav.Link>
            <Nav.Link href="/academia" >
              <i className={"fas fa-graduation-cap fa-sm"} />
              &nbsp;ACADEMIA
            </Nav.Link>
            <Nav.Link href="/projects" >
              <i className={"fas fa-pen fa-sm"} />
              &nbsp;PROJECTS
            </Nav.Link>
            <Nav.Link href="/blog">
              <i className={"fas fa-blog fa-sm"} />
              &nbsp;BLOG
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
