import React from 'react';

import { Container, Header, HeaderTitle } from './styles'

const GradientHeader = (props) => (
  <Header
    colors={[props.startColor, props.endColor]}
    start={{
      x: 0,
      y: 0,
    }}
    end={{ x: 0, y: 1 }}
  >
    <HeaderTitle>{props.titleText}</HeaderTitle>
  </Header>
);

export default GradientHeader;
