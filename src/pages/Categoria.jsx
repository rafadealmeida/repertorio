import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListaCategorias from '../components/ListaCategorias';
import CardCifra from '../components/CardCifra';
import cifras from '../_mocks/cifras';
import repertorioMissa from '../_mocks/repertorioMissa';
// eslint-disable-next-line no-unused-vars
import { categorias, categoriaMissa } from '../_mocks/categorias';

function Categoria() {
  const { id } = useParams();
  console.log(id);
  console.log(categorias);
  console.log(categoriaMissa);
  const [cifra, setCifra] = useState([]);
  const [missa, setMissa] = useState(false);
  console.log(missa);

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
    });
    setMissa(false);
  }, [id]);

  useEffect(() => {
    if (cifra.length <= 0) {
      repertorioMissa.forEach((cifraBack) => {
        let cifraSelect;
        if (cifraBack.categoria === id) {
          cifraSelect = cifraBack;
          setCifra((musica) => musica.concat(cifraSelect));
          setMissa(true);
        }
      });
    }
  }, [cifra.length, id]);

  return (
    <>
      <ListaCategorias categorias={missa ? categoriaMissa : categorias} />
      <CardCifra key={cifra.id} cifras={cifra} />
    </>
  );
}

export default Categoria;
