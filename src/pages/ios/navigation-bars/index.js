// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Caption,
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  Figure,
  GridItem,
  Grid,
  Section,
} from '@sg/sg-layout'

// Assets
import breadcrumb1PNGSource from './images/breadcrumb-1.png'
import breadcrumb2PNGSource from './images/breadcrumb-2.png'
import breadcrumb3PNGSource from './images/breadcrumb-3.png'
import breadcrumb4PNGSource from './images/breadcrumb-4.png'
import navigationBar19ItemsPNGSource from './images/navigation-bar-1-9-items.png'
import navigationBar1LineTitlePNGSource from './images/navigation-bar-1-line-title.png'
import navigationBar1099ItemsPNGSource from './images/navigation-bar-10-99-items.png'
import navigationBar100999ItemsPNGSource from './images/navigation-bar-100-999-items.png'
import navigationBar2LineTitlePNGSource from './images/navigation-bar-2-line-title.png'
import navigationBarAddPNGSource from './images/navigation-bar-add.png'
import navigationBarAsdaLogoPNGSource from './images/navigation-bar-asda-logo.png'
import navigationBarBackNavigationPNGSource from './images/navigation-bar-back-navigation.png'
import navigationBarCancelActionPNGSource from './images/navigation-bar-cancel-action.png'
import navigationBarDonePNGSource from './images/navigation-bar-done.png'
import navigationBarExamplePNGSource from './images/navigation-bar-example.png'
import navigationEmptyTrolleyPNGSource from './images/navigation-empty-trolley.png'
import secondaryNavigationExamplePNGSource from './images/secondary-navigation-example.png'
import './_style.scss'

const IOSNavigationBarsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-navigation-bars-page">
      <Heading1>Navigation Bars</Heading1>

      <Section>
        <Heading2>Navigation Bars</Heading2>
        <Paragraph>
          A navigation bar appears at the top of an app screen, below the status
          bar. It enables navigation through a series of hierarchical screens.
        </Paragraph>

        <Heading3>Navigation Bar - LEFT</Heading3>
        <Grid columnCount={minWidth1024 ? 2 : 1} withBackground>
          <GridItem>
            <Caption position="top">Back Navigation</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBarBackNavigationPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Cancel Action</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBarCancelActionPNGSource} />
          </GridItem>
        </Grid>

        <Heading3>Navigation Bar - CENTRE</Heading3>
        <Grid columnCount={minWidth1024 ? 2 : 1} withBackground>
          <GridItem>
            <Caption position="top">ASDA LOGO</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBarAsdaLogoPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">1 Line Title</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBar1LineTitlePNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">2 Line Title</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBar2LineTitlePNGSource} />
          </GridItem>
        </Grid>

        <Heading3>Navigation Bar - RIGHT</Heading3>
        <Grid columnCount={minWidth1024 ? 2 : 1} withBackground>
          <GridItem>
            <Caption position="top">Empty Trolley</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationEmptyTrolleyPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">1-9 Items in trolley</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBar19ItemsPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">10-99 Items in trolley</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBar1099ItemsPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">100-999 items in trolley</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBar100999ItemsPNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Done Button</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBarDonePNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Add Button</Caption>
            <Figure noMargin fluid maxWidth="375px" src={navigationBarAddPNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground noMargin>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={navigationBarExamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Secondary Navigation</Heading2>
        <Paragraph>
          Secondary navigation appears below the navigation bar.
        </Paragraph>

        <Paragraph>
          This can appear in a number of different ways. The most common is a
          breadcrumb that can offer quick backward navigation within shop.
        </Paragraph>

        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Caption position="top">Breadcrumb - Level 1</Caption>
            <Figure noMargin fluid maxWidth="375px" src={breadcrumb1PNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Breadcrumb - Level 2</Caption>
            <Figure noMargin fluid maxWidth="375px" src={breadcrumb2PNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Breadcrumb - Level 3</Caption>
            <Figure noMargin fluid maxWidth="375px" src={breadcrumb3PNGSource} />
          </GridItem>
          <GridItem>
            <Caption position="top">Breadcrumb - Level 4</Caption>
            <Figure noMargin fluid maxWidth="375px" src={breadcrumb4PNGSource} />
          </GridItem>
        </Grid>

        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="223px" src={secondaryNavigationExamplePNGSource} />
          </GridItem>
        </Grid>
      </Section>

    </article>
  )
}

export default IOSNavigationBarsPage
