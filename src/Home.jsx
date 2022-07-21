import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from './theme/theme';
import { Link as ScrollTarget } from 'react-scroll';

import { Navicon } from '@styled-icons/evil';
import { Close } from '@styled-icons/evil';
import logo from './assets/images/logo_crd_data.png';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import Services from './pages/Services';
import TalkToUs from './pages/TalkToUs';
import Footer from './pages/Footer';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const NavBar = styled.div`
  ${({ visible }) => css`
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
      /* position: block; */
      flex-direction: column;
      ${visible ? MenuVisible() : MenuInvisible()}
      margin: 0;
    }
  `}
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

    @media (max-width: 500px) {
      visibility: hidden;
      height: 0;
      width: 0;
    }
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
  border: 0;
  margin-left: auto;
  margin-right: 2%;

  @media ${theme.medias.media1} {
    display: block;
    margin: 0 auto;
  }
`;

// const SwitchLanguage = styled.div`
//   visibility: hidden;
//   height: 0;

//   @media ${theme.medias.media1} {
//     visibility: visible;
//     display: block;
//     position: absolute;
//     top: 20px;
//     right: 50%;
//     left: 50%;
//   }
// `;

const MenuVisible = () => css`
  visibility: visible;
  opacity: 1;
  height: auto;
`;

const MenuInvisible = () => css`
  visibility: hidden;
  opacity: 1;
  height: 0;
`;

const Menu = styled.div`
  visibility: hidden;
  height: 0;

  @media ${theme.medias.media1} {
    visibility: visible;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: ${theme.colors.primaryColor};
    height: auto;
    direction: ltr;
  }
`;

const Home = () => {
  const [language, setLanguage] = useState('PT');
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      {visible ? null : (
        <Menu>
          <Navicon
            size={50}
            color={theme.colors.thirdColor}
            onClick={() => setVisible(true)}
          />
          <img src={logo} style={{ display: 'block', margin: '0 auto' }} />
        </Menu>
      )}
      {/* <SwitchLanguage>
        <Dropdown onChange={() => setLanguage(language === 'PT' ? 'EN' : 'PT')}>
          <option value="PT">PT</option>
          <option value="EN">EN</option>
        </Dropdown>
      </SwitchLanguage> */}
      <NavBar visible={visible}>
        {visible ? null : <img src={logo} style={{ marginLeft: '2rem' }} />}
        <>
          {visible ? (
            <div
              style={{
                display: 'flex',
                direction: 'ltr',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Close
                size={50}
                color={theme.colors.thirdColor}
                onClick={() => setVisible(false)}
              />
              <img src={logo} style={{ display: 'block', margin: '0 auto' }} />
            </div>
          ) : null}
        </>
        <Links>
          <ScrollTarget
            to="aboutUs"
            spy={true}
            smooth={true}
            duration={500}
            offset={visible ? -250 : -50}
            onClick={() => setVisible(false)}
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
            offset={visible ? -600 : -150}
            onClick={() => setVisible(false)}
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
            offset={visible ? -400 : -100}
            onClick={() => setVisible(false)}
          >
            {language === 'PT' ? 'Serviços' : 'Services'}
          </ScrollTarget>
        </Links>
        <Links>
          <ScrollTarget
            to="talkToUs"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setVisible(false)}
          >
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
      <Footer />
    </Container>
  );
};

export default Home;
