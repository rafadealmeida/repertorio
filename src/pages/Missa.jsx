import React from 'react';
import CardCifra from '../components/CardCifra';
import repertorioMissa from '../_mocks/repertorioMissa';
import ListaCategorias from '../components/ListaCategorias';
import { categoriaMissa } from '../_mocks/categorias';

function Missa() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias categorias={categoriaMissa} />
      <CardCifra cifras={repertorioMissa} />
    </>
  );
}

export default Missa;
