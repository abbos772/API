import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Pages/Navbar/Navbar";
import Main from "./components/Pages/Main/Main";
import Login from "./components/Pages/Login/Login";
import Auth from "./components/Pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Auth />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
