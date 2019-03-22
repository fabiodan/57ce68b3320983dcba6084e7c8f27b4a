// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  AppleWalletButton,
  GooglePayButton,
  AppStoreButton,
  GooglePlayButton,
} from '@asda/external-button'
import AddButton from '@asda/add-button'
import { Caption, Heading, Subheading, Paragraph, Section } from '../components/sg-layout'

// Assets
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="special-buttons-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="special-buttons-page__grid-item">{children}</li>
)

const SpecialButtonsPage = () => (
  <article className="special-buttons-page">
    <Heading>Special Buttons</Heading>

    <Section>
      <Subheading>Product Module Buttons</Subheading>
      <Paragraph keepMargin>
        Product modules are the bread and butter of Asda.com. The buttons follow
        similar standads to rest of the website with few special cases.
      </Paragraph>

      <Grid>
        <GridItem>
          <AddButton unit="count" quantity={0} />
          <Caption>Add Button Default <br/>Center Aligned to PM</Caption>
        </GridItem>
        <GridItem>
          <AddButton unit="count" quantity={1} />
          <Caption>Product Added Default <br/>Center Aligned to PM</Caption>
        </GridItem>
        <GridItem>
          <AddButton unit="weighted" quantity={2} />
          <Caption>Weighted Product Added <br/>Center Aligned to PM</Caption>
        </GridItem>
        <GridItem>
          <AddButton unit="both" quantity={1} />
          <Caption>Product Added Default <br/>Center Aligned to PM</Caption>
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Subheading>Recipes Buttons</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        voluptate adipisci rerum iure, omnis dolor quasi saepe vero accusamus,
        tempore corrupti fugit vel nostrum voluptatem nobis cupiditate, natus
        illo asperiores?
      </Paragraph>
    </Section>

    <Section>
      <Subheading>External Buttons</Subheading>
      <Paragraph>
        For buttons which take the user to external links, like downloading the
        app, the following styles can be used.
      </Paragraph>

        <Grid>
          <GridItem>
            <AppleWalletButton  />
          </GridItem>
          <GridItem>
            <GooglePayButton  />
          </GridItem>
          <GridItem>
            <AppStoreButton  />
          </GridItem>
          <GridItem>
            <GooglePlayButton />
          </GridItem>
        </Grid>
    </Section>
  </article>
)

export default SpecialButtonsPage
