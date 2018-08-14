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
        category={select('Category', ['primary', 'secondary'])}
        color={select('Color', ['green', 'blue', 'red'])}
        fluid={boolean('Fluid', false)}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}>
        {text('Text', 'Button Text')}
      </Button>
    </section>
  ))
  .add('Variations', () => (
    <section className="story-button__grid">
      <Button>
        Button Text
      </Button>
      <Button loading>
        Button Text
      </Button>
      <Button disabled>
        Button Text
      </Button>
      <Button category="secondary">
        Button Text
      </Button>
      <Button category="secondary" loading>
        Button Text
      </Button>
      <Button category="secondary" disabled>
        Button Text
      </Button>
      <Button color="blue">
        Button Text
      </Button>
      <Button color="blue" loading>
        Button Text
      </Button>
      <Button color="blue" disabled>
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
