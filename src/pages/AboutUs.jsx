import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import logo from '../assets/images/only_logo.png';

const data = {
  AboutUsText: {
    pt: 'Somos um grupo de empresas em sinergia no desenvolvimento de aplicativos com Gestão Ágil em Projetos de TIC, alocação de pessoas desenvolvedoras de sistemas e governança de dados.',
    en: 'We are a group of companies working in synergy, alocating system developers. Using Agile Methods in our TIC Projects for the best performance in the development of apps and data science.',
  },
};

const Container = styled.div`
  background-color: ${theme.colors.primaryColor};
  width: 100%;
`;

const Title = styled.p`
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size1};
  font-weight: bold;
`;

const DinamicTitle = styled.p`
  color: ${theme.colors.secondaryColor};
  font-size: ${theme.sizes.size2};
  font-weight: bold;
  margin-top: -5rem;
`;

const Text = styled.p`
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size3};
  width: 30%;
  text-align: justify;
  padding: 2rem;
`;

const AboutUs = ({ language }) => {
  return (
    <Container id="aboutUs">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={logo} />
        <div style={{ flexDirection: 'column' }}>
          <Title>
            {language === 'PT' ? 'TRABALHAMOS COM' : 'WORKING WITH'}
          </Title>
          <DinamicTitle>
            {language === 'PT' ? 'DESENVOLVIMENTO MOBILE_' : 'APP DEVELOPMENT_'}
          </DinamicTitle>
        </div>
      </div>
      <div>
        <Text>
          {language === 'PT' ? data.AboutUsText.pt : data.AboutUsText.en}
        </Text>
      </div>
    </Container>
  );
};

AboutUs.propTypes = {
  language: P.node.isRequired,
};

export default AboutUs;
