import React from 'react';
import { Link } from 'react-router-dom';
import categorias from '../_mocks/categorias';
import '../assets/css/categorias.css';

function ListaCategorias() {
  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => (
        <Link key={categoria.id} to={`/categoria/${categoria.id}`} className="link">
          <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
            {categoria.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default ListaCategorias;
