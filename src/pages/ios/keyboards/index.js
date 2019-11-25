// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Caption,
  Figure,
  Heading1,
  Heading2,
  GridItem,
  Grid,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import keyboardsAlphanumericPNGSource from './images/keyboards-alphanumeric.png'
import keyboardsDictationPNGSource from './images/keyboards-dictation.png'
import keyboardsEmojiPNGSource from './images/keyboards-emoji.png'
import keyboardsNumericPNGSource from './images/keyboards-numeric.png'
import './_style.scss'

const MyComponent = ({ children }) => (
  <div className="ios-keyboards-page__component">{ children }</div>
)

const IOSKeyboardsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-keyboards-page">

      <Heading1>Keyboards (System)</Heading1>

      <Section>
        <Heading2>Keyboards</Heading2>
        <Paragraph>
          System keyboards can be configured to display a number of variations for
          different contexts (i.e. a numeric keyboard for mobile phone entry).
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1} noMargin>
          <GridItem>
            <Caption position="top">Alphanumeric</Caption>
            <Figure maxWidth="375px" src={keyboardsAlphanumericPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Numeric</Caption>
            <Figure maxWidth="375px" src={keyboardsNumericPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Emoji</Caption>
            <Figure maxWidth="375px" src={keyboardsEmojiPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Dictation</Caption>
            <Figure maxWidth="375px" src={keyboardsDictationPNGSource} noMargin fluid />
          </GridItem>
        </Grid>

      </Section>
    </article>
  )
}

export default IOSKeyboardsPage
