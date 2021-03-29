
import Navbar from "./components/navbar"
import Header from "./components/header"
import Section from "./components/section"
import Projects from "./components/projects"
import Footer from "./components/contacts"
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Card from "./components/card"
import { projects } from "./data";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Section />
            <Projects data={projects} />
            <Footer />
          </Route>
          <Route path="/about">
            <Section />
          </Route>
          <Route path="/projects">
            <Projects data={projects} />
          </Route>
          <Route path="/contacts">
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
