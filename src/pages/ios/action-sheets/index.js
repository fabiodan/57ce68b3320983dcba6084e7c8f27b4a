// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Caption, Paragraph, Heading2, Section, Heading1 } from '@sg/sg-layout'

// Assets
import devicePNGSource from './images/action-sheets-device.png'
import standardPNGSource from './images/action-sheets-standard.png'
import './_style.scss'

const IOSActionSheetsPage = () => (
  <article className="ios-action-sheets-page">
    <Heading1>Action Sheets</Heading1>

    <Section>
      <Heading2>Action sheets</Heading2>
      <Paragraph>
        An action sheet is an overlay that appears in response to a control or
        action - presenting a set of two or more choices based on the current context.
      </Paragraph>

      <div className="ios-action-sheets-page__examples">
        <div>
          <Caption position="top">Standard Action Sheet with different actions</Caption>
          <Figure fluid maxWidth="375px" src={standardPNGSource} />
        </div>
        <Figure className="ios-action-sheets-page__figure" noMargin fluid maxWidth="375px" src={devicePNGSource} />
      </div>
    </Section>

  </article>
)

export default IOSActionSheetsPage
