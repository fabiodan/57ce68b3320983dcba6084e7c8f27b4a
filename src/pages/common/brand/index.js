// Libs
import React from 'react'

// Components (from atomic to composite)
import Evoucher from '@asda/brand/evoucher'
import Notification from '@asda/brand/notification'
import StatusLabel from '@asda/brand/status-label'
import DeliveryPassLogo from '@asda/brand/delivery-pass-logo'
import ExpressLogo from '@asda/brand/express-logo'
import CreditCardIcon from '@asda/credit-card-icon'
import { Caption, Paragraph, Section, Heading1, Heading2, Heading3 } from '@sg/sg-layout'

// Assets
import './_style.scss'

const Grid = ({ children, className = ''}) => (
  <ul className={`brand-page__grid ${className}`}>{children}</ul>
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

const NotificationContainer = ({ children }) => (
  <div className="brand-page__notification-container">{children}</div>
)

const BrandPage = () => (
  <article className="brand-page">
    <Heading1>Brand Elements</Heading1>

    <Section>
      <Heading2>Labels</Heading2>
      <Paragraph>
        Labels are used to indicate the status of orders. The width of the label is
        based on the width of the text, plus 16px on each side. In cases of limited
        space, the width can be aligned with the grid.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">For orders in progress</Caption>
          <LabelContainer>
            <StatusLabel status="progress">Label</StatusLabel>
            <StatusLabel status="progress">Order Placed</StatusLabel>
            <StatusLabel status="progress">Order Amending</StatusLabel>
          </LabelContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">For orders completed</Caption>
          <LabelContainer>
            <StatusLabel status="completed">Label</StatusLabel>
            <StatusLabel status="completed">Order Delivered</StatusLabel>
            <StatusLabel status="completed">Order Collected</StatusLabel>
          </LabelContainer>
        </GridItem>
        <GridItem>
          <Caption position="top">For orders in error state</Caption>
          <LabelContainer>
            <StatusLabel status="error">Label</StatusLabel>
            <StatusLabel status="error">Order Unauthorised</StatusLabel>
            <StatusLabel status="error">Order Cancelled</StatusLabel>
          </LabelContainer>
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>Notifications</Heading2>
      <Paragraph>
        Use these with icons to indicate value.
      </Paragraph>
      <Caption position="top">Notification</Caption>
      <NotificationContainer>
        <Notification>1</Notification>
        <Notification>24</Notification>
        <Notification>133</Notification>
      </NotificationContainer>
    </Section>

    <Section>
      <Heading2>eVoucher</Heading2>
      <Grid className="brand-page__evoucher__grid">
        <GridItem>
          <Caption position="top">Gold</Caption>
          <Evoucher category="gold">10.99</Evoucher>
        </GridItem>
        <GridItem>
          <Caption position="top">Silver</Caption>
          <Evoucher category="silver">10.99</Evoucher>
        </GridItem>
        <GridItem>
          <Caption position="top">Bronze</Caption>
          <Evoucher category="bronze">10.99</Evoucher>
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>Delivery Pass Logo</Heading2>
      <Grid>
        <GridItem>
          <Caption position="top">Large</Caption>
          <DeliveryPassLogo size="large"/>
        </GridItem>
        <GridItem>
          <Caption position="top">Small</Caption>
          <DeliveryPassLogo size="small"/>
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>Express Logo</Heading2>
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
      <Heading2>Credit Cards</Heading2>
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
