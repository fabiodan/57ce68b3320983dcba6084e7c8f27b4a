import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { grays } from '../utils';

const StyledCopy = styled.p`
  font-family: 'Source Sans Pro';
  font-size: ${({ type }) => {
    switch(type) {
      case 'primary': return '14px';
      case 'secondary': return '13px';
      case 'tertiary': return '12px';
    }
  }};
  max-width: 700px;
  line-height: ${({ type }) => {
    switch(type) {
      case 'primary': return '21px';
      case 'secondary': return '18px';
      case 'tertiary': return '16px';
    }
  }};
  color: ${({ type }) => {
    switch(type) {
      case 'primary': return grays();
      case 'secondary':
      case 'tertiary': return grays(3);
    }
  }};
  letter-spacing: ${({ type }) => (type === 'tertiary' ? '0.3px' : 0)};
`;

const Copy = ({ children, type, error }) => (
  <StyledCopy type={type}>
    {children}
  </StyledCopy>
);

Copy.propTypes = {
  /** Type of text as a string */
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary'
  ])
};

Copy.defaultProps = {
  type: 'primary'
};

export default Copy;
