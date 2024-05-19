import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Realisations from './pages/Realisations';
import APropos from './pages/APropos';
import CV from './pages/CV';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Realisations" element={<Realisations />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);