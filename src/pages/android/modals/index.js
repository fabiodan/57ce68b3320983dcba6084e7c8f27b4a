// Libs
import React from 'react'

// Components (from atomic to composite)
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
import bottomSheetWithTwoActionsPNGSource from './images/bottom-sheet-with-two-actions.png'
import bottomSheetWithActionPNGSource from './images/bottom-sheetwith-action.png'
import examplePNGSource from './images/example.png'
import scrollableBottomSheetPNGSource from './images/scrollable-bottom-sheet.png'
import textDialogLongActionPNGSource from './images/text-dialog-long-action.png'
import textDialogOneButtonExamplePNGSource from './images/text-dialog-one-button-example.png'
import textDialogOneButtonPNGSource from './images/text-dialog-one-button.png'
import textDialogShortActionPNGSource from './images/text-dialog-short-action.png'
import './_style.scss'

const Grid = ({ children, className }) => (
  <div className={`android-modals__grid ${className}`}>{ children }</div>
)

const AndroidModalsPage = () => (
  <article className="android-modals-page">

    <Heading1>Modals</Heading1>

    <Section>
      <Heading2>Definition</Heading2>
      <Paragraph noMargin>
        A modal window is an element that sits on top. It creates a mode that
        disables the main window but keeps it visible with the modal window as a
        child window in front of it. Users must interact with the modal window
        before they can return to the parent application.
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Dialogue</Heading2>
      <Paragraph>
        A dialog is a type of modal window that provides critical information or
        asks for a decision before user can continue with the journey.
      </Paragraph>
      <Paragraph>
        Modals are purposefully interruptive and should be used sparingly.
      </Paragraph>
      <Heading3>Simple dialog</Heading3>
      <Paragraph>
        Simple dialogs display a list of items that take immediate effect when
        selected.
      </Paragraph>

      <Grid>
        <div>
          <Caption position="top">Text Dialog + One Button</Caption>
          <Figure className="android-modals-page--negative-margin" maxWidth="300px" src={textDialogOneButtonPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Text Dialog + One Button Example</Caption>
          <Figure className="android-modals-page--negative-margin" maxWidth="300px" src={textDialogOneButtonExamplePNGSource} noMargin fluid />
        </div>
      </Grid>

      <Heading3>Confirmation dialog</Heading3>
      <Paragraph>
        Confirmation dialogs give users the ability to provide final confirmation
        of a choice before committing to it, so they have a chance to change
        their minds if necessary.  Confirmation dialogs provide confirmation and
        cancel buttons.
      </Paragraph>

      <Grid>
        <div>
          <Caption position="top">Text Dialog + Short Action</Caption>
          <Figure className="android-modals-page--negative-margin" maxWidth="300px" src={textDialogShortActionPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Text Dialog + Long Action</Caption>
          <Figure className="android-modals-page--negative-margin" maxWidth="300px" src={textDialogLongActionPNGSource} noMargin fluid />
        </div>
      </Grid>

      <Heading3>Bottom Sheet</Heading3>
      <Paragraph>
        Use bottom sheet  when user need to manipulate with large ammount of data.
        Bottom sheets are surfaces containing supplementary content that are
        anchored to the bottom of the screen.
      </Paragraph>

      <Grid className="android-modals-page__grid--multiple-gray">
        <div className="android-modals-page__grid--center">
          <Caption position="top">Bottom sheet with Action</Caption>
          <Figure maxWidth="360px" src={bottomSheetWithActionPNGSource} noMargin fluid />
        </div>
        <div className="android-modals-page__grid--center">
          <Caption position="top">Bottom Sheet With Two Actions</Caption>
          <Figure maxWidth="360px" src={bottomSheetWithTwoActionsPNGSource} noMargin fluid />
        </div>
        <div className="android-modals-page__grid--center">
          <Caption position="top">Scrollable Bottom Sheet</Caption>
          <Figure maxWidth="360px" src={scrollableBottomSheetPNGSource} noMargin fluid />
        </div>
      </Grid>

      <FigureContainer className="android-modals-page__grid__figure-container">
        <div>
          <Caption position="top">Example</Caption>
          <Figure maxWidth="360px" src={examplePNGSource} noMargin fluid />
        </div>
      </FigureContainer>

    </Section>

  </article>
)

export default AndroidModalsPage
