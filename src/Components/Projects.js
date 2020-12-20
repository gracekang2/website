import React from "react";
import ProjectTile from "./ProjectTile";

export default class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="projectsRow">
            <ProjectTile color="#46aea3" badgeColor="#75e5e6" title="EcoStore" tech={["Node.js", "Express.js", "MongoDB", "Microsoft Azure"]} description={
              <>
                  An iOS app, created at HackTheNorth in September 2019, that uses image recognition to gamify the art of proper recycling. By continuing 
                  to properly recycle, users can restore their virtual ecosystems.<br/>
            </>
          } image="./Images/ecostore.jpg"
          />
            <ProjectTile color="#bebccb" badgeColor="#8d89a3" title="Live ASL Alphabet Translator" tech={["Python", "fastai + PyTorch", "OpenCV"]} description={
                <>
                  A command line program that takes in live video feed from a user's webcam, and recognizes + translates static ASL alphabet signs. This program 
                  is built on a deep learning model, trained using a homemade dataset, which achieved over 99% accuracy in training. <br/>
                </>
            } image="./Images/asl.gif"
            />
            <ProjectTile color="#ffffff" badgeColor="#ffb5bf" textColor="black" borderColor="black" title="BiQuadris" tech={["C++", "OOP"]} description={
                <>
                  A command line version of Tetris, made in C++. This game was a school project completed with 2 other members, and utilized a variety of OOP design patterns. 
                  Achieved a final grade of 98%.<br />
                </>
            } image="./Images/biquadris.jpeg"
            />
        </div>
        <div className="projectsRow">
            <ProjectTile color="#a6e0de" badgeColor="#3ebdc6" title="MyBCP" tech={["C#", "SQL", "ASP.NET", "jQuery"]} description={
              <>
                  A web tool that displays a customized and easily digestible summary of an
                  employee's Business Continuity Plan, including emergency contact information and alternative office info. 
                  It is estimated that upwards of <b> 2000 Toronto employees</b> will be using this tool.<br/>
                  <i>(Made for Scotiabank.)</i><br/>
            </>
          }/>
            <ProjectTile color="#8d89a3" badgeColor="#bebccb" title="Bulk Fund Import" tech={["C#", "SQL", "ASP.NET", "jQuery"]} description={
                <>
                  A tool to automate tedious manual
                  fund tracking. Designed to process multiple spreadsheets with over 120 000+ rows of fund data, and make the
                  necessary updates to the bank's database. Built 
                  to be incredibly user friendly, with a drag and drop file upload
                  mechanism, and a calendar displaying a summary of the updates and inserts made
                  on each day.<br/>
                  <i>(Made for Scotiabank.)</i><br/>
                </>
            }
            />
            <ProjectTile color="#cbe3b3" badgeColor="#b7df69" title="UserMatrix" tech={["C#", "SQL", "ASP.NET", "jQuery"]} description={
                <>
                  A <b>JavaScript library</b> for internal tool development within Scotiabank.r
                  A library for generating highly customizable,{" "}
                  <b>2-dimensional</b> batch edit modals to edit bank Users against another
                  dimension (e.g. applications). The modal was designed to be highly customizable for the
                  types of users, the dimension against which users would be edited,
                  adding capabilities, etc. <br />
                  <i>(Made for Scotiabank.)</i><br/>
                </>
            }/>
        </div>
      </>
    );
  }
}