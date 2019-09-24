// Libs
import React from 'react'

// Components (from atomic to composite)
import { Heading2, Section, Heading1 } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="headers-footers-page__component">{ children }</div>
)

const HeadersFootersPage = () => (
  <article className="headers-footers-page">

    <Heading1>Headers & Footers</Heading1>

    <Section>
      <Heading2>Checkout Header</Heading2>
      <Component>Examples Here</Component>
    </Section>

    <Section>
      <Heading2>Checkout Footer</Heading2>
      <Component>Examples Here</Component>
    </Section>

  </article>
)

export default HeadersFootersPage
