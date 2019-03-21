// Libs
import React from 'react'

// Components (from atomic to composite)
import AddButton from '@asda/add-button'
import { Caption, Heading, Subheading, Paragraph, Section } from '../components/sg-layout'

// Assets
import './_style.scss'

const SpecialButtonsPage = () => (
  <article className="special-buttons-page">
    <Heading>Special Buttons</Heading>
    <Section>
      <Subheading>Product Module Buttons</Subheading>
      <Paragraph keepMargin>
        Product modules are the bread and butter of Asda.com. The buttons follow
        similar standads to rest of the website with few special cases.
      </Paragraph>

      <ul className="special-buttons-page__list">
        <li className="special-buttons-page__item">
          <AddButton unit="count" quantity={0} />
          <Caption>Add Button Default <br/>Center Aligned to PM</Caption>
        </li>
        <li className="special-buttons-page__item">
          <AddButton unit="count" quantity={1} />
          <Caption>Product Added Default <br/>Center Aligned to PM</Caption>
        </li>
        <li className="special-buttons-page__item">
          <AddButton unit="weighted" quantity={2} />
          <Caption>Weighted Product Added <br/>Center Aligned to PM</Caption>
        </li>
        <li className="special-buttons-page__item">
          <AddButton unit="both" quantity={1} />
          <Caption>Product Added Default <br/>Center Aligned to PM</Caption>
        </li>
      </ul>

    </Section>
    <Section>
      <Subheading>Recipes Buttons</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        voluptate adipisci rerum iure, omnis dolor quasi saepe vero accusamus,
        tempore corrupti fugit vel nostrum voluptatem nobis cupiditate, natus
        illo asperiores?
      </Paragraph>
    </Section>
  </article>
)

export default SpecialButtonsPage
