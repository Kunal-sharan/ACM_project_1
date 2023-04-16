import React from "react";
import check from "../assets/check.png";
import battery from "../assets/battery.png";
import hexicon from "../assets/hexicon.png";
import "../styles/featurebar.css";

function Featurebar1() {
  return (
    <div className="feature_bar">
      <div className="feature_1">
        <div className="ficon_1">
          <img className="icon_image1" src={check} />
        </div>
        <p>Save Time And build better{"\n"}with Cubex Template.</p>
      </div>
      <div className="feature_2">
        <div className="ficon_2">
          <img className="icon_image2" src={battery} />
        </div>
        <p>Easy to edit and customize{"\n"}for your own projects.</p>
      </div>
      <div className="feature_3">
        <div className="ficon_3">
          <img className="icon_image3" src={hexicon} />
        </div>
        <p>Deliver an enterprise{"\n"}Quality projects in minutes.</p>
      </div>
    </div>
  );
}

export default Featurebar1;
