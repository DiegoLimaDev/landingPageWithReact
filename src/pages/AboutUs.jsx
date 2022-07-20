import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';
import P from 'prop-types';
import SimpleImageSlider from 'react-simple-image-slider';

import img1 from '../assets/images/img_1.png';
import img2 from '../assets/images/img_2.png';
import img3 from '../assets/images/img_3.png';
// import logo from '../assets/images/only_logo.png';
import TypewriterComponent from 'typewriter-effect';

const images = [{ url: `${img1}` }, { url: `${img2}` }, { url: `${img3}` }];

const data = {
  AboutUsText: {
    pt: 'Somos um grupo de empresas em sinergia no desenvolvimento de softwares com Gestão Ágil em Projetos TIC, alocação de pessoas desenvolvedoras de sistemas e governança de dados.',
    en: 'We are a group of companies working in synergy, alocating system developers. Using Agile Methods in our TIC Projects for the best performance in the development of apps and data science.',
  },
};

const Container = styled.div`
  background-color: ${theme.colors.primaryColor};
  width: 100%;
  font-family: ${theme.font.secondary};
`;

// const Title = styled.p`
//   color: ${theme.colors.thirdColor};
//   font-size: ${theme.sizes.size1};
//   font-weight: bold;
// `;

const DinamicTitle = styled.p`
  color: ${theme.colors.secondaryColor};
  font-size: ${theme.sizes.size2};
  font-weight: bold;

  @media ${theme.medias.media1} {
    font-size: ${theme.sizes.size3};
  }
`;

const Text = styled.p`
  color: ${theme.colors.thirdColor};
  font-size: ${theme.sizes.size3};
  width: 30%;
  text-align: justify;
  padding: 2rem;

  @media ${theme.medias.media2} {
    width: 80%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 150px auto;
  align-items: flex-start;

  @media ${theme.medias.media2} {
    flex-direction: column;
    align-items: center;
  }

  @media ${theme.medias.media1} {
    visibility: hidden;
    height: 0;
  }
`;

const SliderToPhones = styled.div`
  visibility: hidden;
  height: 0;

  @media ${theme.medias.media1} {
    visibility: visible;
    height: auto;
    justify-content: space-evenly;
    padding: 2rem;
    margin-top: -50%;
  }
`;

const AboutUs = ({ language }) => {
  return (
    <Container id="aboutUs">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '100px',
        }}
      >
        {/* <img src={logo} /> */}
        {/* <div style={{ flexDirection: 'column' }}>
          <Title>
            {language === 'PT' ? 'TRABALHAMOS COM' : 'WORKING WITH'}
          </Title>
          <DinamicTitle>
            {language === 'PT' ? 'DESENVOLVIMENTO MOBILE_' : 'APP DEVELOPMENT_'}
          </DinamicTitle>
        </div> */}
        <DinamicTitle>
          <TypewriterComponent
            onInit={(typed) => {
              typed
                .typeString('Web development')
                .pauseFor(3000)
                .deleteAll()
                .start();
              typed
                .typeString('Mobile development')
                .pauseFor(3000)
                .deleteAll()
                .start();
              typed.typeString('B.I.').pauseFor(3000).deleteAll().start();
              typed
                .typeString('DATA ANALYSIS')
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
            options={{ loop: true }}
          />
        </DinamicTitle>
      </div>
      <Row>
        <Text>
          {language === 'PT' ? data.AboutUsText.pt : data.AboutUsText.en}
        </Text>
        <SimpleImageSlider
          width={'50%'}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={0.7}
          loop={true}
          navStyle={2}
          navSize={30}
          navMargin={10}
          autoPlay={true}
          autoPlayDelay={5}
          style={{ marginBottom: '100px' }}
        />
      </Row>
      <SliderToPhones>
        <Text>
          {language === 'PT' ? data.AboutUsText.pt : data.AboutUsText.en}
        </Text>
        <SimpleImageSlider
          width={300}
          height={250}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={0.7}
          loop={true}
          navStyle={2}
          navSize={30}
          navMargin={10}
          autoPlay={true}
          autoPlayDelay={5}
          style={{ display: 'block', margin: '0 auto 50px auto' }}
        />
      </SliderToPhones>
    </Container>
  );
};

AboutUs.propTypes = {
  language: P.node.isRequired,
};

export default AboutUs;
