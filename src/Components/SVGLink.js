import React from "react";

export default class SVGLink extends React.Component {
  render() {
    return (
      <a href={this.props.Link} target="_blank">
        <svg
          style={{ width: "24px", height: "24px", display: "inline" }}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d={this.props.Path}
          />
        </svg>
      </a>
    );
  }
}
