import React from "react";
import "../styles/Description.css";
import checks from "../assets/checks.png";
import bag from "../assets/bag.png";
import C from "../assets/C.png";
import "../styles/Description.css";

function Description() {
  return (
    <div className="description">
      <div className="description_main_left">
        <div className="completed">
          <div className="green_circle">
            <img src={bag} />
          </div>
          <h1> 64 </h1>
          <p> Completed </p>
        </div>

        <div className="column_span">
          <div className="meeting">
            <h2>Meeting ...</h2>
            <p>July 28</p>
            <h1>
              2:20 P<span>M</span>
            </h1>
            <hr />
            <div className="web_design">
              <div className="web">Web</div>
              <div className="design">Design</div>
            </div>
          </div>

          <div className="waiting_task">
            <div className="blue_circle">
              <img src={C} />
            </div>
            <p>Waiting Task</p>
            <p> 02 </p>
          </div>
        </div>
      </div>
      <div className="description_main_right">
        <div className="main_feature_heading">
          <h1>Customize the template to suit any brand</h1>
        </div>

        <div className="features">
          <p>
            {" "}
            <img src={checks} /> Add a feature section about the product.
          </p>
          <p>
            <img src={checks} /> Add a feature section about the product.
          </p>
          <p>
            {" "}
            <img src={checks} /> Add a feature section about the product.
          </p>
        </div>

        <div className="button">
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Description;
