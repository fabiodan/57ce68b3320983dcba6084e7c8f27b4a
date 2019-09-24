// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Paragraph, Heading2, Section, Heading1 } from '../components/sg-layout'

// Assets
import scaleSVGSource from './images/scale.svg'
import paddingSVGSource from './images/padding.svg'
import './_style.scss'

const SpacingPage = () => (
  <article className="spacing-page">

    <Heading1>Spacing</Heading1>

    <Section>
      <Heading2>Structure</Heading2>
      <Paragraph>
        To achieve good visual balance, most measurements align to a 4px scale,
        with 8px being the preffered standard scale.
      </Paragraph>

      <Figure maxWidth="501px" src={scaleSVGSource} />

    </Section>

    <Section>
      <Heading2>Padding</Heading2>
      <Paragraph>
        Padding refers to the space between UI elements. It’s a standard spacing
        method along with keylines, measured in increments of 8dp
        (or 4dp in certain cases).
      </Paragraph>
      <Paragraph>
        Padding should be used in combination with the responsive layout grid to
        place elements consistently across a design.
      </Paragraph>

      <Figure maxWidth="815px" src={paddingSVGSource} />

    </Section>

  </article>
)

export default SpacingPage
