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
import largePNGSource from './images/status-bar-large.png'
import smallPNGSource from './images/status-bar-small.png'
import './_style.scss'

const IOSStatusBarsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-status-bars-page">
      <Heading1>Status bars</Heading1>

      <Section>
        <Heading2>Status Bars</Heading2>
        <Paragraph>
          The status bar appears on the top of the screen and shows information
          such as time, battery percentage, network and cellular status.
        </Paragraph>
        <Paragraph>
          If the device has a notch at the top of the screen, the status bar looks
          slightly different and is taller.
        </Paragraph>
        <Paragraph>
          Depending on the background colour of the app navigation bar, the status
          bar can be shown with black text (light status bar) or white text
          (dark status bar).
        </Paragraph>
        <Paragraph>
          The status bar can also be hidden when interacting with full screen pages.
        </Paragraph>
      </Section>

      <Section>
        <Heading2>iPhone SE, 8, 8 Plus & iPad</Heading2>
        <Paragraph>
          These devices use the <b>SMALLER</b> status bar, shown below.
        </Paragraph>
        <Grid className="ios-status-bars-page_grid" withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="806px" src={smallPNGSource}/>
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>iPhone 11 Pro, iPhone 11 Pro Max</Heading2>
        <Paragraph>
          These devices use the <b>LARGER</b> status bar, shown below, as the device
          has a notch at the top of the screen.
        </Paragraph>
        <Grid className="ios-status-bars-page_grid" withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="806px" src={largePNGSource}/>
          </GridItem>
        </Grid>
      </Section>

    </article>
  )
}

export default IOSStatusBarsPage
