import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "../components/Timer";
import ControlButtons from "./ControlButton";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <>
      <h1>Stop-Watch</h1>

      <div
        className="stop-watch"
        style={{ justifyContent: "center", margin: "auto", height: "    " }}
      >
        <Timer time={time} />
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>
    </>
  );
}

export default StopWatch;
