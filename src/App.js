import "./App.css";
import React, { useState } from "react";
import Navbar from "../src/components/Pages/Navbar/Navbar";
import Main from "./components/Pages/Main/Main";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
