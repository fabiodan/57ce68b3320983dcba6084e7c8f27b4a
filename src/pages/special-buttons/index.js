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
import { Caption, Heading1, Heading2, Paragraph, Section } from '../components/sg-layout'

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
    <Heading1>Special Buttons</Heading1>

    <Section>
      <Heading2>Product Module Buttons</Heading2>
      <Paragraph>
        Product modules are the bread and butter of Asda.com. The buttons follow
        similar standads to rest of the website with few special cases.
      </Paragraph>

      <Grid>
        <GridItem>
          <AddButton unit="count" quantity={0} />
          <Caption>Add Button Default <br />Center Aligned to PM</Caption>
        </GridItem>
        <GridItem>
          <AddButton unit="count" quantity={1} />
          <Caption>Product Added Default <br />Center Aligned to PM</Caption>
        </GridItem>
        <GridItem>
          <AddButton unit="weighted" quantity={2} />
          <Caption>Weighted Product Added <br />Center Aligned to PM</Caption>
        </GridItem>
        <GridItem>
          <AddButton unit="both" quantity={1} />
          <Caption>Product Added Default <br />Center Aligned to PM</Caption>
        </GridItem>
      </Grid>
    </Section>

    {/* <Section>
      <Heading2>Recipes Buttons</Heading2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        voluptate adipisci rerum iure, omnis dolor quasi saepe vero accusamus,
        tempore corrupti fugit vel nostrum voluptatem nobis cupiditate, natus
        illo asperiores?
      </Paragraph>
    </Section> */}

    <Section>
      <Heading2>External Buttons</Heading2>
      <Paragraph>
        For buttons which take the user to external links, like downloading the
        app, the following styles can be used.
      </Paragraph>

      <Grid>
        <GridItem>
          <AppleWalletButton />
        </GridItem>
        <GridItem>
          <GooglePayButton />
        </GridItem>
        <GridItem>
          <AppStoreButton />
        </GridItem>
        <GridItem>
          <GooglePlayButton />
        </GridItem>
      </Grid>
    </Section>
  </article>
)

export default SpecialButtonsPage
