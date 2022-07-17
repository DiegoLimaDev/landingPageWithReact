import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

const data = {
  places: {
    reef: {
      address: 'R. Dona Maria César, 170',
      building: 'Ed. Luciano Costa',
      room: 'Sala 203A',
      CEP: '50030-140',
      city: 'Recife-PE',
    },
    foz: {
      address: 'Av. Mal. Mascarenhas de Morais, 4861',
      building: 'Dentro da FPS',
      CEP: '51150-000',
      city: 'Imbiribeira-PE',
    },
  },
};

const Container = styled.div`
  background-color: ${theme.colors.thirdColor};
  font-family: ${theme.font.secondary};
  margin-bottom: 50px;
`;

const Title = styled.p`
  color: ${theme.colors.primaryColor};
  font-size: ${theme.sizes.size3};
  text-align: center;
`;

const Text = styled.p`
  font-size: ${theme.sizes.size5};
  color: ${theme.colors.primaryColor};
`;

const TalkToUs = ({ language }) => {
  return (
    <Container id="talkToUs">
      <Title>{language === 'PT' ? 'Fale conosco' : 'Talk to us'}</Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <div style={{ textAlign: 'justify', width: '15%' }}>
          <Text>{data.places.reef.address}</Text>
          <Text>{data.places.reef.building}</Text>
          <Text>{data.places.reef.room}</Text>
          <Text>{data.places.reef.city}</Text>
          <Text>{data.places.reef.CEP}</Text>
        </div>
        <div style={{ textAlign: 'justify', width: '15%' }}>
          <Text>{data.places.foz.address}</Text>
          <Text>{data.places.foz.building}</Text>
          <Text>{data.places.foz.city}</Text>
          <Text>{data.places.foz.CEP}</Text>
        </div>
      </div>
      <Text style={{ textAlign: 'center' }}>financeiro@crddata.com.br</Text>
    </Container>
  );
};

TalkToUs.propTypes = {
  language: P.node.isRequired,
};

export default TalkToUs;
