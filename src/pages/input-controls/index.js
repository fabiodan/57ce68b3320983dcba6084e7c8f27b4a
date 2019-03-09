// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="input-controls-page__component">{ children }</div>
)

const InputControlsPage = () => (
  <article className="input-controls-page">

    <Heading>Input Controls</Heading>

    <Section>
      <Subheading>Checkboxes</Subheading>
      <Paragraph>
        Checkboxes allow the user to select one or more items from a set.
        Checkboxes can be used to turn an option on or off.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Radio Buttons</Subheading>
      <Paragraph>
        Radio buttons allow the user to select one option from a set. Use radio
        buttons when the user needs to see all available options. If available
        options can be collapsed, consider using a dropdown menu because it
        uses less space.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Toggles</Subheading>
      <Paragraph>
        The toggle switch represents a physical switch that allows users to turn
        things on or off. They should be used to represent an action (e.g. start
        or stop, on or off)
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

  </article>
)

export default InputControlsPage
