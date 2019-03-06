// Libs
import React from 'react'

// Components (from atomic to composite)
import Button from '@asda/button'
import { Heading, Subheading, Paragraph, Section } from '../components/sg-layout'

// Assets
import './_style.scss'

const Description = ({ children }) => (
  <div className="buttons-page__description">
    { children }
  </div>
)

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

        {/* DEBUG
<Button category="primary" >Button Text</Button>
<Button category="secondary" >Button Text</Button>
<br/>
<Button category="secondary" >Button Text</Button>
<Button category="primary" >Button Text</Button>
*/}

      </Paragraph>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button fluid>Button Text</Button>
          <Description>Primary Button Default</Description>
        </li>
        <li className="buttons-page__item">
          <Button disabled fluid>Button Text</Button>
          <Description>Primary Button Disabled </Description>
        </li>
        <li className="buttons-page__item">
          <Button fluid hover>Button Text</Button>
          <Description>Primary Button Hover/Focus </Description>
        </li>
        <li className="buttons-page__item">
          <Button loading fluid hiddenText>Button Text</Button>
          <Description>Primary Button Loading</Description>
        </li>
        <li className="buttons-page__item">
          <Button loading fluid>Button Text</Button>
          <Description>Primary Button Loading with text</Description>
        </li>
      </ul>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button category="secondary" fluid>Button Text</Button>
          <Description>Secondary Button Default</Description>
        </li>
        <li className="buttons-page__item">
          <Button category="secondary" disabled fluid>Button Text</Button>
          <Description>Secondary Button Disabled</Description>
        </li>
        <li className="buttons-page__item">
          <Button category="secondary" hover fluid>Button Text</Button>
          <Description>Secondary Button Hover/Focus</Description>
        </li>
        <li className="buttons-page__item">
          <Button category="secondary" loading fluid hiddenText>Button Text</Button>
          <Description>Secondary Button Loading</Description>
        </li>
        <li className="buttons-page__item">
          <Button category="secondary" loading fluid>Button Text</Button>
          <Description>Secondary Button Loading with Text</Description>
        </li>
      </ul>
    </Section>
    <Section>
      <Subheading>Transactions & Account Buttons</Subheading>
      <Paragraph>
        For transactions and account related interactions, ASDA used blue
        buttons. Two different types are available based on the prominence of
        the action.
      </Paragraph>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button color="blue" fluid>Button Text</Button>
          <Description>Primary Button Default</Description>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" disabled fluid>Button Text</Button>
          <Description>Primary Button Disabled</Description>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" hover fluid>Button Text</Button>
          <Description>Primary Button Hover/Focus</Description>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" loading fluid hiddenText>Button Text</Button>
          <Description>Primary Button Loading</Description>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" loading fluid>Button Text</Button>
          <Description>Primary Button Loading with text</Description>
        </li>
      </ul>
      <ul className="buttons-page__list">
        <li className="buttons-page__item">
          <Button color="blue" category="secondary" fluid>Button Text</Button>
          <Description>Secondary Button Default</Description>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" category="secondary" disabled fluid>Button Text</Button>
          <Description>Secondary Button Disabled</Description>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" category="secondary" hover fluid>Button Text</Button>
          <Description>Secondary Button Hover/Focus</Description>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" category="secondary" loading fluid hiddenText>Button Text</Button>
          <Description>Secondary Button Loading</Description>
        </li>
        <li className="buttons-page__item">
          <Button color="blue" category="secondary" loading fluid>Button Text</Button>
          <Description>Secondary Button Loading with Text</Description>
        </li>
      </ul>
    </Section>
  </article>
)

export default ButtonsPage
