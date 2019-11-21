// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import Sample from '@asda/_sample'
import {
  Heading1,
  Heading2,
  Figure,
  Caption,
  GridItem,
  Grid,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import textFieldsErrorPNGSource from './images/text-fields-error.png'
import textFieldsExamplePNGSource from './images/text-fields-example.png'
import textFieldsFreeFormatPNGSource from './images/text-fields-free-format.png'
import textFieldsPlaceholderDropdownPNGSource from './images/text-fields-placeholder-dropdown.png'
import textFieldsPlaceholderFocusPNGSource from './images/text-fields-placeholder-focus.png'
import textFieldsPlaceholderIconPNGSource from './images/text-fields-placeholder-icon.png'
import textFieldsPlaceholderPNGSource from './images/text-fields-placeholder.png'
import textFieldsPopulatedDropdownPNGSource from './images/text-fields-populated-dropdown.png'
import textFieldsPopulatedFocusPNGSource from './images/text-fields-populated-focus.png'
import textFieldsPopulatedIconPNGSource from './images/text-fields-populated-icon.png'
import textFieldsPopulatedPNGSource from './images/text-fields-populated.png'
import textFieldsSuccessPNGSource from './images/text-fields-success.png'
import './_style.scss'

const IOSTextFieldsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-text-fields-page">

      <Heading1>Text Fields</Heading1>

      <Section>
        <Heading2>Text Fields</Heading2>
        <Paragraph>
          Text fields capture information entered by the user.
        </Paragraph>
        <Paragraph>
          Text fields require a field label and placeholder text, along with appropriate error and success messaging.
        </Paragraph>
        <Paragraph>
          If a text field is being populated or is in focus, a clear button should be shown on the right hand side.
        </Paragraph>

        <Grid columnCount={ minWidth1024 ? 2 : 1 } withBackground>
          <GridItem>
            <Caption position="top">Text Field - Placeholder</Caption>
            <Figure maxWidth="375px" src={textFieldsPlaceholderPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Placeholder - In Focus</Caption>
            <Figure maxWidth="375px" src={textFieldsPlaceholderFocusPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Populated</Caption>
            <Figure maxWidth="375px" src={textFieldsPopulatedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Populated - In Focus</Caption>
            <Figure maxWidth="375px" src={textFieldsPopulatedFocusPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Placeholder with dropdown</Caption>
            <Figure maxWidth="375px" src={textFieldsPlaceholderDropdownPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Populated with dropdown</Caption>
            <Figure maxWidth="375px" src={textFieldsPopulatedDropdownPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Placeholder with Icon</Caption>
            <Figure maxWidth="375px" src={textFieldsPlaceholderIconPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Populated with Icon</Caption>
            <Figure maxWidth="375px" src={textFieldsPopulatedIconPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Error State</Caption>
            <Figure maxWidth="375px" src={textFieldsErrorPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Success State</Caption>
            <Figure maxWidth="375px" src={textFieldsSuccessPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Text Field - Free Format</Caption>
            <Figure maxWidth="375px" src={textFieldsFreeFormatPNGSource} noMargin fluid />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem>
            <Figure maxWidth="223px" src={textFieldsExamplePNGSource} noMargin fluid />
          </GridItem>
        </Grid>

      </Section>
    </article>
  )
}


export default IOSTextFieldsPage
