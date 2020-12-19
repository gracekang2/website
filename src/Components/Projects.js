import React from "react";
import ProjectTile from "./ProjectTile";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projectsRow">
          <ProjectTile color="#a6e0de" badgeColor="#3ebdc6" title="MyBCP" tech={["C#", "SQL", "ASP.NET", "jQuery"]} description={
            <>
                A web tool that displays a customized and easily digestible summary of an
                employee's Business Continuity Plan, including emergency contact information and alternative office info. 
                It is estimated that upwards of <b> 2000 Toronto employees</b> will be using this tool.<br/>
                <i>(Made for Scotiabank.)</i><br/>
          </>
        }/>
          <ProjectTile color="#bebccb" badgeColor="#8d89a3" title="Bulk Fund Import" tech={["C#", "SQL", "ASP.NET", "jQuery"]} description={
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
    );
  }
}