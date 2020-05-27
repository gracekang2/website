import React from "react";
import "./Styles/App.css";
import "./Styles/Landing.css";
import "./Styles/AboutMe.css";
import "./Styles/Skills.css";
import "./Styles/Header.css";
import "./Styles/Coding.css";
import Landing from "./Components/Landing.js";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import SkillSummary from "./Components/SkillSummary";
import CodingExperience from "./Components/CodingExperience";
import { HashRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  state = {
    HeadingColour: "headingColour1",
    BackgroundColour: "backgroundColour1",
    PictureURL: "Images/bitmoji_transparent_1.png",
    PageIndex: "1"
  };

  render() {
    return (
      <div className="app">
        <Header
          ColourChange={this.ColourChange}
          BackgroundColour={this.state.BackgroundColour}
          Colour={this.state.HeadingColour}
          OnLinkClick={this.OnLinkClick}
        ></Header>
        <div className="content">
          <HashRouter basename="/">
            <Route exact path="/" component={Landing} />
            <Route
              path="/about"
              render={(props) => (
                <AboutMe
                  {...props}
                  LandingColour={this.state.HeadingColour}
                  BackgroundColour={this.state.BackgroundColour}
                />
              )}
            />
            <Route
              path="/skills"
              render={(props) => (
                <SkillSummary
                  {...props}
                  LandingColour={this.state.HeadingColour}
                  BackgroundColour={this.state.BackgroundColour}
                />
              )}
            />
            <Route
              path="/code"
              render={(props) => (
                <CodingExperience
                  {...props}
                  LandingColour={this.state.HeadingColour}
                  BackgroundColour={this.state.BackgroundColour}
                />
              )}
            />
          </HashRouter>
        </div>
      </div>
    );
  }
}
