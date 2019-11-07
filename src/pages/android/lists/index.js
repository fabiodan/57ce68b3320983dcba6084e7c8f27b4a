// Libs
import React from 'react'

// Components (from atomic to composite)
import Sample from '@asda/_sample'
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
import singleLineListILinkPNGSource from './images/single-line-list-link.png'
import singleLineListIconPNGSource from './images/single-line-list-icon.png'
import contentIconsPNGSource from './images/content-icons.png'
import contentLinksPNGSource from './images/content-links.png'
import singleLineListCardLabelSmallPNGSource from './images/single-line-list-card-label-small.png'
import singleLineListTemplatePNGSource from './images/single-line-list-template.png'
import singleLineListCardLabelLargePNGSource from './images/single-line-list-card-label-large.png'
import singleLineListImagePNGSource from './images/single-line-list-image.png'
import singleLineListPNGSource from './images/single-line-list.png'
import twoLineListPNGSource from './images/two-line-list.png'
import threeLineListPNGSource from './images/three-line-list.png'

import singleLineListCardInputControlPNGSource from './images/single-line-list-card-input-control.png'
import singleLineListIconIconPNGSource from './images/single-line-list-icon-icon.png'
import singleLineListIconLinkPNGSource from './images/single-line-list-icon-link.png'
import singleLineListIconNoIconPNGSource from './images/single-line-list-icon-no-icon.png'
import singleLineListImageIconPNGSource from './images/single-line-list-image-icon.png'
import singleLineListImageLinkPNGSource from './images/single-line-list-image-link.png'
import singleLineListInputControlNoIconPNGSource from './images/single-line-list-input-control-no-icon.png'
import singleLineListNoIconIconPNGSource from './images/single-line-list-no-icon-icon.png'
import singleLineListNoIconLinkPNGSource from './images/single-line-list-no-icon-link.png'
import singleLineListNoIconNoIconPNGSource from './images/single-line-list-no-icon-no-icon.png'
import singleLineListTemplateLinkPNGSource from './images/single-line-list-template-link.png'
import singleLineListCardNoIconTogglePNGSource from './images/single-line-list-card-no-icon-toggle.png'
import singleLineListTogglePNGSource from './images/single-line-list-toggle.png'
import singleListLineDepartmentsPNGSource from './images/single-list-line-departments.png'

import twoLineListCardInputControl from './images/two-line-list-card-input-control.png'
import twoLineListExample from './images/two-line-list-example.png'
import twoLineListImageLink from './images/two-line-list-image-link.png'
import twoLineListNoIconLink from './images/two-line-list-no-icon-link.png'
import twoLineListNoIconNoIcon from './images/two-line-list-no-icon-no-icon.png'
import twoLineListTemplateNoIcon from './images/two-line-list-template-no-icon.png'

import threeLineListExample from './images/three-line-list-example.png'
import threeLineListImageIcon from './images/three-line-list-image-icon.png'
import threeLineListInputControlNoIcon from './images/three-line-list-input-control-no-icon.png'
import threeLineListNoIconLink from './images/three-line-list-no-icon-link.png'
import threeLineListNoIconNoIcon from './images/three-line-list-no-icon-no-icon.png'
import threeLineListTemplateIcon from './images/three-line-list-template-icon.png'
import threeLineListTemplateLink from './images/three-line-list-template-link.png'

import subtextCardInputControl from './images/subtext-card-input-control.png'
import subtextExample from './images/subtext-example.png'
import subtextIconNoIcon from './images/subtext-icon-no-icon.png'
import subtextInputControlNoIcon from './images/subtext-input-control-no-icon.png'
import subtextNoIconLink from './images/subtext-no-icon-link.png'
import subtextNoIconNoIcon from './images/subtext-no-icon-no-icon.png'


import './_style.scss'

const Grid = ({ children, className }) => (
  <div className={`android-modals__grid ${className}`}>{ children }</div>
)

const FigureContainerStack = ({ children }) => (
  <FigureContainer className="android-lists-page__stack-grid">
    { children }
  </FigureContainer>
)

const FigureContainerStackItem = ({ children }) => (
  <div className="android-lists-page__stack-grid-item">
    { children }
  </div>
)

