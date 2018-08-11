/* Button Component */

// Libs
import React from 'react'

// Utils
import getClasses from '../base'

// Config
import { BLOCK, MODIFIERS } from './constants'

// Components
import Spinner from '../spinner/'

// Style
import './_style.scss'

const Button = props => {
  const spinner = props.loading
    && <Spinner className={`${BLOCK}__spinner`} size="small" />

  return (
    <button
      aria-disabled={props.disabled}
      className={getClasses(BLOCK, MODIFIERS, props)}
      onClick={props.onClick}
      type={props.type}
    >
      {spinner}
      {props.children}
    </button>
  )
}

export default Button
