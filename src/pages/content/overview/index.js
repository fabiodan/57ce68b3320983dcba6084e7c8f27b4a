// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  Figure,
  Paragraph,
  Heading2,
  Heading3,
  Section,
  Heading1,
  List,
  ListItem,
} from '@sg/sg-layout'

// Assets
import './_style.scss'

const ContentOverviewPage = () => (
  <article className="content-overview-page">

    <Heading1>Introduction</Heading1>

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
        <List>
          <ListItem>base what you do in evidence</ListItem>
          <ListItem>put the user at the centre of what you do</ListItem>
          <ListItem>get to the root of the problem</ListItem>
        </List>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Our User Story</Heading2>
      <Paragraph>
        In UX, user needs are our north star.
      </Paragraph>
      <Paragraph>
        So we do not define a marketing-style “value proposition” – namely, what
        the business thinks the value ought to be. We define our goal in terms
        of what the user needs: a user story.
      </Paragraph>

      <div className="content-overview-page__user-story">
        <Heading3>
          As an Asda customer<br />
          I need a simple and convenient way to shop online,<br />
          so that I can get my order in the right way for me.
        </Heading3>
      </div>
    </Section>

  </article>
)

export default ContentOverviewPage
