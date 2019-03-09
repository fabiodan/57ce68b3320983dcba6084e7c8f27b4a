// Libs
import React from 'react'

// Components (from atomic to composite)
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <div className="layout-page__component">{ children }</div>
)

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
      <Component>Examples Here</Component>
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
      <Component>Examples Here</Component>
    </Section>

  </article>
)

export default LayoutPage
