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

const images = [web, data, mobile, ia, rpa, metaverso];

const Container = styled.div`
  width: 80%;
  display: block;
  margin: 3rem auto;

  .slide img {
    margin: 0 auto;
  }

  .slide {
    transform: scale(0.6);
    transition: transform 300ms;
    opacity: 0.5;
  }

  .activeSlide {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const ServiceSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <Container>
      <Slider {...settings}>
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
    </Container>
  );
};

export default ServiceSlider;
