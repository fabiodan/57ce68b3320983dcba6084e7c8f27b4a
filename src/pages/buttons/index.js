// Libs
import React from 'react'

// Components (from atomic to composite)
import Button from '@asda/button'
import { Heading, Subheading, Paragraph, Section } from '../components/layout'

// Assets
import './_style.scss'

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
      <div className="buttons-page__grid">
        <Button>Button Text</Button>
        <Button disabled>Button Text</Button>
        <Button hover>Button Text</Button>
        <Button loading>Button Text</Button>
        <Button loading hiddenText>Button Text</Button>
      </div>
      <div className="buttons-page__grid">
        <Button category="secondary">Button Text</Button>
        <Button category="secondary" disabled>Button Text</Button>
        <Button category="secondary" hover>Button Text</Button>
        <Button category="secondary" loading>Button Text</Button>
        <Button category="secondary" loading hiddenText>Button Text</Button>
      </div>
    </Section>
    <Section>
      <Subheading>Transactions & Account Buttons</Subheading>
      <Paragraph>
        For transactions and account related interactions, ASDA used blue
        buttons. Two different types are available based on the prominence of
        the action.
      </Paragraph>
      <div className="buttons-page__grid">
        <Button color="blue">Button Text</Button>
        <Button color="blue" disabled>Button Text</Button>
        <Button color="blue" hover>Button Text</Button>
        <Button color="blue" loading>Button Text</Button>
        <Button color="blue" loading hiddenText>Button Text</Button>
      </div>
      <div className="buttons-page__grid">
        <Button color="blue" category="secondary">Button Text</Button>
        <Button color="blue" category="secondary" disabled>Button Text</Button>
        <Button color="blue" category="secondary" hover>Button Text</Button>
        <Button color="blue" category="secondary" loading>Button Text</Button>
        <Button color="blue" category="secondary" loading hiddenText>Button Text</Button>
      </div>
    </Section>
  </article>
)

export default ButtonsPage
