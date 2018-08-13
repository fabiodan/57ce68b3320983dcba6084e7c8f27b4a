// Libs
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs/react'

// Components
import Button from '../../components/button/'

// Style
import './_style.scss'

const ButtonStory = storiesOf('Button', module)
  .addDecorator(story => (
    <article className="story-button">
      {story()}
    </article>
  ))
  .add('Standard', () => (
    <section className="story-button__container">
      <Button
        category={select('Category', ['primary', 'secondary'], 'primary')}
        color={select('Color', ['green', 'blue', 'red'], 'green')}
        fluid={boolean('Fluid', false)}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}>
        {text('Text', 'Button Text')}
      </Button>
    </section>
  ))
  .add('Variations', () => (
    <section className="story-button__grid">
      <Button category="primary" color="green">
        Button Text
      </Button>
      <Button category="primary" color="green" loading>
        Button Text
      </Button>
      <Button category="primary" color="green" disabled>
        Button Text
      </Button>
      <Button category="secondary" color="green">
        Button Text
      </Button>
      <Button category="secondary" color="green" loading>
        Button Text
      </Button>
      <Button category="secondary" color="green" disabled>
        Button Text
      </Button>
      <Button category="primary" color="blue">
        Button Text
      </Button>
      <Button category="primary" color="blue" loading>
        Button Text
      </Button>
      <Button category="primary" color="blue" disabled>
        Button Text
      </Button>
      <Button category="secondary" color="blue">
        Button Text
      </Button>
      <Button category="secondary" color="blue" loading>
        Button Text
      </Button>
      <Button category="secondary" color="blue" disabled>
        Button Text
      </Button>
      <Button category="secondary" color="red">
        Button Text
      </Button>
      <Button category="secondary" color="red" loading>
        Button Text
      </Button>
      <Button category="secondary" color="red" disabled>
        Button Text
      </Button>
    </section>
  ))



export default ButtonStory