const AndroidListsPage = () => (
  <article className="android-lists-page">

    <Heading1>Lists</Heading1>
    <Section>
      <Paragraph>
        Lists are a continuous group of text or images. They are composed of
        items containing primary and supplemental actions, which are represented
        by icons and text.
      </Paragraph>
      <Paragraph noMargin>
        A list consists of a single continuous column of subdivisions called
        rows that contain items of content.
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Content</Heading2>

      <Paragraph>
        Content types can take different forms, depending on the needs of a list:
        primary text, supporting visuals, metadata, links, input controls.
      </Paragraph>
      <Paragraph>
        Supporting visuals can be images, icons, eVauchers, credit cards, lables.
      </Paragraph>

      <Heading3>Actions</Heading3>
      <Paragraph>
        Supporting visuals type “Actions” can be links or icons. They should be
        placed on the right side from prymary text.
      </Paragraph>
      <FigureContainerStack>
        <FigureContainerStackItem>
          <Caption position="top">Single-Line List + Icon</Caption>
          <Figure maxWidth="360px" src={singleLineListIconPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Single-Line List + Link</Caption>
          <Figure maxWidth="360px" src={singleLineListILinkPNGSource} noMargin fluid />
        </FigureContainerStackItem>
      </FigureContainerStack>

      <Heading3>Links</Heading3>
      <Paragraph>
        Link navigates user to Modal or New page or  so user can manipulate data.
        Links should be two words or less.
      </Paragraph>
      <FigureContainer className="android-lists-page--max-width">
        <Figure maxWidth="360px" src={contentLinksPNGSource} noMargin fluid />
      </FigureContainer>

      <Heading3>Icons</Heading3>
      <Paragraph>
        Action icons placed on the right side of prymary text and navigates
        user to Contextual Menus or Modals.
      </Paragraph>
      <FigureContainer className="android-lists-page--max-width">
        <Figure maxWidth="360px" src={contentIconsPNGSource} noMargin fluid />
      </FigureContainer>
    </Section>

    <Section>
      <Heading2>Supporting Visuals</Heading2>

      <Paragraph>
        Supporting visuals placed on the left from prymary text can be icons,
        Cards Labels, Lables, Icon Templates, Images. They should be placed on
        the left side from prymary text.
      </Paragraph>

      <FigureContainerStack>
        <FigureContainerStackItem>
          <Caption position="top">Single-Line List + Icon</Caption>
          <Figure maxWidth="360px" src={singleLineListIconPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Single-Line List + Card Label Small</Caption>
          <Figure maxWidth="360px" src={singleLineListCardLabelSmallPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Single-Line List + Template</Caption>
          <Figure maxWidth="360px" src={singleLineListTemplatePNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Single-Line List + Card Label Large</Caption>
          <Figure maxWidth="360px" src={singleLineListCardLabelLargePNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Single-Line List + Image</Caption>
          <Figure maxWidth="360px" src={singleLineListImagePNGSource} noMargin fluid />
        </FigureContainerStackItem>
      </FigureContainerStack>
    </Section>

    <Section>
      <Heading2>Types</Heading2>

      <Paragraph>
        There is three types of lists: single-line list, two-line list, three line list.
      </Paragraph>

      <FigureContainerStack>
        <FigureContainerStackItem>
          <Caption position="top">Type 1: Single-Line List</Caption>
          <Figure maxWidth="360px" src={singleLineListPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Type 2: Two-Line List</Caption>
          <Figure maxWidth="360px" src={twoLineListPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Type 3: Three-Line List</Caption>
          <Figure maxWidth="360px" src={threeLineListPNGSource} noMargin fluid />
        </FigureContainerStackItem>
      </FigureContainerStack>

      <Heading3>Single-line list</Heading3>

      <Paragraph>
        One-line list items contain a maximum of one line of text. Types of
        one-line list items listed below.
      </Paragraph>

      <Grid className="android-lists-page__grid--multiple-gray">
        <FigureContainerStackItem>
          <Caption position="top">No Icon + No Icon</Caption>
          <Figure maxWidth="360px" src={singleLineListNoIconNoIconPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">No Icon + Icon</Caption>
          <Figure maxWidth="360px" src={singleLineListPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">No Icon + Link</Caption>
          <Figure maxWidth="360px" src={singleLineListNoIconLinkPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Input Control + No Icon</Caption>
          <Figure maxWidth="360px" src={singleLineListInputControlNoIconPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Icon + No Icon</Caption>
          <Figure maxWidth="360px" src={singleLineListIconNoIconPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Icon + Link</Caption>
          <Figure maxWidth="360px" src={singleLineListIconLinkPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Card + Input Control</Caption>
          <Figure maxWidth="360px" src={singleLineListCardInputControlPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Image + Icon</Caption>
          <Figure maxWidth="360px" src={singleLineListImageIconPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Image + Link</Caption>
          <Figure maxWidth="360px" src={singleLineListImageLinkPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Icon + Icon</Caption>
          <Figure maxWidth="360px" src={singleLineListIconIconPNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">No Icon + Toggle</Caption>
          <Figure maxWidth="360px" src={singleLineListTogglePNGSource} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Template + Link</Caption>
          <Figure maxWidth="360px" src={singleLineListTemplateLinkPNGSource} noMargin fluid />
        </FigureContainerStackItem>
      </Grid>

      <FigureContainer className="android-lists-page--max-width">
        <div>
          <Caption position="top">Example</Caption>
          <Figure maxWidth="360px" src={singleListLineDepartmentsPNGSource} noMargin fluid />
        </div>
      </FigureContainer>

      <Heading3>Two-line list</Heading3>

      <Paragraph>
        Two-line list items contain a maximum of two lines of text.
      </Paragraph>

      <Grid className="android-lists-page__grid--multiple-gray">
        <FigureContainerStackItem>
          <Caption position="top">No Icon + No Icon</Caption>
          <Figure maxWidth="360px" src={twoLineListNoIconNoIcon} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">No Icon + Link</Caption>
          <Figure maxWidth="360px" src={twoLineListNoIconLink} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Template + No Icon</Caption>
          <Figure maxWidth="360px" src={twoLineListTemplateNoIcon} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Card + Input Control</Caption>
          <Figure maxWidth="360px" src={twoLineListCardInputControl} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Image + Link</Caption>
          <Figure maxWidth="360px" src={twoLineListImageLink} noMargin fluid />
        </FigureContainerStackItem>
      </Grid>
      <FigureContainer className="android-lists-page--max-width">
        <div>
          <Caption position="top">Example</Caption>
          <Figure maxWidth="360px" src={twoLineListExample} noMargin fluid />
        </div>
      </FigureContainer>

      <Heading3>Three-line list</Heading3>
      <Paragraph>
        Three-line list items contains a maximum of three lines of text.
      </Paragraph>
      <Grid className="android-lists-page__grid--multiple-gray">
        <FigureContainerStackItem>
          <Caption position="top">No Icon + No Icon</Caption>
          <Figure maxWidth="360px" src={threeLineListNoIconNoIcon} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">No Icon + Link</Caption>
          <Figure maxWidth="360px" src={threeLineListNoIconLink} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Template + No Icon</Caption>
          <Figure maxWidth="360px" src={twoLineListTemplateNoIcon} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Image + Icon</Caption>
          <Figure maxWidth="360px" src={threeLineListTemplateIcon} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Template + Link</Caption>
          <Figure maxWidth="360px" src={threeLineListTemplateLink} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Input Control + No Icon</Caption>
          <Figure maxWidth="360px" src={threeLineListInputControlNoIcon} noMargin fluid />
        </FigureContainerStackItem>
      </Grid>
      <FigureContainer className="android-lists-page--max-width">
        <div>
          <Caption position="top">Example</Caption>
          <Figure maxWidth="360px" src={threeLineListExample} noMargin fluid />
        </div>
      </FigureContainer>

      <Heading3>Subtext</Heading3>
      <Grid className="android-lists-page__grid--multiple-gray">
        <FigureContainerStackItem>
          <Caption position="top">No Icon + No Icon</Caption>
          <Figure maxWidth="360px" src={subtextNoIconNoIcon} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">No Icon + Link</Caption>
          <Figure maxWidth="360px" src={subtextNoIconLink} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Input Control + No Icon</Caption>
          <Figure maxWidth="360px" src={subtextInputControlNoIcon} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Icon + No Icon</Caption>
          <Figure maxWidth="360px" src={subtextIconNoIcon} noMargin fluid />
        </FigureContainerStackItem>
        <FigureContainerStackItem>
          <Caption position="top">Card + Input Control</Caption>
          <Figure maxWidth="360px" src={subtextCardInputControl} noMargin fluid />
        </FigureContainerStackItem>
      </Grid>
      <FigureContainer className="android-lists-page--max-width">
        <div>
          <Caption position="top">Example</Caption>
          <Figure maxWidth="360px" src={subtextExample} noMargin fluid />
        </div>
      </FigureContainer>
    </Section>

  </article>
)

export default AndroidListsPage
