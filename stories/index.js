import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import styled from 'styled-components';

import Button from '../components/Button';
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

addDecorator(centered);

const buttonOptions = [
  'green',
  'blue',
  'red'
];

const textColorOptions = [...buttonOptions, 'gray'];

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with options',
    withInfo(`
      ~~~js
      <Button
        color="green"
        secondary={false}
        small={false}
        disabled={false}
        loading={false}
        onClick={() => console.log('Button clicked!')}
      >
        Add meal to trolley
      </Button>
      ~~~
    `)
    (() => {

      const color = select('Color', buttonOptions, 'green');

      let textColor = 'green',
          overlay = false;

      if (color === 'white') {
        textColor = select('Text Color', textColorOptions, 'green');
        overlay = true;
      } else {
        overlay = boolean('Overlay image', false);
      }

      if (overlay) {
        !buttonOptions.includes('white') && buttonOptions.push('white');
      } else {
        buttonOptions.includes('white') && buttonOptions.pop();
      }

      const button = (
        <Button
          color={color}
          textColor={textColor}
          secondary={boolean('Secondary Style', false)}
          small={boolean('Small Size', false)}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          onClick={action('clicked')}
          overlay={overlay}
        >
          {text('Button Text', 'Add meal to trolley')}
        </Button>
      );

      if (overlay) {
        return (
          <BGImage>{button}</BGImage>
        );
      }

      return button;
    }));

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

storiesOf('Input', module)
  .addDecorator(withKnobs)
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
