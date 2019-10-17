// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Paragraph, Heading2, Section, Heading1, FigureContainer, Caption } from '@sg/sg-layout'

// Assets
import barNavigationPNGSource from './images/bar-navigation.png'
import barAppStatusPNGSource from './images/bar-app-status.png'
import barStatusPNGSource from './images/bar-status.png'

import barSearchPNGSource from './images/bar-search.png'
import barSuggestionsTextPNGSource from './images/bar-suggestions-text.png'
import barSuggestionsPNGSource from './images/bar-suggestions.png'
import barTextPNGSource from './images/bar-text.png'
import keyboardEmojiPNGSource from './images/keyboard-emoji.png'
import keyboardMainPNGSource from './images/keyboard-main.png'
import keyboardNumbersPNGSource from './images/keyboard-numbers.png'
import keyboardSymbolsPNGSource from './images/keyboard-symbols.png'
import keyboardTabPNGSource from './images/keyboard-tab.png'
import keyboardUppercasePNGSource from './images/keyboard-uppercase.png'

import './_style.scss'

const Grid = ({ children }) => (
  <div className="android-native-ui__grid">{ children }</div>
)

const AndroidNativeUIPage = () => (
  <article className="android-native-ui">

    <Heading1>Native UI</Heading1>

    <Section>
      <Heading2>Status Bar</Heading2>
      <Paragraph>
        There is one type of android status bar which is in light color to make
        screen design lighter.
      </Paragraph>
      <FigureContainer>
        <div>
          <Caption position="top">Android status bar on top of the app bar</Caption>
          <Figure maxWidth="360px" src={barStatusPNGSource} noMargin fluid />
        </div>
      </FigureContainer>
      <FigureContainer noMargin>
        <Figure maxWidth="360px" src={barAppStatusPNGSource} noMargin fluid />
      </FigureContainer>
    </Section>

    <Section>
      <Heading2>Navigation Bar</Heading2>
      <FigureContainer noMargin>
        <Figure maxWidth="360px" src={barNavigationPNGSource} noMargin fluid />
      </FigureContainer>
    </Section>

    <Section>
      <Heading2>Keyboards</Heading2>

      <Grid>
        <div>
          <Caption position="top">Main</Caption>
          <Figure maxWidth="360px" src={keyboardMainPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Uppercase</Caption>
          <Figure maxWidth="360px" src={keyboardUppercasePNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Symbols</Caption>
          <Figure maxWidth="360px" src={keyboardSymbolsPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Numbers</Caption>
          <Figure maxWidth="360px" src={keyboardNumbersPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Tab</Caption>
          <Figure maxWidth="360px" src={keyboardTabPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Emoji</Caption>
          <Figure maxWidth="360px" src={keyboardEmojiPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Keyboard Search Bar</Caption>
          <Figure maxWidth="360px" src={barSearchPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Suggestions Bar</Caption>
          <Figure maxWidth="360px" src={barSuggestionsPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Suggestions Bar with text</Caption>
          <Figure maxWidth="360px" src={barSuggestionsTextPNGSource} noMargin fluid />
        </div>
        <div>
          <Caption position="top">Text Bar</Caption>
          <Figure maxWidth="360px" src={barTextPNGSource} noMargin fluid />
        </div>
      </Grid>

    </Section>
  </article>
)

export default AndroidNativeUIPage
