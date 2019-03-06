/* Button Component */

// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components
import Spinner from '@asda/spinner'

// Assets
import './_style.scss'

const ButtonIcon = ({ children }) => {
  return (
    <span className="button__icon">{children}</span>
  )
}

const Button = ({
  children,
  className,
  category,
  color,
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
    hiddenText && 'button--hidden-text',
    disabled && 'button--disabled',
    fluid && 'button--fluid',
  ]
  const classNames = joinClassNames('button', className, modifiers)
  const spinnerColor = category === 'primary' ? 'white' : color

  return (
    <button className={classNames} aria-disabled={disabled}>

      { loading && <ButtonIcon><Spinner color={spinnerColor}/></ButtonIcon> }

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
