// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Sample from '@asda/_sample'
import { Figure, Paragraph, Section, Heading1, Heading2, Heading3, Caption } from '@doc/sg-layout'

// Assets
import iPhone6SEPNGSource from './images/iphone-6-se.png'
import iPhoneXRPNGSource from './images/iphone-xr.png'
import iPhoneXSPNGSource from './images/iphone-xs.png'
import iPhoneXSMaxPNGSource from './images/iphone-xs-max.png'
import iPhone78PNGSource from './images/iphone-7-8.png'
import iPhone78PlusPNGSource from './images/iphone-7-8-plus.png'
import iPadPNGSource from './images/ipad.png'
import './_style.scss'

const Legend = ({ screenSize, margin, column, gutter }) => (
  <div className="ios-layout-page__legend">
    <Caption position="top">Screen Size - {screenSize}</Caption>
    <ul className="ios-layout-page__legend__list">
      <li className="ios-layout-page__legend__list-item">Margin {margin}px</li>
      <li className="ios-layout-page__legend__list-item">Column {column}px</li>
      <li className="ios-layout-page__legend__list-item">Gutter {gutter}px</li>
    </ul>
  </div>
)

const Subsection = ({ children, className, oneColumn }) => {
  const modifiers = [
    oneColumn && 'ios-layout-page--one-column',
  ]
  const classNames = joinClassNames('ios-layout-page__subsection', className, modifiers)

  return (
    <div className={classNames}>{children}</div>
  )
}

Subsection.defaultProps = {
  fixOneColumn: false,
}

const IOSLayoutPage = () => (
  <article className="ios-layout-page">

    <Heading1>Layout</Heading1>

    <Section>
      <Heading2>Devices</Heading2>
      <Paragraph>
        The smallest supported device in the Apple line up is the iPhone 6 SE.
        Always design for the smallest screen size first, then scale up to larger devices if needed.
      </Paragraph>
      <Paragraph noMargin>
        There are a range of devices in the iPhone lineup - these are summarised below:
      </Paragraph>
    </Section>
    <Section>
      <Heading3>iPhone 6 SE</Heading3>
      <Subsection>
        <Figure src={iPhone6SEPNGSource} maxWidth="372px" noMargin fluid />
        <Legend screenSize="320 x 568" margin="16" column="136" gutter="16" />
      </Subsection>
    </Section>
    <Section>
      <Heading3>iPhone 7/8</Heading3>
      <Subsection>
        <Figure src={iPhone78PNGSource} maxWidth="437px" noMargin fluid />
        <Legend screenSize="375 x 667" margin="16" column="136" gutter="17" />
      </Subsection>
    </Section>
    <Section>
      <Heading3>iPhone 7/8 Plus</Heading3>
      <Subsection>
        <Figure src={iPhone78PlusPNGSource} maxWidth="479px" noMargin fluid />
        <Legend screenSize="414 x 736" margin="16" column="183" gutter="16" />
      </Subsection>
    </Section>
    <Section>
      <Heading3>iPhone XR</Heading3>
      <Subsection>
        <Figure src={iPhoneXRPNGSource} maxWidth="492px" noMargin fluid />
        <Legend screenSize="414 x 896" margin="16" column="183" gutter="16" />
      </Subsection>
    </Section>
    <Section>
      <Heading3>iPhone XS</Heading3>
      <Subsection>
        <Figure src={iPhoneXSPNGSource} maxWidth="453px" noMargin fluid />
        <Legend screenSize="375 x 812" margin="16" column="163" gutter="17" />
      </Subsection>
    </Section>
    <Section>
      <Heading3>iPhone XS Max</Heading3>
      <Subsection>
        <Figure src={iPhoneXSMaxPNGSource} maxWidth="492px" noMargin fluid />
        <Legend screenSize="414 x 896" margin="16" column="183" gutter="16" />
      </Subsection>
    </Section>
    <Section>
      <Heading3>iPad (9.5” & iPad Mini) Locked to Landscape orientation</Heading3>
      <Subsection oneColumn>
        <Figure src={iPadPNGSource} maxWidth="1234px" noMargin fluid />
        <Legend screenSize="1024 x 568" margin="24" column="74" gutter="8" />
      </Subsection>
    </Section>
  </article>
)

export default IOSLayoutPage
