import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from './components/Portfolio'
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* 404 handling */}
            <Route path="*" element={<About />} /> 
        </Routes> 
  </React.StrictMode>
    </BrowserRouter>
);