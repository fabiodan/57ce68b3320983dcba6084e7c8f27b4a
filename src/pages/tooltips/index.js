// Libs
import React from 'react'

// Components (from atomic to composite)
import Tooltip from '@asda/tooltip'
import { Caption, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="tooltips-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="tooltips-page__grid-item">{children}</li>
)

const TooltipsPage = () => (
  <article className="tooltips-page">

    <Heading>Tooltips</Heading>

    <Section>
      <Subheading>Simple Tooltips</Subheading>
      <Paragraph>
      Tooltips are informative text shown to the user during hover, focus on,
      or tapping on an element. The text explains things that are not
      discernable from the interface.
      </Paragraph>

      <Caption>Large Tooltips</Caption>
      <Grid>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="left">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="center">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="right">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="left">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="center">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="right">Text</Tooltip>
        </GridItem>
      </Grid>

      <Caption>Small Tooltips</Caption>
      <Grid>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="left" size="small">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="center" size="small">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="right" size="small">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="left" size="small">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="center" size="small">Text</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="right" size="small">Text</Tooltip>
        </GridItem>
      </Grid>

      <Caption>Error Tooltips</Caption>
      <Grid>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="left" error>Error</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="center" error>Error</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="bottom" arrowPosX="right" error>Error</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="left" error>Error</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="center" error>Error</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip arrowPosY="top" arrowPosX="right" error>Error</Tooltip>
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Advanced Tooltips</Subheading>
      <Paragraph>
        Advanced tooltips are used to share detailed information about a new
        feature in detail. The information can be longer and detailed, but
        should still be as concise as possible, as each tooltip is friction
        in user journey.
      </Paragraph>

      <Caption>Advance</Caption>
      <Grid>
        <GridItem>
          <Tooltip title="Title" arrowPosY="bottom" arrowPosX="left">Body</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip title="Title" arrowPosY="bottom" arrowPosX="center">Body</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip title="Title" arrowPosY="bottom" arrowPosX="right">Body</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip title="Title" arrowPosY="top" arrowPosX="left">Body</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip title="Title" arrowPosY="top" arrowPosX="center">Body</Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip title="Title" arrowPosY="top" arrowPosX="right">Body</Tooltip>
        </GridItem>
      </Grid>

      <Paragraph>
        For tooltips longer that two lines of text, the height of the container
        should be increased in increments of 16px for every new line.
      </Paragraph>

      <Caption position="top">Multiple Lines</Caption>
      <Grid>
        <GridItem>
          <Tooltip title="Title" arrowPosY="bottom" arrowPosX="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip title="Title" arrowPosY="bottom" arrowPosX="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip title="Title" arrowPosY="bottom" arrowPosX="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam. Lorem ipsum dolor sit amet.
          </Tooltip>
        </GridItem>
      </Grid>
    </Section>
  </article>
)

export default TooltipsPage
