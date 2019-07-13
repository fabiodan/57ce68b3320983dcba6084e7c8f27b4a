// Libs
import React from 'react'

// Components (from atomic to composite)
import { Checkbox, Label, Radio, Switch } from '@asda/form'
import { Paragraph, Caption, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="input-controls-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="input-controls-page__grid-item">{children}</li>
)

const InputControlsPage = () => (
  <article className="input-controls-page">

    <Heading>Input Controls</Heading>

    <Section>
      <Subheading>Checkboxes</Subheading>
      <Paragraph>
        Checkboxes allow the user to select one or more items from a set.
        Checkboxes can be used to turn an option on or off.
      </Paragraph>

      <Grid>
        <GridItem>
          <Caption position="top">Default Active</Caption>
          <Checkbox id="checkbox--default-active" />
          <Label inline htmlFor="checkbox--default-active">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Hover Active</Caption>
          <Checkbox hover id="checkbox--hover-active" />
          <Label inline htmlFor="checkbox--hover-active">Default</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Selected</Caption>
          <Checkbox checked id="checkbox--selected" />
          <Label inline htmlFor="checkbox--selected">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Selected disabled</Caption>
          <Checkbox checked disabled id="checkbox--selected-disabled" />
          <Label inline disabled htmlFor="checkbox--selected-disabled">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Indeterminate</Caption>
          <Checkbox indeterminate id="checkbox--indeterminate" />
          <Label inline htmlFor="checkbox--indeterminate">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Disabled Indeterminate</Caption>
          <Checkbox indeterminate disabled id="checkbox--indeterminate-disabled" />
          <Label inline disabled htmlFor="checkbox--indeterminate-disabled">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Unselected disabled</Caption>
          <Checkbox disabled id="checkbox--unselected-disabled" />
          <Label inline disabled htmlFor="checkbox--unselected-disabled">Disabled</Label>
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Radio Buttons</Subheading>
      <Paragraph>
        Radio buttons allow the user to select one option from a set. Use radio
        buttons when the user needs to see all available options. If available
        options can be collapsed, consider using a dropdown menu because it
        uses less space.
      </Paragraph>

      <Grid>
        <GridItem>
          <Caption position="top">Default Active</Caption>
          <Radio name="example" id="radio--default-active" />
          <Label inline htmlFor="radio--default-active">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Hover Active</Caption>
          <Radio name="example" hover id="radio--hover-active" />
          <Label inline htmlFor="radio--hover-active">Default</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Selected</Caption>
          <Radio checked id="radio--selected" />
          <Label inline htmlFor="radio--selected">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Selected disabled</Caption>
          <Radio checked disabled id="radio--selected-disabled" />
          <Label inline disabled htmlFor="radio--selected-disabled">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Unselected disabled</Caption>
          <Radio disabled id="radio--unselected-disabled" />
          <Label inline disabled htmlFor="radio--unselected-disabled">Disabled</Label>
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Toggles</Subheading>
      <Paragraph>
        The toggle switch represents a physical switch that allows users to turn
        things on or off. They should be used to represent an action (e.g. start
        or stop, on or off)
      </Paragraph>

      <Grid>
        <GridItem>
          <Caption position="top">Turned Off</Caption>
          <Switch id="switch--turned-off" />
          <Label inline htmlFor="switch--turned-off">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Turned On</Caption>
          <Switch checked id="switch--turned-on" />
          <Label inline htmlFor="switch--turned-on">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Turned Off Disabled</Caption>
          <Switch id="switch--turned-off-disabled" disabled />
          <Label inline disabled htmlFor="switch--turned-off-disabled">Label</Label>
        </GridItem>
        <GridItem>
          <Caption position="top">Turned On Disabled</Caption>
          <Switch id="switch--turned-on-disabled" checked disabled />
          <Label inline disabled htmlFor="switch--turned-on-disabled">Label</Label>
        </GridItem>
      </Grid>
    </Section>

  </article>
)

export default InputControlsPage
