import React, { Component } from "react";
import Typing from "react-typing-animation";
let firstLine = '<div className="projects">';
let secondLine = "<p>Welcome to my website! I hope you enjoy what you see!</p>";
let thirdLine = "</div>";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-top">
          <div className="home-top-left">
            <h2>Hello There</h2>
            <p>
              I am <span className="home-name">Timur James Tanurhan</span>. I'm a full-stack web developer.
            </p>
          </div>
          <Typing>
            <div className="home-top-right">
              {firstLine}
              <br />
              <Typing.Delay ms={1000} />
              {secondLine}
              <br />
              <Typing.Delay ms={1000} />
              {thirdLine}
              <Typing.Cursor />
            </div>
          </Typing>
        </div>
        <a
          href="https://drive.google.com/file/d/15O7UDyTQG85XlIgNZnn3FduMuGV5IImm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button">Resume</div>
        </a>
      </div>
    );
  }
}

export default Home;
