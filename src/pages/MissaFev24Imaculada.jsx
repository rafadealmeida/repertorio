import React from 'react';
import { useLocation } from 'react-router-dom';
import CardCifra from '../components/CardCifra';
import repertorioMissaFev24Imaculada from '../_mocks/repertorioMissaFev24Imaculada';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaFev24Imaculada() {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaFev24Imaculada} path={path} />
    </>
  );
}

export default MissaFev24Imaculada;
