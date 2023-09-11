import '../assets/css/cards.css';
import React from 'react';
import { Typography, Card } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import colors from '../_mocks/colors';

// eslint-disable-next-line react/prop-types
function CardCifra({ cifras = [], path }) {
  const matches = useMediaQuery('(max-width:768px)');
  return (
    <div className="card--cifras">
      {cifras.map((cifra) => {
        return (
          <Link key={cifra.id} to={`/${path}/cifra/${cifra.id}`} style={{ textDecoration: 'none' }}>
            <Card
              className={`cartao-post--${cifra.categoria} cartao-post `}
              key={cifra.id}
              sx={{
                margin: '5% auto',
                padding: 5,
                borderRadius: '10px',
                height: (() => (matches ? 150 : 70))(),
                width: (() => (matches ? 270 : 400))(),
                borderTop: '1.5rem solid',
                borderColor: (() => colors.find((color) => color.categoria === cifra.categoria).color)(),
              }}
            >
              <Typography variant="h4">{cifra.titulo}</Typography>
              <Typography variant="subtitle2">
                Categoria: <strong>{cifra.categoria}</strong>
              </Typography>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default CardCifra;
