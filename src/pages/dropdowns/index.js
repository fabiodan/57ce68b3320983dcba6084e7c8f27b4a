// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="dropdowns-page__component">{ children }</div>
)

const DropdownPage = () => (
  <article className="dropdowns-page">

    <Heading>Dropdowns</Heading>

    <Section>
      <Subheading>Dropdowns</Subheading>
      <Paragraph>
        Input fields let users enter and edit text. Each input field is
        generally used for single entry and should aim to be clear and efficient.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Dropdowns with icons</Subheading>
      <Paragraph>
        Input fields let users enter and edit text. Each input field is
        generally used for single entry and should aim to be clear and efficient.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Contextual Menus</Subheading>
      <Paragraph>
        Contextual menus aren’t triggered by a consistent UI element. They
        appear next to where a user taps, and their actions can vary based on
        the tap target.
      </Paragraph>
      <Component>Examples Here</Component>
      <Paragraph>
        Width of contextual menu should be decided based upon the length of
        list item and the grid.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

  </article>
)

export default DropdownPage
