import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

import Button from '../components/Button';
import Input from '../components/Input';

addDecorator(centered);

const buttonOptions = [
  'green',
  'blue',
  'red'
];

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
    (() => (
      <Button
        color={select('Color', buttonOptions, 'green')}
        secondary={boolean('Secondary Style', false)}
        small={boolean('Small Size', false)}
        onClick={action('clicked')}
      >
        {text('Button Text', 'Add meal to trolley')}
      </Button>
    )));

const imageUrl = '../images/creditcards';
const iconOptions = [
  false,
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
      icon={false}
      label={null}
      message={null}
      placeholder=""
      defaultValue=""
    />
    ~~~
  `)(() => {

    const messageText = text('Message Text', ''),
          type = select('Message Type', [null, 'error', 'success'], null),
          message = { text: messageText };

    if (!!type) message.type = type;

    return (
      <Input
        icon={select('with icon', iconOptions, false)}
        label={text('Label', 'Label')}
        placeholder={text('Placeholder', 'Placeholder')}
        message={message}
      />
    );
  }));
