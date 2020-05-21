import React from "react";

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landingPage">
        <div id="landingWrapper">
          <div id="landingPhotoDiv">
            <img src="Images/landing_blush.png" alt="" id="landingPhoto" />
          </div>
          <div id="landingTextDiv">
            <span>
            <br/><br/>
            hello world!<br/>
            my name is Grace :)<br/><br/>
            let's get to know eachother!
            </span>
          </div>
        </div>
      </div>
    );
  }
}
