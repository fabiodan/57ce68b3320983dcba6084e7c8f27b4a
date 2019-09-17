// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Paragraph, Subheading, Section, Heading } from '@onlineDoc/sg-layout'

// Assets
import sampleSVGSource from './images/sample.svg'
import './_style.scss'

const Component = ({ children }) => (
  <div className="content-overview-page__component">{ children }</div>
)

const ContentOverviewPage = () => (
  <article className="content-overview-page">

    <Heading>Overview</Heading>

    <Section>
      <Paragraph>
        Words matter. They shape how people see Asda.
      </Paragraph>
      <Paragraph>
        They can make shopping with us easy and quick – or frustrate customers into heading to our competitors.
      </Paragraph>
      <Paragraph>
        We need to make every word count.
      </Paragraph>
      <Paragraph>
        Remember: content is not added to a design; it is the design.
      </Paragraph>
      <Paragraph noMargin>
        Content design is a mindset. Always:
        <ul>
          <li>base what you do in evidence</li>
          <li>put the user at the centre of what you do</li>
          <li>get to the root of the problem</li>
        </ul>
      </Paragraph>
    </Section>

    <Section>
      <Subheading>Our user story</Subheading>
      <Paragraph>
        In UX, user needs are our north star.
      </Paragraph>
      <Paragraph>
        So we do not define a marketing-style “value proposition” – namely, what
        the business thinks the value ought to be. We define our goal in terms
        of what the user needs: a user story.
      </Paragraph>

      <div className="content-overview-page__user-story">
        As an Asda customer<br />
        I need a simple and convenient way to shop online,<br />
        so that I can get my order in the right way for me.
      </div>
    </Section>

  </article>
)

export default ContentOverviewPage
