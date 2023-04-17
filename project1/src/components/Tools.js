import React from "react";
import figma from "../assets/figma.png";
import mailchimp from "../assets/mailchrimp.png";
import trello from "../assets/trello.png";
import discord from "../assets/discord.png";
import facebook from "../assets/facebook.png";
import slack from "../assets/slack.png";
import arrow from "../assets/arrow.png";
import "../styles/Tools.css";

function Tools() {
  return (
    <>
      <div className="heading_1">
        <p>INTEGRATIONS</p>
      </div>
      <div className="heading_2">
        <p>Deploy your project with the right tools</p>
      </div>
      <div className="tools">
        <div className="tools_col1">
          <div className="Menu">
            <div className="icon">
              <img className="tools_icon" src={figma} />
            </div>
            <div className="icon_desc">
              <p>Figma</p>
              <div className="desc">Design Tool</div>
            </div>
            <div className="arrow">
              <img className="arrow_left" src={arrow} />
            </div>
          </div>
          <div className="Menu">
            <div className="icon">
              <img className="tools_icon" src={mailchimp} />
            </div>
            <div className="icon_desc">
              <p>MailChimp</p>
              <div className="desc">Mails Services</div>
            </div>
            <div className="arrow">
              <img className="arrow_left" src={arrow} />
            </div>
          </div>
          <div className="Menu">
            <div className="icon">
              <img className="tools_icon" src={trello} />
            </div>
            <div className="icon_desc">
              <p>Trello</p>
              <div className="desc">Note Taking</div>
            </div>
            <div className="arrow">
              <img className="arrow_left" src={arrow} />
            </div>
          </div>
        </div>
        <div className="tools_col1">
          <div className="Menu">
            <div className="icon">
              <img className="tools_icon" src={discord} />
            </div>
            <div className="icon_desc">
              <p>Discord</p>
              <div className="desc">Chat Services</div>
            </div>
            <div className="arrow">
              <img className="arrow_left" src={arrow} />
            </div>
          </div>
          <div className="Menu">
            <div className="icon">
              <img className="tools_icon" src={facebook} />
            </div>
            <div className="icon_desc">
              <p>Facebook</p>
              <div className="desc">Social Media</div>
            </div>
            <div className="arrow">
              <img className="arrow_left" src={arrow} />
            </div>
          </div>
          <div className="Menu">
            <div className="icon">
              <img className="tools_icon" src={slack} />
            </div>
            <div className="icon_desc">
              <p>Slack</p>
              <div className="desc">Communication</div>
            </div>
            <div className="arrow">
              <img className="arrow_left" src={arrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
