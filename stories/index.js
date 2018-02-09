import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import Button from '../components/Button';

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
