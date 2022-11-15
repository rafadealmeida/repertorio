import { Card, Typography, Button } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import cifras from '../_mocks/cifras';

const CifraSelect = styled.pre`
  font-size: 1.5rem;
`;

function Cifra() {
  const { id } = useParams();
  const [cifra, setCifra] = useState({});

  useEffect(() => {
    const cifraSelect = cifras.find((cifraBack) => cifraBack.id === Number(id));
    setCifra(cifraSelect);
  }, [id]);
  return (
    <>
      <Card>
        <Typography variant="h2" sx={{ textIndent: '1rem', marginTop: '1rem' }}>
          {cifra.titulo}
        </Typography>
        <CifraSelect>{cifra.cifra}</CifraSelect>
      </Card>
      <Link to="/">
        <Button variant="contained" sx={{ marginTop: '1rem', marginLeft: '90%' }}>
          Voltar a home
        </Button>
      </Link>
    </>
  );
}

export default Cifra;
