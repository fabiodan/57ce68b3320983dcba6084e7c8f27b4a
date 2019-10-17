// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Caption, Paragraph, Heading2, Section, Heading1 } from '@sg/sg-layout'

// Assets
import exampleIOSPNGSource from './images/status-bar-example-ios.png'
import largeDarkPNGSource from './images/status-bar-large-dark.png'
import largeLightPNGSource from './images/status-bar-large-light.png'
import smallDarkPNGSource from './images/status-bar-small-dark.png'
import smallLightPNGSource from './images/status-bar-small-light.png'
import './_style.scss'

const IOSStatusBarsPage = () => (
  <article className="ios-status-bars-page">
    <Heading1>Status Bars</Heading1>

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

      <div className="ios-status-bars-page__examples">
        <ul className="ios-status-bars-page__list">
          <li className="ios-status-bars-page__list-item">
            <Caption position="top">Large status bar - Light</Caption>
            <Figure noMargin fluid maxWidth="375px" src={largeLightPNGSource} />
          </li>
          <li className="ios-status-bars-page__list-item">
            <Caption position="top">Large status bar - Dark</Caption>
            <Figure noMargin fluid maxWidth="375px" src={largeDarkPNGSource} />
          </li>
          <li className="ios-status-bars-page__list-item">
            <Caption position="top">Small status bar - Light</Caption>
            <Figure noMargin fluid maxWidth="375px" src={smallLightPNGSource} />
          </li>
          <li className="ios-status-bars-page__list-item">
            <Caption position="top">Small status bar - Dark</Caption>
            <Figure noMargin fluid maxWidth="375px" src={smallDarkPNGSource} />
          </li>
        </ul>
        <Figure className="ios-status-bars-page__figure" fluid maxWidth="356px" src={exampleIOSPNGSource} />
      </div>
    </Section>

  </article>
)

export default IOSStatusBarsPage
