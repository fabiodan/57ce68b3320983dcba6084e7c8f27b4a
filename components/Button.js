import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from './Spinner';

export const colors = (percentage = '1') => ({
  green: `rgba(104, 165, 28, ${percentage})`,
  blue: `rgba(53, 148, 178, ${percentage})`,
  red: `rgba(242, 87, 87, ${percentage})`,
  gray: `#4A4A4A`
});

const StyledButton = styled.button`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  transition: all .2s linear;
  -webkit-font-smoothing: antialiased;
  position: relative;
  cursor: pointer;
  padding: ${({ small }) => (small ? '0 15px' : '0 20px')};

  color: ${({ color, textColor, overlay, disabled }) =>
    (color === 'white' ? colors(disabled && overlay ? 0.75 : 1)[textColor] : `rgba(255,255,255,${disabled && overlay ? 0.75 : 1})`)};
  background: ${({ color }) => colors()[color]};
  border: ${({ color, overlay }) => {
    if (overlay) {
      if (color === 'white') return `1px solid white`;
      return `1px solid rgba(0,0,0,.15)`;
    }
    return `1px solid ${colors()[color]}`;
  }};
  height: ${({ small }) => (small ? '30px' : '40px')};
  min-width: ${({ small }) => (small ? '130px' : '200px')};
  box-shadow: ${({ overlay }) => (overlay ? '0 2px 3px rgba(0,0,0,.1)' : 'none')};
  opacity: ${({ disabled, overlay }) => {
    if (overlay && disabled) return .9;
    return disabled ? 0.6 : 1;
  }};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  span {
    position: relative;
    z-index: 2;
    font-family: 'Source Sans Pro';
    font-size: ${({ small }) => (small ? '15px' : '18px')};
  }

  &:focus, &:active {
    outline: none;
    box-shadow: ${({ color }) => `0 0 10px ${colors(.3)[color]}`};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.1);
    opacity: 0;
    transition: opacity .2s linear;
    z-index: 1;
  }

  &:hover {
    &:before {
      opacity: ${({ color }) => (color === 'white' ? 0 : 1)};
    }
  }
`;

const SecondaryButton = styled(StyledButton)`
  background: ${({ overlay }) => (overlay ? `none` : 'white')};
  color: ${({ color, overlay }) => (overlay ? 'white' : colors()[color])};
  border-color: ${({ color, overlay }) => (overlay ? 'white' : colors()[color])};
  text-shadow: ${({ overlay }) => (overlay ? `0 1px 2px rgba(0,0,0,0.5), 0 0 15px rgba(0,0,0,.1)` : 'none')};
  box-shadow: none;

  &:before {
    background: ${({ color, overlay }) => (overlay ? 'rgba(255,255,255,.1)' : `${colors(.1)[color]}`)};
  }
`;

const Loading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = ({
  children,
  secondary,
  color,
  textColor,
  small,
  disabled,
  loading,
  onClick,
  overlay
}) => {
  let content = <span>{children}</span>;
  if (loading) {
    let spinnerColor = secondary ? colors()[color] : 'white';
    if (secondary && overlay) spinnerColor = 'white';
    if (color === 'white') spinnerColor = colors()[textColor];
    content = (
      <Loading>
        <Spinner color={spinnerColor} scale={small ? 0.2 : 0.25} />
        {content}
      </Loading>
    );
  }

  if (secondary) {
    return (
      <SecondaryButton
        onClick={onClick}
        color={color}
        small={small}
        overlay={overlay}
        disabled={disabled}
      >
        {content}
      </SecondaryButton>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      color={color}
      textColor={textColor}
      small={small}
      overlay={overlay}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Button text */
  children: PropTypes.string.isRequired,
  /** Color of the button as a string */
  onClick: PropTypes.func.isRequired,
  /** Display in secondary style? */
  secondary: PropTypes.bool,
  /** Display in smaller style */
  small: PropTypes.bool,
  /** Disabled? */
  disabled: PropTypes.bool,
  /** Display loading indicator? */
  loading: PropTypes.bool,
  /** Color of the button as a string */
  color: PropTypes.oneOf([
    'green', 'blue', 'red', 'white'
  ]),
  /** Color of the button text when the background is white as a string */
  textColor: PropTypes.oneOf([
    'green', 'blue', 'red', 'gray'
  ]),
  /** Is the button over an image? */
  overlay: PropTypes.bool
};

Button.defaultProps = {
  secondary: false,
  small: false,
  loading: false,
  disabled: false,
  color: 'green',
  onClick: () => console.log('Button clicked'),
  overlay: false
};

export default Button;
