import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const colors = (percentage = '1') => ({
  green: `rgba(104, 165, 28, ${percentage})`,
  blue: `rgba(53, 148, 178, ${percentage})`,
  red: `rgba(242, 87, 87, ${percentage})`
});

const BasicButton = styled.button`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  transition: all .2s linear;
  -webkit-font-smoothing: antialiased;
  position: relative;
  cursor: pointer;
  padding: 0 20px;

  color: ${({ color }) => (color === 'white' ? '#191919' : 'white')};;
  background: ${({ color }) => colors()[color]};
  border: ${({ color, overlay }) => `1px solid ${color === 'white' && overlay ? 'white' : colors()[color]}`};
  height: ${({ small }) => (small ? '30px' : '40px')};
  min-width: ${({ small }) => (small ? '130px' : '200px')};

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

const SecondaryButton = styled(BasicButton)`
  background: ${({ overlay }) => (overlay ? `none` : 'white')};
  color: ${({ color, overlay }) => (overlay ? 'white' : colors()[color])};
  border-color: ${({ color, overlay }) => (overlay ? 'white' : colors()[color])};
  text-shadow: ${({ overlay }) => (overlay ? `1px 1px 2px rgba(0,0,0,.2), 0 0 10px rgba(0,0,0,.5)` : 'none')};

  &:before {
    background: ${({ color, overlay }) => (overlay ? 'rgba(255,255,255,.1)' : `${colors(.1)[color]}`)};
  }
`;

class Button extends PureComponent {
  render() {
    const {
      children,
      secondary,
      color,
      small,
      disabled,
      loading,
      onClick,
      overlay
    } = this.props;
    const content = <span>{children}</span>;

    if (secondary) {
      return (
        <SecondaryButton
          onClick={onClick}
          color={color}
          small={small}
          overlay={overlay}
        >
          {content}
        </SecondaryButton>
      );
    }

    return (
      <BasicButton
        onClick={onClick}
        color={color}
        small={small}
        overlay={overlay}
      >
        {content}
      </BasicButton>
    );
  }
}

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
