// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Paragraph,
  Heading1,
  Heading2,
  Figure,
  GridItem,
  Grid,
  Section,
} from '@sg/sg-layout'

// Assets
import examplePNGSource from './images/spacing-structure.png'

import './_style.scss'


const IOSSpacingPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-spacing-page">

      <Heading1>Spacing</Heading1>

      <Section>
        <Heading2>Structure</Heading2>
        <Paragraph>
          To achieve good visual balance, most measurements align to a 4px scale,
          with 8px being the preffered standard scale.
        </Paragraph>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="599px" src={examplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Padding</Heading2>
        <Paragraph>
          Padding refers to the space between UI elements. It’s a standard spacing
          method along with keylines, measured in increments of 8dp (or 4dp in certain cases).
        </Paragraph>
        <Paragraph>
          Padding should be used in combination with the responsive layout grid to
          place elements consistently across a design.
        </Paragraph>
      </Section>

    </article>
  )
}

export default IOSSpacingPage
