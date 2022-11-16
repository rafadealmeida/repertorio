import '../assets/css/cards.css';
import React from 'react';
import { Typography, Card } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function CardCifra({ cifras = [] }) {
  return (
    <div className="card--cifras">
      {cifras.map((cifra) => {
        return (
          <Link key={cifra.id} to={`/cifra/${cifra.id}`} style={{ textDecoration: 'none' }}>
            <Card
              className={`cartao-post--${cifra.categoria} cartao-post `}
              key={cifra.id}
              sx={{
                margin: '5% auto',
                padding: 5,
                borderRadius: '10px',
                height: 70,
                width: 400,
                borderTop: '1.5rem solid',
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
