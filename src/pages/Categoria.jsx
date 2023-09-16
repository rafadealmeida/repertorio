import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ListaCategorias from '../components/ListaCategorias';
import CardCifra from '../components/CardCifra';
import cifras from '../_mocks/cifras';
import repertorioMissa from '../_mocks/repertorioMissa';
import repertorioMissaFev from '../_mocks/repertorioMissaFev';
import repertorioMissaAbr from '../_mocks/repertorioMissaAbr';
import repertorioMissaJun from '../_mocks/repertorioMissaJun';
import repertorioMissaAgo from '../_mocks/repertorioMissaAgo';
import repertorioMissaOut from '../_mocks/repertorioMissaOut';
import { categorias, categoriaMissa } from '../_mocks/categorias';

function Categoria() {
  const { id, repertorio: path } = useParams();
  const [cifra, setCifra] = useState([]);
  const [missa, setMissa] = useState(false);
  const repertorio = useRef(null);

  useEffect(() => {
    if (path === 'missaAbr') {
      repertorio.current = repertorioMissaAbr;
      setMissa(true);
    } else if (path === 'missaFev') {
      repertorio.current = repertorioMissaFev;
      setMissa(true);
    } else if (path === 'missa') {
      repertorio.current = repertorioMissa;
      setMissa(true);
    } else if (path === 'missaJun') {
      repertorio.current = repertorioMissaJun;
      setMissa(true);
    } else if (path === 'missaAgo') {
      repertorio.current = repertorioMissaAgo;
      setMissa(true);
    } else if (path === 'missaOut') {
      repertorio.current = repertorioMissaOut;
      setMissa(true);
    } else {
      repertorio.current = cifras;
      setMissa(false);
    }
  }, [path]);

  useEffect(() => {
    setCifra([]);
  }, [id]);

  useEffect(() => {
    if (cifra.length <= 0 && repertorio.current !== null) {
      repertorio.current.forEach((cifraBack) => {
        let cifraSelect;
        if (cifraBack.categoria === id) {
          cifraSelect = cifraBack;
          setCifra((musica) => musica.concat(cifraSelect));
        }
      });
    }
  }, [cifra.length, id, repertorio]);

  return (
    <>
      <ListaCategorias categorias={missa ? categoriaMissa : categorias} />
      <CardCifra key={cifra.id} cifras={cifra} />
    </>
  );
}

export default Categoria;
