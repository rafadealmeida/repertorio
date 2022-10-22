import React from 'react';
import { Typography, Card } from '@mui/material';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import cifras from '../_mocks/cifras';

const Cifra = styled.pre`
  font-size: 1.5rem;
`;

function CardCifra() {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  return (
    <>
      {cifras.map((cifra) => {
        return (
          <Card key={cifra.id} sx={{ margin: '5% auto', padding: 5, borderRadius: '10px' }}>
            <Typography variant="h4">{cifra.titulo}</Typography>
            <Cifra>{cifra.cifra}</Cifra>
          </Card>
        );
      })}
    </>
  );
}

export default CardCifra;
