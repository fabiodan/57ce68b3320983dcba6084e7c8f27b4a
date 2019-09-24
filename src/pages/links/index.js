// Libs
import React from 'react'

// Components (from atomic to composite)
import { LinkButton, LinkText } from '@asda/link'
import Alert from '@asda/alert'
import { Caption, Paragraph, Heading2, Section, Heading1 } from '../components/sg-layout'

// Assets
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="links-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="links-page__grid-item">{children}</li>
)

const LinksPage = () => (
  <article className="links-page">

    <Heading1>Links</Heading1>

    <Section>
      <Heading2>Links</Heading2>
      <Paragraph>
        For tertiary actions, text buttons and links are used. There are two
        types available, standalone buttons and text links which are part of
        other text bodies.
      </Paragraph>
      <Grid>
        <GridItem>
          <LinkButton align="left">Link button</LinkButton>
          <Caption>Standalone button Left aligned Default</Caption>
        </GridItem>
        <GridItem>
          <LinkButton>Link button</LinkButton>
          <Caption>standalone button Center aligned Default</Caption>
        </GridItem>
        <GridItem>
          <LinkButton align="right">Link button</LinkButton>
          <Caption>standalone button Right aligned Hover</Caption>
        </GridItem>
        <GridItem>
          <LinkButton className="links-page__link--border" align="left">Link button</LinkButton>
        </GridItem>
        <GridItem>
          <LinkButton className="links-page__link--border">Link button</LinkButton>
        </GridItem>
        <GridItem>
          <LinkButton className="links-page__link--border" align="right">Link button</LinkButton>
        </GridItem>
      </Grid>
      <Paragraph>
        Tap areas for links are larger than just the text area. Height for tap
        area is 40px and width is 8-16px on each side, based on the text
        alignment.
      </Paragraph>

      <Paragraph className="links-page__paragraph-example" noMargin>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat <LinkText href="https://www.asda.com">link text</LinkText>.
        Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum <LinkText href="https://www.asda.com">link text</LinkText>.
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Links in alerts & alerts</Heading2>
      <Paragraph>
        Links within alerts and other alerts should follow the standard
        text style for that component along with an underline and a heavier
        weight (semi-bold in most cases).
      </Paragraph>
      <ul className="links-page__alert-grid">
        <li className="links-page__alert-grid-item">
          <Caption className="links-page__alert-caption">Inline temporary Alert with a clickable link</Caption>
          <Alert type="temporary">
          This is an alert message with
          a <LinkText color="inherit" href="#">clickable link</LinkText>.
          </Alert>
        </li>
        <li className="links-page__alert-grid-item">
          <Caption className="links-page__alert-caption">Inline temporary Alert with an icon</Caption>
          <Alert iconName="alert" type="temporary">
          Delays to delivery due to severe weather.
          Check
          your <LinkText color="inherit" href="#">order status</LinkText> for
          latest udpates.
          </Alert>
        </li>
      </ul>
      <Paragraph>Link text should be descriptive to what it is linking too.</Paragraph>
    </Section>
  </article>
)

export default LinksPage
