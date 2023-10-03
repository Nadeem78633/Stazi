import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import Header from "./Components/Home/Header";
import Cards from "./Components/Card/Cards";

import "./app.css";

const App = () => {
  return (
    <>
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/page/:page" element={<Cards />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
