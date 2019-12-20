// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  Heading1,
  Heading2,
  Heading3,
  Figure,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import samplePNGSource from './images/sample.png'
import './_style.scss'

const MyComponent = ({ children }) => (
  <div className="common-guiding-principles-page__component">{ children }</div>
)

const CommonGuidingPrinciples = () => (
  <article className="common-guiding-principles-page">

    <Heading1>Guiding principles</Heading1>

    <Section>
      <Heading2>Component creation</Heading2>
      <Paragraph>
        The guiding principles below will make it easier for members of the
        design team to create meaningful components that our team can find,
        amend and override - ultimately leading to better integration, usability
        and adoption.
      </Paragraph>

      <Figure maxWidth="815px" src={samplePNGSource}  fluid />
    </Section>

    <Section>
      <Heading2>Make it usable</Heading2>

      <Heading3>Component example</Heading3>
      <Paragraph>
        Components that have multiple sections need to be organised for the team
        to use. If there are multiple variations of a component, consider
        splitting the component into sections (left/centre/right) and add
        descriptive terms for each section.
      </Paragraph>
      <Figure maxWidth="815px" src={samplePNGSource}  fluid />

      <Heading3>Layer structure</Heading3>
      <Paragraph>
        Arrange component layers so that items that appear in the top left
        appear first in the list (Icon - Placeholder Left), scanning left to
        right, top to bottom.
      </Paragraph>
      <Figure maxWidth="815px" src={samplePNGSource}  fluid />

      <Heading3>Override list</Heading3>
      <Paragraph>
        By arranging layers in this way the override structure becomes easier to
        understand and scan/edit.
      </Paragraph>
      <Figure maxWidth="815px" src={samplePNGSource} noMargin fluid />

    </Section>

    <Section>
      <Heading2>Make it scalable</Heading2>
      <Paragraph>
        Components should scale appropriately for different device widths.
        Responsive web components may have 3 different layouts (320, 768 & 1024).
        Consider vertical scalability also.
      </Paragraph>
      <Figure maxWidth="815px" src={samplePNGSource} noMargin fluid />
    </Section>

    <Section>
      <Heading2>Make it accessible</Heading2>
      <Paragraph>
        Use the STARK plugin to check that colour combinations are accessible.
        Aim for passing at a AA standard.
      </Paragraph>
      <Figure maxWidth="815px" src={samplePNGSource} noMargin fluid />
    </Section>

  </article>
)

export default CommonGuidingPrinciples
