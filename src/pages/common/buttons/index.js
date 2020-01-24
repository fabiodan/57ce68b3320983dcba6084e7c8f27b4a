// Libs
import React from 'react'

// Components (from atomic to composite)
import Notification from '@asda/brand/notification'
import Button from '@asda/button'
import {
  Caption,
  Heading1,
  Heading2,
  Paragraph,
  Section
} from '@sg/sg-layout'

// Assets
import './_style.scss'

const ButtonsPage = () => (
  <article className="buttons-page">
    <Heading1>Buttons</Heading1>
    <Section>
      <Heading2>Shopping journey buttons</Heading2>
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
      <Heading2>Transactions & account buttons</Heading2>
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
    <Section>
      <Heading2>Clear Buttons</Heading2>
      <Paragraph>
        Clear buttons are used when the actions have to be present on the screen
        without distracting the user. These can be used with both icons and with
        text. Most common use case would be in the header.
      </Paragraph>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button color="gray" category="primary" fluid>Button Text</Button>
          <Caption>Clear Button Default</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="gray" category="primary" disabled fluid>Button Text</Button>
          <Caption>Clear Button Disabled</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="gray" category="primary" hover fluid>Button Text</Button>
          <Caption>Clear Button Hover/Focus</Caption>
        </li>
        <li className="buttons-page__item">
          {/* Refactor this scenario */}
          <div className="buttons-page__button-notification">
            <Notification className="buttons-page__notification">1</Notification>
            <Button color="gray" category="primary" iconName="mail" hiddenText fluid>Mail</Button>
          </div>
          <Caption>Clear button with icon default</Caption>
        </li>
        <li className="buttons-page__item">
          {/* Refactor this scenario */}
          <div className="buttons-page__button-notification">
            <Notification className="buttons-page__notification">1</Notification>
            <Button color="gray" category="primary" iconName="mail" hover hiddenText fluid>Mail</Button>
          </div>
          <Caption>Clear button with icon Hover</Caption>
        </li>
      </ul>
    </Section>
    <Section>
      <Heading2>Destructive action buttons</Heading2>
      <Paragraph>
        Destructive action buttons are used in instances where a destructive action can occur.
      </Paragraph>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button color="red" category="secondary" fluid>Button Text</Button>
          <Caption>Destructive Button Default</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="red" category="secondary" disabled fluid>Button Text</Button>
          <Caption>Destructive Button Disabled</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="red" category="secondary" hover fluid>Button Text</Button>
          <Caption>Destructive Button Hover/Focus</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="red" category="secondary" loading fluid hiddenText>Button Text</Button>
          <Caption>Destructive Button Loading</Caption>
        </li>
        <li className="buttons-page__item">
          <Button color="red" category="secondary" loading fluid>Button Text</Button>
          <Caption>Destructive Button Loading with Text</Caption>
        </li>
      </ul>
    </Section>
  </article>
)

export default ButtonsPage
