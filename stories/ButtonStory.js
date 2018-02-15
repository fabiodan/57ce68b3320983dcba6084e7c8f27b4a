import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

const buttonOptions = [
  'green',
  'blue',
  'red'
];

const textColorOptions = [...buttonOptions, 'gray'];

const ButtonStory = storiesOf('Button', module)
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

      let textColor,
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

export default ButtonStory;
