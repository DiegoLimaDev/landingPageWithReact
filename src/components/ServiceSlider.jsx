import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import web from '../assets/images/web_dev.png';
import data from '../assets/images/data_dev.png';
import mobile from '../assets/images/mobile_dev.png';
import ia from '../assets/images/ia_dev.png';
import rpa from '../assets/images/rpa_dev.png';
import metaverso from '../assets/images/metaverso_dev.png';
import { useState } from 'react';
import { theme } from '../theme/theme';

const images = [web, data, mobile, ia, rpa, metaverso];

const Container = styled.div`
  width: 80%;
  display: block;
  margin: 3rem auto;

  .web {
    visibility: visible;

    @media ${theme.medias.media2} {
      visibility: hidden;
      height: 0;
    }
  }

  .mobile {
    visibility: hidden;
    height: 0;

    @media ${theme.medias.media2} {
      visibility: visible;
      height: 100%;
    }
  }

  .slide img {
    margin: 0 auto;

    @media ${theme.medias.media1} {
      width: 300%;
      height: 700%;
    }
  }

  .slide {
    transform: scale(0.6);
    transition: transform 300ms;
    opacity: 0.5;

    @media ${theme.medias.media1} {
      transform: scale(0.2);
      width: 100%;
      opacity: 0;
    }
  }

  .activeSlide {
    transform: scale(1.2);
    opacity: 1;

    @media ${theme.medias.media1} {
      transform: scale(1);
    }
  }
`;

const ServiceSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgIndex2, setImgIndex2] = useState(0);

  const settingsWeb = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setImgIndex(next),
  };

  const settingsMobile = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    beforeChange: (current, next) => setImgIndex2(next),
  };

  return (
    <Container>
      <div className="web">
        <Slider {...settingsWeb}>
          {images.map((img, index) => {
            return (
              <div
                key={index}
                className={index === imgIndex ? 'slide activeSlide' : 'slide'}
              >
                <img src={img} alt={img} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="mobile">
        <Slider {...settingsMobile}>
          {images.map((img, index) => {
            return (
              <div
                key={index}
                className={index === imgIndex2 ? 'slide activeSlide' : 'slide'}
              >
                <img src={img} alt={img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
};

export default ServiceSlider;
