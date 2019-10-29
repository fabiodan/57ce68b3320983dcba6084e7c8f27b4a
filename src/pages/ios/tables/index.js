// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Caption, Paragraph, Heading2, Section, Heading1,} from '@sg/sg-layout'

// Assets
import examplePNGSource from './images/tables-example.png'
import standardPNGSource from './images/tables-standard.png'
import withactionPNGSource from './images/tables-with-action.png'
import withaccordianPNGSource from './images/tables-with-accordian.png'
import withdropdownPNGSource from './images/tables-with-dropdown.png'
import sectionheaderPNGSource from './images/tables-section-header.png'
import tableviewPNGSource from './images/tables-table-view.png'
import leveldownPNGSource from './images/tables-level-down.png'
import supportingtextPNGSource from './images/tables-supporting-text.png'
import expandablePNGSource from './images/tables-expandable.png'
import greytablePNGSource from './images/tables-grey-table.png'
import viewexamplePNGSource from './images/tables-table-view-example.png'
import fiveoptionPNGSource from './images/tables-five-options.png'
import nativepickerPNGSource from './images/tables-native-picker.png'
import morethanfivePNGSource from './images/tables-more-than-five.png'
import fullscreenPNGSource from './images/tables-full-screen.png'
import './_style.scss'

const Grid = ({ children }) => (
  <div className="ios-tables-page__grid">{ children }</div>
)

const IOSTablesPage = () => (
  <article className="ios-tables-page">
  
    <Heading1>Tables</Heading1>

    <Section>
      <Heading2>Tables</Heading2>
      <Paragraph>
        Tables are ordered lists that contain a range of content.
      </Paragraph>
      <Paragraph>
        Ideally tables are grouped and contained within a SECTION HEADER. This
        helps to differentiate content in different sections.
      </Paragraph>
      <Grid>
        <div>
          <Figure noMargin fluid maxWidth="345px" src={examplePNGSource} />
        </div>
      </Grid>
    </Section>

    <Section>
      <Heading2>Section Header</Heading2>
      <Paragraph>
        Section headers divide content with titles and act as a visual break,
        providing context. By chunking content within sections, content on the
        page easier to scan and understand.
      </Paragraph>
      <Paragraph>
        Section headers can be modified with a dropdown, actionable buttons or
        text links.
      </Paragraph>
      <Grid>
        <div>
          <Caption position="top">Standard section header</Caption>
          <Figure className="ios-tables-page__figure" noMargin fluid maxWidth="382px" src={standardPNGSource} />
          <Caption position="top">Standard With Action</Caption>
          <Figure className="ios-tables-page__figure" noMargin fluid maxWidth="382px" src={withactionPNGSource} />
          <Caption position="top">With Accordian / Icon</Caption>
          <Figure className="ios-tables-page__figure" noMargin fluid maxWidth="382px" src={withaccordianPNGSource} />
          <Caption position="top">With Dropdown / Icon & Action</Caption>
          <Figure noMargin fluid maxWidth="382px" src={withdropdownPNGSource} />
        </div>
        <div>
          <Figure noMargin fluid maxWidth="206px" src={sectionheaderPNGSource} />
        </div>
      </Grid>
    </Section>

    <Section>
      <Heading2>Table View</Heading2>
      <Paragraph>
        Table view cells are lists of data that can surface information, offer
        interaction or navigate to another section.
      </Paragraph>
      <Paragraph>
        Table view cells are contained by section headers.
      </Paragraph>
      <Grid>
          <div>
            <div className="ios-tables-page__dark-background">
              <Caption position="top">Standard section header</Caption>
              <Figure className="ios-tables-page__figure" noMargin fluid maxWidth="350px" src={tableviewPNGSource} />
              <Caption position="top">Navigate a level down</Caption>
              <Figure className="ios-tables-page__figure" noMargin fluid maxWidth="350px" src={leveldownPNGSource} />
              <Caption position="top">Navigate a level down & Supporting Text</Caption>
              <Figure className="ios-tables-page__figure" noMargin fluid maxWidth="350px" src={supportingtextPNGSource} />
              <Caption position="top">Expandable Text in Table View</Caption>
              <Figure noMargin fluid maxWidth="350px" src={expandablePNGSource} />
            </div>
            <Caption position="top">Grey Table View</Caption>
            <Figure className="ios-tables-page__figure" noMargin fluid maxWidth="382px" src={greytablePNGSource} />
          </div>
          <div>
            <Figure noMargin fluid maxWidth="206px" src={viewexamplePNGSource} />
          </div>
      </Grid>
    </Section>

    <Section>
      <Heading2>Dropdowns in a Table View</Heading2>
      <Paragraph>
        If a dropdown contains 5 or less values, a PICKER should be used.
      </Paragraph>
      <Paragraph>
        If there are more than 5 values within a dropdown, a sheet should be
        used. This will appear from the bottom of the screen and act as an overlay.
      </Paragraph>
      <Grid>
        <div>
          <Caption position="top">5 or less options</Caption>
          <Figure noMargin fluid maxWidth="380px" src={fiveoptionPNGSource} />
        </div>
        <div>
          <Caption position="top">Native Picker is shown</Caption>
          <Figure noMargin fluid maxWidth="380px" src={nativepickerPNGSource} />
        </div>
        <div>
          <Caption position="top">More than 5 options</Caption>
          <Figure noMargin fluid maxWidth="380px" src={morethanfivePNGSource} />
        </div>
        <div>
          <Caption position="top">Full Screen Sheet Displays options</Caption>
          <Figure noMargin fluid maxWidth="380px" src={fullscreenPNGSource} />
        </div>
      </Grid>
    </Section>

  </article>
)

export default IOSTablesPage
