// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="tooltips-page__component">{ children }</div>
)

const TooltipsPage = () => (
  <article className="tooltips-page">

    <Heading>Tooltips</Heading>

    <Section>
      <Subheading>Simple Tooltips</Subheading>
      <Paragraph>
        Tooltips are informative text shown to the user during hover, focus on,
        or tapping on an element. The text explains things that are not
        discernable from the interface.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Advanced Tooltips</Subheading>
      <Paragraph>
        Advanced tooltips are used to share detailed information about a new
        feature in detail. The information can be longer and detailed, but
        should still be as concise as possible, as each tooltip is friction
        in user journey.
      </Paragraph>
      <Component>Examples Here</Component>
      <Paragraph>
        For tooltips longer that two lines of text, the height of the container
        should be increased in increments of 16px for every new line.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

  </article>
)

export default TooltipsPage
