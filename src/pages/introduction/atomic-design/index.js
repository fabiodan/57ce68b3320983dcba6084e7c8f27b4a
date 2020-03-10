// Libs
import React from 'react'

// Components (from atomic to composite)
import { LinkText } from '@asda/link'
import {
  Heading1,
  Heading2,
  Figure,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import atomicDesignPrinciplesPNGSource from './images/atomic-design-principles.png'
import baseElementsPNGSource from './images/base-elements.png'
import elementsAtomsPNGSource from './images/elements-atoms.png'
import elementsMoleculesPNGSource from './images/elements-molecules.png'
import elementsOrganismsPNGSource from './images/elements-organisms.png'
import elementsTemplatesPNGSource from './images/elements-templates.png'
import elementsPagesPNGSource from './images/elements-pages.png'
import './_style.scss'

const elements = {
  atom: elementsAtomsPNGSource,
  molecule: elementsMoleculesPNGSource,
  organism: elementsOrganismsPNGSource,
  template: elementsTemplatesPNGSource,
  page: elementsPagesPNGSource,
}

const AtomicElement = ({ type, children }) => {
  return (
    <div className="introduction-atomic-design-page__atomic-element">
      <Figure
        className="introduction-atomic-design-page__atomic-element__figure"
        maxWidth="100px" src={elements[type]} noMargin
      />
      <div className="introduction-atomic-design-page__atomic-element__text">
        {children}
      </div>
    </div>
  )
}

const CommonAtomicDesignPage = () => (
  <article className="introduction-atomic-design-page">

    <Heading1>Atomic design</Heading1>

    <Section>
      <Heading2>Atomic design principles</Heading2>
      <Paragraph>
        Atomic design builds upon the principles of chemistry to make the
        creation and reuse of components easier. We follow these principles
        within our libraries.
      </Paragraph>
      <Figure maxWidth="878px" src={atomicDesignPrinciplesPNGSource} noMargin fluid />
    </Section>

    <Section>
      <Heading2>Base elements</Heading2>

      <AtomicElement type="atom">
        <Paragraph>
          <strong>Atoms</strong> form the base level of components that are used
          throughout the libraries.
        </Paragraph>
        <Paragraph noMargin>
          <strong>Atoms</strong> are combined to create <strong>Molecules</strong>.
        </Paragraph>
      </AtomicElement>

      <AtomicElement type="molecule">
        <Paragraph>
          <strong>Molecules</strong> are simple components that are formed by combining <strong>Atoms</strong>.
        </Paragraph>
        <Paragraph noMargin>
          These components tend to be the main building blocks when creating new designs.
        </Paragraph>
      </AtomicElement>

      <AtomicElement type="organism">
        <Paragraph>
          <strong>Organisms</strong> are more complicated components that are formed by combining <strong>Molecules</strong>.
        </Paragraph>
        <Paragraph noMargin>
          Organisms contain Molecules that can be swapped out to provide a different experience.
        </Paragraph>
      </AtomicElement>

      <Figure maxWidth="878px" src={baseElementsPNGSource} fluid />

      <AtomicElement type="template">
        <Paragraph noMargin>
          <strong>Templates</strong> are the culmination of
          many <strong>Organisms</strong> - they usually document specific
          patterns and are reusable across multiple journeys.
        </Paragraph>
      </AtomicElement>

      <AtomicElement type="page">
        <Paragraph noMargin>
          <strong>Pages</strong> are full screen designs showing a single page.
        </Paragraph>
      </AtomicElement>

      <Paragraph>
        For further information check {' '}
        <LinkText target="_blank" href="http://atomicdesign.bradfrost.com/chapter-2/">
          chapter 2 of the Atomic Design book
        </LinkText>.
      </Paragraph>
    </Section>

  </article>
)

export default CommonAtomicDesignPage
