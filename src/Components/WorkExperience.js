import React from "react";

export default class WorkExperience extends React.Component {
  OnTileClick = (event) => {
    if (
      event.target.id === "workTile1" ||
      event.target.className === "workTile1"
    ) {
      this.setState((prev) => ({
        Tile1Expanded: !prev.Tile1Expanded,
        Tile2Expanded: false,
      }));
    } else if (
      event.target.id === "workTile2" ||
      event.target.className === "workTile2"
    ) {
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
        <div
          id="workTile1"
          className={this.state.Tile1Expanded ? "expanded" : ""}
          onClick={this.OnTileClick}
        >
          <span className="workTitle workTile1">Wish</span>
          <br />
          <span className="workCaption workTile1">
            Software Engineering Intern
          </span>
          {this.state.Tile1Expanded ? (
            <>
              <br className="workTile1" />
              <i className="workTile1">
                Winter 2020 - San Francisco, California
              </i>
              <p className="workTile1">
                I had an amazing time working as a full-stack software engineering intern on the Product Payments team
                at Wish! I primarily coded in Python and React.js. I had the opportunity to work on a
                variety of cool payment and risk related tasks, some
                examples including:
              </p>
              <ul className="workTile1">
                <li className="workTile1">
                Implementing a new CVV recollection payments flow by integrating with Stripe’s API, 
                successfully decreasing the number of fraud purchases made through hacked accounts.
                </li>
                <li className="workTile1">
                  Engineering a new risk decision pipeline to allow high value users to continue shopping 
                  after a chargeback event, increasing gross merchandise value and user retention.
                </li>
                <li className="workTile1">
                  Piloting the creation of a new combined shipment details page to provide detailed last mile 
                  tracking information, which is currently being used by 1800+ users per hour.
                </li>
                <li className="workTile1">
                  Improving charge data accuracy by building out a webhook and new chargeback pipeline for PrimeiroPay.
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
        <div
          id="workTile2"
          className={this.state.Tile2Expanded ? "expanded" : ""}
          onClick={this.OnTileClick}
        >
          <span className="workTitle workTile2">Scotiabank</span>
          <br />
          <span className="workCaption workTile2">
            Full Stack Web Developer
          </span>
          {this.state.Tile2Expanded ? (
            <>
              <br className="workTile2" />
              <i className="workTile2">Summer 2019 - Toronto, Canada</i>
              <p className="workTile2">
                I worked as a full-stack web developer on the GBM Web team, and
                created various web services for the trade floor. I used a
                Microsoft stack - ASP.NET, C#, SQL, and jQuery, and took full
                ownership over the development of multiple internal tools.<br/>
                It was a really beneficial learning experience for me, as my first co-op, as I 
                got the opportunity to work on the full stack and gain a solid understanding of both 
                backend and frontend development.
                <br />
                <br/>
                For more details about some of projects, please see the 
                Projects section below!
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
