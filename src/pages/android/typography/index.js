// Libs
import React, { Fragment } from 'react'

// Components (from atomic to composite)
import { Heading1, Heading2, Paragraph, Section } from '@sg/sg-layout'

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

const FontWeightList = () => (
  <ul className="android-typography-page__weight-list">
    <li className="android-typography-page__weight-item">
      <div className="android-typography-page__weight-example">Aa</div>
      <div className="android-typography-page__weight-definition">Regular</div>
    </li>
    <li className="android-typography-page__weight-item">
      <div className="android-typography-page__weight-example">Aa</div>
      <div className="android-typography-page__weight-definition">Semi Bold</div>
    </li>
    <li className="android-typography-page__weight-item">
      <div className="android-typography-page__weight-example">Aa</div>
      <div className="android-typography-page__weight-definition">Bold</div>
    </li>
  </ul>
)

const AndroidTypographyPage = () => (
  <article className="android-typography-page">
    <Heading1>Typography</Heading1>

    <Section>
      <Heading2>Typeface</Heading2>
      <Paragraph>
        Asda’s primary typeface is Source Sans Pro. It is Adobe’s first open
        source typeface family designed by Paul D. Hunt. Its versatile, friendly,
        fun and simple enough to let the content speak for itself.
      </Paragraph>

      <Paragraph className="android-typography-page__characters" noMargin>
        {'ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫὰάὲέὴήὶίὸόὺύὼώΏĂÂÊÔƠƯăâêôơư1234567890‘?’“!"(%)[#]{@}/&\\<-+÷×=>®©$€£¥¢:;,.*'}
      </Paragraph>

      {/* <Paragraph> */}
      {/* <a href="https://github.com/adobe-fonts/source-sans-pro/archive/release.zip">Download</a> */}
      {/* </Paragraph> */}
    </Section>

    <Section>
      <Heading2>Font Sizes</Heading2>
      <Paragraph>
        Font scale for Android consists of 5 different sizes. The default size
        applied to the body is Medium (16px, 1em). Line height is always kept at
        auto and maximum 10-12 words per line in a paragraph should be the aim.
      </Paragraph>
      <TypesScale>
        <span className="android-typography--xl">The quick brown fox jumps over the lazy dog</span>
        <Specs>
          <Attribute>22px (1.375em) - Extra Large</Attribute>
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
    </Section>

    <Section>
      <Heading2>Font Weight</Heading2>
      <Paragraph>
        There are three font weights available for you to use - Bold, Semi Bold,
        Regular.
      </Paragraph>

      <FontWeightList />
    </Section>
  </article>
)

export default AndroidTypographyPage
