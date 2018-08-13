/* Button Component */

// Libs
import React from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  category: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button
