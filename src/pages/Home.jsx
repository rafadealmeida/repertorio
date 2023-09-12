import React from 'react';
import CardCifra from '../components/CardCifra';
import ListaCategorias from '../components/ListaCategorias';
import cifras from '../_mocks/cifras';
import { categorias } from '../_mocks/categorias';

function Home() {
  return (
    <>
      <ListaCategorias categorias={categorias} />
      <CardCifra cifras={cifras} />
    </>
  );
}

export default Home;
