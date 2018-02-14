import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import Button from '../components/Button';
import Input from '../components/Input';

addDecorator(centered);

storiesOf('Button', module)
  .add('Green', () => (
    <Button onClick={action('clicked')}>Add meal to trolley</Button>
  ))
  .add('Blue', () => (
    <Button color="blue" onClick={action('clicked')}>Save</Button>
  ))
  .add('Red', () => (
    <Button color="red" onClick={action('clicked')}>Delete</Button>
  ))
  .add('Green Secondary', () => (
    <Button secondary onClick={action('clicked')}>Add</Button>
  ))
  .add('Blue Secondary', () => (
    <Button color="blue" secondary onClick={action('clicked')}>Confirm</Button>
  ))
  .add('Red Secondary', () => (
    <Button color="red" secondary onClick={action('clicked')}>Remove</Button>
  ));

storiesOf('Button — Small', module)
  .add('Small Green', () => (
    <Button small onClick={action('clicked')}>Save Details</Button>
  ))
  .add('Small Blue', () => (
    <Button small color="blue" onClick={action('clicked')}>Save</Button>
  ))
  .add('Small Red', () => (
    <Button small color="red" onClick={action('clicked')}>Delete</Button>
  ))
  .add('Small Green Secondary', () => (
    <Button small secondary onClick={action('clicked')}>Add</Button>
  ))
  .add('Small Blue Secondary', () => (
    <Button small color="blue" secondary onClick={action('clicked')}>Confirm</Button>
  ))
  .add('Small Red Secondary', () => (
    <Button small color="red" secondary onClick={action('clicked')}>Remove</Button>
  ));

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
    .add('Text Input', () => (
      <Input
        icon={select('with icon', iconOptions, false)}
        label={text('Label', 'Label')}
        placeholder={text('Placeholder', 'Enter a value')}
        error={text('Error Message', null)}
      />
    ))
