import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import foz from '../assets/images/logo_foz.png';
import g1ant from '../assets/images/logo_g1ant.png';

const Container = styled.div`
  background-color: ${theme.colors.thirdColor};
  margin-top: -100px;
`;

const Text = styled.p`
  color: ${theme.colors.primaryColor};
  font-size: ${theme.sizes.size2};
  text-align: center;
`;

const Partners = ({ language }) => {
  return (
    <Container id="partners">
      <div style={{ alignItems: 'center' }}>
        <Text>{language === 'PT' ? 'Parceiros' : 'Partners'}</Text>
        <div style={{ display: 'block', margin: '0 auto', width: '6%' }}>
          <img src={foz} style={{ margin: '50px 0' }} />
          <img src={g1ant} style={{ margin: '50px 0 100px 0' }} />
        </div>
      </div>
    </Container>
  );
};

Partners.propTypes = {
  language: P.node.isRequired,
};

export default Partners;
