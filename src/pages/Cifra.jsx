/* eslint-disable import/no-extraneous-dependencies */
import { Card, Typography, Button } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { Icon } from '@iconify/react';
import resetIcon from '@iconify/icons-carbon/reset';
import reactStringReplace from 'react-string-replace';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import cifras from '../_mocks/cifras';
import repertorioMissa from '../_mocks/repertorioMissa';
import repertorioMissaFev from '../_mocks/repertorioMissaFev';

// eslint-disable-next-line prettier/prettier
const acordes =
  /(\b(?:G,C,D|A,B,C|E,C,D)|(?:[ABCDEFG](?:#|b)?)(?:\/[ABCDEFG]b)?(?:(?:(?:maj|min|sus|add|aug|dim|M)(?:\d{0,2}(?:#\d{1,2}|sus\d)?)?)|(?:m\d{0,2}(?:(?:maj|add|#)\d{0,2})?)|(?:-?\d{0,2}(?:\([^)]*\)|#\d{1,2})?))?)/g;

function Cifra() {
  const { id } = useParams();
  const [cifra, setCifra] = useState({});
  const [tamanho, setTamanho] = useState(1);
  const matches = useMediaQuery('(max-width:768px)');

  const CifraSelect = styled.pre`
    font-size: ${tamanho}rem;
    white-space: pre-wrap;
    @media screen and (max-width: 768px) {
      font-size: ${tamanho / 2}rem;
    }
  `;

  useEffect(() => {
    if (Number(id) < 1000) {
      const cifraSelect = cifras.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 1000) {
      const cifraSelect = repertorioMissa.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 2000) {
      const cifraSelect = repertorioMissaFev.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
  }, [id]);

  return (
    <>
      <Link to="/">
        <Button variant="contained" sx={{ marginTop: '1rem', marginLeft: (() => (matches ? '58%' : '90%'))() }}>
          Voltar a home
        </Button>
      </Link>
      <Button
        variant="contained"
        sx={{ marginTop: '1rem', marginLeft: (() => (matches ? '0%' : '0%'))() }}
        onClick={() => setTamanho(tamanho - 0.1)}
      >
        A-
      </Button>
      <Button
        variant="contained"
        sx={{ marginTop: '1rem', marginLeft: (() => (matches ? '1%' : '1%'))() }}
        onClick={() => setTamanho(1)}
      >
        <Icon icon={resetIcon} fontSize={24} />
      </Button>
      <Button
        variant="contained"
        sx={{ marginTop: '1rem', marginLeft: (() => (matches ? '2%' : '2%'))() }}
        onClick={() => setTamanho(tamanho + 0.1)}
      >
        A+
      </Button>
      <Card sx={{ width: '100%' }}>
        <Typography variant="h4" sx={{ textIndent: '1rem', marginTop: '1rem' }}>
          {cifra.titulo}
        </Typography>
        <Typography variant="subtitle2" sx={{ textIndent: '1rem' }}>
          Categoria: <strong>{cifra.categoria}</strong>
        </Typography>
        {cifra.link && (
          <iframe
            width="1280"
            height="720"
            src={`${cifra.link}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        )}
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/szAXJgaI_kI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
          teste
        </iframe> */}
        <CifraSelect>
          {reactStringReplace(cifra.cifra, acordes, (match, i) => (
            <b key={i} style={{ color: '#f70' }}>
              {match}
            </b>
          ))}
        </CifraSelect>
      </Card>
    </>
  );
}

export default Cifra;
