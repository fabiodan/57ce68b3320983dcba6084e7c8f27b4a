// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Figure,
  FigureContainer,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import logoActiveTrolleyPNGSource from './images/logo-active-trolley.png'
import logoInactiveTrolleyPNGSource from './images/logo-inactive-trolley.png'
import oneLineArrowBackActiveTrolleyPNGSource from './images/one-line-arrow-back-active-trolley.png'
import oneLineNoArrowActiveTrolleyPNGSource from './images/one-line-no-arrow-active-trolley.png'
import oneLineNoArrowInactiveTrolleyPNGSource from './images/one-line-no-arrow-inactive-trolley.png'
import oneLineTabsNoArrowActiveTrolleyPNGSource from './images/one-line-tabs-no-arrow-active-trolley.png'
import oneLineTabsNoArrowInactiveTrolleyPNGSource from './images/one-line-tabs-no-arrow-inactive-trolley.png'
import openSearchActiveActiveTrolleyPNGSource from './images/open-search-active-active-trolley.png'
import openSearchInactiveActiveTrolleyPNGSource from './images/open-search-inactive-active-trolley.png'
import openSearchInactiveInactiveTrolleyPNGSource from './images/open-search-inactive-inactive-trolley.png'
import openSearchActiveInactiveTrolleyPNGSource from './images/open-search-active-inactive-trolley.png'
import pageTitleTabsActiveTrolleyPNGSource from './images/page-title-tabs-active-trolley.png'
import pageTitleTabsInactiveTrolleyPNGSource from './images/page-title-tabs-inactive-trolley.png'
import twoLinesNoArrowBackActiveTrolleyPNGSource from './images/two-lines-no-arrow-back-active-trolley.png'
import twoLinesNoArrowBackInactiveTrolleyPNGSource from './images/two-lines-no-arrow-back-inactive-trolley.png'
import twoLinesProductNameActiveTrolleyPNGSource from './images/two-lines-product-name-active-trolley.png'
import twoLinesProductNameInactiveTrolleyPNGSource from './images/two-lines-product-name-inactive-trolley.png'
import bottomNavigationAccountPNGSource from './images/bottom-navigation-account.png'
import bottomNavigationDefaultPNGSource from './images/bottom-navigation-default.png'
import bottomNavigationFavouritesPNGSource from './images/bottom-navigation-favourites.png'
import bottomNavigationHomePNGSource from './images/bottom-navigation-home.png'
import bottomNavigationSearchPNGSource from './images/bottom-navigation-search.png'
import bottomNavigationShopPNGSource from './images/bottom-navigation-shop.png'
import tabs2ItemsPNGSource from './images/tabs-2-items.png'
import tabs2ItemsIconsPNGSource from './images/tabs-2-items-icons.png'
import tabs3ItemsIconsPNGSource from './images/tabs-3-items-icons.png'
import tabs3ItemsPNGSource from './images/tabs-3-items.png'
import tabs4ItemsPNGSource from './images/tabs-4-items.png'
import tabs4ItemsIconsPNGSource from './images/tabs-4-items-icons.png'
import tabsScrollableIconsPNGSource from './images/tabs-scrollable-icons.png'
import tabsScrollablePNGSource from './images/tabs-scrollable.png'

import './_style.scss'

const Grid = ({ children }) => (
  <ul className="android-app-bars-page__grid">{ children }</ul>
)

const GridItem = ({ children }) => (
  <li className="android-app-bars-page__grid-item">{ children }</li>
)

