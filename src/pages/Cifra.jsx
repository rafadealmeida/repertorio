/* eslint-disable import/no-extraneous-dependencies */
import { Card, Typography, Button, Box } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Icon } from '@iconify/react';
import resetIcon from '@iconify/icons-carbon/reset';
import reactStringReplace from 'react-string-replace';
import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useParams, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import cifras from '../_mocks/cifras';
import repertorioMissa from '../_mocks/repertorioMissa';
import repertorioMissaFev from '../_mocks/repertorioMissaFev';
import repertorioMissaAbr from '../_mocks/repertorioMissaAbr';
import deixaALuz from '../assets/musicBases/deixaLuz__intro.wav';
import gloria from '../assets/musicBases/gloria3.wav';
import joiaRara from '../assets/musicBases/joiaRara__tom-G.wav';
import sacramento from '../assets/musicBases/sacramento2.wav';
import sejaLuz from '../assets/musicBases/sejaLuz2.wav';

// eslint-disable-next-line prettier/prettier
const acordes =
  /(\b(?:G,C,D|A,B,C|E,C,D)|(?:[ABCDEFG](?:#|b)?)(?:\/[ABCDEFG]b)?(?:(?:(?:maj|min|sus|add|aug|dim|M)(?:\d{0,2}(?:#\d{1,2}|sus\d)?)?)|(?:m\d{0,2}(?:(?:maj|add|#)\d{0,2})?)|(?:-?\d{0,2}(?:\([^)]*\)|#\d{1,2})?))?)/g;

function Cifra() {
  const { id } = useParams();
  const [cifra, setCifra] = useState({});
  const [tamanho, setTamanho] = useState(1);
  const matches = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();

  const CifraSelect = styled.pre`
    font-size: ${tamanho}rem;
    white-space: pre-wrap;
    @media screen and (max-width: 768px) {
      font-size: ${tamanho / 2}rem;
    }
  `;

  const LinkMusica = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
    background-image: '../assets/img/play.svg';
    background-repeat: no-repeat;
    background-size: 15rem;
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
    if (Number(id) >= 3000) {
      const cifraSelect = repertorioMissaAbr.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
  }, [id]);

  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        variant="contained"
        sx={{ marginTop: '1rem', marginLeft: (() => (matches ? '58%' : '90%'))() }}
      >
        Voltar
      </Button>
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: '97%',
        }}
      >
        {cifra.base && <Typography variant="h6">Escute aqui a base da musica</Typography>}
        {cifra.id === 2000 && <ReactAudioPlayer src={deixaALuz} type="audio/*" controls />}
        {cifra.id === 2002 && <ReactAudioPlayer src={gloria} type="audio/*" controls />}
        {cifra.id === 2009 && <ReactAudioPlayer src={sacramento} type="audio/*" controls />}
        {cifra.id === 2010 && <ReactAudioPlayer src={joiaRara} type="audio/*" controls />}
        {cifra.id === 2011 && <ReactAudioPlayer src={sejaLuz} type="audio/*" controls />}
      </Box>
      <Card sx={{ width: '100%' }}>
        <Typography variant="h4" sx={{ textIndent: '1rem', marginTop: '1rem' }}>
          {cifra.titulo}
        </Typography>
        <Typography variant="subtitle2" sx={{ textIndent: '1rem' }}>
          Categoria: <strong>{cifra.categoria}</strong>
        </Typography>
        {cifra.link && (
          // <iframe
          //   width="1280"
          //   height="720"
          //   src={`${cifra.link}`}
          //   title="YouTube video player"
          //   frameBorder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //   allowfullscreen
          // />
          // <LinkMusica href={cifra.link} target="_blank" rel="noreferrer">
          //   Escute a musica
          // </LinkMusica>
          <Button
            as={LinkMusica}
            href={cifra.link}
            variant="contained"
            target="_blank"
            startIcon={<PlayCircleOutlineIcon sx={{ margin: 'auto' }} />}
          >
            Escute a musica
          </Button>
        )}

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
