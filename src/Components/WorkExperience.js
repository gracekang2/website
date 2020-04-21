import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default class WorkExperience extends React.Component {
  render() {
    return (
      <div>
        <Timeline lineColor={"#ddd"}>
          <TimelineItem dateText="Spring 2019" className={this.props.Color + " " + this.props.BackgroundColor}>
            <h3>Scotiabank - Full Stack Web Developer</h3>
            <h4>Toronto, Canada</h4>
            <p>
              Heehee
            </p>
          </TimelineItem>
          <TimelineItem dateText="Winter 2020" className={this.props.Color + " " + this.props.BackgroundColor}>
            <h3>Wish - Software Engineering Intern</h3>
            <h4>San Francisco, California</h4>
            <p>
              Worked on <b>Product Payments</b> team
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}
