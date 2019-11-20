// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Caption,
  Figure,
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  GridItem,
  Grid,
  Section,
} from '@sg/sg-layout'

// Assets
import alertLongActionPNGSource from './images/alert-long-action.png'
import alertShortActionPNGSource from './images/alert-short-action.png'
import notificationExamplePNGSource from './images/notification-example.png'
import notificationWoActionPNGSource from './images/notification-wo-action.png'
import notificationWoTwoActionsPNGSource from './images/notification-wo-two-actions.png'
import oneLineMessageActionPNGSource from './images/one-line-message-action.png'
import oneLineMessagePNGSource from './images/one-line-message.png'
import twoLineMessageActionPNGSource from './images/two-line-message-action.png'
import twoLineMessageLongActionPNGSource from './images/two-line-message-long-action.png'
import twoLineMessagePNGSource from './images/two-line-message.png'

import './_style.scss'

const AndroidNotificationsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })
  return (
    <article className="android-notifications-page">

      <Heading1>Notifications</Heading1>

      <Section>
        <Heading2>Android notifications</Heading2>
        <Grid columnCount={ minWidth1024 ? 2 : 1 } withBackground noMargin>
          <GridItem>
            <Caption position="top">Notification without Action</Caption>
            <Figure maxWidth="344px" src={notificationWoActionPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Notification without Two Actions</Caption>
            <Figure maxWidth="344px" src={notificationWoTwoActionsPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Process alerts</Heading2>
        <Paragraph>
          Snackbars provide brief messages about app processes at the bottom of the
          screen.
        </Paragraph>
        <Grid columnCount={ minWidth1024 ? 2 : 1 }>
          <GridItem>
            <Caption position="top">One line message</Caption>
            <Figure maxWidth="344px" src={oneLineMessagePNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">One line message + Action</Caption>
            <Figure maxWidth="344px" src={oneLineMessageActionPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Two line message</Caption>
            <Figure maxWidth="344px" src={twoLineMessagePNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Two line message + Action</Caption>
            <Figure maxWidth="344px" src={twoLineMessageActionPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Two line message + Long Action</Caption>
            <Figure maxWidth="344px" src={twoLineMessageLongActionPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
        <Heading3>Example</Heading3>
        <Grid withBackground noMargin>
          <GridItem>
            <Figure maxWidth="361px" src={notificationExamplePNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Alert dialog</Heading2>
        <Paragraph>
          Alert dialogs interrupt users with urgent information, details, or actions.
        </Paragraph>
        <Grid columnCount={ minWidth1024 ? 2 : 1 } noMargin>
          <GridItem>
            <Caption position="top">Alert Dialog + Short Action</Caption>
            <Figure className="android-notifications-page--5px-negative-margin" maxWidth="300px" src={alertShortActionPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Alert Dialog + Long Action</Caption>
            <Figure className="android-notifications-page--5px-negative-margin" maxWidth="300px" src={alertLongActionPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

    </article>
  )
}

export default AndroidNotificationsPage
