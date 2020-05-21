import React from "react";

const Images = [
  "Images/IMG_0248.png",
  "Images/IMG_0249.png",
  "Images/IMG_0254.png",
  "Images/IMG_0255.png",
  "Images/IMG_0256.png",
  "Images/IMG_0257.png",
  "Images/IMG_0259.png",
  "Images/IMG_0260.png",
  "Images/IMG_0258.png"
];

export default class EcoStore extends React.Component {
  state = {
    Image: Images[0]
  };

  ToggleLeft = () => {
    var newIndex = Images.indexOf(this.state.Image);
    newIndex -= 1;

    if (newIndex < 0) {
      newIndex = Images.length - 1;
    }

    this.setState(prev => ({
      Image: Images[newIndex]
    }));
  };

  ToggleRight = () => {
    var newIndex = Images.indexOf(this.state.Image);
    newIndex += 1;

    if (newIndex >= Images.length) {
      newIndex = 0;
    }

    this.setState(prev => ({
      Image: Images[newIndex]
    }));
  };

  render() {
    return (
      <div>
        <table id="ecostore">
          <tr>
            <td onClick={this.ToggleLeft} className="ecostoreArrow">
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                className="leftbtn"
              >
                <path
                  fill="#000000"
                  d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                />
              </svg>
            </td>
            <td id="ecostoreimg">
              <img src={this.state.Image} />
            </td>
            <td onClick={this.ToggleRight} className="ecostoreArrow">
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                className="rightbtn"
              >
                <path
                  fill="#000000"
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                />
              </svg>
            </td>
          </tr>
          <tr>
            <td id="ecostoredesc" colSpan={3}>
              <i>Swift, Node.js + Express.js, MongoDB, Microsoft Azure</i>
              <br />
              EcoStore is an adorable iOS application that was created at Hack
              the North in September. This application is based off the very
              real issue of <i>recycling contamination</i>, where one piece of
              trash in a huge batch of recycling is enough to send all of the
              recycling to the landfill! <br />
              EcoStore works to encourage users to recycle properly, rather than
              recklessly. The app uses an image recognition model, trained using{" "}
              <b>Microsoft Azure</b>, with a 95% accuracy rate, and allows a
              user to point their camera at an object and determine whether it's
              recyclable. <br />
              More so, users can track their recycling and are awarded points
              each time they recycle! When a certain point quota is met, users
              can "restore" endangered species within the app to reward them for
              their job well done.
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
