import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Input from '../components/Input';

const BGImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: url('https://be35832fa5168a30acd6-5c7e0f2623ae37b4a933167fe83d71b5.ssl.cf3.rackcdn.com/468/mini-yorkshire-puddings-with-beef__hero.jpg') no-repeat;
  background-size: cover;
  background-position-x: center;
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.2);
    border-radius: 8px;
  }
`;

const imageUrl = '../images/creditcards';
const iconOptions = [
  '',
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

const InputStory = storiesOf('Input', module)
  .add('with options', withInfo(`

    A message must have a **type** of *success* or *error* to display the **text**,
    but can have a **type** without any **text**:
    ~~~js
    message = {
      text: "Please enter a valid email address",
      type: "error"
    }
    ~~~

    ~~~js
    <Input
      color="gray"
      icon=""
      label={null}
      message={null}
      placeholder=""
      defaultValue=""
    />
    ~~~
  `)(() => {

    const messageText = text('Message Text', ''),
          type = select('Message Type', ['', 'error', 'success'], ''),
          message = { text: messageText };

    if (!!type) message.type = type;

    return (
      <Input
        icon={select('with icon', iconOptions, '')}
        label={text('Label', 'Label')}
        placeholder={text('Placeholder', 'Placeholder')}
        message={message}
      />
    );
  }));

export default InputStory;
