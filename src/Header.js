import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" style={{}}>
          <Nav className="mx-auto">
            <Navbar.Brand
              href="/"
              style={{ letterSpacing: "8px", fontSize: "25px" }}
            >
              SHIVANSHU
            </Navbar.Brand>
          </Nav>
        </Navbar>
        <Navbar bg="dark" variant="dark">
          <Nav className="mx-auto">
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/academia">ACADEMIA</Nav.Link>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/blog">BLOG</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
