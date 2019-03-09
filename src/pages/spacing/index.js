// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="spacing-page__component">{ children }</div>
)

const SpacingPage = () => (
  <article className="spacing-page">

    <Heading>Heading</Heading>

    <Section>
      <Subheading>Structure</Subheading>
      <Paragraph>
        To achieve good visual balance, most measurements align to a 4px scale,
        with 8px being the preffered standard scale.
      </Paragraph>
      <Component>Examples Here</Component>        
    </Section>

    <Section>
      <Subheading>Padding</Subheading>
      <Paragraph>
        Padding refers to the space between UI elements. It’s a standard spacing
        method along with keylines, measured in increments of 8dp
        (or 4dp in certain cases).
      </Paragraph>
      <Paragraph>
        Padding should be used in combination with the responsive layout grid to
        place elements consistently across a design.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

  </article>
)

export default SpacingPage
