// Libs
import React from 'react'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import { Caption, Figure, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="icons-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="icons-page__grid-item">{children}</li>
)

const IconsPage = () => (
  <article className="icons-page">

    <Heading>Icons</Heading>

    <Section>
      <Subheading>Basic Icons</Subheading>
      <Grid>
        <GridItem><Icon name="browse" /><Caption>Browse</Caption></GridItem>
        <GridItem><Icon name="check" /><Caption>Check</Caption></GridItem>
        <GridItem><Icon name="chevron-down" /><Caption>Chevron Down</Caption></GridItem>
        <GridItem><Icon name="chevron-left" /><Caption>Chevron Left</Caption></GridItem>
        <GridItem><Icon name="chevron-right" /><Caption>Chevron Right</Caption></GridItem>
        {/* <GridItem><Icon name="chevron-up" /><Caption>Chevron Up</Caption></GridItem> */}
        <GridItem><Icon name="swap" /><Caption>Swap</Caption></GridItem>
        <GridItem><Icon name="close" /><Caption>Close</Caption></GridItem>
        <GridItem><Icon name="change" /><Caption>Change</Caption></GridItem>
        {/* <GridItem><Icon name="filter" /><Caption>Filter</Caption></GridItem> */}
        <GridItem><Icon name="menu" /><Caption>Menu</Caption></GridItem>
        <GridItem><Icon name="minus" /><Caption>Minus</Caption></GridItem>
        {/* <GridItem><Icon name="more-actions" /><Caption>More Actions</Caption></GridItem> */}
        <GridItem><Icon name="plus" /><Caption>Plus</Caption></GridItem>
        {/* <GridItem><Icon name="zoom" /><Caption>Zoom</Caption></GridItem> */}
        <GridItem><Icon name="search" /><Caption>Search</Caption></GridItem>
        {/* <GridItem><Icon name="sort" /><Caption>Sort</Caption></GridItem> */}
        {/* <GridItem><Icon name="caret-down" /><Caption>Caret Down</Caption></GridItem> */}
        {/* <GridItem><Icon name="caret-up" /><Caption>Caret Up</Caption></GridItem> */}
        <GridItem><Icon name="alert" /><Caption>Alert</Caption></GridItem>
        <GridItem><Icon name="quick-view" /><Caption>Quick View</Caption></GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Circular</Subheading>
      <Grid>
        <GridItem><Icon name="circle-minus" /><Caption>Circle Minus</Caption></GridItem>
        <GridItem><Icon name="circle-plus" /><Caption>Circle Plus</Caption></GridItem>
        <GridItem><Icon name="clock" /><Caption>Clock</Caption></GridItem>
        <GridItem><Icon name="facebook" /><Caption>Facebook</Caption></GridItem>
        <GridItem><Icon name="help" /><Caption>Help</Caption></GridItem>
        <GridItem><Icon name="info" /><Caption>Info</Caption></GridItem>
        {/* <GridItem><Icon name="offer" /><Caption>Offer</Caption></GridItem> */}
        {/* <GridItem><Icon name="price" /><Caption>Price</Caption></GridItem> */}
        {/* <GridItem><Icon name="reload" /><Caption>Reload</Caption></GridItem> */}
        {/* <GridItem><Icon name="user" /><Caption>User</Caption></GridItem> */}
        {/* <GridItem><Icon name="settings" /><Caption>Settings</Caption></GridItem> */}
        {/* <GridItem><Icon name="twitter" /><Caption>Twitter</Caption></GridItem> */}
        {/* <GridItem><Icon name="unavailable" /><Caption>Unavailable</Caption></GridItem> */}
      </Grid>
    </Section>

    <Section>
      <Subheading>System</Subheading>
      <Grid>
        <GridItem><Icon name="add-to-list" /><Caption>Add to List</Caption></GridItem>
        {/* <GridItem><Icon name="address" /><Caption>Address</Caption></GridItem> */}
        {/* <GridItem><Icon name="alert" /><Caption>Alert</Caption></GridItem> */}
        {/* <GridItem><Icon name="bag" /><Caption>Bag</Caption></GridItem> */}
        {/* <GridItem><Icon name="barcode" /><Caption>Barcode</Caption></GridItem> */}
        {/* <GridItem><Icon name="calendar" /><Caption>Calendar</Caption></GridItem> */}
        {/* <GridItem><Icon name="camera" /><Caption>Camera</Caption></GridItem> */}
        {/* <GridItem><Icon name="delivery-pass" /><Caption>Delivery Pass</Caption></GridItem> */}
        {/* <GridItem><Icon name="events" /><Caption>Events</Caption></GridItem> */}
        {/* <GridItem><Icon name="feedback" /><Caption>Feedback</Caption></GridItem> */}
        {/* <GridItem><Icon name="groceries" /><Caption>Groceries</Caption></GridItem> */}
        {/* <GridItem><Icon name="home" /><Caption>Home</Caption></GridItem> */}
        {/* <GridItem><Icon name="list" /><Caption>List</Caption></GridItem> */}
        {/* <GridItem><Icon name="lock" /><Caption>Lock</Caption></GridItem> */}
        {/* <GridItem><Icon name="mail" /><Caption>Mail</Caption></GridItem> */}
        {/* <GridItem><Icon name="mic" /><Caption>Mic</Caption></GridItem> */}
        {/* <GridItem><Icon name="orders" /><Caption>Orders</Caption></GridItem> */}
        {/* <GridItem><Icon name="payment" /><Caption>Payment</Caption></GridItem> */}
        {/* <GridItem><Icon name="petrol" /><Caption>Petrol</Caption></GridItem> */}
        {/* <GridItem><Icon name="preferences" /><Caption>Preferences</Caption></GridItem> */}
        {/* <GridItem><Icon name="print" /><Caption>Print</Caption></GridItem> */}
        {/* <GridItem><Icon name="recipes" /><Caption>Recipes</Caption></GridItem> */}
        {/* <GridItem><Icon name="star-outline" /><Caption>Star Outline</Caption></GridItem> */}
        {/* <GridItem><Icon name="star-solid" /><Caption>Star Solid</Caption></GridItem> */}
        {/* <GridItem><Icon name="trash" /><Caption>Trash</Caption></GridItem> */}
        {/* <GridItem><Icon name="trolley" /><Caption>Trolley</Caption></GridItem> */}
        {/* <GridItem><Icon name="truck" /><Caption>Truck</Caption></GridItem> */}
        {/* <GridItem><Icon name="cloud" /><Caption>Cloud</Caption></GridItem> */}
        {/* <GridItem><Icon name="voucher" /><Caption>Voucher</Caption></GridItem> */}
        {/* <GridItem><Icon name="store-locator" /><Caption>Store Locator</Caption></GridItem> */}
        {/* <GridItem><Icon name="heart-outline" /><Caption>Heart Outline</Caption></GridItem> */}
        {/* <GridItem><Icon name="heart-solid" /><Caption>Heart Solid</Caption></GridItem> */}
        {/* <GridItem><Icon name="conversation" /><Caption>Conversation</Caption></GridItem> */}
      </Grid>
    </Section>

  </article>
)

export default IconsPage
