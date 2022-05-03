import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
