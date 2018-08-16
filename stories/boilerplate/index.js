// Libs
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs/react'

// Components
import Boilerplate, { BoilerplateHeader } from '@asda/boilerplate'

// Style
import './_style.scss'

const BoilerplateStory = storiesOf('Boilerplate', module)
  .add('Sample', () => (
    <Boilerplate>
      <BoilerplateHeader>
        {text('Text', 'Headline')}
      </BoilerplateHeader>
    </Boilerplate>
  ))

export default BoilerplateStory
