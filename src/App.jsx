import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Avatar from "./src/img/logo_FM.png";
import "./styles/components/app.sass";

function App() {
  return (
    <Router basename="/FM_Portifolio_Fernando-Moreira">
      <div id="portfolio">
        <h1>
          <img id="img-logo" src={Avatar} alt="Fernando Moreira" />
        </h1>
        <Sidebar />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
