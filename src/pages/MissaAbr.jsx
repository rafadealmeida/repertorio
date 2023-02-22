import React from 'react';
import CardCifra from '../components/CardCifra';
import repertorioMissaAbr from '../_mocks/repertorioMissaAbr';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaAbr() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaAbr} />
    </>
  );
}

export default MissaAbr;
