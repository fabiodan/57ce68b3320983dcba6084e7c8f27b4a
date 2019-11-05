// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, FigureContainer, Caption, Paragraph, Heading2, Section, Heading1 } from '@sg/sg-layout'

// Assets
import controlsexamplePNGSource from './images/controls-example.png'
import examplecheckPNGSource from './images/controls-example-check.png'
import selectedradioPNGSource from './images/controls-selected-radio.png'
import unselectedradioPNGSource from './images/controls-unselected-radio.png'
import radioexamplePNGSource from './images/controls-radio-example.png'
import selectedcheckboxPNGSource from './images/controls-selected-checkbox.png'
import unselectedcheckboxPNGSource from './images/controls-unselected-checkbox.png'
import checkboxexamplePNGSource from './images/controls-checkbox-example.png'
import selectrightPNGSource from './images/controls-select-right.png'
import selectleftPNGSource from './images/controls-select-left.png'
import selectexamplePNGSource from './images/controls-select-example.png'
import toggleonPNGSource from './images/controls-toggle-on.png'
import toggleoffPNGSource from './images/controls-toggle-off.png'
import toggleexamplePNGSource from './images/controls-toggles-example.png'
import togglerealexamplePNGSource from './images/controls-toggles-real-example.png'
import stepperPNGSource from './images/controls-stepper.png'
import stepperexamplePNGSource from './images/controls-stepper-example.png'
import stepperrealexamplePNGSource from './images/controls-stepper-real-example.png'
import './_style.scss'

const Grid = ({ children }) => (
  <div className="ios-controls-page__grid">{ children }</div>
)

const GridWhite = ({ children }) => (
  <div className="ios-controls-page__grid-white-mode">{ children }</div>
)

const IOSControlsPage = () => (
  <article className="ios-controls-page">

    <Heading1>Controls</Heading1>

    <Section>
      <Heading2>Input Controls</Heading2>
      <Grid>
        <div>
          <Figure noMargin fluid maxWidth="325px" src={controlsexamplePNGSource} />
        </div>
        <div>
          <Figure noMargin fluid maxWidth="325px" src={examplecheckPNGSource} />
        </div>
      </Grid>
    </Section>

    <Section>
      <Heading2>Radio Buttons</Heading2>
      <Paragraph>
        Radio buttons let users select a single item from a list at once.
      </Paragraph>
      <GridWhite>
        <div>
          <Figure noMargin fluid maxWidth="375px" src={unselectedradioPNGSource} />
        </div>
        <div>
          <Figure noMargin fluid maxWidth="375px" src={selectedradioPNGSource} />
        </div>
      </GridWhite>
      <FigureContainer>
        <Figure noMargin fluid maxWidth="183px" src={radioexamplePNGSource} />
      </FigureContainer>
    </Section>

    <Section>
      <Heading2>Checkboxes</Heading2>
      <Paragraph>
        Checkboxes let users select multiple items from a list.
      </Paragraph>
      <GridWhite>
        <div>
          <Figure noMargin fluid maxWidth="375px" src={unselectedcheckboxPNGSource} />
        </div>
        <div>
          <Figure noMargin fluid maxWidth="375px" src={selectedcheckboxPNGSource} />
        </div>
      </GridWhite>
      <FigureContainer>
        <Figure noMargin fluid maxWidth="183px" src={checkboxexamplePNGSource} />
      </FigureContainer>
    </Section>

    <Section>
      <Heading2>Quantity Select</Heading2>
      <Paragraph>
        Quantity select lets the user add more than one of the same item.
      </Paragraph>
      <GridWhite>
        <div>
          <Caption position="top">Quantity Select - with right arrow</Caption>
          <div className="ios-controls-page--minus-margin">
            <Figure noMargin fluid maxWidth="222px" src={selectrightPNGSource} />
          </div>
        </div>
        <div>
          <Caption position="top">Quantity Select - with left arrow</Caption>
          <div className="ios-controls-page--minus-margin">
            <Figure noMargin fluid maxWidth="221px" src={selectleftPNGSource} />
          </div>
        </div>
      </GridWhite>
      <FigureContainer>
        <Figure noMargin fluid maxWidth="183px" src={selectexamplePNGSource} />
      </FigureContainer>
    </Section>

    <Section>
      <Heading2>Toggles</Heading2>
      <Paragraph>
        Toggles let the user turn something on or off.
      </Paragraph>
      <GridWhite>
        <div>
          <Caption position="top">Toggle Off</Caption>
          <Figure noMargin fluid maxWidth="84px" src={toggleoffPNGSource} />
        </div>
        <div>
          <Caption position="top">Toggle On</Caption>
          <Figure noMargin fluid maxWidth="84px" src={toggleonPNGSource} />
        </div>
      </GridWhite>
      <FigureContainer>
        <Figure noMargin fluid maxWidth="183px" src={toggleexamplePNGSource} />
      </FigureContainer><FigureContainer>
        <Figure noMargin fluid maxWidth="341px" src={togglerealexamplePNGSource} />
      </FigureContainer>
    </Section>

    <Section>
      <Heading2>Steppers</Heading2>
      <Paragraph>
        Steppers allow the user to increase or decrease an amount.
      </Paragraph>
      <GridWhite>
        <div>
          <Caption position="top">Stepper</Caption>
          <Figure noMargin fluid maxWidth="84px" src={stepperPNGSource} />
        </div>
      </GridWhite>
      <FigureContainer>
        <Figure noMargin fluid maxWidth="183px" src={stepperexamplePNGSource} />
      </FigureContainer><FigureContainer>
        <Figure noMargin fluid maxWidth="341px" src={stepperrealexamplePNGSource} />
      </FigureContainer>
    </Section>

  </article>
)

export default IOSControlsPage
