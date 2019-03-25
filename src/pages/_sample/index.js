// Libs
import React from 'react'

// Components (from atomic to composite)
import Sample from '@asda/_sample'
import { Figure, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import sampleSVGSource from './images/sample.svg'
import './_style.scss'

const Component = ({ children }) => (
  <div className="sample-page__component">{ children }</div>
)

const SamplePage = () => (
  <article className="sample-page">

    <Heading>Heading</Heading>

    <Section>
      <Subheading>Subheading 1</Subheading>
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Vero, necessitatibus quaerat animi dolorem voluptates illum voluptatibus
        quo quidem blanditiis unde omnis eum fugiat dicta impedit doloremque
        quas voluptatem perferendis fugit!
      </Paragraph>

      <Component><Sample /></Component>

      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragraph>
    </Section>

    <Section>
      <Subheading>Subheading 2</Subheading>
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragraph>

      <Component>Vero, necessitatibus quaerat animi!</Component>

      <Figure maxWidth="815px" src={sampleSVGSource} />

    </Section>

  </article>
)

export default SamplePage
