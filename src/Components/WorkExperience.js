import React from "react";

export default class WorkExperience extends React.Component {
  OnTileClick = (event) => {
    if (event.target.id === "workTile1") {
      this.setState((prev) => ({
        Tile1Expanded: !prev.Tile1Expanded,
        Tile2Expanded: false,
      }));
    } else if (event.target.id === "workTile2") {
      this.setState((prev) => ({
        Tile2Expanded: !prev.Tile2Expanded,
        Tile1Expanded: false,
      }));
    }
  };

  state = {
    Tile1Expanded: false,
    Tile2Expanded: false,
  };

  render() {
    return (
      <div id="workTilesWrapper">
        <div id="workTile1" onClick={this.OnTileClick}>
          <span className="workTitle">Wish</span>
          <br />
          <span className="workCaption">Software Engineering Intern</span>
          {
            this.state.Tile1Expanded ? <>
              <br/>
              <i>Winter 2020 - San Francisco, California</i>
              <p>
                Product Payments team
              </p>
            </> : <></>
          }
        </div>
        <div id="workTile2" onClick={this.OnTileClick}>
          <span className="workTitle">Scotiabank</span>
          <br />
          <span className="workCaption">Full Stack Web Developer</span>
          {
            this.state.Tile2Expanded ? <>
              <br/>
              <i>Summer 2019 - Toronto, Canada</i>
              <p>
                GBM Web Team
              </p>
            </> : <></>
          }
        </div>
      </div>
    );
  }
}
