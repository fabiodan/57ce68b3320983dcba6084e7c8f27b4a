// Libs
import React from 'react'

// Components (from atomic to composite)
import { LinkText } from '@asda/link'
import { Figure, Paragraph, Subheading, Section, Heading } from '@doc/sg-layout'

// Assets
import appleDesignResourcesPNGSource from './images/apple-design-resources.png'
import sketchLibraryPNGSource from './images/sketch-library.png'
import iosFontsPNGSource from './images/ios-fonts.png'
import './_style.scss'

const Component = ({ children }) => (
  <div className="ios-introduction-page__component">{ children }</div>
)

const IOSIntroductionPage = () => (
  <article className="ios-introduction-page">

    <Heading>Introduction</Heading>

    <Section>
      <Subheading>Designing for iOS</Subheading>
      <Paragraph noMargin>
        The first step in getting prepared for designing for iOS is to visit Apple's design{' '}
        <LinkText target="_blank" href="https://developer.apple.com/design/resources/">
          resources page
        </LinkText>.
      </Paragraph>
    </Section>

    <Section>
      <Subheading>1 - Add the official Apple iOS Sketch Library</Subheading>
      <Paragraph>

      </Paragraph>
      <Figure
        fluid
        maxWidth="810px"
        src={appleDesignResourcesPNGSource}
      />
    </Section>

    <Section>
      <Subheading>2 - Download the native font (SF Pro)</Subheading>
      <Paragraph>
        SF Pro is used on native views and can be found{' '}
        <LinkText target="_blank" href="https://developer.apple.com/fonts">
          here
        </LinkText>.
      </Paragraph>
      <Figure
        fluid
        maxWidth="785px"
        src={sketchLibraryPNGSource}
      />
    </Section>

    <Section>
      <Subheading>3 - Reference Apple Human Interface Guidelines (HIG)</Subheading>
      <Paragraph>
        The Apple Human Interface Guidelines are a framework in which iOS apps are designed and built.
        They can be found{' '}
        <LinkText target="_blank" href="https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/">
          here
        </LinkText>.
      </Paragraph>
      <Figure
        fluid
        maxWidth="778px"
        src={iosFontsPNGSource}
      />
    </Section>

  </article>
)

export default IOSIntroductionPage
