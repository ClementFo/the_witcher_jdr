import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import ComposantAlchimie from './pages/ComposantAlchimie';
import ComposantArtisanat from './pages/ComposantArtisanat';
import FormuleAlchimie from './pages/FormuleAlchimie';
import ShemaArtisanat from './pages/ShemaArtisanat';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
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
  </React.StrictMode>
);


