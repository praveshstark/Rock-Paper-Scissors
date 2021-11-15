import React from "react";
import scissor from "../images/scissor.png";
import paper from "../images/paper.png";
import rock from "../images/rock.png";

const Team = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "paper" ? paper : scissor
        }
        alt="Rock Paper Scissor"
      />
    </div>
  </>
);

export default Team;
