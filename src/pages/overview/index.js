// Libs
import React from 'react'

// Components (from atomic to composite)
import Icon from '@asda/icon'
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

    <Icon name="browse" size="xx-small" />
    <Icon name="browse" size="x-small" />
    <Icon name="browse" size="small" />
    <Icon name="browse" size="medium" />
    <Icon name="browse" />
    <Icon name="browse" size="large" />

    <Icon name="chevron-down" size="xx-small" />
    <Icon name="chevron-down" size="x-small" />
    <Icon name="chevron-down" size="small" />
    <Icon name="chevron-down" size="medium" />
    <Icon name="chevron-down" />
    <Icon name="chevron-down" size="large" />

  </article>
)

export default OverviewPage
