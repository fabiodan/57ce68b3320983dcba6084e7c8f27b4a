import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Radio from './Radio';

const Form = styled.form`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  justify-content: ${({ inline }) => (inline ? 'flex-start' : 'center')};
  align-items: ${({ inline }) => (inline ? 'center' : 'flex-start')};

  label {
    margin-right: ${({ inline }) => (inline ? '30px' : '0')};
    margin-bottom: ${({ inline }) => (inline ? '0' : '20px')};

    &:last-child {
      margin-bottom: 0;
      margin-right: 0;
    }
  }
`;

class RadioButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: props.options[props.defaultOption].value };
  }

  handleChange = (ev) => {
    this.setState({ selectedOption: ev.target.value });
  }

  render() {
    const { options, inline } = this.props,
          { selectedOption } = this.state,
          buttons = options.map(({ label, value, disabled }) => (
            <Radio
              key={value}
              label={label}
              disabled={disabled}
              handleChange={this.handleChange}
              checked={selectedOption === value}
              value={value}
            />
          ));

    return <Form inline={inline}>{buttons}</Form>;
  }
}

RadioButtons.propTypes = {
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.number,
  inline: PropTypes.bool
};

RadioButtons.defaultProps = {
  defaultOption: 0,
  inline: false
};

export default RadioButtons;
