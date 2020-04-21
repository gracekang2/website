import React from "react";
import Typing from "react-typing-animation";

export default class SkillSummary extends React.Component {
  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  languages = (
    <span>
      <span className="greenTxt">languages: </span>
      <span className="terminalWhite">
        ['python', 'JavaScript', 'C', 'C++', 'C#']
      </span>
    </span>
  );
  libraries = (
    <span>
      <span className="greenTxt">frameworks + libraries: </span>
      <span className="terminalWhite">['reactJS', 'node.js', 'ASP.NET']</span>
      <br />
    </span>
  );
  databases = (
    <span>
      <span className="greenTxt">databases: </span>
      <span className="terminalWhite">
        ['mongoDB', 'Microsoft SQL Management Server']
      </span>
    </span>
  );

  python = (
    <span>
      <span className="yellowTxt">python: </span>
      <span>
        used Python 2.7 while interning at Wish as a SWE intern on the product
        payments team. Worked on various backend tasks using Python, including
        work on Wish's chatbot, writing oneoff scripts and crons, and different
        payment procesing tasks.
      </span>
    </span>
  );

  javascript = (
    <span>
      <span className="yellowTxt">javascript: </span>
      <span>
        experience using JavaScript for both frontend and backend tasks - used{" "}
        <span className="greenTxt">jQuery</span> during internship at Scotiabank
        and used <span className="greenTxt">React</span> to do frontend tasks
        while interning at Wish. Have also used{" "}
        <span className="greenTxt">Node.js</span> to build various APIs,
        including one for a hackathon project called EcoStore.
      </span>
    </span>
  );

  cLanguages = (
    <span>
      <span className="yellowTxt">C and C++: </span>
      <span>
        learned both C and C++ during courses at University. Learned C and
        related topics in CS136 (93%) and C++ in CS246 (95%). In CS246, the
        final project was a Tetris replica game called BiQuadris that was
        completed with 2 other group members, which received a grade of 98%.
      </span>
    </span>
  );

  cSharp = (
    <span>
      <span className="yellowTxt">C#: </span>
      <span>
        used C# while interning at ScotiaBank, and used it to create various web
        forms and razor pages, using Microsoft's ASP.NET framework.
      </span>
    </span>
  );

  printLanguages = () => {
    this.setState(prev => ({
      Command: null,
      Output: prev.Output ? (
        <span>
          {prev.Output}
          <br />
          {prev.CommandText}
        </span>
      ) : (
        <span>{prev.CommandText}</span>
      )
    }));
    this.sleep(1000).then(() => {
      this.setState(prev => ({
        Output: (
          <span>
            {prev.Output}
            <br />
            {this.python}
          </span>
        ),
        Typing: false
      }));
      this.sleep(1000).then(() => {
        this.setState(prev => ({
          Output: (
            <span>
              {prev.Output}
              <br />
              {this.javascript}
            </span>
          )
        }));
        this.sleep(1000).then(() => {
          this.setState(prev => ({
            Output: (
              <span>
                {prev.Output}
                <br />
                {this.cLanguages}
              </span>
            )
          }));
          this.sleep(1000).then(() => {
            this.setState(prev => ({
              Output: (
                <span>
                  {prev.Output}
                  <br />
                  {this.cSharp}
                  <br />
                  ---------------------------
                </span>
              ),
              Printing: false
            }));
          });
        });
      });
    });
  };

  printSkillSummary = () => {
    this.setState(prev => ({
      Command: null,
      Output: prev.Output ? (
        <span>
          {prev.Output}
          <br />
          {prev.CommandText}
        </span>
      ) : (
        <span>{prev.CommandText}</span>
      )
    }));
    this.sleep(1000).then(() => {
      this.setState(prev => ({
        Output: prev.Output ? (
          <span>
            {prev.Output}
            <br />
            {this.languages}
          </span>
        ) : (
          <span>{this.languages}</span>
        ),
        Typing: false
      }));
      this.sleep(1000).then(() => {
        this.setState(prev => ({
          Output: (
            <span>
              {prev.Output}
              <br />
              {this.libraries}
            </span>
          )
        }));
        this.sleep(1000).then(() => {
          this.setState(prev => ({
            Output: (
              <span>
                {prev.Output}
                {this.databases}
                <br />
                ----------------------------
              </span>
            ),
            Printing: false
          }));
        });
      });
    });
  };

  state = {
    Printing: true,
    Typing: true,
    Command: (
      <Typing className="command" onFinishedTyping={this.printSkillSummary}>
        {" "}
        python skill_summary.py{" "}
      </Typing>
    ),
    Output: null,
    CommandText: "python skill_summary.py"
  };

  startTyping = () => {
    this.setState(prev => ({
      Typing: true
    }));
  };

  onClickSkillSummary = () => {
    this.setState(prev => ({
      Command: (
        <Typing
          className="command"
          onStartedTyping={this.startTyping}
          onFinishedTyping={this.printSkillSummary}
        >
          {" "}
          python skill_summary.py{" "}
        </Typing>
      ),
      CommandText: "python skill_summary.py",
      Printing: true
    }));
  };

  onClickLanguages = () => {
    this.setState(prev => ({
      Command: (
        <Typing
          className="command"
          onStartedTyping={this.startTyping}
          onFinishedTyping={this.printLanguages}
        >
          {" "}
          python languages.py{" "}
        </Typing>
      ),
      CommandText: "python languages.py",
      Printing: true
    }));
  };

  render() {
    return (
      <div id="skillSummary">
        <h1 className={this.props.LandingColour}>skills summary</h1>
        <p>
          Hey! To see some summarized information about my skillset, you can
          click one of the commands in the "terminal" below! For more detailed
          info, check out my coding experience section.
        </p>
        <div id="terminal">
          <div id="terminalHeader">
            <div id="redBtn" className="terminalBtn"></div>
            <div id="yellowBtn" className="terminalBtn"></div>
            <div id="greenBtn" className="terminalBtn"></div>
          </div>
          <div id="terminalText">
            <div id="loginText">
              <span className="terminalWhite">
                Last login: Sat Feb 22 23:43:02 on console
              </span>
            </div>
            <div id="outputtedText" className="terminalWhite">
              {this.state.Output}
            </div>
            <div id="commandText">
              <span className="terminalWhite">
                <span className="neonGreen">gkang-mac: </span>
                <span className="neonPink">~desktop$ </span>
                {this.state.Command}
              </span>
              {!this.state.Printing ? (
                <span className="terminalWhite">
                  <button className="cmdBtn" onClick={this.onClickSkillSummary}>
                    skills summary
                  </button>
                  <button className="cmdBtn" onClick={this.onClickLanguages}>
                    languages
                  </button>
                  &lt;&lt; click a command!
                </span>
              ) : (
                <span></span>
              )}
              {!this.state.Typing ? (
                <span id="cursor">&nbsp;&nbsp;</span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
