import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import { colors } from '../utils';

const Wrapper = styled.div`
  .svg-icon-wrapper > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: ${({ scale }) => `${scale * 113}px`};
    height: ${({ scale }) => `${scale * 34}px`};

    g, use {
      fill: ${({ color }) => color};
    }
  }
`;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  componentWillReceiveProps = () => {
    import(`../images/logo.svg`).then((image) => this.setState({ image }));
  }

  componentWillUpdate = ({ scale }, { image }) => {
    this.content = (
      <ReactSVG
        path={image}
        alt="ASDA"
        wrapperClassName="svg-icon-wrapper"
        evalScripts="always"
      />
    );
  }

  render() {
    const { scale, color, ...props } = this.props;
    return (
      <Wrapper
        scale={scale}
        {...props}
        color={colors()[color]}
      >
        {this.content}
      </Wrapper>
    );
  }
}

Logo.propTypes = {
  color: PropTypes.string,
  scale: PropTypes.number,
};

Logo.defaultProps = {
  color: 'green',
  scale: 1
};

export default Logo;
