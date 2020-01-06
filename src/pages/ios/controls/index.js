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
import controlsexamplePNGSource from './images/controls-example.png'

import selectedradioPNGSource from './images/controls-selected-radio.png'
import unselectedradioPNGSource from './images/controls-unselected-radio.png'
import radioexamplePNGSource from './images/controls-radio-example.png'

import selectedcheckboxPNGSource from './images/controls-selected-checkbox.png'
import unselectedcheckboxPNGSource from './images/controls-unselected-checkbox.png'
import checkboxexamplePNGSource from './images/controls-checkbox-example.png'

import inlineTickPNGSource from './images/controls-inline-tick.png'
import inlineTickExamplePNGSource from './images/controls-inline-tick-example.png'

import selectrightPNGSource from './images/controls-select-right.png'
import selectleftPNGSource from './images/controls-select-left.png'
import selectexamplePNGSource from './images/controls-select-example.png'

import toggleonPNGSource from './images/controls-toggle-on.png'
import toggleoffPNGSource from './images/controls-toggle-off.png'
import toggleexamplePNGSource from './images/controls-toggles-example.png'

import './_style.scss'


const IOSControlsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-controls-page">

      <Heading1>Controls</Heading1>

      <Section>
        <Heading2>Input Controls</Heading2>
        <Paragraph>
          Input controls let the user interact in a number of different ways.
          They are usually found within forms.
        </Paragraph>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={controlsexamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Radio Buttons</Heading2>
        <Paragraph>
          Radio buttons let users select a single item from a list at once.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Figure noMargin fluid maxWidth="375px" src={unselectedradioPNGSource} />
          </GridItem>
          <GridItem>
            <Figure noMargin fluid maxWidth="375px" src={selectedradioPNGSource} />
          </GridItem>
        </Grid>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={radioexamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Checkboxes</Heading2>
        <Paragraph>
          Checkboxes let users select multiple items from a list.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Figure noMargin fluid maxWidth="375px" src={unselectedcheckboxPNGSource} />
          </GridItem>
          <GridItem>
            <Figure noMargin fluid maxWidth="375px" src={selectedcheckboxPNGSource} />
          </GridItem>
        </Grid>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={checkboxexamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Inline Tick</Heading2>
        <Paragraph>
          Inline ticks appear within the filter and sort menu.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Figure noMargin fluid maxWidth="375px" src={inlineTickPNGSource} />
          </GridItem>
        </Grid>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={inlineTickExamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Quantity Select</Heading2>
        <Paragraph>
          Quantity select lets the user add more than one of the same item.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Quantity Select - with right arrow</Caption>
            <div className="ios-controls-page--minus-margin">
              <Figure noMargin fluid maxWidth="222px" src={selectrightPNGSource} />
            </div>
          </GridItem>
          <GridItem>
            <Caption position="top">Quantity Select - with left arrow</Caption>
            <div className="ios-controls-page--minus-margin">
              <Figure noMargin fluid maxWidth="221px" src={selectleftPNGSource} />
            </div>
          </GridItem>
        </Grid>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={selectexamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Toggles</Heading2>
        <Paragraph>
          Toggles let the user turn something on or off.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Toggle Off</Caption>
            <Figure noMargin fluid maxWidth="84px" src={toggleoffPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Toggle On</Caption>
            <Figure noMargin fluid maxWidth="84px" src={toggleonPNGSource} />
          </GridItem>
        </Grid>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={toggleexamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>
    </article>
  )
}
export default IOSControlsPage
