import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
  'chevron_up',
  'chevron_down',
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
  'rollback',
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
    margin-left: ${({ icon }) => (icon === 'check' ? '-1px' : '0')};
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
      margin-left: 0;
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
    if (iconOptions.includes(icon)) {
      import(`../images/icons/${icon}.svg`).then((image) => {
        this.svgDefs = null;
        this.setState({ icon: image })
      });
    }
  }

  componentWillUpdate = ({ icon: iconName, scale, circle, overlay, circleColor }, { icon }) => {
    if (icon && !this.svgDefs) {
      this.content = (
        <ReactSVG
          path={icon}
          alt={iconName}
          wrapperClassName="svg-icon-wrapper"
          evalScripts="always"
          {...overlay && { callback: this.ensurePortalTarget }}
        />
      );

      if (circle) {
        this.content = (
          <Circle scale={scale} circleColor={circleColor}>{this.content}</Circle>
        );
      }
    }
  }

  ensurePortalTarget = (svg) => {
    const svgDefs = svg.getElementsByTagName('defs')[0];

    if (svgDefs) {
      this.svgDefs = svgDefs;
      svg.setAttribute('filter', 'url(#icon-dropshadow)');
      this.forceUpdate();
    }
  }

  render() {
    const { icon, scale, color, overlay, ...props } = this.props;
    return (
      <Wrapper
        scale={scale}
        {...props}
        color={colors()[color]}
        icon={icon}
      >
        {this.content}
        {this.svgDefs && overlay && ReactDOM.createPortal(
           <filter id="icon-dropshadow" height="150%">
             <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
             <feOffset dx="0" dy="0" result="offsetblur"/>
             <feComponentTransfer>
               <feFuncA type="linear" slope="0.4"/>
             </feComponentTransfer>
             <feMerge>
               <feMergeNode/>
               <feMergeNode in="SourceGraphic"/>
             </feMerge>
           </filter>,
           this.svgDefs
        )}
      </Wrapper>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  circle: PropTypes.bool,
  circleColor: PropTypes.string,
  scale: PropTypes.number,
  overlay: PropTypes.bool
};

Icon.defaultProps = {
  color: 'green',
  circle: false,
  circleColor: '#eee',
  scale: 1,
  overlay: false
};

export default Icon;
