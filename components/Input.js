import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';

const LABEL_UNFOCUSED = '#767676';

const colors = (percentage = '.2') => ({
  gray: `rgba(0, 0, 0, ${percentage})`,
  red: `rgba(242, 87, 87, ${percentage})`
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Source Sans Pro';
`;

const BasicLabel = styled.label`
  font-size: 12px;
  color: ${LABEL_UNFOCUSED};
  margin-bottom: 8px;
`;

const BasicInput = styled.input`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #191919;
  transition: all .2s linear;
  -webkit-font-smoothing: antialiased;
  position: relative;
  cursor: pointer;
  position: relative;
  z-index: 2;
  font-family: 'Source Sans Pro';
  font-size: 18px;
  background: white;
  border: ${({ error }) => {
    return `1px solid ${error && error.length ? colors(1)['red'] : colors()['gray']}`;
  }};
  height: 40px;
  min-width: 300px;
  padding: 0 13px;

  &::placeholder {
    color: #ccc;
  }

  &:focus, &:active {
    outline: none;
    border: ${({ color }) => `1px solid ${colors(.4)[color]}`};
    box-shadow: ${({ color }) => `0 0 8px ${colors(.1)[color]}`};
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
    border: ${({ color }) => `1px solid ${colors(.3)[color]}`};
  }
`;

const BasicError = styled.span`
  font-size: 12px;
  color: ${colors(1)['red']};
  margin-top: 8px;
`;


// const SecondaryButton = styled(BasicButton)`
//   background: white;
//   color: ${({ color }) => colors()[color]};
//
//   &:before {
//     background: ${({ color }) => `${colors(.1)[color]}`};
//   }
// `;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || '',
      id: uniqueId('input')
    }
  }

  updateInput = ({ target: { value } }) => this.setState({ value });

  render() {
    const {
       inline = 'false',
       icon = 'false',
       color = 'gray',
       label = 'Label',
       placeholder = 'Enter a value',
       error = null
     } = this.props,
          { value, id } = this.state;

    return (
      <Wrapper>
        <BasicLabel htmlFor={id}>{label}</BasicLabel>
        <BasicInput
          id={id}
          error={error}
          defaultValue={value}
          onChange={this.updateInput}
          placeholder={placeholder}
        />
        <BasicError>{error}</BasicError>
      </Wrapper>
    );
  }
}

export default Input;
