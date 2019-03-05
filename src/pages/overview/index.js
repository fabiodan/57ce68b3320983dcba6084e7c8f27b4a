// Libs
import React from 'react'

// Components (from atomic to composite)
import { Heading, Paragraph, Section } from '../components/sg-layout'

const OverviewPage = () => (
  <article className="overview-page">
    <Heading>Overview</Heading>
    <Section>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        cumque, libero iusto quia perferendis ullam iste, voluptatem ea odio
        temporibus facilis eos expedita aperiam. Mollitia, fuga maiores
        recusandae ea corrupti.
      </Paragraph>
    </Section>
  </article>
)

export default OverviewPage
