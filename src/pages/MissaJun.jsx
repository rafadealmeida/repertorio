import React from 'react';
import CardCifra from '../components/CardCifra';
import repertorioMissaJun from '../_mocks/repertorioMissaJun';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaJun() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaJun} />
    </>
  );
}

export default MissaJun;
