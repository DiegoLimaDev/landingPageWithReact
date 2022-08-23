import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import foz from '../assets/images/logo_foz.png';
import reef from '../assets/images/logo_reef.png';
import pd from '../assets/images/logo_pd.png';
import consulticom from '../assets/images/logo_consulticom.png';
import softex from '../assets/images/logo_softex.png';
import g1ant from '../assets/images/logo_g1ant.png';

const Container = styled.div`
  background-color: ${theme.colors.thirdColor};
  margin-top: 50px;
  font-family: ${theme.font.secondary};
`;

const Title = styled.p`
  color: ${theme.colors.primaryColor};
  font-size: ${theme.sizes.size3};
  text-align: center;
  margin-top: 50px;
`;

const Row = styled.div`
  display: block;
  margin: 100px auto 100px auto;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  max-width: 80%;

  @media ${theme.medias.media1} {
    flex-direction: column;
    justify-content: center;
    margin: 5% auto;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 68px;

  @media ${theme.medias.media1} {
    display: block;
    margin: 50px auto;
  }
`;
const Partners = ({ language }) => {
  return (
    <Container id="partners">
      <Title>{language === 'PT' ? 'Parceiros' : 'Partners'}</Title>
      <div
        style={{
          alignItems: 'center',
        }}
      >
        <Row>
          <Img src={reef} />
          <Img src={foz} />
          <Img src={pd} />
          <Img src={consulticom} />
          <Img src={softex} />
          <Img src={g1ant} />
        </Row>
      </div>
    </Container>
  );
};

Partners.propTypes = {
  language: P.node.isRequired,
};

export default Partners;
