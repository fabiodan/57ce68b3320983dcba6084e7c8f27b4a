import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Icon, { iconOptions } from '@asda/icon/index.js';
import Logo from '@asda/icon/logo';


const colorOptions = [
  'gray',
  'green',
  'red',
  'blue',
  'white'
];

const IconStory = storiesOf('Icon', module)
  .add('with options',
    withInfo(`
      ~~~js
      <Icon
        icon="home"
        color="green"
        circle={false}
        circleColor="#ccc"
      />
      ~~~
    `)
    (() => (
      <Icon
        icon={select('Icon', iconOptions, 'home')}
        color={select('Color', colorOptions, 'green')}
        scale={number('Scale', 1)}
        overlay={boolean('Overlay', false)}
      />
    )))
    .add('Logo',
      withInfo(`
        ~~~js
        <Logo scale={1} color="green" />
        ~~~
      `)
      (() => (
        <Logo
          scale={number('Scale', 1)}
        />
      )));

export default IconStory;
