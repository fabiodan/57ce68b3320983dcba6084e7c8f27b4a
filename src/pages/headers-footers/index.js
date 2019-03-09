// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="headers-footers-page__component">{ children }</div>
)

const HeadersFootersPage = () => (
  <article className="headers-footers-page">

    <Heading>Headers & Footers</Heading>

    <Section>
      <Subheading>Checkout Header</Subheading>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Subheading>Checkout Footer</Subheading>
      <Component>Examples Here</Component>
    </Section>

  </article>
)

export default HeadersFootersPage
