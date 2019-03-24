// Libs
import React, { Fragment } from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const LinkText = ({ children, className, href, target, color}) => {
  const modifiers = [

    // Use that modifier to make a text link to
    // inherit the color from the current text.
    color && `link--${color}`,
  ]
  const classNames = joinClassNames('link', className, modifiers)

  return (
    <a href={href} className={classNames} target={target}>{children}</a>
  )
}

const LinkStandalone = ({ children, className, align }) => {
  const modifiers = [
    'link--button',
    !!align && `link--${align}`,
  ]

  const classNames = joinClassNames('link', className, modifiers)

  return (
    <button className={classNames}>{children}</button>
  )
}

export {
  LinkText,
  LinkStandalone,
}
