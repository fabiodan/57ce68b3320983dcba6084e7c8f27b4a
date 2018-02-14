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
  font-weight: 700;
  color: white;
  transition: all .2s linear;
  -webkit-font-smoothing: antialiased;
  position: relative;
  cursor: pointer;
  padding: 0 20px;

  background: ${({ color }) => colors()[color]};
  border: ${({ color }) => `1px solid ${colors()[color]}`};
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
      opacity: 1;
    }
  }
`;

const SecondaryButton = styled(BasicButton)`
  background: white;
  color: ${({ color }) => colors()[color]};

  &:before {
    background: ${({ color }) => `${colors(.1)[color]}`};
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
      onClick
    } = this.props;
    const content = <span>{children}</span>;

    if (secondary) {
      return (
        <SecondaryButton
          onClick={onClick}
          color={color}
          small={small}
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
  /** Color of the button as a string: green, blue, or red */
  color: PropTypes.oneOf([
    'green', 'blue', 'red'
  ]),
};

Button.defaultProps = {
  secondary: false,
  small: false,
  loading: false,
  disabled: false,
  color: 'green',
  onClick: () => console.log('Button clicked')
};

export default Button;
