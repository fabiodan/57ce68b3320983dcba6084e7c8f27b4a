// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="navigation-page__component">{ children }</div>
)

const NavigationPage = () => (
  <article className="navigation-page">

    <Heading>Navigation</Heading>

    <Section>
      <Subheading>Fixed Tabs</Subheading>
      <Paragraph>
        Fixed tabs display all tabs on one screen. The width of each tab is
        determined by the number of tabs divided by the screen width. These
        tabs dont scroll to reveal more tabs.
      </Paragraph>
      <Component>Components Here</Component>
      <Paragraph>
        Tab labels should apear in a single row clearly and succinctly
        describing the content of the tab. A second line can be used in special
        cases with atypical font size and line height. For labels longer than
        the tab width, the text should be truncated.
      </Paragraph>
      <Component>Components Here</Component>
    </Section>

    <Section>
      <Subheading>Page Control</Subheading>
      <Paragraph>
        Pagination dots are used as an indicator and a control for the user to
        scroll between pages & content.
      </Paragraph>
      <Paragraph>
        Use the standard pagination dots when the content is static and
        switching between different states is in the hands of the user.
      </Paragraph>
      <Component>Component Here</Component>
      <Paragraph>
        Advanced pagination controls are used when the content is automatically
        switching states, to provide user with more control. Decide between the
        darker and the lighter version based on the content.
      </Paragraph>
      <Component>Components Here</Component>
      <Paragraph>
        White pagination control have transparency and background blur filters
        built in, making them more versatile for usage on images.
      </Paragraph>
      <Component>Components Here</Component>
    </Section>

  </article>
)

export default NavigationPage
