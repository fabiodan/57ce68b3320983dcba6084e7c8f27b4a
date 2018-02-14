import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';

const creditcards = [
  'blank',
  'amex',
  'cirrus',
  'diners',
  'discover',
  'maestro',
  'mastercard',
  'plus',
  'visa'
];

const colors = (percentage = '.2') => ({
  gray: `rgba(0, 0, 0, ${percentage})`,
  green: `rgba(104, 165, 28, 1)`,
  red: `rgba(242, 87, 87, 1)`
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Source Sans Pro';
`;

const Label = styled.label`
  font-size: 12px;
  color: #767676;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #191919;
  transition: all .2s linear, background 0s linear;
  -webkit-font-smoothing: antialiased;
  position: relative;
  cursor: pointer;
  position: relative;
  z-index: 2;
  font-family: 'Source Sans Pro';
  font-size: 16px;
  background: ${({ icon }) => (icon ? `url(${icon}) white no-repeat 10px` : 'white')};
  border: ${({ color }) => `1px solid ${colors()[color]}`};
  height: 40px;
  min-width: ${({ icon }) => (icon ? '263px' : '300px')};
  padding: ${({ icon }) => `0 13px ${icon ? ' 0 50px' : ''}`};

  &::placeholder {
    color: #767676;
  }

  &:focus, &:active {
    outline: none;
    border: ${({ color }) => `1px solid ${colors(.4)[color]}`};
    box-shadow: ${({ color }) => `0 0 8px ${colors(.1)[color]}`};
  }

  &:hover {
    border: ${({ color }) => `1px solid ${colors(.3)[color]}`};
  }
`;

const Message = styled.span`
  font-size: 12px;
  color: ${({ color }) => colors()[color]};
  margin-top: 8px;
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || '',
      id: uniqueId('input'),
      icon: ''
    }
  }

  componentWillReceiveProps = ({ icon }) => {
    if (icon && creditcards.includes(icon)) {
      import(`../images/creditcards/${icon}.png`).then((image) => {
        this.setState({ icon: image })
      });
    } else {
      this.setState({ icon: '' });
    }
  }

  updateInput = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value, id, icon } = this.state;
    const {
       label,
       placeholder,
       message,
       status
    } = this.props;

    let color = this.props.color;
    if (message && message.type) {
      if (message.type === 'error') {
        color = 'red';
      } else if (message.type === 'success') {
        color = 'green';
      }
    }

    return (
      <Wrapper>
        {label && label.length && <Label htmlFor={id}>{label}</Label>}
        <StyledInput
          id={id}
          color={color}
          defaultValue={value}
          onChange={this.updateInput}
          placeholder={placeholder}
          icon={icon}
        />
        {message && message.type &&
          <Message color={color}>
            {message.text || ''}
          </Message>
        }
      </Wrapper>
    );
  }
}

Input.propTypes = {
  /** Color of the input border as a string */
  color: PropTypes.oneOf([
    'gray', 'red', 'green'
  ]),
  /** Which type of credit card icon should be displayed, or false if none */
  icon: PropTypes.oneOf([
    '',
    ...creditcards
  ]),
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Message object to be displayed below the input */
  message: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.oneOf([
      '', 'success', 'error'
    ])
  }),
  /** Pre-fill the input's default value */
  defaultValue: PropTypes.string
};

Input.defaultProps = {
  color: 'gray',
  label: null,
  icon: '',
  message: null,
  placeholder: '',
  defaultValue: ''
};

export default Input;
