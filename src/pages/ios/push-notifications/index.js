// Libs
import React from 'react'

// Components (from atomic to composite)
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
import pushNotificationsCompactPNGSource from './images/push-notifications-compact.png'
import pushNotificationsExamplePNGSource from './images/push-notifications-example.png'
import pushNotificationsExpandedPNGSource from './images/push-notifications-expanded.png'
import './_style.scss'

const IOSPushNotificationsPage = () => (
  <article className="ios-push-notifications-page">
    <Heading1>Push Notifications (System)</Heading1>
    <Section>
      <Heading2>Push Notifications</Heading2>
      <Paragraph>
        Push notifications display messaging outside of the ASDA Groceries app.
      </Paragraph>
      <Paragraph>
        These are shown above any open apps, on home screens or lock screens and
        can be dismissed or interacted with.
      </Paragraph>

      <Caption position="top">Push Notification - COMPACT</Caption>
      <Figure maxWidth="359px" src={pushNotificationsCompactPNGSource} fluid />

      <Caption position="top">Push Notification - EXPANDED</Caption>
      <Figure maxWidth="375px" src={pushNotificationsExpandedPNGSource} fluid />

      <Grid withBackground>
        <GridItem>
          <Figure maxWidth="223px" src={pushNotificationsExamplePNGSource} noMargin fluid />
        </GridItem>
      </Grid>
    </Section>

  </article>
)

export default IOSPushNotificationsPage
