import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/main.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <hashRouter>
      <App />
    </hashRouter>
  </React.StrictMode>
);
