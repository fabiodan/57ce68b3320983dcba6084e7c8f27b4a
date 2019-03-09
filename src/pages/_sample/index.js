// Libs
import React from 'react'

// Components (from atomic to composite)
import Sample from '@asda/_sample'
import { Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
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
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragraph>
      <Component><Sample /></Component>
    </Section>

    <Section>
      <Subheading>Subheading 2</Subheading>
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragraph>
      <Component>Vero, necessitatibus quaerat animi!</Component>
    </Section>

  </article>
)

export default SamplePage
