import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { creditCards as iconOptions } from '../utils';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Checkbox from '../components/Checkbox';
import RadioButtons from '../components/RadioButtons';

const imageUrl = '../images/creditcards';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const InputStory = storiesOf('Input', module)
  .add('Input with options', withInfo(`

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
  }))
  .add('Textarea with options', () => {
    const messageText = text('Message Text', ''),
          type = select('Message Type', ['', 'error', 'success'], ''),
          message = { text: messageText };

    let rows = number('Rows', 5);

    if (!!type) message.type = type;
    if (rows <= 1 || rows === undefined) rows = 1;

    return (
      <Checkbox
        label={text('Label', 'Label')}
        disabled={boolean('Disabled', false)}
        defaultChecked={false}
      />
    );
  })
  .add('Checkbox with options', () => (
    <Checkbox
      label={text('Label', 'Label')}
      disabled={boolean('Disabled', false)}
    />
  ))
  .add('Radio with options', () => {
    const radioOptions = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3', disabled: true },
      { label: 'Option 4', value: 'option4' },
    ];

    return (
      <RadioButtons options={radioOptions} inline={boolean('Inline', false)}/>
    );
  });

export default InputStory;
