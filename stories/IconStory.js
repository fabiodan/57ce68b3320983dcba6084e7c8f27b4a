import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Icon, { iconOptions } from '../components/Icon';
import Spinner from '../components/Spinner';

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
    (() => {
      const circle = boolean('Circle BG', false);
      let circleColor;
      if (circle) circleColor = text('Circle color', '#eee');

      return (
        <Icon
          icon={select('Icon', iconOptions, 'home')}
          color={select('Color', colorOptions, 'green')}
          circle={circle}
          circleColor={circleColor}
          scale={number('Scale', 1)}
          overlay={boolean('Overlay', false)}
        />
      );
    }));

export default IconStory;
