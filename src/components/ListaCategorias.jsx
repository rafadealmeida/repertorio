import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/categorias.css';

// eslint-disable-next-line react/prop-types
function ListaCategorias({ categorias = [] }) {
  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => {
        // eslint-disable-next-line eqeqeq, prettier/prettier
        if (categoria.id === 'Todas') {
          return (
            <Link key={categoria.id} to="/missaAbr" className="link">
              <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                {categoria.nome}
              </li>
            </Link>
          );
        }
        return (
          <Link key={categoria.id} to={`/categoria/${categoria.id}`} className="link">
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
              {categoria.nome}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default ListaCategorias;
