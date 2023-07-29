import React from 'react';
import CardCifra from '../components/CardCifra';
import repertorioMissaAgo from '../_mocks/repertorioMissaAgo';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaAgo() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaAgo} />
    </>
  );
}

export default MissaAgo;
