import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./cmps/Header";
import SideBarCmp from "./cmps/SideBarMenu";

import Home from "./pages/Home";
import AppFooter from "./cmps/AppFooter";
import "./App.css";

function App() {
  return (
    <Router>
        {/* Grid layout styles */}
        <div className="main-grid-container">
          <Header />
          <SideBarCmp />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
            <AppFooter />
        </div>
    </Router>
  );
}

export default App;
