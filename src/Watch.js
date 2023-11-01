// import React, { useState, useEffect } from "react";
// import moment from "moment";

// const Watch = () => {
//   const [currentTime, setCurrentTime] = useState(moment());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(moment());
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div className="world-clock">
//       <h2>World Clock</h2>
//       <div className="clock">{currentTime.format("HH:mm:ss")}</div>
//     </div>
//   );
// };

// export default Watch;
