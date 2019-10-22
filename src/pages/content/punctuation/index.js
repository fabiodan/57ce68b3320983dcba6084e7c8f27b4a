// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, Paragraph, Heading2, Section, Heading1 } from '@sg/sg-layout'

// Assets
import './_style.scss'

const MyComponent = ({ children }) => (
  <div className="content-punctuation-page__component">{ children }</div>
)

const ContentPunctuationPage = () => (
  <article className="content-punctuation-page">

    <Heading1>Punctuation</Heading1>

    <Section>
      <Heading2>Heading2 1</Heading2>
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Vero, necessitatibus quaerat animi dolorem voluptates illum voluptatibus
        quo quidem blanditiis unde omnis eum fugiat dicta impedit doloremque
        quas voluptatem perferendis fugit!
      </Paragraph>

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


    </Section>

  </article>
)

export default ContentPunctuationPage
