// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const LinkText = ({
  children, className, href, target, color, download,
}) => {
  const modifiers = [

    // Use that modifier to make a text link to
    // inherit the color from the current text.
    color && `link--${color}`,
  ]
  const classNames = joinClassNames('link', className, modifiers)

  return (
    <a href={href} className={classNames} target={target} download={download}>
      {children}
    </a>
  )
}

LinkText.defaultProps = {
  download: null,
}

const LinkButton = ({
  children, className, align, onClick, disabled,
}) => {
  const modifiers = [
    'link--button',
    !!align && `link--${align}`,
    disabled && 'link--disabled',
  ]

  const classNames = joinClassNames('link', className, modifiers)
  const clickHandler = (e) => {
    e.stopPropagation()

    if (disabled) return
    if (onClick) onClick()
  }

  return (
    <button className={classNames} onClick={clickHandler} aria-disabled={disabled}>
      {children}
    </button>
  )
}

LinkButton.defaultProps = {
  onClick: null,
}

export {
  LinkText,
  LinkButton,
}
