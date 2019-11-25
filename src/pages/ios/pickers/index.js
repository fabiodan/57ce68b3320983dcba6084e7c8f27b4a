// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Heading2,
  Heading1,
  Caption,
  Figure,
  GridItem,
  Grid,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import dateandtimePNGSource from './images/pickers-date-and-time.png'
import datePNGSource from './images/pickers-date.png'
import examplePNGSource from './images/pickers-example.png'
import numericPNGSource from './images/pickers-numeric.png'
import timePNGSource from './images/pickers-time.png'

import './_style.scss'


const IOSPickersPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })
  return (
    <article className="ios-pickers-page">

      <Heading1>Pickers</Heading1>

      <Section>
        <Heading2>Pickers</Heading2>
        <Paragraph>
          Pickers allow users to select a value from a list. Native pickers on iOS
          are best suited for a small number of values.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Numeric Picker</Caption>
            <Figure maxWidth="375px" src={numericPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Date Picker</Caption>
            <Figure maxWidth="375px" src={datePNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Date & Time Picker</Caption>
            <Figure maxWidth="375px" src={dateandtimePNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Time Picker</Caption>
            <Figure maxWidth="375px" src={timePNGSource} noMargin fluid />
          </GridItem>
        </Grid>
        <Grid withBackground noMargin>
          <GridItem>
            <Figure maxWidth="223px" src={examplePNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

    </article>
  )
}

export default IOSPickersPage
