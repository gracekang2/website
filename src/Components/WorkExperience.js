import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default class WorkExperience extends React.Component {
  render() {
    return (
      <div>
        <Timeline lineColor={"#ddd"}>
          <TimelineItem
            dateText="Winter 2020"
            className={this.props.Color + " " + this.props.BackgroundColor}
          >
            <h4><span className={this.props.BackgroundColor + " companyBadge"}>Wish</span></h4>
            <h4>Software Engineering Intern</h4>
            <h5>San Francisco, California</h5>
            <p>
              Worked on <b>Product Payments</b> team
            </p>
          </TimelineItem>
          <TimelineItem
            dateText="Spring 2019"
            className={this.props.Color + " " + this.props.BackgroundColor}
          >
            <h4><span className={this.props.BackgroundColor + " companyBadge"}>Scotiabank</span></h4>
            <h4>Full Stack Web Developer</h4>
            <h5>Toronto, Canada</h5>
            <p>Heehee</p>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}
