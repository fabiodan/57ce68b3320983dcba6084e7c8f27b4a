// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import Spinner from '@asda/spinner'

// Assets
import './_style.scss'

const ButtonIcon = ({ children }) => (
  <span className="button__icon">{children}</span>
)

const Button = ({
  children,
  iconName,
  className,
  category,
  color,
  hover, // For demo purposes only
  loading,
  hiddenText,
  disabled,
  fluid,
  onClick,
}) => {
  const modifiers = [
    !!category && `button--${category}`,
    !!color && `button--${color}`,
    hover && 'button--hover', // For demo purposes only
    hiddenText && 'button--hidden-text',
    disabled && 'button--disabled',
    fluid && 'button--fluid',
  ]
  const classNames = joinClassNames('button', className, modifiers)
  const iconColor = category === 'primary' ? 'white' : color

  return (
    <button className={classNames} aria-disabled={disabled} onClick={onClick}>

      { loading && <ButtonIcon><Spinner color={iconColor} /></ButtonIcon> }
      { iconName && <Icon className="button__icon" name={iconName} color={iconColor} /> }

      <span className="button__text">{children}</span>
    </button>
  )
}

Button.defaultProps = {
  category: 'primary',
  color: 'green',
  disabled: null,
  fluid: false,
  onClick() {},
}

export default Button
