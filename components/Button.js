import React, { PureComponent } from 'react';
import styled from 'styled-components';

const colors = (percentage = '1') => ({
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

  background: ${({ color }) => colors()[color]};
  border: ${({ color }) => `1px solid ${colors()[color]}`};
  height: ${({ small }) => (small ? '40px' : '50px')};
  min-width: ${({ small }) => (small ? '166px' : '240px')};

  span {
    position: relative;
    z-index: 2;
    font-family: 'Source Sans Pro';
    font-size: ${({ small }) => (small ? '16px' : '18px')};
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
    const { children, secondary, color = 'green', small = false } = this.props,
          content = <span>{children}</span>;

    if (secondary) {
      return <SecondaryButton color={color} small={small}>{content}</SecondaryButton>;
    }

    return <BasicButton color={color} small={small}>{content}</BasicButton>;
  }
}

export default Button;
