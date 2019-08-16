// Libs
import React from 'react'

// Components (from atomic to composite)
import ExpressLogo from '@asda/brand/express-logo'
import CreditCardIcon from '@asda/credit-card-icon'
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
          <ExpressLogo/>
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

    <Section>
      <Subheading>Credit Cards</Subheading>
      <Grid>
        <GridItem>
          <Caption position="top">Add New Card</Caption>
          <CreditCardIcon name="add-new" />
        </GridItem>
        <GridItem>
          <Caption position="top">Blank</Caption>
          <CreditCardIcon name="blank" />
        </GridItem>
        <GridItem>
          <Caption position="top">Amex</Caption>
          <CreditCardIcon name="amex" />
        </GridItem>
        <GridItem>
          <Caption position="top">CVV</Caption>
          <CreditCardIcon name="cvv" />
        </GridItem>
        <GridItem>
          <Caption position="top">Gift Card Code</Caption>
          <CreditCardIcon name="gift-code" />
        </GridItem>
        <GridItem>
          <Caption position="top">Cirrus</Caption>
          <CreditCardIcon name="cirrus" />
        </GridItem>
        <GridItem>
          <Caption position="top">Diners</Caption>
          <CreditCardIcon name="diners" />
        </GridItem>
        <GridItem>
          <Caption position="top">Discover</Caption>
          <CreditCardIcon name="discover" />
        </GridItem>
        <GridItem>
          <Caption position="top">Maestro</Caption>
          <CreditCardIcon name="maestro" />
        </GridItem>
        <GridItem>
          <Caption position="top">Mastercard</Caption>
          <CreditCardIcon name="mastercard" />
        </GridItem>
        <GridItem>
          <Caption position="top">Plus</Caption>
          <CreditCardIcon name="plus" />
        </GridItem>
        <GridItem>
          <Caption position="top">Visa</Caption>
          <CreditCardIcon name="visa" />
        </GridItem>
        <GridItem>
          <Caption position="top">ASDA Gift Cards</Caption>
          <CreditCardIcon name="gift" />
        </GridItem>
        <GridItem>
          <Caption position="top">Xmas Gift Cards</Caption>
          <CreditCardIcon name="xmas" />
        </GridItem>
      </Grid>
    </Section>
  </article>
)

export default BrandPage
