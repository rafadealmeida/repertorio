import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListaCategorias from '../components/ListaCategorias';
import CardCifra from '../components/CardCifra';
import cifras from '../_mocks/cifras';

function Categoria() {
  const { id } = useParams();
  const [cifra, setCifra] = useState([]);

  useEffect(() => {
    setCifra([]);
  }, [id]);

  useEffect(() => {
    cifras.forEach((cifraBack) => {
      let cifraSelect;
      if (cifraBack.categoria === id) {
        cifraSelect = cifraBack;
        setCifra((musica) => musica.concat(cifraSelect));
      }
      return null;
    });
  }, [id]);

  return (
    <>
      <ListaCategorias />
      <CardCifra key={cifra.id} cifras={cifra} />;
    </>
  );
}

export default Categoria;
