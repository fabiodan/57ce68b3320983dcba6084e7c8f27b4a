// Libs
import React from 'react'

// Components (from atomic to composite)
import Button from '@asda/button'
import { Heading, Subheading, Paragraph, Section } from '../components/sg-layout'

// Components
import AddButton from '@asda/add-button'

// Assets
import './_style.scss'

const SpecialButtonsPage = () => (
  <article className="special-buttons-page">
    <Heading>Special Buttons</Heading>
    <Section>
      <Subheading>Product Module Buttons</Subheading>
      <Paragraph>
        Product modules are the bread and butter of Asda.com. The buttons follow
        similar standads to rest of the website with few special cases.
      </Paragraph>

      <div>
        <AddButton unit="count" />
        <AddButton unit="both" />
        <AddButton unit="weighted" />
      </div>

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
