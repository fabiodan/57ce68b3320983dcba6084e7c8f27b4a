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
      <span className="button__content">
        {spinner}
        {props.children}
      </span>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

Button.defaultProps = {
  category: 'primary',
  color: 'green',
  type: 'button',
}

export default Button
