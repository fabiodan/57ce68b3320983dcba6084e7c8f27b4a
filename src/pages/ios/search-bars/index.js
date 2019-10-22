// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Caption, Paragraph, Heading2, Section, Heading1 } from '@sg/sg-layout'

// Assets
import unpopulatedPNGSource from './images/unpopulated.png'
import populatedPNGSource from './images/populated.png'
import unpopulatedCancelPNGSource from './images/unpopulated-cancel.png'
import populatedCancelPNGSource from './images/populated-cancel.png'
import searchBarPNGSource from './images/search-bar.png'
import searchTermPNGSource from './images/search-term.png'
import './_style.scss'

const IOSSearchBarsPage = () => (
  <article className="ios-search-bars-page">

    <Heading1>Search bars</Heading1>

    <Section>
      <Heading2>Search Bars</Heading2>
      <Paragraph>
        A search bar lets users enter a search term and submit a search.
      </Paragraph>
      <Paragraph>
        Search bars can be customised with additional interactions such as
        barcode scan or voice search. In some journeys, a filter option can be
        presented.
      </Paragraph>
      <div className="ios-search-bars-page__examples">
        <ul className="ios-search-bars-page__list">
          <li className="ios-search-bars-page__list-item">
            <Caption position="top">Full Width - Unpopulated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={unpopulatedPNGSource} />
          </li>
          <li className="ios-search-bars-page__list-item">
            <Caption position="top">Full Width - Populated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={populatedPNGSource} />
          </li>
          <li className="ios-search-bars-page__list-item">
            <Caption position="top">Narrow (with cancel) - Unpopulated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={unpopulatedCancelPNGSource} />
          </li>
          <li className="ios-search-bars-page__list-item">
            <Caption position="top">Narrow (with cancel) - Populated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={populatedCancelPNGSource} />
          </li>
          <li className="ios-search-bars-page__list-item">
            <Caption position="top">Narrow (with Filter Option) - Populated</Caption>
            <Figure noMargin fluid maxWidth="375px" src={searchTermPNGSource} />
          </li>
        </ul>
        <Figure className="ios-search-bars-page__figure" fluid maxWidth="356px" src={searchBarPNGSource} />
      </div>
    </Section>

  </article>
)

export default IOSSearchBarsPage
