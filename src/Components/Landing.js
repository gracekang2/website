import React from 'react'

export default class Landing extends React.Component{
  render() {
    return (
      <div className="landingPage">
        <h1 className={this.props.LandingColour}>hello world! i'm Grace.</h1>
        <img src={this.props.PictureURL} id="landingBitmoji" alt=""/>
        <h2 className={this.props.LandingColour}>let's get to know eachother - click around!</h2>
      </div>
    );
  }  
} 