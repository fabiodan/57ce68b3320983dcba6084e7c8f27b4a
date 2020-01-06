// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Caption,
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  Figure,
  GridItem,
  Grid,
  Section,
} from '@sg/sg-layout'

// Assets
import unpopulatedPNGSource from './images/search-bars-unpopulated.png'
import populatedPNGSource from './images/search-bars-populated.png'
import unpopulatedCancelPNGSource from './images/search-bars-narrow-unpopulated-cancel.png'
import populatedCancelPNGSource from './images/search-bars-narrow-populated-cancel.png'
import narrowPopulatedPNGSource from './images/search-bars-narrow-populated.png'
import examplePNGSource from './images/search-bars-example.png'
import './_style.scss'

const IOSSearchBarsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-search-bars-page">

      <Heading1>Search bars</Heading1>

      <Section>
        <Heading2>Search Bars</Heading2>
        <Paragraph>
          A search bar lets users enter a search term and submit a search.
        </Paragraph>
        <Paragraph>
          Search bars open with a cancel option present (narrow). If cancel is
          selected, the search bar reverts to full width, until it is interacted with.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Full Width - Unpopulated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={unpopulatedPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Full Width - Populated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={populatedPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Narrow (with cancel) - Unpopulated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={unpopulatedCancelPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Narrow (with cancel) - Populated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={populatedCancelPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Narrow (with Filter Option) - Populated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={narrowPopulatedPNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem>
            <Figure fluid noMargin maxWidth="223px" src={examplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

    </article>
  )
}

export default IOSSearchBarsPage
