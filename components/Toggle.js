import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../utils';

const StyledToggle = styled.label`
  font-size: 14px;
  font-family: 'Source Sans Pro';
  color: ${({ disabled }) => (disabled ? '#767676' : colors()['gray'])};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '.75' : '1')};

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    width: 20px;
    height: 20px;
  }

  .indicator {
    width: 32px;
    height: 8px;
    padding: 6px;
    border-radius: 10px;
    background: ${({ on }) => (on ? colors()['green'] : '#767676')};
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transition: all .4s linear;

    &:before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      background: #fff;
      border-radius: 100%;
      position: absolute;
      left: 20px;
      top: 5px;
    }

    span {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      display: block;

      &.on {
        margin-right: 10px;
      }

      &.off {
        margin-left: 11px;
      }
    }

    &:before,
    span {
      transition: all .4s cubic-bezier(.85, -0.4, 0, 1.65);
    }

    span {
      transform: ${({ on }) => `translateX(${on ? '3' : '-21'}px)`};
    }

    &:before {
      transform: ${({ on }) => `translateX(${on ? '9' : '-15'}px)`};
    }
  }
`;

const Label = styled.span`
  display: block;
  margin-left: 15px;
`;

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { on: props.defaultOn };
  }

  onChange = () => {
    if (!this.props.disabled) this.setState({ on: !this.state.on });
  }

  render() {
    const { disabled, label } = this.props,
          { on } = this.state;

    return (
      <StyledToggle on={on} disabled={disabled}>
        <input
          type="checkbox"
          checked={on}
          onChange={this.onChange}
        />
        <div className="indicator">
          <span className="on">On</span>
          <span className="off">Off</span>
        </div>
        <Label>{label}</Label>
      </StyledToggle>
    );
  }
}

Toggle.propTypes = {
  defaultOn: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

Toggle.defaultProps = {
  defaultOn: false,
  disabled: false,
  label: ''
};

export default Toggle;
