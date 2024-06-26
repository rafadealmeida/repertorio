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
import repertorioMissaJun from '../_mocks/repertorioMissaJun';
import repertorioMissaJun2 from '../_mocks/repertorioMissaJun-2';
import repertorioMissaOut from '../_mocks/repertorioMissaOut';
import repertorioMissaAgo from '../_mocks/repertorioMissaAgo';
import repertorioMissaOut2 from '../_mocks/repertorioMissaOut-2';
import repertorioMissaFev24 from '../_mocks/repertorioMissaFev24';
import repertorioMissaFev24Imaculada from '../_mocks/repertorioMissaFev24Imaculada';
import repertorioMissaFev24Pedro from '../_mocks/repertorioMissaFev24Pedro';
import repertorioMissaMarJudas from '../_mocks/repertorioMissaMarJudas';
import repertorioMissaMarImaculada from '../_mocks/repertorioMissaMarImaculada';
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
  const [coluna, setColuna] = useState(false);
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

  const CifraSelectColum = styled.pre`
    font-size: ${tamanho}rem;
    white-space: pre-wrap;
    column-count: 2;
    column-gap: 1em;
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
    if (Number(id) < 50) {
      const cifraSelect = cifras.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 100) {
      const cifraSelect = repertorioMissa.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 150) {
      const cifraSelect = repertorioMissaFev.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 200) {
      const cifraSelect = repertorioMissaAbr.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 250) {
      const cifraSelect = repertorioMissaJun.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 300) {
      const cifraSelect = repertorioMissaJun2.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 350) {
      const cifraSelect = repertorioMissaAgo.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 400) {
      const cifraSelect = repertorioMissaOut.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 450) {
      const cifraSelect = repertorioMissaOut2.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 500) {
      const cifraSelect = repertorioMissaFev24.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 550) {
      const cifraSelect = repertorioMissaFev24Imaculada.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 600) {
      const cifraSelect = repertorioMissaFev24Pedro.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 650) {
      const cifraSelect = repertorioMissaMarJudas.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
    if (Number(id) >= 700) {
      const cifraSelect = repertorioMissaMarImaculada.find((cifraBack) => cifraBack.id === Number(id));
      setCifra(cifraSelect);
    }
  }, [id]);

  return (
    <>
      <Button onClick={() => setColuna(!coluna)} variant="contained" sx={{ marginTop: '1rem', marginLeft: 0 }}>
        Colocar cifra em modo coluna
      </Button>
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

        {coluna ? (
          <CifraSelectColum>
            {reactStringReplace(cifra.cifra, acordes, (match, i) => (
              <b key={i} style={{ color: '#f70' }}>
                {match}
              </b>
            ))}
          </CifraSelectColum>
        ) : (
          <CifraSelect>
            {reactStringReplace(cifra.cifra, acordes, (match, i) => (
              <b key={i} style={{ color: '#f70' }}>
                {match}
              </b>
            ))}
          </CifraSelect>
        )}
      </Card>
    </>
  );
}

export default Cifra;
