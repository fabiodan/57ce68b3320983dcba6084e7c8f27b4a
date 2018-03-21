import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../utils';

import Icon from './Icon';

const StyledRadio = styled.label`
  font-size: 14px;
  font-family: 'Source Sans Pro';
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled }) => (disabled ? '#767676' : '#3d3d3d')};

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .indicator {
    width: ${({ checked }) => (checked ? '16px' : '18px')};
    height: ${({ checked }) => (checked ? '16px' : '18px')};
    border-radius: 100%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ disabled, checked }) => {
      return `${checked ? '2' : '1'}px solid ${disabled ? '#ccc' : colors()['green']}`;
    }};
    background: white;
    cursor: pointer;

    &:after {
      display: block;
      opacity: ${({ checked }) => (checked ? '1' : '0')};
      content: '';
      position: relative;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      transition: opacity .2s linear;
      cursor: pointer;
      background: ${({ disabled, checked }) => {
        if (checked) {
          return disabled ? '#ccc' : colors()['green'];
        }
        return 'white';
      }};
    }
  }
`;

const Radio = ({ disabled, label, value, handleChange, checked }) => (
  <StyledRadio checked={checked} disabled={disabled}>
      <input
        type="radio"
        checked={checked}
        onChange={handleChange}
        value={value}
      />
      <div className="indicator"/>
      <span>{label}</span>
  </StyledRadio>
);

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  label: '',
  value: ''
};

export default Radio;
