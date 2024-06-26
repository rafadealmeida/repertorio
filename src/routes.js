import React from 'react';
// eslint-disable-next-line no-unused-vars
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import Home from './pages/Home';
import Missa from './pages/Missa';
import MissaFev from './pages/MissaFev';
import MissaAbr from './pages/MissaAbr';
import MissaJun from './pages/MissaJun';
import MissaJun2 from './pages/MissaJun2';
import MissaAgo from './pages/MissaAgo';
import MissaOut from './pages/MissaOut';
import MissaOut2 from './pages/MissaOut2';
import MissaFev24 from './pages/MissaFev24';
import MissaFev24Imaculada from './pages/MissaFev24Imaculada';
import MissaFev24Pedro from './pages/MissaFev24Pedro';
import MissaMar24Judas from './pages/MissaMar24Judas';
import MissaMar24Imac from './pages/MissaMar24Imac';
import Cifra from './pages/Cifra';
import Drawer from './components/Drawer';
import Categoria from './pages/Categoria';
import './assets/css/link_top.css';

export default function AppRouter() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Router>
      <Drawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missa" element={<Missa />} />
        <Route path="/missafev" element={<MissaFev />} />
        <Route path="/missaabr" element={<MissaAbr />} />
        <Route path="/missajun" element={<MissaJun />} />
        <Route path="/missajun2" element={<MissaJun2 />} />
        <Route path="/missaago" element={<MissaAgo />} />
        <Route path="/missaOut" element={<MissaOut />} />
        <Route path="/missaOut2" element={<MissaOut2 />} />
        <Route path="/missaFev24" element={<MissaFev24 />} />
        <Route path="/missaFev24Imaculada" element={<MissaFev24Imaculada />} />
        <Route path="/missaFev24Pedro" element={<MissaFev24Pedro />} />
        <Route path="/missaMar24Judas" element={<MissaMar24Judas />} />
        <Route path="/MissaMar24Imac" element={<MissaMar24Imac />} />
        <Route path="/:repertorio/cifra/:id" element={<Cifra />} />
        {/* <Route path="categoria/:id" element={<Categoria />} /> */}
        <Route path="categoria/:repertorio/:id" element={<Categoria />} />
      </Routes>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a id="link__topo" href="#">
        <Icon icon="material-symbols:arrow-upward" />
      </a>
    </Router>
  );
}
