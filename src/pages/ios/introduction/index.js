// Libs
import React from 'react'

// Components (from atomic to composite)
import { LinkText } from '@asda/link'
import {
  Heading1,
  Heading2,
  Figure,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import appleDesignResourcesPNGSource from './images/introduction-apple-design-resources.png'
import sketchLibraryPNGSource from './images/introduction-add-library.png'
import iosFontsPNGSource from './images/introduction-ios-fonts.png'
import interfaceGuidelinesPNGSource from './images/introduction-human-interface-guidelines.png'
import './_style.scss'

const IOSIntroductionPage = () => (
  <article className="ios-introduction-page">

    <Heading1>Introduction</Heading1>

    <Section>
      <Heading2>Designing for iOS</Heading2>
      <Paragraph>
        The first step in getting prepared for designing for iOS is to visit{' '}
        <LinkText target="_blank" href="https://developer.apple.com/design/resources/">
          Apple{'\''}s Design Resources page
        </LinkText>.
      </Paragraph>
      <Figure
        fluid
        maxWidth="810px"
        noMargin
        src={appleDesignResourcesPNGSource}
      />
    </Section>

    <Section>
      <Heading2>1 - Add the official Apple iOS Sketch Library</Heading2>
      <Paragraph />
      <Figure
        fluid
        maxWidth="810px"
        noMargin
        src={sketchLibraryPNGSource}
      />
    </Section>

    <Section>
      <Heading2>2 - Download the native font (SF Pro)</Heading2>
      <Paragraph>
        SF Pro is used on native views and can be found{' '}
        <LinkText target="_blank" href="https://developer.apple.com/fonts">
          here
        </LinkText>.
      </Paragraph>
      <Figure
        fluid
        maxWidth="810px"
        noMargin
        src={iosFontsPNGSource}
      />
    </Section>

    <Section>
      <Heading2>3 - Reference Apple Human Interface Guidelines (HIG)</Heading2>
      <Paragraph>
        The Apple Human Interface Guidelines are a framework in which iOS apps
        are designed and built.
        They can be found{' '}
        <LinkText
          target="_blank"
          href="https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/"
        >
          here
        </LinkText>.
      </Paragraph>
      <Figure
        fluid
        maxWidth="810px"
        noMargin
        src={interfaceGuidelinesPNGSource}
      />
    </Section>

  </article>
)

export default IOSIntroductionPage
