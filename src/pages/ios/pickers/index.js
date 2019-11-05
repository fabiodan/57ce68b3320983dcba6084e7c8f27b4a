// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, FigureContainer, Caption, Paragraph, Heading2, Section, Heading1,} from '@sg/sg-layout'

// Assets
import examplePNGSource from './images/pickers-example.png'

import './_style.scss'


const IOSPickersPage = () => (
  <article className="ios-pickers-page">

    <Heading1>Pickers</Heading1>

    <Section>
      <Heading2>Pickers</Heading2>
      <Paragraph>
        Pickers allow users to select a value from a list. Native pickers on iOS
        are best suited for a small number of values.
      </Paragraph>
      <FigureContainer>
        <Figure noMargin fluid maxWidth="350px" src={examplePNGSource} />
      </FigureContainer>
    </Section>

  </article>
)

export default IOSPickersPage
