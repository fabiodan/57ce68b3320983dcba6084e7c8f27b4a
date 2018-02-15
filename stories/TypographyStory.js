import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Heading from '../components/Heading';

const sizeOptions = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6'
];

const colorOptions = [
  'gray',
  'green',
  'red',
  'white'
];

const alignOptions = [
  'left',
  'center',
  'right'
];

const TypographyStory = storiesOf('Typography', module)
  .add('Headings, with options',
    withInfo(`
      ~~~js
      <Heading
        size="h1"
        color="gray"
        align="left"
      >
        Welcome to the ASDA StyleGuide™
      </Heading>
      ~~~
    `)
    (() => (
      <Heading
        size={select('Size', sizeOptions, 'h1')}
        color={select('Color', colorOptions, 'gray')}
      >
        {text('Heading text', 'Welcome to the ASDA StyleGuide™')}
      </Heading>
    )));

export default TypographyStory;
