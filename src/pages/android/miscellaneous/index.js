// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Figure,
  FigureContainer,
  Grid,
  GridItem,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import chipsExampleSelectorChipPNGSource from './images/chips-example-selector-chip.png'
import chipsFilterChipActivePNGSource from './images/chips-filter-chip-active.png'
import chipsSelectorChipActivePNGSource from './images/chips-selector-chip-active.png'
import chipsSelectorChipInactivePNGSource from './images/chips-selector-chip-inactive.png'
import dividersExampleTextDividerActionPNGSource from './images/dividers-example-text-divider-action.png'
import dividersExampleTextDividerPNGSource from './images/dividers-example-text-divider.png'
import dividersLineDividerPNGSource from './images/dividers-line-divider.png'
import dividersTextDividerActionPNGSource from './images/dividers-text-divider-action.png'
import dividersTextDividerPNGSource from './images/dividers-text-divider.png'

import './_style.scss'

const MyComponent = ({ children }) => (
  <div className="miscellaneous-page__component">{ children }</div>
)

const AndroidMiscellaneousPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="miscellaneous-page">

      <Heading1>Miscellaneous</Heading1>

      <Section>
        <Heading2>Dividers</Heading2>
        <Paragraph>
          A divider groups content in lists and layouts. There is two types of
          dividers: text and line.
        </Paragraph>
        <Grid columnCount={ minWidth1024 ? 2 : 1 } withBackground>
          <GridItem>
            <Caption position="top">Line Divider</Caption>
            <Figure maxWidth="300px" src={dividersLineDividerPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Divider</Caption>
            <Figure maxWidth="360px" src={dividersTextDividerPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Divider with Action</Caption>
            <Figure maxWidth="360px" src={dividersTextDividerActionPNGSource} noMargin fluid />
          </GridItem>
        </Grid>

        <Heading3>Text divider</Heading3>
        <FigureContainer>
          <Figure maxWidth="360px" src={dividersExampleTextDividerPNGSource} noMargin fluid />
        </FigureContainer>

        <Heading3>Text divider with action</Heading3>
        <Grid columnCount="1" withBackground >
          <Figure maxWidth="360px" src={dividersExampleTextDividerActionPNGSource} noMargin fluid />
        </Grid>
      </Section>


            {/* chipsExampleSelectorChipPNGSource



             */}

      <Section>
        <Heading2>Chips</Heading2>
        <Paragraph>
          Chips allow users to make selections, filter content.
        </Paragraph>
        <Grid columnCount={ minWidth1024 ? 3 : 1 }>
          <GridItem>
            <Caption position="top">Filter Chip Active</Caption>
            <Figure maxWidth="105px" src={chipsFilterChipActivePNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Selector Chip Active</Caption>
            <Figure maxWidth="112px" src={chipsSelectorChipInactivePNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Selector Chip Inactive</Caption>
            <Figure maxWidth="112px" src={chipsSelectorChipActivePNGSource} noMargin fluid />
          </GridItem>
        </Grid>

        <Heading3>Selector Chip</Heading3>
        <Paragraph>
          In this case helps user to select most popular search option in Avocado
          category.
        </Paragraph>
        <Grid noMargin withBackground>
          <GridItem>
            <Figure maxWidth="360px" src={dividersExampleTextDividerPNGSource} noMargin fluid />
          </GridItem>
          </Grid>
      </Section>
    </article>
  )
}

export default AndroidMiscellaneousPage
