import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import '../assets/css/categorias.css';

// eslint-disable-next-line react/prop-types
function ListaCategorias({ categorias = [] }) {
  const location = useLocation();
  const params = useParams();
  const path = location.pathname;
  let pathRep;

  // useEffect(() => {}, []);
  if (params.repertorio === undefined) {
    pathRep = path;
  } else {
    pathRep = `/${params.repertorio}`;
  }
  if (params.repertorio === undefined && path === '/') {
    pathRep = '/oracao';
  }

  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => {
        // eslint-disable-next-line eqeqeq, prettier/prettier
        if (categoria.id === 'Todas') {
          return (
            <Link key={categoria.id} to={`/${params.repertorio}`} className="link">
              <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                {categoria.nome}
              </li>
            </Link>
          );
        }
        return (
          <Link key={categoria.id} to={`/categoria${pathRep}/${categoria.id}`} className="link">
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
