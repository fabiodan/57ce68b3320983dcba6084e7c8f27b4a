// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Caption,
  Figure,
  Heading1,
  Heading2,
  GridItem,
  Grid,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import inputFieldsDefaultPNGSource from './images/input-fields-default.png'
import inputFieldsDisabledPNGSource from './images/input-fields-disabled.png'
import inputFieldsErrorPNGSource from './images/input-fields-error.png'
import inputFieldsFilledPNGSource from './images/input-fields-filled.png'
import inputFieldsFocusPNGSource from './images/input-fields-focus.png'
import inputFieldsHelperTextPNGSource from './images/input-fields-helper-text.png'
import inputFieldsRequiredPNGSource from './images/input-fields-required.png'
import inputFieldsSuccessPNGSource from './images/input-fields-success.png'
import noLabelsDefaultPNGSource from './images/no-labels-default.png'
import noLabelsDisabledPNGSource from './images/no-labels-disabled.png'
import noLabelsErrorPNGSource from './images/no-labels-error.png'
import noLabelsFilledPNGSource from './images/no-labels-filled.png'
import noLabelsFocusPNGSource from './images/no-labels-focus.png'
import noLabelsHelperTextPNGSource from './images/no-labels-helper-text.png'
import noLabelsRequiredPNGSource from './images/no-labels-required.png'
import noLabelsSuccessPNGSource from './images/no-labels-success.png'
import cardDefaultPNGSource from './images/card-default.png'
import cardDisabledPNGSource from './images/card-disabled.png'
import cardErrorPNGSource from './images/card-error.png'
import cardFilledPNGSource from './images/card-filled.png'
import cardFocusedPNGSource from './images/card-focused.png'
import cardHelperTextPNGSource from './images/card-helper-text.png'
import cardRequiredPNGSource from './images/card-required.png'
import cardSuccessPNGSource from './images/card-success.png'
import withIconDefaultPNGSource from './images/with-icon-default.png'
import withIconFilledPNGSource from './images/with-icon-filled.png'
import withIconFocusedPNGSource from './images/with-icon-focused.png'
import withIconRequiredPNGSource from './images/with-icon-required.png'
import textFieldsDefaultPNGSource from './images/text-fields-default.png'
import textFieldsDisabledPNGSource from './images/text-fields-disabled.png'
import textFieldsErrorPNGSource from './images/text-fields-error.png'
import textFieldsFilledPNGSource from './images/text-fields-filled.png'
import textFieldsFocusedPNGSource from './images/text-fields-focused.png'
import textFieldsHelperTextPNGSource from './images/text-fields-helper-text.png'
import textFieldsRequiredPNGSource from './images/text-fields-required.png'
import textFieldsSuccessPNGSource from './images/text-fields-success.png'
import assistiveCounterPNGSource from './images/assistive-counter.png'
import assistiveErrorPNGSource from './images/assistive-error.png'
import assistiveHelperTextPNGSource from './images/assistive-helper-text.png'
import assistiveSuccessPNGSource from './images/assistive-success.png'
import paddingPNGSource from './images/padding.png'
import './_style.scss'

const AndroidTextFieldsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="android-text-fields-page">
      <Heading1>Text fields</Heading1>
      <Section>
        <Heading2>Input Fields</Heading2>
        <Paragraph>
          Input fields let users enter and edit text. Each input field is generally
          used for single entry and should aim to be clear and efficient.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Default</Caption>
            <Figure maxWidth="328px" src={inputFieldsDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Required</Caption>
            <Figure maxWidth="328px" src={inputFieldsRequiredPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Filled</Caption>
            <Figure maxWidth="328px" src={inputFieldsFilledPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Focused</Caption>
            <Figure maxWidth="328px" src={inputFieldsFocusPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Helper Text</Caption>
            <Figure maxWidth="328px" src={inputFieldsHelperTextPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Disabled</Caption>
            <Figure maxWidth="328px" src={inputFieldsDisabledPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Success</Caption>
            <Figure maxWidth="328px" src={inputFieldsSuccessPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Error</Caption>
            <Figure maxWidth="328px" src={inputFieldsErrorPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Input Fields without Labels</Heading2>
        <Grid columnCount={minWidth1024 ? 2 : 1} noMargin>
          <GridItem>
            <Caption position="top">No Label + Default</Caption>
            <Figure maxWidth="328px" src={noLabelsDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">No Label + Required</Caption>
            <Figure maxWidth="327px" src={noLabelsRequiredPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">No Label + Disabled</Caption>
            <Figure maxWidth="328px" src={noLabelsDisabledPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">No Label + Focused</Caption>
            <Figure maxWidth="328px" src={noLabelsFocusPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">No Label + Filled</Caption>
            <Figure maxWidth="328px" src={noLabelsFilledPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">No Label + Helper Text</Caption>
            <Figure maxWidth="328px" src={noLabelsHelperTextPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">No Label + Success</Caption>
            <Figure maxWidth="328px" src={noLabelsSuccessPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">No Label + Error</Caption>
            <Figure maxWidth="328px" src={noLabelsErrorPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Input Fields with Card</Heading2>
        <Grid columnCount={minWidth1024 ? 2 : 1} noMargin>
          <GridItem>
            <Caption position="top">Card + Default</Caption>
            <Figure maxWidth="328px" src={cardDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Card + Required</Caption>
            <Figure maxWidth="328px" src={cardRequiredPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Card + Disabled</Caption>
            <Figure maxWidth="328px" src={cardDisabledPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Card + Focused</Caption>
            <Figure maxWidth="328px" src={cardFocusedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Card + Filled</Caption>
            <Figure maxWidth="328px" src={cardFilledPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Card + Helper Text</Caption>
            <Figure maxWidth="328px" src={cardHelperTextPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Card + Success</Caption>
            <Figure maxWidth="328px" src={cardSuccessPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Card + Error</Caption>
            <Figure maxWidth="328px" src={cardErrorPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Input Fields with Icon</Heading2>
        <Grid columnCount={minWidth1024 ? 2 : 1} noMargin>
          <GridItem>
            <Caption position="top">Icon + Default</Caption>
            <Figure maxWidth="328px" src={withIconDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Icon + Required</Caption>
            <Figure maxWidth="328px" src={withIconRequiredPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Icon + Focused</Caption>
            <Figure maxWidth="328px" src={withIconFocusedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Icon + Filled</Caption>
            <Figure maxWidth="328px" src={withIconFilledPNGSource} noMargin fluid />
          </GridItem>

        </Grid>
      </Section>

      <Section>
        <Heading2>Text Fields</Heading2>
        <Paragraph>
          Multiline text fields and text areas are taller than traditional input
          fields and wrap the overflow text onto a new line. If the text overflows
          beyond the set height of the text field, the text field should expand
          (shifting screen elements downwards), and texts wrap onto a new line.
        </Paragraph>

        <Paragraph>
          To adjust for wrapping text, default height of the text area is 100px
          (120px for symbols with labels, 140px for symbols with labels and helper
          text/error) and wraps the text four times. For more wraps, the height
          should be increased in increments of 20px to maintain consistency.
          A maximum number of wraps can be defined by showing a scrollbar when
          text overflows.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1} noMargin>
          <GridItem>
            <Caption position="top">Default</Caption>
            <Figure maxWidth="328px" src={textFieldsDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Required</Caption>
            <Figure maxWidth="328px" src={textFieldsRequiredPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Disabled</Caption>
            <Figure maxWidth="328px" src={textFieldsDisabledPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Focused</Caption>
            <Figure maxWidth="328px" src={textFieldsFocusedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Filled</Caption>
            <Figure maxWidth="328px" src={textFieldsFilledPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Helper Text</Caption>
            <Figure maxWidth="328px" src={textFieldsHelperTextPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Success</Caption>
            <Figure maxWidth="328px" src={textFieldsSuccessPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Error</Caption>
            <Figure maxWidth="328px" src={textFieldsErrorPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Assistive Elements Examples</Heading2>
        <Paragraph>
          Assistive elements provide additionals details about text entered into
          text fields. Helper text, errors, success messages, character counters
          are some examples of assistive elements.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1} noMargin>
          <GridItem>
            <Caption position="top">Success</Caption>
            <Figure maxWidth="328px" src={assistiveSuccessPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Error</Caption>
            <Figure maxWidth="328px" src={assistiveErrorPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Helper Text</Caption>
            <Figure maxWidth="328px" src={assistiveHelperTextPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Character Counter</Caption>
            <Figure maxWidth="328px" src={assistiveCounterPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Padding</Heading2>
        <Paragraph>
          Consistent padding between input fields is necessary to reduce the
          pushing down of elements when the text area increases or an error,
          success message appears.
        </Paragraph>

        <Figure maxWidth="403px" src={paddingPNGSource} noMargin fluid />
      </Section>
    </article>
  )
}
export default AndroidTextFieldsPage
