import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
  "CoinRun/CoinRun.json",
  "CoinRun/UnityLoader.js"
);

export default class Games extends React.Component {
  render() {
    return (
      <div id="games">
        <Unity unityContent={unityContent} height="10px" width="10px" />
        <p>
          <b>Note:</b> I don't take credit for this project! I followed a
          tutorial to make this at the end of my first year of university.
          <br />
          <br />
          Even though I didn't make this independently, it was a great learning
          experience nonetheless -- so it's here as a legacy project. It was
          also just really fun for me to make 😊. This is a platform adventure
          game that makes use of Unity's 2D Game Engine.
          <br />
          <br />
          If you want to give it a try, just press 'New Game' and use the arrows
          on the keyboard to move, and your space bar to jump. <br />
          (P.S: If you want to enter a new level, stand in front of the door and
          jump.)
          <br />
          <br />
          <i>
            (P.S. You won't be able to play this on mobile due to WebGL
            limitations!)
          </i>
        </p>
      </div>
    );
  }
}
