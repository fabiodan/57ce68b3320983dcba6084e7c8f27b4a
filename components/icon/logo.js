import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { colors } from '@asda/../utils'
import './_style.scss'

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  componentWillReceiveProps = () => {
    import(`@asda/../images/logo.svg`).then((image) => this.setState({ image }));
  }

  componentWillUpdate = ({ scale }, { image }) => {
    this.content = (
      <ReactSVG
        path={image}
        alt="ASDA"
        wrapperClassName="icon-wrapper"
        evalScripts="always"
        svgStyle={{
          width: `${scale * 113}px`,
          height: `${scale * 34}px`
        }}
      />
    );
  }

  render() {
    return <div>{this.content}</div>
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
