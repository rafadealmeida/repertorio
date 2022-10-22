import React from 'react';
// eslint-disable-next-line no-unused-vars
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teste from './pages/Teste';

export default function AppRouter() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
}
