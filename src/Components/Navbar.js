import React from 'react'
import '../App.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <ul>
            <li><a href='/'>Página Inicial</a></li>
            <li><a href='/para_ouvir'>Para Ouvir</a></li>
            <li><a href='/notificacoes'>Notificações</a></li>
            <li><a href='/listas'>Minhas Listas</a></li>
            <li><a href='/perfil'>Perfil</a></li>
        </ul>
    </nav>
  )
}

export default Navbar