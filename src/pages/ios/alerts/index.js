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
import examplePNGSource from './images/alert-example.png'
import feedbackExamplePNGSource from './images/alert-feedback-example.png'
import onelinePNGSource from './images/alert-one-line.png'
import singlelinefeedbackPNGSource from './images/alert-single-line-feedback.png'
import textalertPNGSource from './images/alert-text-alert.png'
import threeoptionsPNGSource from './images/alert-three-options.png'
import twolinefeedbackPNGSource from './images/alert-two-line-feedback.png'
import './_style.scss'


const IOSAlertsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-alerts-page">
      <Heading1>Alerts</Heading1>

      <Section>
        <Heading2>Alerts</Heading2>
        <Paragraph>
          Alerts block the user from interacting with the app until they provide
           feedback. They are considered disruptive and should only be used in
           important situations such as confirming a purchase or destructive actions (deletions).
        </Paragraph>
        <Paragraph>
          An alert consists of a title, an optional message, one or more buttons
          and optional text fields.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">1 Line Title Alert</Caption>
            <Figure fluid noMargin maxWidth="270px" src={onelinePNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Alert With Text Alert</Caption>
            <Figure fluid noMargin maxWidth="270px" src={textalertPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">3 Options Alert</Caption>
            <Figure fluid noMargin maxWidth="270px" src={threeoptionsPNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={examplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Feedback</Heading2>
        <Paragraph>
          Feedback helps users know what the app is doing, discover what they can
          do next, and understand the results of actions.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Single Line Feedback Illustrative Example</Caption>
            <Figure noMargin fluid maxWidth="375px" src={singlelinefeedbackPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Two Line Feedback Illustrative Example</Caption>
            <Figure noMargin fluid maxWidth="375px" src={twolinefeedbackPNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={feedbackExamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>
    </article>
  )
}

export default IOSAlertsPage
