import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from './theme/theme';
import { Link as ScrollTarget } from 'react-scroll';

import logo from './assets/images/logo_crd_data.png';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import Services from './pages/Services';
import TalkToUs from './pages/TalkToUs';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 100%;
  background-color: ${theme.colors.primaryColor};
  align-items: center;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 1;

  @media ${theme.medias.media1} {
    visibility: hidden;
    position: relative;
    flex-direction: column;
    height: 0;
    width: 0;
  }
`;

const Links = styled.p`
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size4};
  font-weight: 600;
  margin: 3rem auto;
  font-family: ${theme.font.primary};
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

  @media ${theme.medias.media1} {
    width: 0;
    height: 0;
    visibility: collapse;
  }
`;

const Dropdown = styled.select`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size4};
  border: none;
  margin-left: auto;
  margin-right: 2%;
`;

const SwitchLanguage = styled.div`
  visibility: hidden;
  height: 0;

  @media ${theme.medias.media1} {
    visibility: visible;
    display: block;
    position: absolute;
    top: 20px;
    right: 50%;
    left: 50%;
  }
`;

const Home = () => {
  const [language, setLanguage] = useState('PT');

  return (
    <Container>
      <SwitchLanguage>
        <Dropdown onChange={() => setLanguage(language === 'PT' ? 'EN' : 'PT')}>
          <option value="PT">PT</option>
          <option value="EN">EN</option>
        </Dropdown>
      </SwitchLanguage>

      <NavBar>
        <img src={logo} style={{ marginLeft: '2rem' }} />
        <Links>
          <ScrollTarget
            to="aboutUs"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            {language === 'PT' ? 'Sobre' : 'About us'}
          </ScrollTarget>
        </Links>
        <Links>
          <ScrollTarget
            to="partners"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
            {language === 'PT' ? 'Parceiros' : 'Partners'}
          </ScrollTarget>
        </Links>
        <Links>
          <ScrollTarget
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            {language === 'PT' ? 'Serviços' : 'Services'}
          </ScrollTarget>
        </Links>
        <Links>
          <ScrollTarget to="talkToUs" spy={true} smooth={true} duration={500}>
            {language === 'PT' ? 'Fale conosco' : 'Contact'}
          </ScrollTarget>
        </Links>
        <Dropdown onChange={() => setLanguage(language === 'PT' ? 'EN' : 'PT')}>
          <option value="PT">PT</option>
          <option value="EN">EN</option>
        </Dropdown>
      </NavBar>
      <AboutUs language={language} />
      <Partners language={language} />
      <Services language={language} />
      <TalkToUs language={language} />
    </Container>
  );
};

export default Home;
