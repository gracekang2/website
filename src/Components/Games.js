import React from 'react'
import Unity, {UnityContent} from 'react-unity-webgl';

const unityContent = new UnityContent(
    "CoinRun/CoinRun.json",
    "CoinRun/UnityLoader.js"
)

export default class Games extends React.Component {
    render() {
        return (
            <div id="games">
                <Unity unityContent={unityContent} height="10px" width="10px"/>
                <p>
                    <b>Disclaimer:</b> I followed a tutorial to make this, so I don't take credit for this project!
                    <br/>
                    <br/>
                    But, it was something I worked on towards the beginning of my career in CS, and was a great 
                    learning experience nonetheless -- so it's here as a legacy project.
                    This is a platform adventure game that makes use of Unity's 2D Game Engine.<br/>
                    It was really fun for me to make, but is definitely hard for me to play (I'm not 
                    the best at video games!).<br/>
                    <br/>
                    If you want to give it a try, just press 'New Game' and use the arrows on the keyboard to move, and 
                    your space bar to jump. <br/>
                    (P.S: If you want to enter a new level, stand in front of the door and jump.)
                </p>
            </div>
        )
    }
}