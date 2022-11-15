import React from 'react';
import { Typography, Card } from '@mui/material';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
// import cifras from '../_mocks/cifras';

const Cifra = styled.pre`
  font-size: 1.5rem;
`;

// eslint-disable-next-line react/prop-types
function CardCifra({ cifras = [] }) {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  return (
    <>
      {cifras.map((cifra) => {
        return (
          <Link key={cifra.id} to={`/cifra/${cifra.id}`} style={{ textDecoration: 'none' }}>
            <Card
              key={cifra.id}
              sx={{
                margin: '5% auto',
                padding: 5,
                borderRadius: '10px',
                height: 200,
                width: 1200,
                borderTop: '1.5rem solid blue',
              }}
            >
              <Typography variant="h4">{cifra.titulo}</Typography>
              <Typography variant="subtitle2">
                Categoria: <strong>{cifra.categoria}</strong>
              </Typography>
              <Cifra>{cifra.cifra}</Cifra>
            </Card>
          </Link>
        );
      })}
    </>
  );
}

export default CardCifra;
