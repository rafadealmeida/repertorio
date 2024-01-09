import React from 'react';
import { useLocation } from 'react-router-dom';
import CardCifra from '../components/CardCifra';
import repertorioMissaFev24 from '../_mocks/repertorioMissaFev24';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaOut() {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaFev24} path={path} />
    </>
  );
}

export default MissaOut;
