// import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AppFooter from "./cmps/AppFooter";
import "./assets/css/index.css";

function App() {
  return (
    <Router>
      <section className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <AppFooter />
      </section>
    </Router>
  );
}

export default App;
