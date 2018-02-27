import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../utils';

import Icon from './Icon';

const StyledCheckbox = styled.label`
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
  }

  .indicator {
    width: 20px;
    height: 20px;
    border-radius: 4px;
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

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.defaultChecked };
  }

  onChange = () => {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { disabled, label } = this.props,
          { checked } = this.state;

    return (
      <StyledCheckbox checked={checked} disabled={disabled}>
          <input
            type="checkbox"
            checked={checked}
            onChange={this.onChange}
          />
          <div className="indicator">
            <Icon
              icon="check"
              color="white"
              scale={0.75}
            />
          </div>
          <span>{label}</span>
      </StyledCheckbox>
    );
  }
}

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  label: ''
};

export default Checkbox;
