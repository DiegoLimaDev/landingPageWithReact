import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';

import { Location } from '@styled-icons/evil';

const data = {
  places: {
    reef: {
      address: 'Praça Rio Branco',
      building: 'Ed. Brennand',
      room: 'Centro',
      CEP: '50030-230',
      city: 'Recife-PE',
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

    @media ${theme.medias.media1} {
      flex-direction: column;
    }
  }
`;

const FooterDiv = styled.div`
  text-align: justify;
  width: 30%;
  display: block;
  margin: 0 auto;

  @media ${theme.medias.media1} {
    width: auto;
    margin-left: 5%;
    /* display: block;
    margin: 0 auto; */
  }

  .firstRow {
    display: flex;
    direction: ltr;
    align-items: center;
    text-align: left;
  }

  .column {
    flex-direction: column;
  }
`;

const Title = styled.p`
  color: ${theme.colors.primaryColor};
  font-size: ${theme.sizes.size3};
  text-align: center;

  @media ${theme.medias.media1} {
    width: 100%;
    text-align: center;
  }
`;

const Title2 = styled.p`
  color: ${theme.colors.primaryColor};
  font-size: ${theme.sizes.size3};
  text-align: center;

  @media ${theme.medias.media1} {
    width: 100%;
    text-align: left;
    margin-left: 1rem;
  }
`;

const Text = styled.p`
  font-size: ${theme.sizes.size5};
  color: ${theme.colors.primaryColor};
  margin-left: 1rem;
`;

const TalkToUs = ({ language }) => {
  return (
    <Container id="talkToUs">
      <Title>{language === 'PT' ? 'Vamos tomar um café?' : 'Contact'}</Title>
      <Row>
        <FooterDiv>
          <div
            className="firstRow"
            style={{
              display: 'flex',
              direction: 'ltr',
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <Location size="40" color={theme.colors.primaryColor} />
            <Title2>Marco Zero</Title2>
          </div>
          <div className="secondRow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3890888524083!2d-34.87068730000001!3d-8.0617353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a48f26183d%3A0x6a9ebfb27ba8f98d!2sPra%C3%A7a%20Rio%20Branco%20-%20Recife%2C%20PE%2C%2050030-230!5e0!3m2!1spt-BR!2sbr!4v1672760705377!5m2!1spt-BR!2sbr"
              width="300"
              height="225"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="column">
              <Text>{data.places.reef.address}</Text>
              <Text>{data.places.reef.building}</Text>
              <Text>{data.places.reef.room}</Text>
              <Text>{data.places.reef.city}</Text>
              <Text>{data.places.reef.CEP}</Text>
            </div>
          </div>
        </FooterDiv>
        <FooterDiv>
          <div
            className="firstRow"
            style={{
              display: 'flex',
              direction: 'ltr',
              alignItems: 'center',
              textAlign: 'left',
              width: '100%',
            }}
          >
            <Location size="40" color={theme.colors.primaryColor} />
            <Title2>Marco Zero</Title2>
          </div>
          <div className="secondRow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3890888524083!2d-34.87068730000001!3d-8.0617353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a48f26183d%3A0x6a9ebfb27ba8f98d!2sPra%C3%A7a%20Rio%20Branco%20-%20Recife%2C%20PE%2C%2050030-230!5e0!3m2!1spt-BR!2sbr!4v1672760705377!5m2!1spt-BR!2sbr"
              width="300"
              height="225"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="column">
              <Text>{data.places.reef.address}</Text>
              <Text>{data.places.reef.building}</Text>
              <Text>{data.places.reef.room}</Text>
              <Text>{data.places.reef.city}</Text>
              <Text>{data.places.reef.CEP}</Text>
            </div>
          </div>
        </FooterDiv>
      </Row>
      <Text
        style={{
          textAlign: 'center',
        }}
      >
        contato@contato.com.br
      </Text>
    </Container>
  );
};

TalkToUs.propTypes = {
  language: P.node.isRequired,
};

export default TalkToUs;
