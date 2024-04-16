import React from "react";
import { HashRouter as Router, Routes, Route,Outlet } from "react-router-dom";
import Header from "./cmps/Header";

import Home from "./pages/Home";
import {SensorExample} from "./pages/SensorExample";
import AppFooter from "./cmps/AppFooter";
import AboutUs from "./pages/AboutUs";
import SettingsPage from "./pages/Settings";
import "./App.css";
import SideBarNew from "./cmps/SideBarNew";


function App() {
  return (
    <Router>
        {/* Grid layout styles */}
        <div className="main-grid-container">
          <Header />
          <SideBarNew />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sensor" element={<SensorExample />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/settings" element={<SettingsPage />} /> {/* Add Helo route here */}

          </Routes>
            <AppFooter />
            
        </div>
        <Outlet />
    </Router>
  );
}

export default App;
