import React from 'react';
import CardCifra from '../components/CardCifra';
import repertorioMissaFev from '../_mocks/repertorioMissaFev';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function MissaFev() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissaFev} />
    </>
  );
}

export default MissaFev;
