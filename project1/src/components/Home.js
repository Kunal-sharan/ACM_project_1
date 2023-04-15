import React from "react";
import "../styles/Home.css";
import outercircle from "../assets/outercircle.png";
import graph from "../assets/graph.png";
import comments from "../assets/comments.png";
import cubexdesign from "../assets/cubexdesign.png";
import outercirclenew from "../assets/outercirclenew.png";
import star from "../assets/star.png";
import phone from "../assets/phone.png";

function Home() {
  return (
    <div className="home_container">
      <div className="home_div1">
        <div className="home_heading">
          <h1>Cubex makes it easy to run your business.</h1>
        </div>
        <div className="home_para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus
            nunc, fermentum id ex non, dapibus hendrerit eros.
          </p>
        </div>
        <div className="home_store_getstarted">
          <p className="get_started">Get Started</p>
        </div>
      </div>

      <div className="home_div2">
        <div className="home_row">
          <div className="projects">
            <div className="img_overlap">
              <img className="under" src={outercircle} />
              <img className="over" src={graph} />
            </div>
            <h1>158</h1>
            <p>Projects</p>
          </div>

          <div className="team_marketing">
            <p>Design System</p>
            <h2>Team Marketing</h2>
            <div className="call_container">
              <div className="phoneicon_container">
                <img src={phone} />
              </div>
              <p> Swipe to Call </p>
            </div>
          </div>
        </div>

        <div className="home_column">
          <h3>
            {" "}
            <div className="img_overlap">
              <img className="under" src={outercirclenew} />{" "}
              <img className="above" src={star} />
              Task Completed 08
            </div>
          </h3>
          <hr />

          <p>
            {" "}
            <img className="comment" src={comments} /> 3 comments{" "}
            <img className="cubex" src={cubexdesign} /> cubexdesign.fig
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
