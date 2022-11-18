import { Card, Typography, Button } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import reactStringReplace from 'react-string-replace';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import cifras from '../_mocks/cifras';

const CifraSelect = styled.pre`
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
// eslint-disable-next-line prettier/prettier
const acordes =
  /(\b(?:G,C,D|A,B,C|E,C,D)|(?:[ABCDEFG](?:#|b)?)(?:\/[ABCDEFG]b)?(?:(?:(?:maj|min|sus|add|aug|dim|M)(?:\d{0,2}(?:#\d{1,2}|sus\d)?)?)|(?:m\d{0,2}(?:(?:maj|add|#)\d{0,2})?)|(?:-?\d{0,2}(?:\([^)]*\)|#\d{1,2})?))?)/g;

function Cifra() {
  const { id } = useParams();
  const [cifra, setCifra] = useState({});
  const matches = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    const cifraSelect = cifras.find((cifraBack) => cifraBack.id === Number(id));
    setCifra(cifraSelect);
  }, [id]);
  return (
    <>
      <Link to="/">
        <Button variant="contained" sx={{ marginTop: '1rem', marginLeft: (() => (matches ? '58%' : '90%'))() }}>
          Voltar a home
        </Button>
      </Link>
      <Card sx={{ width: '100%' }}>
        <Typography variant="h4" sx={{ textIndent: '1rem', marginTop: '1rem' }}>
          {cifra.titulo}
        </Typography>
        <Typography variant="subtitle2" sx={{ textIndent: '1rem' }}>
          Categoria: <strong>{cifra.categoria}</strong>
        </Typography>
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
