import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
// import StopWatch from "./components/Stopwatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/clock" element={<Countries />} />
        </Routes>
        {/* <Routes>
          <Route path="/stopwatch" element={<StopWatch />} />
        </Routes> */}
        {/* <Countries /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
