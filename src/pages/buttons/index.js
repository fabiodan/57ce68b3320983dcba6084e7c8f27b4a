// Libs
import React from 'react'

// Components (from atomic to composite)
import Button from '@asda/button'
import { Caption, Heading1, Heading2, Paragraph, Section } from '../components/sg-layout'

// Assets
import './_style.scss'

const ButtonsPage = () => (
  <article className="buttons-page">
    <Heading1>Buttons</Heading1>
    <Section>
      <Heading2>Shopping Journey Buttons</Heading2>
      <Paragraph>
        For actions during the shopping journey, two button options are
        available based on the significance of the actions. For high emphasis
        use the solid green filled primary buttons and for other use the
        skeletal button.

      </Paragraph>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button fluid>Button Text</Button>
          <Caption>Primary Button Default</Caption>
        </li>
        <li className="buttons-page__item">
          <Button disabled fluid>Button Text</Button>
          <Caption>Primary Button Disabled </Caption>
        </li>
        <li className="buttons-page__item">
          <Button fluid hover>Button Text</Button>
          <Caption>Primary Button Hover/Focus </Caption>
        </li>
        <li className="buttons-page__item">
          <Button loading fluid hiddenText>Button Text</Button>
          <Caption>Primary Button Loading</Caption>
        </li>
        <li className="buttons-page__item">
          <Button loading fluid>Button Text</Button>
          <Caption>Primary Button Loading with text</Caption>
        </li>
      </ul>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button category="secondary" fluid>Button Text</Button>
          <Caption>Secondary Button Default</Caption>
        </li>
        <li className="buttons-page__item">
          <Button category="secondary" disabled fluid>Button Text</Button>
          <Caption>Secondary Button Disabled</Caption>
        </li>
        <li className="buttons-page__item">
          <Button category="secondary" hover fluid>Button Text</Button>
          <Caption>Secondary Button Hover/Focus</Caption>
        </li>
        <li className="buttons-page__item">
          <Button category="secondary" loading fluid hiddenText>Button Text</Button>
          <Caption>Secondary Button Loading</Caption>
        </li>
        <li className="buttons-page__item">
          <Button category="secondary" loading fluid>Button Text</Button>
          <Caption>Secondary Button Loading with Text</Caption>
        </li>
      </ul>
    </Section>
    <Section>
      <Heading2>Transactions & Account Buttons</Heading2>
      <Paragraph>
        For transactions and account related interactions, ASDA used blue
        buttons. Two different types are available based on the prominence of
        the action.
      </Paragraph>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button color="blue" fluid>Button Text</Button>
          <Caption>Primary Button Default</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" disabled fluid>Button Text</Button>
          <Caption>Primary Button Disabled</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" hover fluid>Button Text</Button>
          <Caption>Primary Button Hover/Focus</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" loading fluid hiddenText>Button Text</Button>
          <Caption>Primary Button Loading</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" loading fluid>Button Text</Button>
          <Caption>Primary Button Loading with text</Caption>
        </li>
      </ul>
    </Section>
  </article>
)

export default ButtonsPage
