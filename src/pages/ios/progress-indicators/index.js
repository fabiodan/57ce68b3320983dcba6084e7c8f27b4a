// Libs
import React from 'react'

// Components (from atomic to composite)
import { Figure, FigureContainer, Caption, Paragraph, Heading2, Section, Heading1,} from '@sg/sg-layout'

// Assets
import examplePNGSource from './images/progress-indicators-example.png'

import './_style.scss'


const IOSProgressIndicatorsPage = () => (
  <article className="ios-progress-indicators-page">

    <Heading1>Progress Indicators</Heading1>

    <Section>
      <Heading2>Progress Indicators</Heading2>
      <Paragraph>
        Progress indicators let the user know that an action is being processed.
      </Paragraph>
      <FigureContainer>
        <Figure noMargin fluid maxWidth="330px" src={examplePNGSource} />
      </FigureContainer>
    </Section>

  </article>
)

export default IOSProgressIndicatorsPage
