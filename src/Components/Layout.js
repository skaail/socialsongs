import React from 'react'
import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import ParaOuvir from '../Pages/ParaOuvir';
import Notificacao from '../Pages/Notificacao';
import Listas from '../Pages/Listas';
import Perfil from '../Pages/Perfil';

function Layout() {
  return (
    <div className="layout">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/para_ouvir" element={<ParaOuvir />} />
        <Route path="/notificacoes" element={<Notificacao />} />
        <Route path="/listas" element={<Listas />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Layout