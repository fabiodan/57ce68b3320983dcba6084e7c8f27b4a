// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="miscellaneous-page__component">{ children }</div>
)

const MiscellaneousPage = () => (
  <article className="miscellaneous-page">

    <Heading>Miscellaneous</Heading>

    <Section>
      <Subheading>Labels</Subheading>
      <Paragraph>
        Labels are used to indicate the status of orders. The width of the label
        is based on the width of the text, plus 16px on each side. In cases of
        limited space, the width can be aligned with the grid.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Value Toolkit</Subheading>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Alerts & Notifications</Subheading>
      <Paragraph>
        Alerts are used to keep customers informed in an automated manner. They
        can simply be stretched or shrunk to accommodate more text. For limited
        space, use 12px padding on each side of the text.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>eVoucher</Subheading>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Badges</Subheading>
      <Paragraph>
        Badges are used to provide critical information related to a product.
        The badge should consice and easy to understand. For badges with just
        icons, use discernible & self explanatory  iconography.
      </Paragraph>
      <Component>Examples Here</Component>
    </Section>
  </article>
)

export default MiscellaneousPage
