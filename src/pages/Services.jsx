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
  font-family: ${theme.font.secondary};
`;

const Text = styled.p`
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size2};
  text-align: center;
`;

const Columns = styled.div`
  background-color: ${theme.colors.fourthColor};
  border-radius: 5px;
  padding: 50px;
  width: 20%;
  text-align: center;
`;

const InsideText = styled.p`
  ${({ title }) => css`
    color: ${theme.colors.thirdColor};
    font-size: ${title === 'true' ? theme.sizes.size3 : theme.sizes.size4};
    text-align: center;
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
        <Columns>
          <InsideText title="true">
            {language === 'PT' ? 'ANÁLISE DE DADOS' : 'DATA ANALYSIS'}
          </InsideText>
          <InsideText>
            {language === 'PT'
              ? 'Utilizando de estatíscas e dashboards, torne suas tomadas de decisões mais precisas.'
              : 'Using statics and dashboards, make your decisions even more accurate.'}
          </InsideText>
          <img src={data} />
        </Columns>
        <Columns>
          <InsideText title="true">
            {language === 'PT' ? 'DESENVOLVIMENTO WEB' : 'WEB DEVELOPMENT'}
          </InsideText>
          <InsideText>
            {language === 'PT'
              ? 'Programando com as tecnologias mais atuais e inovando os padrões de design.'
              : 'Programming with the latest technologies and innovating the design patterns.'}
          </InsideText>
          <img src={web} />
        </Columns>
        <Columns>
          <InsideText title="true">
            {language === 'PT'
              ? 'DESENVOLVIMENTO MOBILE'
              : 'MOBILE DEVELOPMENT'}
          </InsideText>
          <InsideText>
            {language === 'PT'
              ? 'Tornando tudo mais fácil com a facilidade de um toque em qualquer lugar.'
              : 'Making everything easier with the simplicity of a touch anywhere.'}
          </InsideText>
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
