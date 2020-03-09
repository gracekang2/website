import React from 'react';
import './App.css';
import Landing from './Components/Landing.js'
import Header from './Components/Header';
import AboutMe from './Components/AboutMe'
import SkillSummary from'./Components/SkillSummary'
import CodingExperience from './Components/CodingExperience';

export default class App extends React.Component {
  ColourChange = (value) => {
    this.setState(prev => ({
        HeadingColour: "headingColour" + value,
        BackgroundColour: "backgroundColour" + value,
        PictureURL: "Images/bitmoji_transparent_" + value + ".png"
    }));
  }

  LinkClick = (value) => {
    this.setState(prev => ({
      PageIndex: value
    }));
  }

  state = {
    HeadingColour: "headingColour1",
    BackgroundColour: "backgroundColour1",
    PictureURL: "Images/bitmoji_transparent_1.png",
    PageIndex: "1"
  }

  render() {
    return (
      <div className="app">
        <Header ColourChange={this.ColourChange} BackgroundColour={this.state.BackgroundColour} Colour={this.state.HeadingColour} OnLinkClick={this.LinkClick}></Header>
        {
          (
            function(index, headingColour, picURL, backgroundColour) {
              switch(index) {
                case "1":
                  return <Landing LandingColour={headingColour} PictureURL={picURL}></Landing>;
                case "2":
                  return <AboutMe LandingColour={headingColour} BackgroundColour={backgroundColour}></AboutMe>
                case "3":
                  return <SkillSummary LandingColour={headingColour}></SkillSummary>
                case "4":
                  return <CodingExperience LandingColour={headingColour}></CodingExperience>
                default: 
                  return <div></div>
              }
            }
          )(this.state.PageIndex, this.state.HeadingColour, this.state.PictureURL, this.state.BackgroundColour)
        }
        <div>
          Add contact me div + bitmoji <br/>
          Make scalable (nav bar) <br/>
          Fix coding experineces <br/>
          Make it routing instrad?
        </div>
      </div>
    )
  }
}