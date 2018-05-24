import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { PortalWithState } from 'react-portal';

import Button from '../components/Button';
import RecipeModal from '../components/RecipeModal';

const BGImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: url('https://be35832fa5168a30acd6-5c7e0f2623ae37b4a933167fe83d71b5.ssl.cf3.rackcdn.com/468/mini-yorkshire-puddings-with-beef__hero.jpg') no-repeat;
  background-size: cover;
  background-position-x: center;
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.2);
    border-radius: 8px;
  }
`;

const buttonOptions = [
  'green',
  'blue',
  'red'
];

const showModal = () => (
  <RecipeModal />
);

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

      return (
        <PortalWithState closeOnOutsideClick closeOnEsc>
          {({ openPortal, closePortal, isOpen, portal }) => {
            let button = (
              <Button
                color={color}
                textColor={textColor}
                secondary={boolean('Secondary Style', false)}
                small={boolean('Small Size', false)}
                disabled={boolean('Disabled', false)}
                loading={boolean('Loading', false)}
                onClick={openPortal}
                overlay={overlay}
              >
                {text('Button Text', 'Add meal to trolley')}
              </Button>
            );

            if (overlay) {
              button = (
                <BGImage>{button}</BGImage>
              );
            }

            return (
              <React.Fragment>
                {button}
                {portal(
                  <RecipeModal close={closePortal} isOpen={isOpen} />
                )}
              </React.Fragment>
            );
          }}
        </PortalWithState>
      );
    }));

export default ButtonStory;
