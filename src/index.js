import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context";
// Call make Srver
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <FilterProvider> */}
        <DataProvider>
          <App />
        </DataProvider>
      {/* </FilterProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
