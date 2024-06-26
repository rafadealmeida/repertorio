import React from 'react';
import { useLocation } from 'react-router-dom';
import CardCifra from '../components/CardCifra';
import repertorioMissa from '../_mocks/repertorioMissa';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function Missa() {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissa} path={path} />
    </>
  );
}

export default Missa;
