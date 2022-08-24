import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import P from 'prop-types';
import { theme } from '../theme/theme';

const Container = styled.div`
  position: absolute;
  z-index: 10;

  .prev,
  .next {
    transition: 300ms;
    cursor: pointer;
    color: ${theme.colors.thirdColor};
  }

  .prev:hover,
  .next:hover {
    transform: scale(1.1);
  }

  .next {
    right: 200px;
    top: 50%;
  }

  .prev {
    left: 0;
    top: 50%;
  }
`;

export const PrevArrow = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon
        icon="bi:arrow-left-circle-fill"
        width={40}
        height={40}
        // style={{ cursor: 'pointer', color: theme.colors.thirdColor }}
        className="prev"
      />
    </Container>
  );
};

PrevArrow.propTypes = {
  onClick: P.node,
};

export const NextArrow = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon
        icon="bi:arrow-right-circle-fill"
        width={40}
        height={40}
        // style={{ cursor: 'pointer', color: theme.colors.thirdColor }}
        className="next"
      />
    </Container>
  );
};

NextArrow.propTypes = {
  onClick: P.node,
};
