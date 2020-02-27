// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import Sample from '@asda/_sample'
import {
  Heading1,
  Heading2,
  Heading3,
  Figure,
  GridItem,
  Grid,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import introContentPNGSource from './images/introductionContentLibrary.png'
import introCommonPNGSource from './images/introductionCommonLibrary.png'
import introWebPNGSource from './images/introductionWebLibrary.png'
import introAndroidPNGSource from './images/introductionAndroidLibrary.png'
import introiOSPNGSource from './images/introductioniOSLibrary.png'
import './_style.scss'

const CommonIntroductionPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="common-introduction-page">

      <Heading1>ASDA Design Language</Heading1>

      <Section>
        <Paragraph>
          At Asda we work together across disciplines to create intuitive, usable experiences. It’s how we help Asda customers save money and live better.
        </Paragraph>
        <Paragraph noMargin>
          Asda Design Language is our comprehensive guide to designing for the Asda Groceries platform.
        </Paragraph>
      </Section>

      <Section>
        <Heading2>Libraries</Heading2>
        <Grid className="common-introduction-page__grid" columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <div className="common-introduction-page__card">
              <div className="common-introduction-page__card-image">
                <Figure fluid noMargin maxWidth="194px" src={introContentPNGSource} />
              </div>
              <div className="common-introduction-page__card-content">
                <Heading3>Content library</Heading3>
                <Paragraph className="common-introduction-page__card-paragraph">
                  Words are the basic component of human interaction. Use language to design meaningfully
                </Paragraph>
                <a href="#/content"><Icon className="introduction-page__card-icon" name="chevron-right" /></a>
              </div>
            </div>
          </GridItem>
          <GridItem>
            <div className="common-introduction-page__card">
              <div className="common-introduction-page__card-image">
                <Figure fluid noMargin maxWidth="246px" src={introCommonPNGSource} />
              </div>
              <div className="common-introduction-page__card-content">
                <Heading3>Common library</Heading3>
                <Paragraph className="common-introduction-page__card-paragraph">
                  Visual elements and components common to all Asda Groceries platforms
                </Paragraph>
                <a href="#/common"><Icon className="introduction-page__card-icon" name="chevron-right" /></a>
              </div>
            </div>
          </GridItem>
          <GridItem>
            <div className="common-introduction-page__card">
              <div className="common-introduction-page__card-image">
                <Figure fluid noMargin maxWidth="250px" src={introWebPNGSource} />
              </div>
              <div className="common-introduction-page__card-content">
                <Heading3>Web library</Heading3>
                <Paragraph className="common-introduction-page__card-paragraph">
                  Use this when designing for our web platform
                </Paragraph>
                <a href="#/web"><Icon className="introduction-page__card-icon" name="chevron-right" /></a>
              </div>
            </div>
          </GridItem>
          <GridItem>
            <div className="common-introduction-page__card">
              <div className="common-introduction-page__card-image">
                <Figure fluid noMargin maxWidth="218px" src={introAndroidPNGSource} />
              </div>
              <div className="common-introduction-page__card-content">
                <Heading3>Android library</Heading3>
                <Paragraph className="common-introduction-page__card-paragraph">
                  Use this when designing for our android applications
                </Paragraph>
                <a href="#/android"><Icon className="introduction-page__card-icon" name="chevron-right" /></a>
              </div>
            </div>
          </GridItem>
          <GridItem>
            <div className="common-introduction-page__card">
              <div className="common-introduction-page__card-image">
                <Figure fluid noMargin maxWidth="218px" src={introiOSPNGSource} />
              </div>
              <div className="common-introduction-page__card-content">
                <Heading3>iOS library</Heading3>
                <Paragraph className="common-introduction-page__card-paragraph">
                  Use this when designing for our iOS applications.
                </Paragraph>
                <a href="#/ios"><Icon className="introduction-page__card-icon" name="chevron-right" /></a>
              </div>
            </div>
          </GridItem>
        </Grid>
      </Section>
    </article>
  )
}

export default CommonIntroductionPage
