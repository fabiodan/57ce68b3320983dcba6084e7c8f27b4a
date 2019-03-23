// Libs
import React from 'react'

// Components (from atomic to composite)
import { LinkButton, LinkAnchor } from '@asda/link'
import { Caption, Figure, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

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

    <Heading>Links</Heading>

    <Section>
      <Subheading>Links</Subheading>
      <Paragraph>
        For tertiary actions, text buttons and links are used. There are two
        types available, standalone buttons and text links which are part of
        other text bodies.
      </Paragraph>
      <Grid>
        <GridItem>
          <LinkButton align="left">link button</LinkButton>
          <Caption>Standalone button Left aligned Default</Caption>
        </GridItem>
        <GridItem>
          <LinkButton>link button</LinkButton>
          <Caption>standalone button Center aligned Default</Caption>
        </GridItem>
        <GridItem>
          <LinkButton align="right">link button</LinkButton>
          <Caption>standalone button Right aligned Hover</Caption>
        </GridItem>
        <GridItem>
          <LinkButton className="links-page__link--border" align="left">link button</LinkButton>
        </GridItem>
        <GridItem>
          <LinkButton className="links-page__link--border">link button</LinkButton>
        </GridItem>
        <GridItem>
          <LinkButton className="links-page__link--border" align="right">link button</LinkButton>
        </GridItem>
      </Grid>
      <Paragraph>
        Tap areas for links are larger than just the text area. Height for tap
        area is 40px and width is 8-16px on each side, based on the text
        alignment.
      </Paragraph>

      <Paragraph className="links-page__paragraph-example">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat <LinkAnchor href="https://www.asda.com">link text</LinkAnchor>.
        Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum <LinkAnchor href="https://www.asda.com">link text</LinkAnchor>.
      </Paragraph>
    </Section>

    <Section>
      <Subheading>Links in alerts & notifications</Subheading>
      <Paragraph keepMargin>
        Links within alerts and other notifications should follow the standard
        text style for that component along with an underline and a heavier
        weight (semi-bold in most cases)
      </Paragraph>

    </Section>

  </article>
)

export default LinksPage
