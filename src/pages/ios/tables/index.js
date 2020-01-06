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
import standardPNGSource from './images/tables-standard.png'
import withactionPNGSource from './images/tables-with-action.png'
import withaccordianPNGSource from './images/tables-with-accordian.png'
import withdropdownPNGSource from './images/tables-with-dropdown.png'
import twoActionsPNGSource from './images/tables-with-two-actions.png'
import twoIconsPNGSource from './images/tables-with-two-icons.png'
import sectionheaderPNGSource from './images/tables-section-header.png'

import tableviewPNGSource from './images/tables-table-view.png'
import leveldownPNGSource from './images/tables-level-down.png'
import supportingtextPNGSource from './images/tables-supporting-text.png'
import expandablePNGSource from './images/tables-expandable.png'

import radioButtonLeftPNGSource from './images/tables-radio-button-left.png'
import radioButtonRightPNGSource from './images/tables-radio-button-right.png'
import addOptionPNGSource from './images/tables-add-option.png'
import dropdownPNGSource from './images/tables-dropdown.png'

import itemPriceSummaryPNGSource from './images/tables-item-price-summary.png'
import actionIconPNGSource from './images/tables-action-icon.png'
import twoLinesPNGSource from './images/tables-two-lines.png'
import viewexamplePNGSource from './images/tables-table-view-example.png'

import fiveoptionPNGSource from './images/tables-five-options.png'
import nativepickerPNGSource from './images/tables-native-picker.png'
import morethanfivePNGSource from './images/tables-more-than-five.png'
import fullscreenPNGSource from './images/tables-full-screen.png'
import './_style.scss'


const IOSTablesPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-tables-page">

      <Heading1>Tables</Heading1>

      <Section>
        <Heading2>Tables</Heading2>
        <Paragraph>
          Tables are ordered lists that contain a range of content.
        </Paragraph>
        <Paragraph>
          Ideally tables are grouped and contained within a <b>SECTION HEADER</b>. This
          helps to differentiate content in different sections.
        </Paragraph>
      </Section>

      <Section>
        <Heading2>Section Header</Heading2>
        <Paragraph>
          Section headers divide content with titles and act as a visual break,
          providing context. By chunking content within sections, content on the
          page easier to scan and understand.
        </Paragraph>
        <Paragraph>
          Section headers can be modified with a dropdown, actionable buttons or
          text links.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">SECTION HEADER - Standard</Caption>
            <Figure noMargin fluid maxWidth="375px" src={standardPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">SECTION HEADER - Standard With Action</Caption>
            <Figure noMargin fluid maxWidth="375px" src={withactionPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">SECTION HEADER - Standard With Action</Caption>
            <Figure noMargin fluid maxWidth="375px" src={withaccordianPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">SECTION HEADER - With Dropdown / Icon & Action</Caption>
            <Figure noMargin fluid maxWidth="375px" src={withdropdownPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">SECTION HEADER - Two Actions</Caption>
            <Figure noMargin fluid maxWidth="375px" src={twoActionsPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">SECTION HEADER - two icons</Caption>
            <Figure noMargin fluid maxWidth="375px" src={twoIconsPNGSource} />
          </GridItem>
        </Grid>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={sectionheaderPNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Table View</Heading2>
        <Paragraph>
          Table view cells are lists of data that can surface information, offer
          interaction or navigate to another section.
        </Paragraph>
        <Paragraph>
          Table view cells are contained by section headers.
        </Paragraph>
        <Paragraph>
          Single line of content:
        </Paragraph>

        <Grid withBackground columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Standard Table View</Caption>
            <Figure noMargin fluid maxWidth="375px" src={tableviewPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Navigate a level down</Caption>
            <Figure noMargin fluid maxWidth="375px" src={leveldownPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Navigate a level down & Supporting Text</Caption>
            <Figure noMargin fluid maxWidth="375px" src={supportingtextPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">STANDARD TABLE VIEW - CAN EXPAND</Caption>
            <Figure noMargin fluid maxWidth="375px" src={expandablePNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Radio Button in Table View (left Aligned)</Caption>
            <Figure noMargin fluid maxWidth="375px" src={radioButtonLeftPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Radio Button in Table View (Right Aligned)</Caption>
            <Figure noMargin fluid maxWidth="375px" src={radioButtonRightPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Add Option in Table View</Caption>
            <Figure noMargin fluid maxWidth="375px" src={addOptionPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Dropdown in Table View</Caption>
            <Figure noMargin fluid maxWidth="375px" src={dropdownPNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Radio Button in Table View (left Aligned)</Caption>
            <Figure noMargin fluid maxWidth="375px" src={itemPriceSummaryPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Radio Button in Table View (Right Aligned)</Caption>
            <Figure noMargin fluid maxWidth="375px" src={actionIconPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Add Option in Table View</Caption>
            <Figure noMargin fluid maxWidth="375px" src={twoLinesPNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={viewexamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Dropdowns in a Table View</Heading2>
        <Paragraph>
          If a dropdown contains 5 or less values, a <b>NATIVE PICKER</b> should be used.
        </Paragraph>
        <Paragraph>
          If there are more than 5 values within a dropdown, a <b>FULL SCREEN SHEET </b>
          should be used. This will appear from the bottom of the screen and act as an overlay.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">5 or less options</Caption>
            <Figure noMargin fluid maxWidth="380px" src={fiveoptionPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Native Picker is shown</Caption>
            <Figure noMargin fluid maxWidth="380px" src={nativepickerPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">More than 5 options</Caption>
            <Figure noMargin fluid maxWidth="380px" src={morethanfivePNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Full Screen Sheet Displays options</Caption>
            <Figure noMargin fluid maxWidth="380px" src={fullscreenPNGSource} />
          </GridItem>
        </Grid>
      </Section>
    </article>
  )
}

export default IOSTablesPage
