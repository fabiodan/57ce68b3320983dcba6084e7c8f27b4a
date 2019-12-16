// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import { LinkText } from '@asda/link'
import {
  Heading1,
  Heading2,
  Caption,
  Figure,
  GridItem,
  Grid,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import metrics32x32PNGSource from './images/metrics-32x32.png'
import iconLayoutPNGSource from './images/icon-layout.png'
import strokeRadiiAddPNGSource from './images/stroke-radii-add.png'
import strokeRadiiHeadphonePNGSource from './images/stroke-radii-headphone.png'
import keylinePNGSource from './images/keyline.png'
import squarePNGSource from './images/square.png'
import circlePNGSource from './images/circle.png'
import verticalRectanglePNGSource from './images/vertical-rectangle.png'
import horizontalRectanglePNGSource from './images/horizontal-rectangle.png'
import iconSet from '@asda/icon/svg-sources.js'
import './_style.scss'

const DownloadBar = ({ iconName }) => {
  const filePathSVG = iconSet[iconName].svg
  const filePathPDF = iconSet[iconName].pdf

  return (
    <div className="icons-page__download-bar">
      <LinkText href={filePathSVG} align="left" className="icons-page__download-link" download={`asda-${iconName}.svg`}>
        SVG
      </LinkText>
      <LinkText href={filePathPDF} align="left" className="icons-page__download-link" download={`asda-${iconName}.pdf`}>
        PDF
      </LinkText>
    </div>
  )
}

const GridIcon = ({ children, name }) => {
  return (
    <GridItem className="icons-page__grid-item" noMargin>
      <DownloadBar iconName={name} />
      <Icon name={name} />
      { children }
    </GridItem>
  )
}

const IconsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="icons-page">

      <Heading1>Icons</Heading1>
      <Section>
        <Heading2>Basic Icons</Heading2>
        <Grid columnCount={minWidth1024 ? 3 : 2} noMargin>
          <GridIcon name="browse"><Caption>Browse</Caption></GridIcon>
          <GridIcon name="check"><Caption>Check</Caption></GridIcon>
          <GridIcon name="chevron-down"><Caption>Chevron Down</Caption></GridIcon>
          <GridIcon name="chevron-left"><Caption>Chevron Left</Caption></GridIcon>
          <GridIcon name="chevron-up"><Caption>Chevron Up</Caption></GridIcon>
          <GridIcon name="chevron-right"><Caption>Chevron Right</Caption></GridIcon>
          <GridIcon name="swap"><Caption>Swap</Caption></GridIcon>
          <GridIcon name="close"><Caption>Close</Caption></GridIcon>
          <GridIcon name="change"><Caption>Change</Caption></GridIcon>
          <GridIcon name="filter"><Caption>Filter</Caption></GridIcon>
          <GridIcon name="menu"><Caption>Menu</Caption></GridIcon>
          <GridIcon name="minus"><Caption>Minus</Caption></GridIcon>
          <GridIcon name="more-actions"><Caption>More Actions</Caption></GridIcon>
          <GridIcon name="plus"><Caption>Plus</Caption></GridIcon>
          <GridIcon name="zoom"><Caption>Zoom</Caption></GridIcon>
          <GridIcon name="search"><Caption>Search</Caption></GridIcon>
          <GridIcon name="sort"><Caption>Sort</Caption></GridIcon>
          <GridIcon name="caret-down"><Caption>Caret Down</Caption></GridIcon>
          <GridIcon name="caret-left"><Caption>Caret Left</Caption></GridIcon>
          <GridIcon name="caret-up"><Caption>Caret Up</Caption></GridIcon>
          <GridIcon name="caret-right"><Caption>Caret Right</Caption></GridIcon>
          <GridIcon name="pause"><Caption>Pause</Caption></GridIcon>
          <GridIcon name="reload"><Caption>Reload</Caption></GridIcon>
        </Grid>
      </Section>

      <Section>
        <Heading2>Circular</Heading2>
        <Grid columnCount={minWidth1024 ? 3 : 2} noMargin>
          <GridIcon name="circle-minus"><Caption>Circle Minus</Caption></GridIcon>
          <GridIcon name="circle-plus"><Caption>Circle Plus</Caption></GridIcon>
          <GridIcon name="clock"><Caption>Clock</Caption></GridIcon>
          <GridIcon name="facebook"><Caption>Facebook</Caption></GridIcon>
          <GridIcon name="help"><Caption>Help</Caption></GridIcon>
          <GridIcon name="info"><Caption>Info</Caption></GridIcon>
          <GridIcon name="offer"><Caption>Offer</Caption></GridIcon>
          <GridIcon name="price"><Caption>Price</Caption></GridIcon>
          <GridIcon name="twitter"><Caption>Twitter</Caption></GridIcon>
          <GridIcon name="unavailable"><Caption>Unavailable</Caption></GridIcon>
        </Grid>
      </Section>

      <Section>
        <Heading2>System</Heading2>
        <Grid columnCount={minWidth1024 ? 3 : 2} noMargin>
          <GridIcon name="add-to-list"><Caption>Add to List</Caption></GridIcon>
          <GridIcon name="address"><Caption>Address</Caption></GridIcon>
          <GridIcon name="alert"><Caption>Alert</Caption></GridIcon>
          <GridIcon name="bag"><Caption>Bag</Caption></GridIcon>
          <GridIcon name="barcode"><Caption>Barcode</Caption></GridIcon>
          <GridIcon name="calendar"><Caption>Calendar</Caption></GridIcon>
          <GridIcon name="camera"><Caption>Camera</Caption></GridIcon>
          <GridIcon name="delivery-pass"><Caption>Delivery Pass</Caption></GridIcon>
          <GridIcon name="events"><Caption>Events</Caption></GridIcon>
          <GridIcon name="feedback"><Caption>Feedback</Caption></GridIcon>
          <GridIcon name="groceries"><Caption>Groceries</Caption></GridIcon>
          <GridIcon name="home"><Caption>Home</Caption></GridIcon>
          <GridIcon name="list"><Caption>List</Caption></GridIcon>
          <GridIcon name="lock"><Caption>Lock</Caption></GridIcon>
          <GridIcon name="mail"><Caption>Mail</Caption></GridIcon>
          <GridIcon name="mic"><Caption>Mic</Caption></GridIcon>
          <GridIcon name="orders"><Caption>Orders</Caption></GridIcon>
          <GridIcon name="payment"><Caption>Payment</Caption></GridIcon>
          <GridIcon name="petrol"><Caption>Petrol</Caption></GridIcon>
          <GridIcon name="preferences"><Caption>Preferences</Caption></GridIcon>
          <GridIcon name="printer"><Caption>Printer</Caption></GridIcon>
          <GridIcon name="recipes"><Caption>Recipes</Caption></GridIcon>
          <GridIcon name="star-outlined"><Caption>Star Outlined</Caption></GridIcon>
          <GridIcon name="star-half-filled"><Caption>Star Half Filled</Caption></GridIcon>
          <GridIcon name="star-filled"><Caption>Star Filled</Caption></GridIcon>
          <GridIcon name="trolley"><Caption>Trolley</Caption></GridIcon>
          <GridIcon name="truck"><Caption>Truck</Caption></GridIcon>
          <GridIcon name="upload"><Caption>Upload</Caption></GridIcon>
          <GridIcon name="voucher"><Caption>Voucher</Caption></GridIcon>
          <GridIcon name="map-pin-outlined"><Caption>Map Pin Outlined</Caption></GridIcon>
          <GridIcon name="map-pin-filled"><Caption>Map Pin Filled</Caption></GridIcon>
          <GridIcon name="map-pin-checked"><Caption>Map Pin Checked</Caption></GridIcon>
          <GridIcon name="map-pin-express"><Caption>Map Pin Express</Caption></GridIcon>
          <GridIcon name="map-pin-your-store"><Caption>Map Pin Your Store</Caption></GridIcon>
          <GridIcon name="trash"><Caption>Trash</Caption></GridIcon>
          <GridIcon name="thumbs-up-outlined"><Caption>Thumbs Up Outlined</Caption></GridIcon>
          <GridIcon name="thumbs-down-outlined"><Caption>Thumbs Down Outlined</Caption></GridIcon>
          <GridIcon name="thumbs-up-filled"><Caption>Thumbs Up Filled</Caption></GridIcon>
          <GridIcon name="thumbs-down-filled"><Caption>Thumbs Down Filled</Caption></GridIcon>
          <GridIcon name="map"><Caption>Map</Caption></GridIcon>
          <GridIcon name="conversation"><Caption>Conversation</Caption></GridIcon>
          <GridIcon name="near-me-outlined"><Caption>Near Me Outlined</Caption></GridIcon>
          <GridIcon name="near-me-filled"><Caption>Near Me Filled</Caption></GridIcon>
          <GridIcon name="click-collect"><Caption>Click & Collect</Caption></GridIcon>
          <GridIcon name="lockers"><Caption>Lockers</Caption></GridIcon>
          <GridIcon name="show"><Caption>Show</Caption></GridIcon>
          <GridIcon name="pizza"><Caption>Pizza</Caption></GridIcon>
          <GridIcon name="support"><Caption>Support</Caption></GridIcon>
          <GridIcon name="account"><Caption>Account</Caption></GridIcon>
          <GridIcon name="settings"><Caption>Settings</Caption></GridIcon>
          <GridIcon name="summer"><Caption>Summer</Caption></GridIcon>
          <GridIcon name="tube"><Caption>Tube</Caption></GridIcon>
          <GridIcon name="automated-collection"><Caption>Automated Collection</Caption></GridIcon>
          <GridIcon name="park-ride"><Caption>Park & Ride</Caption></GridIcon>
          <GridIcon name="market"><Caption>Market</Caption></GridIcon>
          <GridIcon name="internal-collection"><Caption>Internal Collection</Caption></GridIcon>
          <GridIcon name="no-alcohol"><Caption>No Alcohol</Caption></GridIcon>
          <GridIcon name="cook"><Caption>Cook</Caption></GridIcon>
          <GridIcon name="heart-outlined"><Caption>Heart Outlined</Caption></GridIcon>
          <GridIcon name="heart-filled"><Caption>Heart Filled</Caption></GridIcon>
          <GridIcon name="reindeer"><Caption>Reindeer</Caption></GridIcon>
          <GridIcon name="santa"><Caption>Santa</Caption></GridIcon>
        </Grid>
      </Section>

      <Section>
        <Heading2>Icon size and layout</Heading2>
        <Paragraph>
          Icons are created on a 32px by 32px grid. Create icons for viewing at
          100% scale for pixel perfect accuracy. The icons can be scaled to smaller
          and larger sizes based on the context and usage.
        </Paragraph>
        <Figure
          src={metrics32x32PNGSource}
          caption="32 x 32 (100% Scale)"
        />
        <Figure
          src={iconLayoutPNGSource}
          caption="Icon layout (400% scale)"
          noMargin
        />
      </Section>

      <Section>
        <Heading2>Keyline and basic shapes</Heading2>
        <Paragraph>
          Specific keylines are present for certain shapes: circle, square,
          rectangle, orthogonals, and diagonals. These basic shapes help in
          creating consistent icons and regulate their placement on the icon grid.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 3 : 2} noMargin>
          <GridItem>
            <Figure
              src={keylinePNGSource}
              caption="Keyline (400% scale)"
              noMargin
            />
          </GridItem>
          <GridItem>
            <Figure
              src={squarePNGSource}
              caption="Square (400% scale)"
              noMargin
            />
          </GridItem>
          <GridItem>
            <Figure
              src={circlePNGSource}
              caption="Circle (400% scale)"
              noMargin
            />
          </GridItem>
          <GridItem>
            <Figure
              src={verticalRectanglePNGSource}
              caption="Vertical Rectangle (400% scale)"
              noMargin
            />
          </GridItem>
          <GridItem>
            <Figure
              src={horizontalRectanglePNGSource}
              caption="Horizontal Rectangle (400% scale)"
              noMargin
            />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Icon stroke and radii</Heading2>
        <Paragraph>
          Icons use a consistent stroke width of 2px, including curves, angles,
          and both interior and exterior strokes. The radii for outer edges is 2px
          and 0.5px for inner edges.
        </Paragraph>
        <Paragraph>
          For icons where outer radii of 2px is not appropriate, apply 0.5px on
          the outer edge while leaving the inner edge without radii.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1} noMargin>
          <GridItem>
            <Figure src={strokeRadiiAddPNGSource} noMargin />
          </GridItem>
          <GridItem>
            <Figure src={strokeRadiiHeadphonePNGSource} noMargin />
          </GridItem>
        </Grid>
      </Section>
    </article>
  )
}

export default IconsPage
