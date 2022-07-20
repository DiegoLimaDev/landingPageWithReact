import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import foz from '../assets/images/logo_foz.png';
import reef from '../assets/images/logo_reef.png';
import g1ant from '../assets/images/logo_g1ant.png';

const Container = styled.div`
  background-color: ${theme.colors.thirdColor};
  margin-top: -50px;
  font-family: ${theme.font.secondary};
`;

// const Text = styled.p`
//   color: ${theme.colors.primaryColor};
//   font-size: ${theme.sizes.size2};
//   text-align: center;
// `;

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

const Img1 = styled.img`
  width: 500px;
  height: 500px;

  @media ${theme.medias.media1} {
    width: 250px;
    height: 200px;
  }
`;

const Img2 = styled.img`
  margin: 50px 0;
  width: 500px;
  height: 350px;

  @media ${theme.medias.media1} {
    width: 200px;
    height: 150px;
  }
`;

const Img3 = styled.img`
  margin: 50px auto;
  width: 500px;
  height: 150px;
  display: block;

  @media ${theme.medias.media1} {
    width: 200px;
    height: 50px;
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
        {/* <Text>{language === 'PT' ? 'Parceiros' : 'Partners'}</Text> */}
        <Row>
          <Img1
            src={reef}
            // style={{ margin: '50px 0', width: '500px', height: '350px' }}
          />
          <Img2
            src={foz}
            // style={{
            //   margin: '50px 0 100px 0',
            //   width: '500px',
            //   height: '150px',
            // }}
          />
        </Row>
        <div>
          <Img3 src={g1ant} />
        </div>
      </div>
    </Container>
  );
};

Partners.propTypes = {
  language: P.node.isRequired,
};

export default Partners;
