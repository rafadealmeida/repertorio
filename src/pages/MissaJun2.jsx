import React from 'react';
import CardCifra from '../components/CardCifra';
import repertorioMissaJun2 from '../_mocks/repertorioMissaJun-2';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaJun() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaJun2} />
    </>
  );
}

export default MissaJun;
