// Libs
import React from 'react'

// Components (from atomic to composite)
import Sample from '@asda/_sample'
import {
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Figure,
  FigureContainer,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets

import singleLineListCheckboxPNGSource from './images/single-line-list-checkbox.png'
import singleLineListRadioPNGSource from './images/single-line-list-radio.png'
import threeLineListCheckboxPNGSource from './images/three-line-list-checkbox.png'
import threeLineListRadioPNGSource from './images/three-line-list-radio.png'
import twoLineListCheckboxPNGSource from './images/two-line-list-checkbox.png'
import twoLineListRadioPNGSource from './images/two-line-list-radio.png'
import subtextCardCheckboxPNGSource from './images/subtext-card-checkbox.png'
import subtextCardRadioPNGSource from './images/subtext-card-radio.png'
import twoLineListLargeCardCheckboxPNGSource from './images/two-line-list-large-card-checkbox.png'
import twoLineListLargeCardRadioPNGSource from './images/two-line-list-large-card-radio.png'
import twoLineListNoIconTogglePNGSource from './images/two-line-list-no-icon-toggle.png'

import disabledMaxPNGSource from './images/disabled-max-value.png'
import disabledMiddlePNGSource from './images/disabled-middle-value.png'
import disabledMinPNGSource from './images/disabled-min-value.png'
import enabledMaxPNGSource from './images/enabled-max-value.png'
import enabledMiddlePNGSource from './images/enabled-middle-value.png'
import enabledMinPNGSource from './images/enabled-min-value.png'
import focusedMaxPNGSource from './images/focused-max-value.png'
import focusedMiddlePNGSource from './images/focused-middle-value.png'
import focusedMinPNGSource from './images/focused-min-value.png'

import './_style.scss'

const Grid = ({ children, className }) => (
  <div className={`android-selection-controls-page__grid ${className}`}>
    { children }
  </div>
)

const FigureContainerStackItem = ({ children }) => (
  <div className="android-selection-controls-page__stack-grid-item">
    { children }
  </div>
)

const AndroidListsPage = () => (
  <article className="android-selection-controls-page">

    <Heading1>Selection controls</Heading1>
    <Section>
    <Heading2>Input controls</Heading2>
      <Paragraph>
        Selection controls should be placed on the left side of  primary text if
        there is no need in supporting visuals. There is a several list items
        with selection controls created for use.
      </Paragraph>
      <Grid className="android-selection-controls-page__grid--multiple-gray">
        <FigureContainerStackItem>
          <Caption position="top">Single-line list + Radio Button</Caption>
          <Figure maxWidth="360px" src={singleLineListRadioPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Single-line list + CheckBox</Caption>
          <Figure maxWidth="360px" src={singleLineListCheckboxPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Two-line list + Radio button</Caption>
          <Figure maxWidth="360px" src={twoLineListRadioPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Two-line list + Checkbox</Caption>
          <Figure maxWidth="360px" src={twoLineListCheckboxPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Three-line list + Radio button</Caption>
          <Figure maxWidth="360px" src={threeLineListRadioPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Three-line list + Checkbox</Caption>
          <Figure maxWidth="360px" src={threeLineListCheckboxPNGSource} noMargin fluid />
        </FigureContainerStackItem>
      </Grid>

      <Heading3>Usage</Heading3>
      <Paragraph>
        Selection controls should be placed on the right side of  primary text if
        there is supporting visuals. There is a several list items with selection
        controls and supporting visuals created for use.
      </Paragraph>

      <Grid className="android-selection-controls-page__grid--multiple-gray">
        <FigureContainerStackItem>
          <Caption position="top">Two-line list + Large Card + Input Control</Caption>
          <Figure maxWidth="360px" src={twoLineListLargeCardRadioPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Two-line list + Large Card + Input Control</Caption>
          <Figure maxWidth="360px" src={twoLineListLargeCardCheckboxPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Subtext + Card + Input Control</Caption>
          <Figure maxWidth="360px" src={subtextCardRadioPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Subtext + Card + Input Control</Caption>
          <Figure maxWidth="360px" src={subtextCardCheckboxPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Two-line list + No Icon + Toggle</Caption>
          <Figure maxWidth="360px" src={twoLineListNoIconTogglePNGSource} noMargin fluid />
        </FigureContainerStackItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>Sliders</Heading2>
      <Paragraph>
        Sliders allow users to make selections from a range of values.
      </Paragraph>
      <Grid className="android-selection-controls-page__grid--3-columns">
        <div>
          <Caption position="top">Disabled Min Value</Caption>
          <Figure maxWidth="146px" src={disabledMinPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Disabled Middle Value</Caption>
          <Figure maxWidth="146px" src={disabledMiddlePNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Disabled Max Value</Caption>
          <Figure maxWidth="146px" src={disabledMaxPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Enabled Min Value</Caption>
          <Figure maxWidth="146px" src={enabledMinPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Enabled Middle Value</Caption>
          <Figure maxWidth="146px" src={enabledMiddlePNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Enabled Max Value</Caption>
          <Figure maxWidth="146px" src={enabledMaxPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Focused Min Value</Caption>
          <Figure maxWidth="146px" src={focusedMinPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Focused Middle Value</Caption>
          <Figure maxWidth="146px" src={focusedMiddlePNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Focused Middle Value</Caption>
          <Figure maxWidth="146px" src={focusedMaxPNGSource} noMargin fluid />
        </div>
      </Grid>
    </Section>

  </article>
)

export default AndroidListsPage
