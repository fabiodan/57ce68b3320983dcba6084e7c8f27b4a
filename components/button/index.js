/* Button Component */

// Libs
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import classNames from 'classnames'

// Components
import Spinner from '@asda/spinner'

// Style
import './_style.scss'

const Button = props => {

const classes = classNames('button', props.className, [
  { 'button--primary': props.category === 'primary' },
  { 'button--secondary': props.category === 'secondary' },
  { 'button--tertiary': props.category === 'tertiary' },
  { 'button--green': props.color === 'green' },
  { 'button--blue': props.color === 'blue' },
  { 'button--red': props.color === 'red' },
  { 'button--hidden': props.hidden },
  { 'button--fluid': props.fluid },
  { 'button--active': props.active },
  { 'button--disabled': props.disabled },
  { 'button--loading': props.loading },
])

  const spinner = props.loading
    && <Spinner className="button__spinner" size="small" />

  return (
    <button
      aria-disabled={props.disabled}
      className={classes}
      onClick={props.onClick}
      type={props.type}
    >
      <span className={`button__content`}>
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
