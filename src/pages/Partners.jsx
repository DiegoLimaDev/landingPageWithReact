import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import infusion from '../assets/images/infusion.png';

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
  width: fit-content;
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
  margin: 0 5rem;

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
          <Img src={infusion} />
          <Img src={infusion} />
          <Img src={infusion} />
        </Row>
      </div>
    </Container>
  );
};

Partners.propTypes = {
  language: P.node.isRequired,
};

export default Partners;
