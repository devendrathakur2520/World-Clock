import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/stopwatch" element={<StopWatch />} />
        </Routes>
        {/* <Countries /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
