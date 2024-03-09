import React from 'react';
import { useLocation } from 'react-router-dom';
import CardCifra from '../components/CardCifra';
import repertorioMissaMarImaculada from '../_mocks/repertorioMissaMarImaculada';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaMar24Judas() {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaMarImaculada} path={path} />
    </>
  );
}

export default MissaMar24Judas;
