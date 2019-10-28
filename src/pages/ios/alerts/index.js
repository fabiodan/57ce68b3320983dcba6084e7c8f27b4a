// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Caption, Paragraph, Heading2, Section, Heading1 } from '@sg/sg-layout'

// Assets
import bottomPNGSource from './images/alert-bottom.png'
import locationPNGSource from './images/alert-location-request.png'
import notavailablePNGSource from './images/alert-not-available.png'
import onelinePNGSource from './images/alert-one-line.png'
import singlelinefeedbackPNGSource from './images/alert-single-line-feedback.png'
import textalertPNGSource from './images/alert-text-alert.png'
import threeoptionsPNGSource from './images/alert-three-options.png'
import twolinefeedbackPNGSource from './images/alert-two-line-feedback.png'
import twolinesPNGSource from './images/alert-two-lines.png'
import './_style.scss'

const Grid = ({ children }) => (
  <div className="ios-alerts-page__grid">{ children }</div>
)

const IOSAlertsPage = () => (
  <article className="ios-alerts-page">
    <Heading1>Alerts</Heading1>

    <Section>
      <Heading2>Alerts</Heading2>
      <Paragraph>
        Alerts show important information related to the state of the app. They
        usually request feedback.
      </Paragraph>
      <Paragraph>
        An alert consists of a title, an optional message, one or more buttons
        and optional text fields.
      </Paragraph>

      <Grid>
        <div>
          <Caption position="top">1 Line Title Alert</Caption>
          <Figure fluid noMargin maxWidth="360px" src={onelinePNGSource} />
        </div>
        <div>
          <Caption position="top">2 Line Title Alert</Caption>
          <Figure fluid noMargin maxWidth="360px" src={twolinesPNGSource} />
        </div>
        <div>
          <Caption position="top">Alert With Text Alert</Caption>
          <Figure fluid noMargin maxWidth="360px" src={textalertPNGSource} />
        </div>
        <div>
          <Caption position="top">3 Options Alert</Caption>
          <Figure fluid noMargin maxWidth="360px" src={threeoptionsPNGSource} />
        </div>
        <div>
          <Figure fluid noMargin maxWidth="360px" src={locationPNGSource} />
        </div>
        <div>
          <Figure fluid noMargin maxWidth="360px" src={notavailablePNGSource} />
        </div>
      </Grid>
    </Section>


    <Section>
      <Heading2>Feedback</Heading2>
      <Paragraph>
        Feedback helps users know what the app is doing, discover what they can
        do next, and understand the results of actions.
      </Paragraph>
      <Grid>
        <div>
          <Caption position="top">Single Line Feedback Illustrative Example</Caption>
          <Figure fluid maxWidth="360px" src={singlelinefeedbackPNGSource} />
          <Caption position="top">Two Line Feedback Illustrative Example</Caption>
          <Figure noMargin fluid maxWidth="360px" src={twolinefeedbackPNGSource} />
        </div>
        <div>
          <Figure noMargin fluid maxWidth="360px" src={bottomPNGSource} />
        </div>
      </Grid>
    </Section>
  </article>
)

export default IOSAlertsPage
