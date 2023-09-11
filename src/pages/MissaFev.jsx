import React from 'react';
import { useLocation } from 'react-router-dom';
import CardCifra from '../components/CardCifra';
import repertorioMissaFev from '../_mocks/repertorioMissaFev';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaFev() {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaFev} path={path} />
    </>
  );
}

export default MissaFev;
