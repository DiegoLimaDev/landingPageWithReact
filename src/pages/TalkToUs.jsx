import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import { Location } from '@styled-icons/evil';

const data = {
  places: {
    reef: {
      address: 'R. Dona Maria César, 170',
      building: 'Ed. Luciano Costa',
      room: 'Sala 203A, CX PST 024',
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media ${theme.medias.media1} {
    flex-direction: column;
  }

  .secondRow {
    flex-direction: row;
    display: flex;
  }
`;

const FooterDiv = styled.div`
  text-align: justify;
  width: 40%;
  display: block;
  margin: 0 auto;

  @media ${theme.medias.media1} {
    width: auto;
    margin-left: 5%;
  }
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
      <Title>{language === 'PT' ? 'Vamos tomar um café?' : 'Contact'}</Title>
      <Row>
        <FooterDiv>
          <div
            style={{
              display: 'flex',
              direction: 'ltr',
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <Location size="40" color={theme.colors.primaryColor} />
            <Title>Reef Coworking</Title>
          </div>
          <div className="secondRow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.5947103566825!2d-34.871439236926115!3d-8.062784562749876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1986087af83f%3A0x65e18d049a2f84f5!2sCRD%20DATA!5e0!3m2!1spt-BR!2sbr!4v1660753508165!5m2!1spt-BR!2sbr"
              width="300"
              height="225"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <Text>{data.places.reef.address}</Text>
            <Text>{data.places.reef.building}</Text>
            <Text>{data.places.reef.room}</Text>
            <Text>{data.places.reef.city}</Text>
            <Text>{data.places.reef.CEP}</Text>
          </div>
        </FooterDiv>
        <FooterDiv>
          <div
            style={{
              display: 'flex',
              direction: 'ltr',
              alignItems: 'center',
              textAlign: 'left',
              width: '100%',
            }}
          >
            <Location size="40" color={theme.colors.primaryColor} />
            <Title>FOZ - Centro de Inovação</Title>
          </div>
          <div className="secondRow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.4363588564912!2d-34.915038102706596!3d-8.127379565795941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fc1cf81e0ad%3A0xf9a206352536f030!2sFOZ%20Centro%20de%20Inova%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1660753695536!5m2!1spt-BR!2sbr"
              width="300"
              height="225"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <Text>{data.places.foz.address}</Text>
            <Text>{data.places.foz.building}</Text>
            <Text>{data.places.foz.city}</Text>
            <Text>{data.places.foz.CEP}</Text>
          </div>
        </FooterDiv>
      </Row>
      <Text style={{ textAlign: 'center' }}>contato@crddata.com.br</Text>
    </Container>
  );
};

TalkToUs.propTypes = {
  language: P.node.isRequired,
};

export default TalkToUs;
