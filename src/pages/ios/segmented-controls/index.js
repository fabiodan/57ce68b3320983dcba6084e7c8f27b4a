// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Caption,
  Heading1,
  Heading2,
  Figure,
  GridItem,
  Grid,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import segmentedControls1PNGSource from './images/segmented-controls-1.png'
import segmentedControls2PNGSource from './images/segmented-controls-2.png'
import segmentedControls3PNGSource from './images/segmented-controls-3.png'
import segmentedControls4PNGSource from './images/segmented-controls-4.png'
import segmentedControls5PNGSource from './images/segmented-controls-5.png'
import segmentedControlsExamplePNGSource from './images/segmented-controls-example.png'
import paddingsPNGSource from './images/segmented-controls-paddings.png'
import segmentedControls1OldPNGSource from './images/segmented-controls-1-old.png'
import segmentedControls2OldPNGSource from './images/segmented-controls-2-old.png'
import segmentedControls3OldPNGSource from './images/segmented-controls-3-old.png'
import segmentedControls4OldPNGSource from './images/segmented-controls-4-old.png'
import segmentedControls5OldPNGSource from './images/segmented-controls-5-old.png'

import './_style.scss'

const IOSSegmentedControlsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-segmented-controls-page">
      <Heading1>Segmented Controls</Heading1>

      <Section>
        <Heading2>Segmented Controls</Heading2>
        <Paragraph>
          Segmented controls switch the content in view like tabs in a browser.
          They can also modify a form or page based on the selected state.
          Segmented controls contain between 2 and 5 sections.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Segmented Control - Option 1 Selected</Caption>
            <Figure maxWidth="375px" src={segmentedControls1PNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Segmented Control - Option 2 Selected</Caption>
            <Figure maxWidth="375px" src={segmentedControls2PNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Segmented Control - 3 Options</Caption>
            <Figure maxWidth="375px" src={segmentedControls3PNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Segmented Control - 4 Options</Caption>
            <Figure maxWidth="375px" src={segmentedControls4PNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Segmented Control - 5 Options</Caption>
            <Figure maxWidth="375px" src={segmentedControls5PNGSource} noMargin fluid />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem noMargin>
            <Figure maxWidth="223px" src={segmentedControlsExamplePNGSource} noMargin fluid />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem noMargin>
            <Figure maxWidth="519px" src={paddingsPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>iOS 12 & Below</Heading2>
        <Paragraph>
          Segmented controls have a slightly different UI on older versions of
          iOS. Please use these when building for iOS 10, 11 & 12.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Segmented Control - Option 1 Selected</Caption>
            <Figure maxWidth="375px" src={segmentedControls1OldPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Segmented Control - Option 2 Selected</Caption>
            <Figure maxWidth="375px" src={segmentedControls2OldPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Segmented Control - 3 Options</Caption>
            <Figure maxWidth="375px" src={segmentedControls3OldPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Segmented Control - 4 Options</Caption>
            <Figure maxWidth="375px" src={segmentedControls4OldPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Segmented Control - 5 Options</Caption>
            <Figure maxWidth="375px" src={segmentedControls5OldPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>
    </article>
  )
}
export default IOSSegmentedControlsPage
