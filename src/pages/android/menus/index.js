// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

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
  GridItem,
  Grid,
} from '@sg/sg-layout'

// Assets
import menusDefaultWithIconsPNGSource from './images/menus-default-with-icons.png'
import menusDefaultPNGSource from './images/menus-default.png'
import menusGroupingValuesPNGSource from './images/menus-grouping-values.png'
import menusScrollableWithIconsPNGSource from './images/menus-scrollable-with-icons.png'
import menusScrollablePNGSource from './images/menus-scrollable.png'
import menusUsage1PNGSource from './images/menus-usage-1.png'
import menusUsage2PNGSource from './images/menus-usage-2.png'
import dropdownExpandedAddPNGSource from './images/dropdown-expanded-add.png'
import dropdownExpandedSelectedAddPNGSource from './images/dropdown-expanded-selected-add.png'
import dropdownScrollablePNGSource from './images/dropdown-scrollable.png'
import dropdownSelectedPNGSource from './images/dropdown-selected.png'
import dropdownCollapsedDefaultPNGSource from './images/dropdown-collapsed-default.png'
import dropdownCollapsedSelectedPNGSource from './images/dropdown-collapsed-selected.png'
import dropdownExpandedDefaultPNGSource from './images/dropdown-expanded-default.png'
import dropdownExpandedSelectedPNGSource from './images/dropdown-expanded-selected.png'
import dropdownIconsCollapsedSelectedPNGSource from './images/dropdown-icons-collapsed-selected.png'
import dropdownIconsCollapsedDefaultPNGSource from './images/dropdown-icons-collapsed.png'
import dropdownIconsExpandedDefaultPNGSource from './images/dropdown-icons-expanded-default.png'
import dropdownIconsExpandedSelectedPNGSource from './images/dropdown-icons-expanded-selected.png'

import dropdownsIconsDefaultScrollablePNGSource from './images/dropdowns-icons-default-scrollable.png'
import dropdownsIconsScrollableAddPNGSource from './images/dropdowns-icons-scrollable-add.png'
import dropdownsIconsScrollableSelectedAddPNGSource from './images/dropdowns-icons-scrollable-selected-add.png'
import dropdownsIconsDefaultIconScrollableSelectedPNGSource from './images/dropdowns-icons-default-icon-scrollable-selected.png'

import './_style.scss'

const AndroidMenusPage = () => {
  const minWidth1280 = useMediaQuery({ query: '(min-width: 1280px)' })
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="android-menus-page">
      <Heading1>Menus</Heading1>

      <Section>
        <Heading2>Contextual Menus</Heading2>
        <Paragraph>
          Menus display a list of choices on temporary surfaces. Contextual menus
          aren’t triggered by a consistent UI element. They appear next to where
          a user taps, and their actions can vary based on the tap target.
        </Paragraph>
        <Paragraph>
          Minimum width for Menus is 112pt, maximum is 280pt. Width of contextual
          menu should be decided based upon the length of list item and the grid.
        </Paragraph>
        <Grid columnCount={ minWidth1280 ? 3 : 1 }>
          <GridItem>
            <Caption position="top">Default</Caption>
            <Figure maxWidth="114px" src={menusDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Grouping Values</Caption>
            <Figure maxWidth="282px" src={menusGroupingValuesPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Scrollable</Caption>
            <Figure maxWidth="282px" src={menusScrollablePNGSource} noMargin fluid />
          </GridItem>
          <GridItem />
          <GridItem>
            <Caption position="top">Default With Icons</Caption>
            <Figure maxWidth="282px" src={menusDefaultWithIconsPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Scrollable With Icons</Caption>
            <Figure maxWidth="282px" src={menusScrollableWithIconsPNGSource} noMargin fluid />
          </GridItem>
        </Grid>

        <Heading3>Usage</Heading3>
        <Paragraph>
          You can extend or modify menu with using lists items. Keep padding
          from the age of menu box 8pt.
        </Paragraph>
        <FigureContainer>
          <Figure maxWidth="584px" src={menusUsage1PNGSource} noMargin fluid />
        </FigureContainer>
        <Paragraph>
          Menus should be positioned relative to the edge of the screen. They
          typically appear next to (or in front of) the element that generates them.
        </Paragraph>

        <FigureContainer>
          <Figure maxWidth="360px" src={menusUsage2PNGSource} noMargin fluid />
        </FigureContainer>
      </Section>

      <Section>
        <Heading2>Dropdowns</Heading2>
        <Grid columnCount={ minWidth1024 ? 2 : 1 }>
          <GridItem>
            <Caption position="top">Collapsed Default</Caption>
            <Figure maxWidth="280px" src={dropdownCollapsedDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Collapsed With Selected Value</Caption>
            <Figure maxWidth="280px" src={dropdownCollapsedSelectedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Expanded Default</Caption>
            <Figure maxWidth="280px" src={dropdownExpandedDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Expanded With Selected Value</Caption>
            <Figure maxWidth="280px" src={dropdownExpandedSelectedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Scrollable Dropdown</Caption>
            <Figure maxWidth="282px" src={dropdownScrollablePNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Focus With A Selected Value</Caption>
            <Figure maxWidth="282px" src={dropdownSelectedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Expanded With Add</Caption>
            <Figure maxWidth="282px" src={dropdownExpandedAddPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Expanded With selected Value + Add</Caption>
            <Figure maxWidth="282px" src={dropdownExpandedSelectedAddPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>















      <Section>
        <Heading2>Dropdowns with icons</Heading2>
        <Grid columnCount={ minWidth1024 ? 2 : 1 }>
          <GridItem>
            <Caption position="top">Collapsed Default</Caption>
            <Figure maxWidth="280px" src={dropdownIconsCollapsedDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Collapsed With Selected Value</Caption>
            <Figure maxWidth="280px" src={dropdownIconsCollapsedSelectedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Expanded Default</Caption>
            <Figure maxWidth="280px" src={dropdownIconsExpandedDefaultPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Expanded With Selected Value</Caption>
            <Figure maxWidth="280px" src={dropdownIconsExpandedSelectedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Default Icon Scrollable</Caption>
            <Figure maxWidth="282px" src={dropdownsIconsDefaultScrollablePNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Default Icon Scrollable Selected</Caption>
            <Figure maxWidth="282px" src={dropdownsIconsDefaultIconScrollableSelectedPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Scrollable With Add</Caption>
            <Figure maxWidth="282px" src={dropdownsIconsScrollableAddPNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <Caption position="top">Scrollable With Selected Value +  Add</Caption>
            <Figure maxWidth="282px" src={dropdownsIconsScrollableSelectedAddPNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

    </article>
  )
}

export default AndroidMenusPage
