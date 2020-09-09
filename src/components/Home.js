import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import About from "./About";
import Academia from "./Academia";
import Footer from "./Footer";
import Project from "./Project";
import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/academia" component={Academia} />
        <Route path="/projects" component={Project} />
      </Switch>
      <br/>
      <br/>
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
