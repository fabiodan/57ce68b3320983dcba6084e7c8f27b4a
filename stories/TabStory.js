import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Tabs from '../components/Tabs';

export const Content = styled.img`
  margin-top: 30px;
  height: 200px;
  width: auto;
`;

const TabStory = storiesOf('Tabs', module)
  .add('with options', withInfo(`
    ~~~js
    <Tabs
      options={[
        {
          title: 'Tab 1',
          content: <FooContainer />
        },
        {
          title: 'Tab 2',
          content: <FooContainer2 />
        },
        {
          title: 'Tab 3',
          content: <FooContainer3 />
        },
      ]}
    />
    ~~~
  `)(() => {
    const title1 = text('First Tab', 'High Five'),
          title2 = text('Second Tab', 'Seinfeld'),
          title3 = text('Third Tab', 'Cake Recipes');

    const tabOptions = [
      {
        title: title1,
        content: <Content src="https://media.giphy.com/media/UogSmj4xDjQZO/giphy.gif"/>
      },
      {
        title: title2,
        content: <Content src="https://media.giphy.com/media/100ak1Sn7F3ius/giphy.gif"/>
      },
      {
        title: title3,
        content: <Content src="https://media.giphy.com/media/wPZhtUm53H5lu/giphy.gif"/>
      },
    ];

    return (
      <Tabs
        options={tabOptions}
      />
    );
  }));

export default TabStory;
