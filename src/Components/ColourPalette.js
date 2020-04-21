import React from "react";

export default class ColourPalette extends React.Component {
  colourIndices = [1, 2, 3, 4, 5];
  OnClick = i => {
    this.props.ColourChange(i);
  };
  render() {
    return (
      <>
        {this.colourIndices.map(i => {
          var colourClass = "backgroundColour" + i;
          var classStr = `colourChoice ${colourClass} ${
            colourClass === this.props.Current ? "selected" : ""
          }`;
          return (
            <div onClick={this.OnClick.bind(null, i)} className={classStr}></div>
          );
        })}
      </>
    );
  }
}
