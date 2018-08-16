// Libs
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs/react'

// Components
import Typography from '@asda/typography/_mixins.scss'

// Style
import './_style.scss'

const TypographyStory = storiesOf('Typography', module)
  .addDecorator(story => (
    <article className="story-typography">
      {story()}
    </article>
  ))
  .add('Typescale', () => (
    <section>
      <div className="story-typography__heading1">Heading1</div>
      <div className="story-typography__heading2">Heading2</div>
      <div className="story-typography__heading3">Heading3</div>
      <div className="story-typography__heading4">Heading4</div>
      <div className="story-typography__heading5">Heading5</div>
      <div className="story-typography__heading6">Heading6</div>
      <div className="story-typography__main-copy">Main Copy</div>
      <div className="story-typography__secondary-copy">Secondary Copy</div>
      <div className="story-typography__caption">Caption</div>
      <div className="story-typography__input">Input Field</div>
      <div className="story-typography__button">Button</div>
    </section>
  ))

export default TypographyStory
