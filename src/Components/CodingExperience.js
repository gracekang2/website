import React from "react";
import WebSites from "./WebSites";
import Games from "./Games";
import EcoStore from "./EcoStore";
import WorkExperience from "./WorkExperience";

export default class CodingExperience extends React.Component {
  render() {
    return (
      <div id="codingExperience">
        <h1 className={this.props.LandingColour}>coding experience</h1>
        <h2 className={this.props.LandingColour}>work experience</h2>
        <WorkExperience
          Color={this.props.LandingColour}
          BackgroundColor={this.props.BackgroundColor}
        />
        <h2 className={this.props.LandingColour}>web projects</h2>
        Use the left and right arrows to read about some of the web projects I've created!
        <br/>
        These sites are some of the tools that I created while working at Scotiabank as a co-op student.
        <br />
        <br />
        <WebSites />
        <h2 className={this.props.LandingColour}>eco-store</h2>
        <EcoStore />
        <h2 className={this.props.LandingColour}>coin run</h2>
        <Games />
      </div>
    );
  }
}
