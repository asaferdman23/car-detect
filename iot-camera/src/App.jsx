import React from "react";
import { HashRouter as Router, Routes, Route,Outlet } from "react-router-dom";
import Header from "./cmps/Header";
import SideBarCmp from "./cmps/SideBarMenu";
import Halo from "./pages/Halo";

import Home from "./pages/Home";
import {Helo} from "./pages/Helo";
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
          <Route path="/" element={<Home />}>
            <Route path="/halo" element={<Halo />} /> 
          </Route>
          </Routes>
            <AppFooter />
            
        </div>
        <Outlet />
    </Router>
  );
}

export default App;
