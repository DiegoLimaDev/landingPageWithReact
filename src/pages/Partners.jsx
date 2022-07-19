import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import foz from '../assets/images/logo_foz.png';
import g1ant from '../assets/images/logo_g1ant.png';

const Container = styled.div`
  background-color: ${theme.colors.thirdColor};
  margin-top: -50px;
  font-family: ${theme.font.secondary};
`;

const Text = styled.p`
  color: ${theme.colors.primaryColor};
  font-size: ${theme.sizes.size2};
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media ${theme.medias.media1} {
    flex-direction: column;
    justify-content: center;
  }
`;

const Partners = ({ language }) => {
  return (
    <Container id="partners">
      <div
        style={{
          alignItems: 'center',
        }}
      >
        <Text>{language === 'PT' ? 'Parceiros' : 'Partners'}</Text>
        <Row>
          <img
            src={foz}
            style={{ margin: '50px 0', width: '150px', height: '150px' }}
          />
          <img
            src={g1ant}
            style={{
              margin: '50px 0 100px 0',
              width: '500px',
              height: '150px',
            }}
          />
        </Row>
      </div>
    </Container>
  );
};

Partners.propTypes = {
  language: P.node.isRequired,
};

export default Partners;
