// Libs
import React, { Fragment } from 'react'

// Components (from atomic to composite)
import { LinkText } from '@asda/link'
import {
  Heading1,
  Heading2,
  Paragraph,
  Section
} from '@sg/sg-layout'

// Assets
import './_style.scss'

const TypesScale = ({ children }) => (
  <div className="android-typography-page__typescale">
    {children}
  </div>
)

const Specs = ({ children }) => (
  <div className="android-typography-page__specs">
    {children}
  </div>
)

const Attribute = ({ children }) => (
  <Fragment>
    <span className="android-typography-page__attribute">
      {children}
    </span><wbr /> {/* Break the specs in a gracefull way */}
  </Fragment>
)

const AndroidTypographyPage = () => (
  <article className="android-typography-page">
    <Heading1>Typography</Heading1>

    <Section>
      <Heading2>Font Sizes</Heading2>
      <Paragraph>
        Font scale for Android consists of 5 different sizes. The default size
        applied to the body is Medium (16px, 1em). Line height is always kept at
        auto and maximum 10-12 words per line in a paragraph should be the aim.
      </Paragraph>
      <TypesScale>
        <span className="android-typography-page--xl">The quick brown fox jumps over the lazy dog</span>
        <Specs>
          <Attribute>24px (1.5em) - Extra Large</Attribute>
          <Attribute>Letter Spacing 0.3px</Attribute>
          <Attribute>Line Height 28px</Attribute>
        </Specs>
      </TypesScale>

      <TypesScale>
        <span className="typography--l">The quick brown fox jumps over the lazy dog</span>
        <Specs>
          <Attribute>18px (1.125em) - Large</Attribute>
          <Attribute>Letter Spacing 0.2px</Attribute>
          <Attribute>Line Height 24px</Attribute>
        </Specs>
      </TypesScale>

      <TypesScale>
        <span className="typography--m">The quick brown fox jumps over the lazy dog</span>
        <Specs>
          <Attribute>16px (1em) - Medium</Attribute>
          <Attribute>Letter Spacing 0.2px</Attribute>
          <Attribute>Line Height 20px</Attribute>
        </Specs>
      </TypesScale>

      <TypesScale>
        <span className="typography--s">The quick brown fox jumps over the lazy dog</span>
        <Specs>
          <Attribute>14px (0.875em) - Small</Attribute>
          <Attribute>Letter Spacing 0.2px</Attribute>
          <Attribute>Line Height 16px</Attribute>
        </Specs>
      </TypesScale>

      <TypesScale>
        <span className="typography--xs">The quick brown fox jumps over the lazy dog</span>
        <Specs>
          <Attribute>12px (0.75em) - Extra Small</Attribute>
          <Attribute>Letter Spacing 0.1px</Attribute>
          <Attribute>Line Height 16px</Attribute>
        </Specs>
      </TypesScale>

      <Paragraph>
        Please visit the{' '}
        <LinkText href="/#/common/typography">
          typography page
        </LinkText>{' '}
        to learn more about typeface, font weight and alignment.
      </Paragraph>
    </Section>

  </article>
)

export default AndroidTypographyPage
