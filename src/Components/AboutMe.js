import React from "react";
import Gallery from "react-photo-gallery";

export default class AboutMe extends React.Component {
  photos = [
    {
      src: "./AboutMeImages/IMG_1280-min.JPG",
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
      src: "./AboutMeImages/7.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/9.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/2.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "./AboutMeImages/IMG_2287-min.JPG",
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
        <br />
        <br />
        <hr />
        <div id="aboutMeDesc">
          <p>
            I'm
            <b className={this.props.LandingColour}> Grace </b>
            , and I'm currently a third year{" "}
            Computer Science student
            at the{" "}
            University of Waterloo. Welcome to my website <span role="img" aria-label="emoji">😺</span>!
            <br />
            <br/>
            I have interned at <span className={this.props.LandingColour}>Wish</span> and <span className={this.props.LandingColour}>Scotiabank</span> in the past, 
            and will be heading back to Wish as a SWE intern in Winter 2021 to continue sharpening my skills.
            While I am still exploring different fields of computer science, I am looking for opportunities that are educationally challenging, but also fulfilling. 
            I am starting to realize that I would like to spend my time creating meaningful technology, and I want my work to reflect that!
            <br/>
            <b>
              I am currently looking for an internship opportunity for{" "}
              <b>
                <span className={this.props.LandingColour}> Summer 2021</span>
              </b>
              , so I would love to chat :)
            </b>
            <br />
            <br/>
            Speaking in terms of my technical interests, I am mostly
            interested in backend development, though I have experience on the full-stack. For more
            information about my skillset or past technical experiences, you can
            head over to my skills summary or my coding experience section.
            <br /> 
            <br />
            Other than math and computer science, I love to take electives in english and psychology. If I didn't go into computer science, I probably 
            would have become an english major or a therapist. I also love to travel, read and spend time with my loved ones!
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
