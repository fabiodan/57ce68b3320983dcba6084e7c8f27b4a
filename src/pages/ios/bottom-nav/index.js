// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  Heading1,
  Heading2,
  Figure,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import exampleIOSPNGSource from './images/bottom-nav-example.png'
import componentPNGSource from './images/bottom-nav-component.png'
import './_style.scss'

const IOSStatusBarsPage = () => (
  <article className="ios-bottom-nav-page">
    <Heading1>Bottom nav (tab bar)</Heading1>
    <Section>
      <Heading2>Bottom Nav</Heading2>
      <Paragraph>
        The bottom nav enables quick switching between parent level sections of
        the app.
      </Paragraph>
      <Paragraph>
        When a different section is selected, the current section is held in
        situ, a little bit like having different tabs in a web browser. When you
        return to another section, you should be able to pick up where you left off.
      </Paragraph>
      <div className="ios-bottom-nav-page__examples">
        <ul className="ios-bottom-nav-page__list">
          <li className="ios-bottom-nav-page__list-item">
            <Figure noMargin fluid maxWidth="407px" src={componentPNGSource} />
          </li>
        </ul>
        <Figure
          className="ios-bottom-nav-page__figure"
          fluid
          maxWidth="361px"
          src={exampleIOSPNGSource}
        />
      </div>
    </Section>
  </article>
)

export default IOSStatusBarsPage
