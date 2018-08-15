import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { PortalWithState } from 'react-portal';

import ButtonBackup from '../components/ButtonBackup';
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

const textColorOptions = [...buttonOptions, 'gray'];

const ButtonStory = storiesOf('ButtonBackup', module)
  .add('with options',
    withInfo(`
      ~~~js
      <ButtonBackup
        color="green"
        secondary={false}
        small={false}
        disabled={false}
        loading={false}
        onClick={() => console.log('ButtonBackup clicked!')}
      >
        Add meal to trolley
      </ButtonBackup>
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
              <ButtonBackup
                color={color}
                textColor={textColor}
                secondary={boolean('Secondary Style', false)}
                small={boolean('Small Size', false)}
                disabled={boolean('Disabled', false)}
                loading={boolean('Loading', false)}
                onClick={openPortal}
                overlay={overlay}
              >
                {text('ButtonBackup Text', 'Add meal to trolley')}
              </ButtonBackup>
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
                  <RecipeModal close={closePortal} />
                )}
              </React.Fragment>
            );
          }}
        </PortalWithState>
      );
    }));

export default ButtonStory;
