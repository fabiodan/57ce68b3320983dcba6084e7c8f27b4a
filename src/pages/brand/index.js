// Libs
import React from 'react'

// Components (from atomic to composite)
import ExpressLogo from '@asda/brand/express-logo'
import { Caption, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="brand-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="brand-page__grid-item">{children}</li>
)

const BrandPage = () => (
  <article className="brand-page">
    <Heading>Brand Elements</Heading>
    <Section>
      <Subheading>Express Logo</Subheading>
      <Grid>
        <GridItem>
          <Caption position="top">Large</Caption>
          <ExpressLogo size="large"/>
        </GridItem>
        <GridItem>
          <Caption position="top">Medium</Caption>
          <ExpressLogo size="medium"/>
        </GridItem>
        <GridItem>
          <Caption position="top">Small</Caption>
          <ExpressLogo size="small"/>
        </GridItem>
      </Grid>
    </Section>
  </article>
)

export default BrandPage
