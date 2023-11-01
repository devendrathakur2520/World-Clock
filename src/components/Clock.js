import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(moment().tz(timezone).format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock">
      <div className="clock-title">{timezone}</div>
      <div className="clock-time">{time}</div>
    </div>
  );
};

export default Clock;
