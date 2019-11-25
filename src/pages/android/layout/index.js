// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Paragraph, Heading2, Heading3, Section, Heading1 } from '@sg/sg-layout'

// Assets
import mobilePNGSource from './images/mobile.png'
import tabletPNGSource from './images/tablet.png'
import './_style.scss'

const AndroidLayoutPage = () => (
  <article className="android-layout-page">

    <Heading1>Layout</Heading1>

    <Section>
      <Paragraph>
        Asda grid is made up of three elements: columns, gutters & margins.
        For Android there are two screen breakpoints, 360px and 1024px width.
      </Paragraph>

      <Heading3>Mobile</Heading3>
      <Figure src={mobilePNGSource} maxWidth="307px" fluid />

      <Heading3>Tablet</Heading3>
      <Figure src={tabletPNGSource} noMargin maxWidth="837px" fluid />
    </Section>

    <Section>
      <Heading2>Columns</Heading2>
      <Paragraph>
        Columns are the areas dedicated for placing content on the screen.
        They are defined as percentages and not fixed values. This allows the
        columns and the content within to be flexible and responsive to changing
        screen sizes and orientations.
      </Paragraph>
      <Paragraph>
        The number of columns in the grid are determined by the breakpoints.
      </Paragraph>

      <Heading2>Gutters and Margins</Heading2>
      <Paragraph noMargin>
        Gutters are the spaces between columns, while margins are the spaces
        between the columns and the left and right edge of the screen. Unlike
        columns, to better adapt to different screens and maintain consistency,
        gutters are margins have fixed values determined by the breakpoint.
      </Paragraph>
    </Section>
  </article>
)

export default AndroidLayoutPage
