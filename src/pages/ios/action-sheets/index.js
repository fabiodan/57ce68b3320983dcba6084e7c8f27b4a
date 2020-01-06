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
import devicePNGSource from './images/action-sheets-device.png'
import standardPNGSource from './images/action-sheets-standard.png'
import './_style.scss'

const IOSActionSheetsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-action-sheets-page">
      <Heading1>Action Sheets</Heading1>

      <Section>
        <Heading2>Action sheets</Heading2>
        <Paragraph>
          An action sheet is an overlay that appears in response to a control or
          action - presenting a set of two or more choices based on the current context.
        </Paragraph>

        <Grid withBackground>
          <GridItem>
            <Caption position="top">Standard Action Sheet with different actions</Caption>
            <Figure noMargin fluid maxWidth="375px" src={standardPNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={devicePNGSource} />
          </GridItem>
        </Grid>
      </Section>

    </article>
  )
}

export default IOSActionSheetsPage
