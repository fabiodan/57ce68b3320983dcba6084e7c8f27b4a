// Libs
import React from 'react'

// Components (from atomic to composite)
import Sample from '@asda/_sample'
import { Figure, Paragraph, Heading2, Section, Heading1 } from '@sg/sg-layout'

// Assets
import sampleSVGSource from './images/sample.svg'
import './_style.scss'

const MyComponent = ({ children }) => (
  <div className="sample-page__component">{ children }</div>
)

const SamplePage = () => (
  <article className="sample-page">

    <Heading1>Heading1</Heading1>

    <Section>
      <Heading2>Heading2 1</Heading2>
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Vero, necessitatibus quaerat animi dolorem voluptates illum voluptatibus
        quo quidem blanditiis unde omnis eum fugiat dicta impedit doloremque
        quas voluptatem perferendis fugit!
      </Paragraph>

      <MyComponent><Sample /></MyComponent>

      <Paragraph noMargin>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Heading2 2</Heading2>
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragraph>

      <MyComponent>Vero, necessitatibus quaerat animi!</MyComponent>

      <Figure maxWidth="815px" src={sampleSVGSource} noMargin fluid />

    </Section>

  </article>
)

export default SamplePage
