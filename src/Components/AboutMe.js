import React from "react";
import Gallery from "react-photo-gallery";

export default class AboutMe extends React.Component {
  photos = [
    {
      src: "./AboutMeImages/IMG_1280-min.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/IMG_1496-min.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/IMG_2287-min.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/IMG_6362-min.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/IMG_6503-min.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/IMG_6684-min.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/IMG_6880-min.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/15.jpg",
      width: 3,
      height: 4.5,
    },
    {
      src: "./AboutMeImages/14.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/12.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/3.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/4.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/11.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/5.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/7.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/8.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/9.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/6.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/10.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/2.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/13.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/1.jpg",
      width: 3,
      height: 4,
    },
  ];

  state = {};

  render() {
    return (
      <div id="aboutMe">
        <h1 className={this.props.LandingColour}>about me</h1>
        <span className={this.props.BackgroundColour + " aboutMeCategory"}>
          Name:
        </span>
        <span className="aboutMeAns">Grace Kang <span role="img" aria-label="emoji">🤠</span></span>
        <br />
        <br />
        <span className={this.props.BackgroundColour + " aboutMeCategory"}>
          Program:
        </span>
        <span className="aboutMeAns">
          3A Computer Science, University of Waterloo <span role="img" aria-label="emoji">🦆</span>
        </span>
        <br />
        <br />
        <span className={this.props.BackgroundColour + " aboutMeCategory"}>
          Hometown:
        </span>
        <span className="aboutMeAns">Toronto, Canada <span role="img" aria-label="emoji">🍁</span></span>
        {this.state.currentBook ? (
          <>
            <br />
            <br />
            <span className={this.props.BackgroundColour + " aboutMeCategory"}>
              Currently Reading... <span role="img" aria-label="emoji">💭</span>
            </span>
            <span className="aboutMeAns">
              {this.state.currentBook.title_without_series},{" "}
              {this.state.currentAuthor}
              <a
                href="https://www.goodreads.com/user/show/114484403-grace"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#551A8B" }}
              >
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    marginLeft: "6px",
                    marginBottom: "-5px",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                  />
                </svg>
              </a>
            </span>
          </>
        ) : (
          <>
            <br/>
            <br/>
            <span className={this.props.BackgroundColour + " aboutMeCategory"}>
              Currently Reading... <span role="img" aria-label="emoji">💭</span>
            </span>
            <span className="aboutMeAns">
              {" "}
              {" "}
              <a
                href="https://www.goodreads.com/user/show/114484403-grace"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#551A8B" }}
              >
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    marginLeft: "6px",
                    marginBottom: "-5px",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                  />
                </svg>
              </a>
            </span>
          </>
        )}
        <br />
        <br />
        <hr />
        <div id="aboutMeDesc">
          <p>
            Welcome to my website <span role="img" aria-label="emoji">😺</span>! My name is
            <b className={this.props.LandingColour}> Grace </b>
            and I'm a third year{" "}
            <b className={this.props.LandingColour}>Computer Science</b> student
            at the{" "}
            <b className={this.props.LandingColour}>University of Waterloo.</b>
            <br />
            <br />
            Speaking in terms of my technical interests -- while most of my
            experience is in full-stack software engineering, I'm mostly
            interested in backend development! I would love any opportunity to
            grow my skillset in that area of Computer Science. For more
            information about my skillset or past technical experiences, you can
            head over to my skills summary or my coding experience section.
            <br />
            <b>
              I am currently looking for an internship opportunity for{" "}
              <b>
                <span className={this.props.LandingColour}> Summer 2021</span>
              </b>
              , so I would love to chat!
            </b>
            <br />
            <br />
            Let me also tell you a little more about me! Here are a few of my
            favourites...
            <br />
          </p>
          <ol>
            <li>
              <b className={this.props.LandingColour}>book - </b> Norwegian Wood by Haruki Murakami
            </li>
            <li>
              <b className={this.props.LandingColour}>movie - </b> A Beautiful
              Mind
            </li>
            <li>
              <b className={this.props.LandingColour}>artists - </b> Daniel
              Caesar, Khalid and Rich Brian
            </li>
          </ol>
          <p>
            I also love to spend time with my loved ones (especially my dog),
            read, and travel! Some of my favourite places that I've visited are
            Quebec City and California, but South Korea is definitely my top
            travel destination for all the delicious street food. If you scroll
            down, you'll find pictures of me and my friends, but also of my dog
            <span role="img" aria-label="emoji">🐶</span>! His name is Teddy and my family adopted him in 2016.
            <br />
          </p>
        </div>
        <hr />
        <h1 className={this.props.LandingColour}>some pictures!</h1>
        <Gallery photos={this.photos}></Gallery>
      </div>
    );
  }
}
