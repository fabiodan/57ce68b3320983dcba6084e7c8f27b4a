// Libs
import React from 'react'

// Components (from atomic to composite)
import { Heading, Subheading, Paragraph, Section } from '../components/sg-layout'

// Assets
import './_style.scss'

const ColorSchemePage = () => (
  <article className="color-page">
    <Heading>Color Scheme</Heading>
    <Section>
      <Subheading>Colors</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
        facilis doloremque ea placeat veritatis porro libero expedita sint
        commodi et culpa voluptas cumque repudiandae eveniet aut, eaque cum,
        provident repellendus!
      </Paragraph>
      <ul className="color-page__color-list">
        <li className="color-page__color-item color-page--green" />
        <li className="color-page__color-item color-page--dark-green" />
        <li className="color-page__color-item color-page--red" />
        <li className="color-page__color-item color-page--blue" />
        <li className="color-page__color-item color-page--yellow" />
      </ul>
    </Section>
    <Section>
      <Subheading>Blacks & Greys</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
        facilis doloremque ea placeat veritatis porro libero expedita sint
        commodi et culpa voluptas cumque repudiandae eveniet aut, eaque cum,
        provident repellendus!
      </Paragraph>
      <ul className="color-page__color-list">
        <li className="color-page__color-item color-page--charcoal" />
        <li className="color-page__color-item color-page--dark-gray" />
        <li className="color-page__color-item color-page--medium-gray" />
        <li className="color-page__color-item color-page--light-gray" />
        <li className="color-page__color-item color-page--background-gray" />
      </ul>
    </Section>
  </article>
)

export default ColorSchemePage
