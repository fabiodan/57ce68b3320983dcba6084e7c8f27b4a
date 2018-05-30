import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
  padding: 32px;
`;

const Heading = styled.h3`
  margin: 0 0 32px;
  font-weight: 600;
`;

const Method = styled.ol`
  padding: 0 0 0 20px;
  list-style: none;
  counter-reset: li;

  li {
    margin-bottom: 16px;
    font-size: 14px;

    &:before {
      content: counter(li) ".";
      font-weight: 700;
      display: inline-block;
      width: 20px;
      margin-left: -20px;
      counter-increment: li;
    }
  }
`;

const Details = () => (
  <Content>
    <Heading>Method</Heading>
    <Method>
      <li>Cook the spaghetti in a large pan according to the pack instructions and drain well.</li>
      <li>Heat the oil in a large frying pan on a medium heat. Cook the chicken for 6 mins each side. Add the honey and lemon juice. Stir to coat. Cook for 1 min to thicken the glaze.</li>
      <li>Take the pan off the heat, cover and rest for 5 mins before slicing.</li>
      <li>Cook the peas in boiling water for 4 mins. Drain and return to the pan.</li>
      <li>Mash the peas roughly and season with black pepper. Stir through 1tsp of the lemon zest and stir the peas through the pasta.</li>
      <li>Top the spaghetti with the chicken. Serve sprinkled with more zest and lemon wedges (optional).</li>
    </Method>
  </Content>
);

export default Details;
