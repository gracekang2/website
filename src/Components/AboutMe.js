import React from "react";
import Gallery from "react-photo-gallery";

export default class AboutMe extends React.Component {
  photos = [
    {
      src: "Images/about_me_vertical_21.jpg",
      width: 3,
      height: 4.5,
    },
    {
      src: "Images/about_me_vertical_2.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_6.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_23.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_5.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_25.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_27.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_28.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_29.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_30.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_17.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_3.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_32.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_31.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_8.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_9.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_10.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_11.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_12.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_13.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_15.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_34.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_16.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_19.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "Images/about_me_vertical_20.jpg",
      width: 3,
      height: 4,
    },
  ];

  componentDidMount() {
    fetch("https://currently-reads.now.sh/reading/114484403/json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          currentBook: data && data.length && data[0] && data[0].book,
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div id="aboutMe">
        <h1 className={this.props.LandingColour}>about me</h1>
        <span className={this.props.BackgroundColour + " aboutMeCategory"}>
          Name:
        </span>
        <span className="aboutMeAns">Grace Kang 🤠</span>
        <br />
        <br />
        <span className={this.props.BackgroundColour + " aboutMeCategory"}>
          Program:
        </span>
        <span className="aboutMeAns">
          2B Computer Science, University of Waterloo 🦆
        </span>
        <br />
        <br />
        <span className={this.props.BackgroundColour + " aboutMeCategory"}>
          Nationality:
        </span>
        <span className="aboutMeAns">Canadian / South Korean 🍙</span>
        <br />
        <br />
        <span className={this.props.BackgroundColour + " aboutMeCategory"}>
          Hometown:
        </span>
        <span className="aboutMeAns">Toronto, Canada 🍁</span>
        <p id="aboutMeDesc">
          Nice to meet you! As you can probably tell, my name is
          <b>
            <span className={this.props.LandingColour}> Grace </span>
          </b>
          and I'm a second year Computer Science student at the University of
          Waterloo. <br />
          When I'm not coding, I love to spend time with my loved ones
          (especially my dog), go hiking, and travel! Some of my favourite
          places that I've visited are Quebec City and California, but South
          Korea is definitely my top travel destination for all the delicious
          street food. I've always loved to take pictures everywhere I go, but
          I've recently taken up film photography. Even though it's expensive to
          keep up with the film + development costs, it's quickly become one of
          my favourite hobbies.
          <b>
            <span className={this.props.LandingColour}>
              {" "}
              Scroll down to see some of my film pictures, and some other
              pictures I've taken in the last year or so!
            </span>
          </b>{" "}
          You'll find lots of pictures of my friends, but also of my dog! His
          name is Teddy - my family adopted him in 2016, and I love him with all
          my heart.
          <br />
          Speaking in terms of my technical interests -- while most of my
          experience is in full-stack software engineering, I'm currently
          leaning more towards backend development! I would love any opportunity
          to grow in that area of Computer Science, so feel free to reach out if
          you're interested. For more information about my skillset or past
          technical experiences, you can head over to my skills summary or my
          coding experience section.
          <br />I am currently looking for an internship opportunity for{" "}
          <b>
            <span className={this.props.LandingColour}> Fall 2020</span>
          </b>
          , so I would love to chat!
          <br />
        </p>
        <h1 className={this.props.LandingColour}>some pictures!</h1>
        <Gallery photos={this.photos}></Gallery>
      </div>
    );
  }
}
