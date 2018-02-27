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

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    width: 20px;
    height: 20px;
  }

  .indicator {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .2s linear;
    border: ${({ disabled }) => `1px solid ${disabled ? '#ccc' : colors()['blue']}`};
    background: ${({ disabled, checked }) => {
      if (checked) {
        return disabled ? '#ccc' : colors()['blue'];
      }
      return 'white';
    }};

    svg {
      display: ${({ checked }) => (checked ? 'block' : 'none')};
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
      <div className="indicator">
        <Icon
          icon="check"
          color="white"
          scale={0.75}
        />
      </div>
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
