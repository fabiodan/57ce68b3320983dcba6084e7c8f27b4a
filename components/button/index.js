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

const ButtonSpinner = props => {
  if (!props.loading) return null

  return (
    <Spinner className={`${BLOCK}__spinner`} size="small" />
  )
}

const Button = props => {
  const mixes = props.className

  return (
    <button
      className={getClasses(BLOCK, MODIFIERS, props)}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      <ButtonSpinner loading={props.loading} />
      {props.children}
    </button>
  )
}

export default Button
