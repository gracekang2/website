import React from "react";

const WebProjects = [
  {
    url: "localhost:5000",
    content: (
      <div>
        <h3>MyBCP</h3>
        <h5>ASP.NET Web Form, C#, SQL, JavaScript/jQuery, CSS, HTML</h5>
        <p>
          This was one of the <b>flagship</b> projects that I created while
          working at Scotiabank as a Technology Analyst Co-op. MyBCP (BCP
          meaning Business Continuity Plan for employees) is a site that
          displays a customized, summarized and easily digestible view of an
          employee's BCP (either detected through Windows Cookie Authenticaion
          or query string). <br />
          The page also supports editing capabilities for contact information,
          is extremely <b>mobile-friendly</b>, and can render the summarized BCP
          in <b>HTML, PDF or HTML email</b> (optimized for Outlook 2007). <br />
          MyBCP greatly modernizes Scotiabank's existing BCP system, and it is
          estimated that gradually, upwards of
          <b> 2000 Toronto employees</b> will be using the page.
        </p>
      </div>
    )
  },
  {
    url: "localhost:3000",
    content: (
      <div>
        <h3>Fund Import Site</h3>
        <h5>ASP.NET Web Form, C#, jQuery, SQL, HTML, CSS</h5>
        <p>
          Like many of the other web projects I have listed here, I made this
          page from scratch while I was working at Scotiabank as a Technology
          Analyst Co-op student. <br />
          Essentially, this site was a tool that would automate tedious manual
          fund tracking. It ingests multiple spreadsheets with enormous amounts
          of fund data <b>(~120 000+ rows)</b>, processes them, and makes the
          necessary updates to the bank's database.
          <br />
          It was built to be very quick - the entire process takes{" "}
          <b>less than 10s</b> for around a dozen files. The site was also built
          to be incredibly user friendly, with a drag and drop file upload
          mechanism, and a calendar displaying all the updates and inserts made
          on each day.
        </p>
      </div>
    )
  },
  {
    url: "localhost:8000",
    content: (
      <div>
        <h3>Bulk Editors</h3>
        <h5>ASP.NET Razor Pages + Web APIs, C#, SQL, jQuery, HTML, CSS</h5>
        <p>
          While working at Scotiabank as a co-op student, I also built two
          separate web tools to help speed up the editing of data. <br /> Both
          of the pages were <b>bulk editors</b> for very large data tables that
          supported adding, editing and deleting capabilities, with user
          friendly interfaces. (One page was for editing approved hotel data,
          and another was for employee data). The approved hotels editor page
          also supported the restoration of previously deleted rates and hotels.
          <b />
          The most essential part of these pages was to keep them efficient
          despite their large amounts of data, particularly for older browsers
          still used within the bank.
        </p>
      </div>
    )
  },
  {
    url: "localhost:4000",
    content: (
      <div>
        <h3>UserMatrix - JS Library</h3>
        <h5>JavaScript/jQuery, SQL, C# Web Methods, Microsoft Access</h5>
        <p>
          This is also a project that I made while I worked at Scotiabank,
          unofficially titled UserMatrix. It is essentialally a{" "}
          <b>JavaScript library</b>, with minimal dependencies, for use in other
          webpages within ScotiaBank (for example, I used it in one of my bulk
          editors). The JS library essentially generates highly customizable,{" "}
          <b>2-dimensional</b> batch edit modals to edit Users against another
          dimension (e.g. applications).
          <br />
          The modal was designed to be efficient, and be customizable for the
          types of users, the dimension against which users would be edited,
          adding capabilities, etc. <br />
          The UserMatrix JS library is to be used in multiple present and future
          internal Scotiabank webpages.
        </p>
      </div>
    )
  }
];

export default class WebSites extends React.Component {
  state = {
    CurrentSite: WebProjects[0]
  };

  ToggleLeft = () => {
    var newIndex = WebProjects.indexOf(this.state.CurrentSite);
    newIndex -= 1;

    if (newIndex < 0) {
      newIndex = WebProjects.length - 1;
    }

    this.setState(prev => ({
      CurrentSite: WebProjects[newIndex]
    }));
  };

  ToggleRight = () => {
    var newIndex = WebProjects.indexOf(this.state.CurrentSite);
    newIndex += 1;

    if (newIndex >= WebProjects.length) {
      newIndex = 0;
    }

    this.setState(prev => ({
      CurrentSite: WebProjects[newIndex]
    }));
  };

  render() {
    return (
      <div id="sitewrap">
        <div id="webprojs">
          <div id="webNav">
            <span id="webBtns">
              <svg
                style={{ width: "16px", height: "16px" }}
                viewBox="0 0 24 24"
                id="webleftbtn"
                onClick={this.ToggleLeft}
              >
                <path
                  fill="#000000"
                  d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                />
              </svg>
              <svg
                style={{ width: "16px", height: "16px" }}
                viewBox="0 0 24 24"
                id="webrightbtn"
                onClick={this.ToggleRight}
              >
                <path
                  fill="#000000"
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                />
              </svg>
            </span>
            <span id="webURL">{this.state.CurrentSite.url}</span>
          </div>
          <div id="webContent">{this.state.CurrentSite.content}</div>
        </div>
      </div>
    );
  }
}
