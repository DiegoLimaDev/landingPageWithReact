import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';

import logo from '../assets/images/only_logo.png';
import {
  ScLinkedin,
  ScInstagram,
  ScFacebook,
  ScYoutube,
} from '@styled-icons/evil';

const Container = styled.div`
  background-color: ${theme.colors.primaryColor};
  width: 100%;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

const Text = styled.p`
  font-size: ${theme.sizes.size5};
  color: ${theme.colors.thirdColor};

  @media ${theme.medias.media1} {
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <div
        style={{
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          display: 'flex',
          direction: 'ltr',
        }}
      >
        <Img src={logo} />
        <Text>Copyright © 2022 CRD DATA LTDA - CNPJ: 46.639.045/0001-01</Text>
        <div>
          <a
            href="https://www.linkedin.com/company/crddata/"
            target="_blank"
            rel="noreferrer"
          >
            <ScLinkedin size="50" color={theme.colors.thirdColor} />
          </a>
          <a
            href="https://www.instagram.com/crddata/"
            target="_blank"
            rel="noreferrer"
          >
            <ScInstagram size="50" color={theme.colors.thirdColor} />
          </a>
          <a
            href="https://www.facebook.com/crddata"
            target="_blank"
            rel="noreferrer"
          >
            <ScFacebook size="45" color={theme.colors.thirdColor} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCavcxqnoEpKXc1JHOs-ys_w/featured"
            target="_blank"
            rel="noreferrer"
          >
            <ScYoutube size="50" color={theme.colors.thirdColor} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
