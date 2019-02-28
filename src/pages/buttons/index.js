// Libs
import React from 'react'

// Components (from atomic to composite)
import { Heading, Subheading, Paragraph, Section } from '../components/layout'

const ButtonsPage = () => (
  <article className="buttons-page">
    <Heading>Buttons</Heading>
    <Section>
      <Subheading>Shopping Journey Buttons</Subheading>
      <Paragraph>
        For actions during the shopping journey, two button options are
        available based on the significance of the actions. For high emphasis
        use the solid green filled primary buttons and for other use the
        skeletal button.
      </Paragraph>
    </Section>
    <Section>
      <Subheading>Transactions & Account Buttons</Subheading>
      <Paragraph>
        For transactions and account related interactions, ASDA used blue
        buttons. Two different types are available based on the prominence of
        the action.
      </Paragraph>
    </Section>
  </article>
)

export default ButtonsPage
