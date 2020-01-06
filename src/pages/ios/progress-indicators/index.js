// Libs
import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Components (from atomic to composite)
import {
  Paragraph,
  Heading1,
  Heading2,
  Figure,
  GridItem,
  Grid,
  Section,
} from '@sg/sg-layout'

// Assets
import examplePNGSource from './images/progress-indicators-example.png'
import './_style.scss'

const IOSProgressIndicatorsPage = () => {
  const minWidth1024 = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <article className="ios-progress-indicators-page">
      <Heading1>Progress Indicators</Heading1>
      <Section>
        <Heading2>Progress Indicators</Heading2>
        <Paragraph>
          Progress indicators stop the user from accessing the UI of a section
          until it’s content has loaded. They are not to be used for whole page loading.
        </Paragraph>
        <Grid withBackground>
          <GridItem>
            <Figure noMargin fluid maxWidth="302px" src={examplePNGSource} />
          </GridItem>
        </Grid>
      </Section>
    </article>
  )
}

export default IOSProgressIndicatorsPage
