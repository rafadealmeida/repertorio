/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import crossOutline from '@iconify/icons-mdi/cross-outline';
import prayingHands from '@iconify/icons-la/praying-hands';
import styled from 'styled-components';

const LinkStyled = styled.a`
  text-decoration: none;
`;
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <LinkStyled href="/" className="menu__link">
          <ListItem key="Home" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={prayingHands} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Grupo de Oração" />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missa" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaFev" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Fevereiro 2023" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaAbr" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Abril 2023" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaJun" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Junho 2023" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaJun2" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Junho São Pedro 2023" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaAgo" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Agosto" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaOut" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Outubro" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaOut2" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Outubro" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaFev24" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Fevereiro 2024" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaFev24Imaculada" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Missa Fevereiro 2024 Imaculada" sx={{ textDecoration: 'none', color: 'black' }} />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>
      <List>
        <LinkStyled href="/missaFev24Pedro" className="menu__link">
          <ListItem key="Missa" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon={crossOutline} fontSize={30} />
              </ListItemIcon>
              <ListItemText
                primary="Missa Fevereiro 2024 São Pedro São Paulo"
                sx={{ textDecoration: 'none', color: 'black' }}
              />
            </ListItemButton>
          </ListItem>
        </LinkStyled>
      </List>

      {/* <List className="menu__link">
        <ListItem key="Grupo de Oração" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icon icon="la:praying-hands" fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Grupo de Oração" />
          </ListItemButton>
        </ListItem>
      </List> */}

      {/* <Divider /> */}
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
