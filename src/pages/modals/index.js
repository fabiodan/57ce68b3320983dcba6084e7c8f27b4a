// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="modals-page__component">{ children }</div>
)

const ModalsPage = () => (
  <article className="modals-page">

    <Heading>Modals</Heading>

    <Section>
      <Subheading>Definition</Subheading>
      <Paragraph>
        A modal window is an element that sits on top. It creates a mode that
        disables the main window but keeps it visible with the modal window as
        a child window in front of it. Users must interact with the modal window
        before they can return to the parent application.
      </Paragraph>
      <Paragraph>
        Modals are purposefully interruptive and should be used sparingly.
      </Paragraph>
    </Section>

    <Section>
      <Subheading>Dialog</Subheading>
      <Paragraph>
        A dialog is a type of modal window that provides critical information or
        asks for a decision before user can continue with the journey.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Informational Modal</Subheading>
      <Paragraph>
        These modals appear in response to an user action, with relevant or
        contextual information. Titles should contain be brief and contain a
        concise statement or a questions explaining the purpose of the modal.
      </Paragraph>
      <Paragraph>
        Use the grid to control the width of the modal, and the content for the
        height of the modal (middle align the entire modal to the screen).
        Ideally, the content should be short and digestible, avoid long content
        as the modal will interupt the user journey.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Avoid Links in Modal</Subheading>
      <Paragraph>
        Most modal content should avoid links or actions which navigate away
        from the modal, creating further friction in the user journey.
      </Paragraph>
      <Paragraph>
        In situations when links are neccessary, open a new tab in the
        background while leaving the modal and the user on the current screen.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Padding in Modals</Subheading>
      <Paragraph>
        For screens above 768, use 32px all around margin inside in the modal.
        For smaller size, 24px all around margin should be maintained, for case
        with limited space, the side margins can be reduced to 16px.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>
  </article>
)

export default ModalsPage
