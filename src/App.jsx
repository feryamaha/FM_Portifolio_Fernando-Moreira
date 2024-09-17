import MainContent from "./components/MainContent";

import Sidebar from "./components/Sidebar";

import Avatar from "../src/img/logo_FM.png";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>
        <img id="img-logo" src={Avatar} alt="Fernando Moreira" />
      </h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
