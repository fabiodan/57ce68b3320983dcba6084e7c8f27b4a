import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Heading from '../components/Heading';
import Copy from '../components/Copy';

const sizeOptions = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6'
];

const colorOptions = [
  'textGray',
  'green',
  'red'
];

const alignOptions = [
  'left',
  'center',
  'right'
];

const TypographyStory = storiesOf('Typography', module)
  .add('Headings',
    withInfo(`
      ~~~js
      <Heading
        size="h1"
        color="textGray"
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
    )))
  .add('Main copy', () => (
      <Copy type={select('Type', ['primary', 'secondary', 'tertiary'], 'primary')}>
      {text('Body Copy',
        `Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either.
         They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back.
         Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended.
      `)}
      </Copy>
    ))

export default TypographyStory;
