// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  Heading1,
  Heading2,
  Heading3,
  Figure,
  FigureContainer,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import iPhone6SEPNGSource from './images/iphone-6-se.png'
import iPhone11ProPNGSource from './images/iphone-11-pro.png'
import iPhone11ProMaxPNGSource from './images/iphone-11-pro-max.png'
import iPhone78PNGSource from './images/iphone-7-8.png'
import iPhone78PlusPNGSource from './images/iphone-7-8-plus.png'
import iPadPNGSource from './images/ipad.png'
import './_style.scss'

const Legend = ({
  screenSize, margin, column, gutter,
}) => (
  <div className="ios-layout-page__legend">
    <div className="ios-layout-page__legend__caption">
      Screen Size:<br /><strong>{screenSize}</strong>
    </div>
    <ul className="ios-layout-page__legend__list">
      <li className="ios-layout-page__legend__list-item">Margin {margin}px</li>
      <li className="ios-layout-page__legend__list-item">Column {column}px</li>
      <li className="ios-layout-page__legend__list-item">Gutter {gutter}px</li>
    </ul>
  </div>
)


const IOSLayoutPage = () => (
  <article className="ios-layout-page">

    <Heading1>Layout</Heading1>

    <Section>
      <Heading2>Devices</Heading2>
      <Paragraph>
        The smallest supported device in the Apple line up is the iPhone SE.<br />
        Always design for the smallest screen size first, then scale up to larger devices if needed.
      </Paragraph>
      <Paragraph>
        There are a range of devices in the iPhone lineup - these are summarised below:
      </Paragraph>
      <GridTable />
    </Section>
    <Section>
      <Heading3>iPhone SE</Heading3>
      <FigureContainer className="ios-layout-page__figure-container">
        <Figure src={iPhone6SEPNGSource} maxWidth="372px" noMargin fluid />
        <Legend screenSize="320 x 568" margin="16" column="136" gutter="16" />
      </FigureContainer>
    </Section>
    <Section>
      <Heading3>iPhone 8</Heading3>
      <FigureContainer className="ios-layout-page__figure-container">
        <Figure src={iPhone78PNGSource} maxWidth="437px" noMargin fluid />
        <Legend screenSize="375 x 667" margin="16" column="163" gutter="17" />
      </FigureContainer>
    </Section>
    <Section>
      <Heading3>iPhone 8 Plus</Heading3>
      <FigureContainer className="ios-layout-page__figure-container">
        <Figure src={iPhone78PlusPNGSource} maxWidth="479px" noMargin fluid />
        <Legend screenSize="414 x 736" margin="16" column="183" gutter="16" />
      </FigureContainer>
    </Section>
    <Section>
      <Heading3>iPhone 11 Pro</Heading3>
      <FigureContainer className="ios-layout-page__figure-container">
        <Figure src={iPhone11ProPNGSource} maxWidth="453px" noMargin fluid />
        <Legend screenSize="375 x 812" margin="16" column="163" gutter="17" />
      </FigureContainer>
    </Section>
    <Section>
      <Heading3>iPhone 11 Pro Max</Heading3>
      <FigureContainer className="ios-layout-page__figure-container">
        <Figure src={iPhone11ProMaxPNGSource} maxWidth="492px" noMargin fluid />
        <Legend screenSize="414 x 896" margin="16" column="183" gutter="16" />
      </FigureContainer>
    </Section>
    <Section>
      <Heading3>iPad (9.5{'"'} & iPad Mini) Locked to Landscape orientation</Heading3>
      <FigureContainer className="ios-layout-page__figure-container">
        <Figure src={iPadPNGSource} maxWidth="1234px" noMargin fluid />
        <Legend screenSize="1024 x 768" margin="24" column="74" gutter="8" />
      </FigureContainer>
    </Section>
  </article>
)
const GridTable = () => (
  <table className="ios-layout-page__table">
    <thead className="ios-layout-page__table__thead">
      <tr>
        <th>Device</th>
        <th>Width</th>
        <th>Height</th>
        <th>Margin</th>
        <th>Column</th>
        <th>Gutter</th>
      </tr>
    </thead>
    <tbody className="ios-layout-page__table__tbody">
      <tr><td>iPhone SE</td><td>320</td><td>568</td><td>16</td><td>136</td><td>16</td></tr>
      <tr><td>iPhone 8</td><td>375</td><td>667</td><td>16</td><td>163</td><td>17</td></tr>
      <tr><td>iPhone 11 Pro</td><td>375</td><td>812</td><td>16</td><td>163</td><td>17</td></tr>
      <tr><td>iPhone 8 Plus</td><td>414</td><td>736</td><td>16</td><td>183</td><td>16</td></tr>
      <tr><td>iPhone 11 Pro Max</td><td>414</td><td>896</td><td>16</td><td>183</td><td>16</td></tr>
      <tr><td>iPad Mini</td><td>1024</td><td>768</td><td>24</td><td>74</td><td>8</td></tr>
    </tbody>
  </table>
)

export default IOSLayoutPage
