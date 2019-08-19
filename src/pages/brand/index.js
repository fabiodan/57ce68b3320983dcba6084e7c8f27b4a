// Libs
import React from 'react'

// Components (from atomic to composite)
import StatusLabel from '@asda/brand/status-label'
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

const CardContainer = ({ children }) => (
  <div className="brand-page__card-container">{children}</div>
)

const LabelContainer = ({ children }) => (
  <div className="brand-page__label-container">{children}</div>
)

const BrandPage = () => (
  <article className="brand-page">
    <Heading>Brand Elements</Heading>

    <Section>
      <Subheading>Labels</Subheading>
      <Paragraph>
        Labels are used to indicate the status of orders. The width of the label is
        based on the width of the text, plus 16px on each side. In cases of limited
        space, the width can be aligned with the grid.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">For orders in progress</Caption>
          <LabelContainer>
            <StatusLabel color="blue">Label</StatusLabel>
            <StatusLabel color="blue">Order Placed</StatusLabel>
            <StatusLabel color="blue">Order Amending</StatusLabel>
          </LabelContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">For orders completed</Caption>
          <LabelContainer>
            <StatusLabel color="green">Label</StatusLabel>
            <StatusLabel color="green">Order Delivered</StatusLabel>
            <StatusLabel color="green">Order Collected</StatusLabel>
          </LabelContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">For orders in error state</Caption>
          <LabelContainer>
            <StatusLabel color="red">Label</StatusLabel>
            <StatusLabel color="red">Order Unauthorised</StatusLabel>
            <StatusLabel color="red">Order Cancelled</StatusLabel>
          </LabelContainer>
        </GridItem>
      </Grid>
    </Section>

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

    <Section>
      <Subheading>Credit Cards</Subheading>
      <Grid>
        <GridItem>
          <Caption position="top">Add New Card</Caption>
          <CardContainer>
            <CreditCardIcon name="add-new" size="large" />
            <CreditCardIcon name="add-new" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Blank</Caption>
          <CardContainer>
            <CreditCardIcon name="blank" size="large" />
            <CreditCardIcon name="blank" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Amex</Caption>
          <CardContainer>
            <CreditCardIcon name="amex" size="large" />
            <CreditCardIcon name="amex" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">CVV</Caption>
          <CardContainer>
            <CreditCardIcon name="cvv" size="large" />
            <CreditCardIcon name="cvv" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Gift Card Code</Caption>
          <CardContainer>
            <CreditCardIcon name="gift-code" size="large" />
            <CreditCardIcon name="gift-code" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Cirrus</Caption>
          <CardContainer>
            <CreditCardIcon name="cirrus" size="large" />
            <CreditCardIcon name="cirrus" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Diners</Caption>
          <CardContainer>
            <CreditCardIcon name="diners" size="large" />
            <CreditCardIcon name="diners" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Discover</Caption>
          <CardContainer>
            <CreditCardIcon name="discover" size="large" />
            <CreditCardIcon name="discover" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Maestro</Caption>
          <CardContainer>
            <CreditCardIcon name="maestro" size="large" />
            <CreditCardIcon name="maestro" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Mastercard</Caption>
          <CardContainer>
            <CreditCardIcon name="mastercard" size="large" />
            <CreditCardIcon name="mastercard" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Plus</Caption>
          <CardContainer>
            <CreditCardIcon name="plus" size="large" />
            <CreditCardIcon name="plus" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Visa</Caption>
          <CardContainer>
            <CreditCardIcon name="visa" size="large" />
            <CreditCardIcon name="visa" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">ASDA Gift Cards</Caption>
          <CardContainer>
            <CreditCardIcon name="gift" size="large" />
            <CreditCardIcon name="gift" />
          </CardContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">Xmas Gift Cards</Caption>
          <CardContainer>
            <CreditCardIcon name="xmas" size="large" />
            <CreditCardIcon name="xmas" />
          </CardContainer>
        </GridItem>
      </Grid>
    </Section>
  </article>
)

export default BrandPage
