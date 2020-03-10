// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import { Checkbox, Label } from '@asda/form'
import {
  Heading1,
  Heading2,
  Heading3,
  Figure,
  GridItem,
  Grid,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import accessible1PNGSource from './images/accessible-1.png'
import accessible2PNGSource from './images/accessible-2.png'
import componentCreationPNGSource from './images/component-creation.png'
import componentExamplePNGSource from './images/component-example.png'
import layerStructurePNGSource from './images/layer-structure.png'
import overrideListPNGSource from './images/override-list.png'
import scalable1PNGSource from './images/scalable-1.png'
import scalable2PNGSource from './images/scalable-2.png'

import './_style.scss'

const CommonGuidingPrinciples = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="introduction-guiding-principles-page">

      <Heading1>Guiding principles</Heading1>

      <Section>
        <Heading2>Component creation</Heading2>
        <Paragraph>
          The guiding principles below will make it easier for members of the
          design team to create meaningful components that our team can find,
          amend and override - ultimately leading to better integration, usability
          and adoption.
        </Paragraph>

        <Figure maxWidth="446px" src={componentCreationPNGSource} noMargin fluid />
      </Section>

      <Section>
        <Heading2>Make it usable</Heading2>

        <Heading3>Component example</Heading3>
        <Paragraph>
          Components that have multiple sections need to be organised for the team
          to use. If there are multiple variations of a component, consider
          splitting the component into sections (left/centre/right) and add
          descriptive terms for each section.
        </Paragraph>
        <Figure maxWidth="345px" src={componentExamplePNGSource} fluid />

        <Heading3>Layer structure</Heading3>
        <Paragraph>
          Arrange component layers so that items that appear in the top left
          appear first in the list (Icon - Placeholder Left), scanning left to
          right, top to bottom.
        </Paragraph>
        <Figure maxWidth="310px" src={layerStructurePNGSource} fluid />

        <Heading3>Override list</Heading3>
        <Paragraph>
          By arranging layers in this way the override structure becomes easier to
          understand and scan/edit.
        </Paragraph>
        <Figure maxWidth="239px" src={overrideListPNGSource} noMargin fluid />

      </Section>

      <Section>
        <Heading2>Make it scalable</Heading2>
        <Paragraph>
          Components should scale appropriately for different device widths.
          Responsive web components may have 3 different layouts (320, 768 & 1024).
          Consider vertical scalability also.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <Figure maxWidth="421px" src={scalable1PNGSource} fluid />
          </GridItem>
          <GridItem>
            <Figure maxWidth="247px" src={scalable2PNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

      <Section>
        <Heading2>Make it accessible</Heading2>
        <Paragraph>
          Use the STARK plugin to check that colour combinations are accessible.
          Aim for passing at a AA standard.
        </Paragraph>
        <Grid columnCount={minWidth1024 ? 2 : 1}>
          <GridItem>
            <div className="introduction-guiding-principles-page__accessibility">
              <div className="introduction-guiding-principles-page__accessibility__example">
                <div className="introduction-guiding-principles-page__accessibility__text">
                  Text on a white background.
                </div>
              </div>
              <div className="introduction-guiding-principles-page__accessibility__check">
                <Icon name="check" />
                Check text against background colours.
              </div>
            </div>
          </GridItem>
          <GridItem>
            <Figure
              className="introduction-guiding-principles-page--offset"
              maxWidth="383px" src={accessible1PNGSource} noMargin fluid />
          </GridItem>
          <GridItem>
            <GridItem>
              <div className="introduction-guiding-principles-page__accessibility">
                <div className="introduction-guiding-principles-page__accessibility__example">
                  <div className="introduction-guiding-principles-page__accessibility__text">
                    <Checkbox id="checkbox--ui-comp" />
                    <Label inline htmlFor="checkbox--ui-comp">UI Components</Label>

                  </div>
                </div>
                <div className="introduction-guiding-principles-page__accessibility__check">
                  <Icon name="check" />
                  Check UI components against background colours.
                </div>
              </div>
            </GridItem>
          </GridItem>
          <GridItem>
            <Figure
              className="introduction-guiding-principles-page--offset"
              maxWidth="383px" src={accessible2PNGSource} noMargin fluid />
          </GridItem>
        </Grid>
      </Section>

    </article>
  )
}

export default CommonGuidingPrinciples
