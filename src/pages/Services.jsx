import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import web from '../assets/images/web_dev_img.png';
import data from '../assets/images/data_analysis_img.png';
import app from '../assets/images/app_dev_img.png';

const Container = styled.div`
  background-color: ${theme.colors.primaryColor};
  padding: 1rem;
`;

const Text = styled.p`
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size2};
  text-align: center;
`;

const Columns = styled.div`
  background-color: ${theme.colors.fourthColor};
  border-radius: 5px;
  padding: 20px;
  width: 20%;
  text-align: center;
`;

const InsideText = styled.p`
  ${({ title }) => css`
    color: ${theme.colors.thirdColor};
    font-size: ${title === 'true' ? theme.sizes.size3 : theme.sizes.size4};
  `}
`;

const Services = ({ language }) => {
  return (
    <Container id="services">
      <Text>{language === 'PT' ? 'Serviços' : 'Services'}</Text>
      <div
        style={{
          direction: 'ltr',
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '100px auto',
        }}
      >
        <Columns style={{ margin: '0 30px' }}>
          <InsideText title="true">
            {language === 'PT' ? 'ANÁLISE DE DADOS' : 'DATA ANALYSIS'}
          </InsideText>
          <InsideText>kk</InsideText>
          <img src={data} />
        </Columns>
        <Columns>
          <InsideText title="true">
            {language === 'PT' ? 'DESENVOLVIMENTO WEB' : 'WEB DEVELOPMENT'}
          </InsideText>
          <InsideText>kk</InsideText>
          <img src={web} />
        </Columns>
        <Columns>
          <InsideText title="true">
            {language === 'PT'
              ? 'DESENVOLVIMENTO MOBILE'
              : 'MOBILE DEVELOPMENT'}
          </InsideText>
          <InsideText>kk</InsideText>
          <img src={app} />
        </Columns>
      </div>
    </Container>
  );
};

Services.propTypes = {
  language: P.node.isRequired,
};

export default Services;
