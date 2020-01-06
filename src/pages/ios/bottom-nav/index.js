// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Caption,
  Paragraph,
  Heading1,
  Heading2,
  Figure,
  GridItem,
  Grid,
  Section,
} from '@sg/sg-layout'

// Assets
import componentPNGSource from './images/bottom-nav-component.png'
import activePNGSource from './images/bottom-nav-active.png'
import inactivePNGSource from './images/bottom-nav-inactive.png'
import examplePNGSource from './images/bottom-nav-example.png'
import './_style.scss'

const IOSStatusBarsPage = () => {
  const minWidth1440 = useMediaQuery({ query: '(min-width: 1440px)' })

  return (
    <article className="ios-bottom-nav-page">
      <Heading1>Bottom nav (tab bar)</Heading1>
      <Section>
        <Heading2>Bottom Nav</Heading2>
        <Paragraph>
          The bottom nav enables quick switching between parent level sections of
          the app.
        </Paragraph>
        <Paragraph>
          When a different section is selected, the current section is held in
          situ, a little bit like having different tabs in a web browser. When you
          return to another section, you should be able to pick up where you left off.
        </Paragraph>

        <Grid withBackground columnCount={minWidth1440 ? 2 : 1}>
          <Grid columnCount={1} noMargin>
            <GridItem>
              <Caption position="top">Bottom Nav</Caption>
              <Figure noMargin fluid maxWidth="375px" src={componentPNGSource} />
            </GridItem>
          </Grid>
          <Grid columnCount={2} noMargin>
            <GridItem>
              <Caption position="top">Active State</Caption>
              <Figure noMargin fluid maxWidth="75px" src={activePNGSource} />
            </GridItem>
            <GridItem>
              <Caption position="top">InActive State</Caption>
              <Figure noMargin fluid maxWidth="75px" src={inactivePNGSource} />
            </GridItem>
          </Grid>
        </Grid>

        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={examplePNGSource} />
          </GridItem>
        </Grid>
      </Section>
    </article>
  )
}

export default IOSStatusBarsPage
