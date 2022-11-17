import React from 'react';
// eslint-disable-next-line no-unused-vars
import CardCifra from '../components/CardCifra';
import ListaCategorias from '../components/ListaCategorias';
import cifras from '../_mocks/cifras';

function Home() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <ListaCategorias />
      <CardCifra cifras={cifras} />
    </>
  );
}

export default Home;
