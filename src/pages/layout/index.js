// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import gridSVGSource from './images/responsive-layout-grid.svg'
import './_style.scss'

const LayoutPage = () => (
  <article className="layout-page">

    <Heading>Layout</Heading>

    <Section>
      <Subheading>Responsive Layout Grid</Subheading>
      <Paragraph>
        A responsive layout that adapts to different screen sizes and
        orientation can ensure consistency in element place across layouts.
        Asda grid is made up of three elements: coloumns, gutters & margins.
      </Paragraph>

      <Figure maxWidth="768px" src={gridSVGSource} />

      <Subheading>Columns</Subheading>
      <Paragraph>
        Columns are the areas dedicated for placing content on the screen.
        They are defined as percentages and not fixed values. This allows the
        columns and the content within to be flexible and responsive to changing
        screen sizes and orientations.
      </Paragraph>
      <Paragraph>
        The number of columns in the grid are determined by the breakpoints.
      </Paragraph>

      <Subheading>Gutters and Margins</Subheading>
      <Paragraph noMargin>
        Gutters are the spaces between columns, while margins are the spaces
        between the columns and the left and right edge of the screen. Unlike
        columns, to better adapt to different screens and maintain consistency,
        gutters are margins have fixed values determined by the breakpoint.
      </Paragraph>
    </Section>

    <Section>
      <Subheading>Breakpoint System</Subheading>
      <Paragraph>
        Asda design system provides responsive layouts based on the following
        column structures. Layouts using 4-column, 8-column, and 12-column grids
        are available for use across different screens, devices, and orientations.
      </Paragraph>
      <Paragraph>
        Each breakpoint range determines the number of columns, and recommended
        margins and gutters, for each display size.
      </Paragraph>

      <GridTable />
    </Section>

  </article>
)

const GridTable = () => (
  <table className="layout-page__table">
    <thead className="layout-page__table__thead">
      <tr>
        <th>Breakpoint <br />Range (px)</th>
        <th>Number of <br />columns</th>
        <th>Margin <br />Width (each)</th>
        <th>Gutter <br />Width</th>
      </tr>
    </thead>
    <tbody className="layout-page__table__tbody">
      <tr><td>Upto 479</td><td>4</td><td>16</td><td>16</td></tr>
      <tr><td>480 - 767</td><td>4</td><td>16</td><td>16</td></tr>
      <tr><td>768 - 1023</td><td>8</td><td>16</td><td>16</td></tr>
      <tr><td>1024 - 1279</td><td>12</td><td>16</td><td>16</td></tr>
      <tr><td>1280 - 1439</td><td>14</td><td>24</td><td>16</td></tr>
      <tr><td>1440</td><td>14</td><td>32</td><td>16</td></tr>
    </tbody>
  </table>
)

export default LayoutPage
