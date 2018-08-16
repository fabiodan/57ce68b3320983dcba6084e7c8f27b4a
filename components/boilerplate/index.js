/* Boilerplate Component */

// Libs
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import getClasses from '@asda/base'

// Config
import { BLOCK, MODIFIERS } from './constants'

// Components
import Spinner from '@asda/spinner'

// Style
import './_style.scss'

const Boilerplate = props => {
  return (
    <div className={BLOCK}>
      {props.children}
      <section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quae
        soluta perferendis dolor, magnam, consequatur ducimus impedit unde quod
        temporibus reiciendis iste cumque explicabo nemo veritatis odio quia
        provident quisquam.
      </section>
    </div>
  )
}

const BoilerplateHeader = props => (
  <header className={`${BLOCK}__header`}>
    {props.children}
  </header>
)

export {
  Boilerplate as default,
  BoilerplateHeader
}
