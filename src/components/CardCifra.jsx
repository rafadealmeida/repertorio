import React from 'react';
import { Typography, Card } from '@mui/material';
import cifras from '../_mocks/cifras';

function CardCifra() {
  return (
    <>
      {cifras.map((cifra) => {
        return (
          <Card key={cifra.id}>
            <Typography variant="h4">{cifra.titulo}</Typography>
            <pre>{cifra.cifra}</pre>
          </Card>
        );
      })}
    </>
  );
}

export default CardCifra;
