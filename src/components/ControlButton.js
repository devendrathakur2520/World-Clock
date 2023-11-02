import React from "react";

export default function ControlButtons(props) {
  const StartButton = (
    <div
      className="btn btn-one btn-start"
      style={{ color: "aquamarine" }}
      onClick={props.handleStart}
    >
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div
        className="btn btn-two"
        style={{ color: "darkred" }}
        onClick={props.handleReset}
      >
        Reset
      </div>
      <div
        className="btn btn-one"
        style={{ color: "#adad1b" }}
        onClick={props.handlePauseResume}
      >
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
      <div
        className="btn btn-one btn-start"
        style={{ color: "aquamarine" }}
        onClick={props.handleReverse}
      >
        5 min
      </div>
      {/* <div
        className="btn btn-one btn-start"
        style={{ color: "aquamarine" }}
        onClick={props.handleReverse}
      >
        10 min
      </div> */}
    </div>
  );
}
