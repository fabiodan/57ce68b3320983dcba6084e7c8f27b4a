// Libs
import React from 'react'

// Components (from atomic to composite)
import CreditCardIcon from '@asda/credit-card-icon'
import Icon from '@asda/icon'
import { TextField, Label } from '@asda/form'
import { Figure, Caption, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import gridPNGSource from '../../assets/images/text-fields-page-grid.png'
import './_style.scss'

const Component = ({ children }) => (
  <div className="text-fields-page__component">{ children }</div>
)

const Grid = ({ children }) => (
  <ul className="text-fields-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="text-fields-page__grid-item">{children}</li>
)

const TextFieldsPage = () => (
  <article className="text-fields-page">

    <Heading>Text Fields</Heading>

    <Section>
      <Subheading>Input Fields</Subheading>
      <Paragraph>
        Input fields let users enter and edit text. Each input field is
        generally used for single entry and should aim to be clear and
        efficient.
      </Paragraph>

      <Grid>
        <GridItem>
          <Caption position="top">Default</Caption>
          <Label>Label</Label>
          <TextField placeholder="Default" />
        </GridItem>
        <GridItem>
          <Caption position="top">Required</Caption>
          <Label required>Label</Label>
          <TextField placeholder="Required" required />
        </GridItem>
        <GridItem>
          <Caption position="top">Hover</Caption>
          <Label>Label</Label>
          <TextField placeholder="Hover" hover />
        </GridItem>
        <GridItem>
          <Caption position="top">Focus</Caption>
          <Label>Label</Label>
          <TextField placeholder="Focus" focus />
        </GridItem>
        <GridItem>
          <Caption position="top">Filled</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" value="Filled" />
        </GridItem>
        <GridItem>
          <Caption position="top">Helper Text</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" helperText="Helper text" />
        </GridItem>
        <GridItem>
          <Caption position="top">Success</Caption>
          <Label>Label</Label>
          <TextField
            placeholder="Default"
            value="Input Text"
            pattern="Input Text"
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
          />
        </GridItem>
        <GridItem>
          <Caption position="top">Error</Caption>
          <Label>Label</Label>
          <TextField
            placeholder="Default"
            value="Input Text"
            pattern="Input Text Error"
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
          />
        </GridItem>
      </Grid>

    </Section>

    <Section>
      <Subheading>Input Fields with Icons</Subheading>
      <Paragraph>
        Input fields with leading icons provide users with more visual
        information about the input required.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">Default + Icon</Caption>
          <Label>Label</Label>
          <TextField placeholder="Default" extraPaddingLeft="xxx-large">
            <CreditCardIcon className="text-fields-page__credit-card-icon" name="blank" />
          </TextField>
        </GridItem>
        <GridItem>
          <Caption position="top">Required + Icon</Caption>
          <Label required>Label</Label>
          <TextField placeholder="Required" required extraPaddingLeft="medium">
            <CreditCardIcon className="text-fields-page__credit-card-icon" name="blank" />
          </TextField>
        </GridItem>
        <GridItem>
          <Caption position="top">Hover + Icon</Caption>
          <Label>Label</Label>
          <TextField placeholder="Hover" hover extraPaddingLeft="medium">
            <CreditCardIcon className="text-fields-page__credit-card-icon" name="blank" />
          </TextField>
        </GridItem>
        <GridItem>
          <Caption position="top">Focus + Icon</Caption>
          <Label>Label</Label>
          <TextField placeholder="Focus" value="4111 1111 1111 1111" focus extraPaddingLeft="medium">
            <CreditCardIcon className="text-fields-page__credit-card-icon" name="amex" />
          </TextField>
        </GridItem>
        <GridItem>
          <Caption position="top">Filled + Icon</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" value="4111 1111 1111 1111" extraPaddingLeft="medium">
            <CreditCardIcon className="text-fields-page__credit-card-icon" name="amex" />
          </TextField>
        </GridItem>
        <GridItem>
          <Caption position="top">Helper Text + Icon</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" helperText="Helper text" extraPaddingLeft="medium">
            <CreditCardIcon className="text-fields-page__credit-card-icon" name="blank" />
          </TextField>


        </GridItem>
        <GridItem>
          <Caption position="top">Success + Icon</Caption>
          <Label>Label</Label>
          <TextField
            placeholder="Default"
            value="4111 1111 1111 1111"
            pattern="4111 1111 1111 1111"
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
            extraPaddingLeft="medium"
          >
            <CreditCardIcon className="text-fields-page__credit-card-icon" name="amex" />
          </TextField>
        </GridItem>
        <GridItem>
          <Caption position="top">Error + Icon</Caption>
          <Label>Label</Label>
          <TextField
            placeholder="Default"
            value="4111 1111 1111 1110"
            pattern="4111 1111 1111 1111"
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
            extraPaddingLeft="medium"
          >
            <CreditCardIcon className="text-fields-page__credit-card-icon" name="amex" />
          </TextField>

        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Input Fields without Labels</Subheading>
      <Paragraph>
        Input fields with leading icons provide users with more visual
        information about the input required.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">No Label Default</Caption>
          <TextField placeholder="Default" />
        </GridItem>
        <GridItem>
          <Caption position="top">No Label + Required</Caption>
          <TextField placeholder="Required" required />
        </GridItem>
        <GridItem>
          <Caption position="top">No Label + Hover</Caption>
          <TextField placeholder="Hover" hover />
        </GridItem>
        <GridItem>
          <Caption position="top">No Label + Focus</Caption>
          <TextField placeholder="Focus" focus />
        </GridItem>
        <GridItem>
          <Caption position="top">No Label + Filled</Caption>
          <TextField placeholder="Placeholder" value="Filled" />
        </GridItem>
        <GridItem>
          <Caption position="top">No Label + Helper Text</Caption>
          <TextField placeholder="Placeholder" helperText="Helper text" />
        </GridItem>
        <GridItem>
          <Caption position="top">No Label + Success</Caption>
          <TextField
            placeholder="Default"
            value="Input Text"
            pattern="Input Text"
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
          />
        </GridItem>
        <GridItem>
          <Caption position="top">No Label + Error</Caption>
          <TextField
            placeholder="Default"
            value="Input Text"
            pattern="Input Text Error"
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
          />
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Text Fields</Subheading>
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
        should be increased in increments of 20px to maintain consistency. A
        maximum number of wraps can be defined by showing a scrollbar when text
        overflows.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">Default</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" rows={4} />
        </GridItem>
        <GridItem>
          <Caption position="top">Required</Caption>
          <Label>Label</Label>
          <TextField placeholder="Required" required rows={4} />
        </GridItem>
        <GridItem>
          <Caption position="top">Hover</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" hover rows={4} />
        </GridItem>
        <GridItem>
          <Caption position="top">Focus</Caption>
          <Label>Label</Label>
          <TextField value="Starting to input text" placeholder="Focus" focus rows={4} />
        </GridItem>
        <GridItem>
          <Caption position="top">Filled</Caption>
          <Label>Label</Label>
          <TextField
            placeholder="Placeholder"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            rows={4}
          />
        </GridItem>
        <GridItem>
          <Caption position="top">Helper Text</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" helperText="Helper text" rows={4} />
        </GridItem>
        <GridItem>
          <Caption position="top">Success</Caption>
          <Label>Label</Label>
          <TextField
            placeholder="Default"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
            rows={4}
          />
        </GridItem>
        <GridItem>
          <Caption position="top">Error</Caption>
          <Label required>Label</Label>
          <TextField
            placeholder="Placeholder"
            value=""
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
            error
            rows={4}
            required
          />
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Optional Text Field</Subheading>
      <Paragraph>
        In situations where a form has more required fields than optional, use
        the optional text field for the outlier input requirement and default
        input fields for the required one.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">Optional Input Field</Caption>
          <Label optional>Label</Label>
          <TextField placeholder="Placeholder" />
        </GridItem>
        <GridItem>
          <Caption position="top">Optional Text Field</Caption>
          <Label optional>Label</Label>
          <TextField placeholder="Placeholder" rows={4} />
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Assistive Elements Examples</Subheading>
      <Paragraph>
        Assistive elements provide additionals details about text entered into
        text fields. Helper text, errors, success messages, character counters
        are some examples of assistive elements.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">Success</Caption>
          <Label>Label</Label>
          <TextField
            placeholder="Default"
            value="Right Input"
            pattern="Right Input"
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
          />
        </GridItem>
        <GridItem>
          <Caption position="top">Error</Caption>
          <Label>Label</Label>
          <TextField
            placeholder="Error"
            value="Wrong Input"
            pattern="Right Input"
            helperText="Helper text"
            successMessage="Success message"
            errorMessage="Error message"
            validate
          />
        </GridItem>
        <GridItem>
          <Caption position="top">Helper Text</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" helperText="Helper text" />
        </GridItem>
        <GridItem>
          <Caption position="top">Character Counter</Caption>
          <Label>Label</Label>
          <TextField placeholder="Placeholder" maxLength={20} charCounter />
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Text Fields Examples</Subheading>
      <Paragraph>
        When text fields have both helper text and error/success state, swap
        the helper text to error or success message.
        <Grid>
          <GridItem>
            <Label>Username</Label>
            <TextField
              placeholder="Error"
              value="Amelie Poulain"
              helperText="Helper text"
              errorMessage="Error message"
              helperText="At least 8 characters"
            />
          </GridItem>
          <GridItem>
            <Label>Username</Label>
            <TextField
              placeholder="Error"
              value="Amelie"
              pattern="Amelie P(.*)"
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="Error: At least 8 characters"
              helperText="At least 8 characters"
              validate
            />
          </GridItem>
        </Grid>
      </Paragraph>

      <Paragraph noMargin>
        When text input is longer than the given text area, the height of the
        container should increase by 20px until it reaches the maximum number
        of wraps.

        <Grid>
          <GridItem>
            <Label>Label</Label>
            <TextField
              placeholder="Placeholder"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost"
              rows={4}
              maxRows={null}
            />
          </GridItem>
          <GridItem>
            <Label>Label</Label>
            <TextField
              placeholder="Placeholder"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              rows={4}
              maxRows={null}
            />
          </GridItem>
        </Grid>
      </Paragraph>
      <Paragraph>
        Consistent padding between input fields is necessary to reduce the
        pushing down of elements when the text area increases or an error,
        success message appears.
      </Paragraph>
      <Figure
        fluid
        maxWidth="810px"
        src={gridPNGSource}
        noMargin
      />
    </Section>

    <Section>
      <Subheading>Search Field</Subheading>
      <Paragraph>
        Search is the only text field containing an icon with a background.
        The principle is to enhance the visibility of the search field. Its
        usage patterns are similar to other text fields.

        <Grid>
          <GridItem>
            <Caption position="top">Default</Caption>
            <TextField type="search" placeholder="Default" />
          </GridItem>
          <GridItem>
            <Caption position="top">Required</Caption>
            <TextField type="search" placeholder="Required" required />
          </GridItem>
          <GridItem>
            <Caption position="top">Hover</Caption>
            <TextField type="search" placeholder="Hover" hover />
          </GridItem>
          <GridItem>
            <Caption position="top">Focus</Caption>
            <TextField type="search" placeholder="Focus" focus />
          </GridItem>
        </Grid>
      </Paragraph>
    </Section>

  </article>
)

export default TextFieldsPage
