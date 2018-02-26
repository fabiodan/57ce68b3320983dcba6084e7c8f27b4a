import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import { colors } from '../utils';

export const iconOptions = [
  'alert',
  'bag',
  'browse',
  'calendar',
  'check',
  'chevron_left',
  'chevron_right',
  'circle_minus',
  'circle_plus',
  'click_&_collect',
  'clock',
  'close',
  'facebook',
  'feedback',
  'google+',
  'heart',
  'heart_outline',
  'help',
  'home',
  'info',
  'list',
  'lock',
  'mail',
  'orders',
  'printer',
  'search',
  'settings',
  'star',
  'trash',
  'trolley',
  'truck',
  'twitter',
  'upload',
  'user'
];

const Wrapper = styled.div`
  .svg-icon-wrapper > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: ${({ scale }) => `${scale * 30}px`};
    height: ${({ scale }) => `${scale * 30}px`};
    g, use {
      fill: ${({ color }) => color};
    }
  }
`;

const Circle = styled.button`
  border-radius: ${({ scale }) => `${scale * 20}px`};
  background: ${({ circleColor }) => circleColor};
  height: ${({ scale }) => `${scale * 40}px`};
  width: ${({ scale }) => `${scale * 40}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  .svg-icon-wrapper {
    &, div {
      width: ${({ scale }) => `${scale * 30}px`};
      height: ${({ scale }) => `${scale * 30}px`};
    }
  }
`;

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: ''
    };
  }

  componentWillReceiveProps = ({ icon }) => {
    if (icon && iconOptions.includes(icon)) {
      import(`../images/icons/${icon}.svg`).then((image) => {
        this.setState({ icon: image })
      });
    } else {
      this.setState({ icon: '' });
    }
  }

  render() {
    const { icon: iconName, scale, circle, color, circleColor, ...props } = this.props,
          { icon } = this.state;

    let content = (
      <ReactSVG
        path={icon}
        alt={iconName}
        wrapperClassName="svg-icon-wrapper"
      />
    );

    if (circle) {
      content = (
        <Circle scale={scale} circleColor={circleColor}>{content}</Circle>
      );
    }

    return (
      <Wrapper
        scale={scale}
        {...props}
        color={colors()[color]}
      >
        {content}
      </Wrapper>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  circle: PropTypes.bool,
  circleColor: PropTypes.string,
  scale: PropTypes.number
};

Icon.defaultProps = {
  color: 'green',
  circle: false,
  circleColor: '#eee',
  scale: 1
};

export default Icon;
