import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from './theme/theme';

import logo from './assets/images/logo_crd_data.png';
import AboutUs from './pages/AboutUs';

const Container = styled.div`
  padding: 1;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  background-color: ${theme.colors.primaryColor};
  align-items: center;
  padding: 2rem;
`;

const Links = styled.p`
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size4};
  font-weight: 600;
  margin: 0 5rem;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }

  &::after {
    width: 0;
    content: '';
    background-color: ${theme.colors.thirdColor};
    height: 4px;
    bottom: -15%;
    left: 50%;
    position: absolute;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    position: absolute;
    transition: all 200ms ease-in-out;
  }
`;

const Dropdown = styled.select`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size4};
  border: none;
  align-self: auto;
  margin: 0 auto;
`;

const Home = () => {
  const [language, setLanguage] = useState('PT');
  return (
    <Container>
      <NavBar>
        <img src={logo} style={{ marginRight: '8rem' }} />
        <Links>{language === 'PT' ? 'Sobre' : 'About us'}</Links>
        <Links>{language === 'PT' ? 'Parceiros' : 'Partners'}</Links>
        <Links>{language === 'PT' ? 'Serviços' : 'Services'}</Links>
        <Links>{language === 'PT' ? 'Fale conosco' : 'Contact us'}</Links>
        <Dropdown onChange={() => setLanguage(language === 'PT' ? 'EN' : 'PT')}>
          <option value="PT">PT</option>
          <option value="EN">EN</option>
        </Dropdown>
      </NavBar>
      <AboutUs language={language} />
    </Container>
  );
};

export default Home;
