import React from "react";
import Projects from './Projects'
// import WebSites from "./WebSites";
// import Games from "./Games";
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
        <h2 className={this.props.LandingColour}>projects</h2>
        {/* <WebSites /> */}
        <Projects/>

        {/* <h2 className={this.props.LandingColour}>eco-store</h2> */}
        {/* <EcoStore /> */}
        {/* <h2 className={this.props.LandingColour}>coin run</h2>
        <Games /> */}
      </div>
    );
  }
}
