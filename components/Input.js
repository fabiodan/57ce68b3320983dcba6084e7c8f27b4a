import React, { Component } from 'react';
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
  placeholder: `#767676`,
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
  color: ${colors()['placeholder']};
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
  min-width: 300px;
  padding: ${({ icon }) => `0 13px ${icon ? ' 0 50px' : ''}`};

  &::placeholder {
    color: ${colors()['placeholder']};
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

const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${colors(1)['red']};
  margin-top: 8px;
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || '',
      id: uniqueId('input'),
      icon: false
    }
  }

  componentWillReceiveProps = ({ icon }) => {
    if (icon && creditcards.includes(icon)) {
      import(`../images/creditcards/${icon}.png`).then((image) => {
        this.setState({ icon: image })
      });
    } else {
      this.setState({ icon: false });
    }
  }

  updateInput = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value, id, icon } = this.state;
    const {
       inline = false,
       color = 'gray',
       label = 'Label',
       placeholder = 'Enter a value',
       error = null,
     } = this.props;

    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <StyledInput
          id={id}
          color={error && error.length ? 'red' : color}
          defaultValue={value}
          onChange={this.updateInput}
          placeholder={placeholder}
          icon={icon}
        />
        <ErrorMessage>{error}</ErrorMessage>
      </Wrapper>
    );
  }
}

export default Input;
