import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ComposantAlchimie from './pages/ComposantAlchimie';
import ComposantArtisanat from './pages/ComposantArtisanat';
import FormuleAlchimie from './pages/FormuleAlchimie';
import ShemaArtisanat from './pages/ShemaArtisanat';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ComposantAlchimie" element={<ComposantAlchimie />} />
        <Route path="/ComposantArtisanat" element={<ComposantArtisanat />} />
        <Route path="/FormuleAlchimie" element={<FormuleAlchimie />} />
        <Route path="/ShemaArtisanat" element={<ShemaArtisanat />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


