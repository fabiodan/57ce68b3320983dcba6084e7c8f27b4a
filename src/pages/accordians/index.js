// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="accordians-page__component">{ children }</div>
)

const AccordiansPage = () => (
  <article className="accordians-page">

    <Heading>Accordians</Heading>

    <Section>
      <Subheading>Bordered Accordians</Subheading>
      <Paragraph>
        Accordians are a list of headers, that can be clicked to hide or reveal
        additional information. The width of the accordian is based on the page
        layout and the grid, while the height of the accordian is dependant on
        the content inside.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Padding Example</Subheading>
      <Component>Examples Here</Component>
    </Section>

  </article>
)

export default AccordiansPage
