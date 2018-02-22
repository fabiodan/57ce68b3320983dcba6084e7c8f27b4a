import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const colors = (percentage = '1') => ({
  green: `rgba(104, 165, 28, ${percentage})`,
  blue: `rgba(53, 148, 178, ${percentage})`,
  red: `rgba(242, 87, 87, ${percentage})`,
  gray: `#3D3D3D`
});

const styleElement = (size) => styled[size]`
  font-family: 'Source Sans Pro', sans-serif;
  color: ${({ color }) => color};
  text-transform: ${({ size }) => (size === 'h5' || size === 'h6' ? 'uppercase' : 'none')};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => {
    switch(size) {
      case 'h1': return '32px';
      case 'h2': return '24px';
      case 'h3': return '18px';
      case 'h4': return '16px';
      case 'h5': return '12px';
      case 'h6': return '10px';
    }
  }};
  font-weight: ${({ size }) => {
    switch(size) {
      case 'h1': return 700;
      case 'h2': return 700;
      case 'h3': return 600;
      case 'h4': return 600;
      case 'h5': return 600;
      case 'h6': return 600;
    }
  }};
  letter-spacing: ${({ size }) => {
    switch(size) {
      case 'h1':
      case 'h3': return 0;
      case 'h2':
      case 'h4':
      case 'h5':
      case 'h6': return '0.3px';
    }
  }};
`;

const Heading = ({ children, color, size, align }) => {
  let headerColor = color;
  if (Object.keys(colors()).includes(color)) headerColor = colors()[color];

  const StyledHeading = styleElement(size);

  return (
    <StyledHeading size={size} color={headerColor} align={align}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  /** Color in string format. Helpers for 'green', 'blue', 'red' and 'gray' */
  color: PropTypes.string,
  /** Alignment in string format. */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  /** Size of the heading, by proper HTML tags */
  size: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
  ]).isRequired
};

Heading.defaultProps = {
  color: 'textGray',
  align: 'left'
};

export default Heading;