const AndroidAppBarsPage = () => (
  <article className="android-app-bars-page">
    <Heading1>App bars</Heading1>

    <Section>
      <Heading2>Headers</Heading2>

      <Paragraph noMargin>
        <Grid>
          <GridItem>
            <Caption position="top">Logo + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={logoInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Logo + Active Trolley</Caption>
            <Figure maxWidth="360px" src={logoActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">One Line + No Arrow + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={oneLineNoArrowInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">One Line + No Arrow + Active Trolley</Caption>
            <Figure maxWidth="360px" src={oneLineNoArrowActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">One Line + Arrow Back + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={oneLineNoArrowInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">One Line + Arrow Back + Active Trolley</Caption>
            <Figure maxWidth="360px" src={oneLineArrowBackActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Two Lines + No Arrow Back + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={twoLinesNoArrowBackInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Two Lines + No Arrow Back + Active Trolley</Caption>
            <Figure maxWidth="360px" src={twoLinesNoArrowBackActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Two Lines + Product Name + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={twoLinesProductNameInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Two Lines + Product Name + Active Trolley</Caption>
            <Figure maxWidth="360px" src={twoLinesProductNameActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">One Line + Tabs + No Arrow + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={oneLineTabsNoArrowInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">One Line + Tabs + No Arrow + Active Trolley</Caption>
            <Figure maxWidth="360px" src={oneLineTabsNoArrowActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Page Title + Tabs + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={pageTitleTabsInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Page Title + Tabs + Active Trolley</Caption>
            <Figure maxWidth="360px" src={pageTitleTabsActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Open Search Inactive + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={openSearchInactiveInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Open Search Inactive + Active Trolley</Caption>
            <Figure maxWidth="360px" src={openSearchInactiveActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Open Search Active + Inactive Trolley</Caption>
            <Figure maxWidth="360px" src={openSearchActiveInactiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Open Search Active + Active Trolley</Caption>
            <Figure maxWidth="360px" src={openSearchActiveActiveTrolleyPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Bottom Navigation</Heading2>
      <Paragraph>
        For Inactive state use Dark Gray color. For active state bought Icon and
        Title use Accessible Green color.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">Default</Caption>
          <Figure maxWidth="360px" src={bottomNavigationDefaultPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Home</Caption>
          <Figure maxWidth="360px" src={bottomNavigationHomePNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Shop</Caption>
          <Figure maxWidth="360px" src={bottomNavigationShopPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Search</Caption>
          <Figure maxWidth="360px" src={bottomNavigationSearchPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Favourites</Caption>
          <Figure maxWidth="360px" src={bottomNavigationFavouritesPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Account</Caption>
          <Figure maxWidth="360px" src={bottomNavigationAccountPNGSource} noMargin fluid />
        </GridItem>
      </Grid>

    </Section>

    <Section>
      <Heading2>Tabs</Heading2>
      <Paragraph>
        Tabs organize content across different screens, data sets, and other
        interactions. Tabs organize and allow navigation between groups of
        content that are related and at the same level of hierarchy.
      </Paragraph>
      <Paragraph>
        Each tab should contain content that is distinct from other tabs in a set.
        For example, tabs can present different sections of news, different genres
        of music, or different themes of documents.
      </Paragraph>

      <Heading3>Active tab indicators</Heading3>
      <Paragraph>
        To differentiate an active tab from an inactive tab, apply an underline
        and color change to the active tab’s text and icon. If more than 4 tabs
        use scrollable.
      </Paragraph>

      <Grid>
        <GridItem>
          <Caption position="top">Two items tab</Caption>
          <Figure maxWidth="360px" src={tabs2ItemsPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Three items tab</Caption>
          <Figure maxWidth="360px" src={tabs3ItemsPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Four items tab</Caption>
          <Figure maxWidth="360px" src={tabs4ItemsPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Scrollable</Caption>
          <Figure maxWidth="360px" src={tabsScrollablePNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Two items tab + Icons</Caption>
          <Figure maxWidth="360px" src={tabs2ItemsIconsPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Three items tab + Icons</Caption>
          <Figure maxWidth="360px" src={tabs3ItemsIconsPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Four items tab + Icons</Caption>
          <Figure maxWidth="360px" src={tabs4ItemsIconsPNGSource} noMargin fluid />
        </GridItem>
        <GridItem>
          <Caption position="top">Scrollable + Icons</Caption>
          <Figure maxWidth="360px" src={tabsScrollableIconsPNGSource} noMargin fluid />
        </GridItem>
      </Grid>
    </Section>
  </article>
)

export default AndroidAppBarsPage
