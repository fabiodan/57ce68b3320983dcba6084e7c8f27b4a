/* Button Component */

// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const Button = ({
  children,
  className,
  category,
  color = 'green',
  hover,
  loading,
  hiddenText,
  disabled,
  fluid,
}) => {
  const modifiers = [
    !!category && `button--${category}`,
    !!color && `button--${color}`,
    hover && 'button--hover',
    loading && 'button--loading',
    hiddenText && 'button--hidden-text',
    disabled && 'button--disabled',
    fluid && 'button--fluid',
  ]
  const classNames = joinClassNames('button', className, modifiers)

  return (
    <button
      className={classNames}
      aria-disabled={disabled}
    >
      <span className="button__text">{children}</span>
    </button>
  )
}

Button.defaultProps = {
  category: 'primary',
  color: 'green',
  disabled: null,
  fluid: false,
}

export default Button
