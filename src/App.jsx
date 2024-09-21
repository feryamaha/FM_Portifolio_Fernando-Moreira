import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Avatar from "./img/logo_FM.png";
import "./styles/components/app.sass";

function App() {
  return (
    <Router basename="/FM_Portifolio_Fernando-Moreira">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <div id="portfolio">
              <h1>
                <img id="img-logo" src={Avatar} alt="Fernando Moreira" />
              </h1>
              <Sidebar />
              <MainContent />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
