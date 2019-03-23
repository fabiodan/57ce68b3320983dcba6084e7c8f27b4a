// Libs
import React, { Fragment } from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const LinkAnchor = ({ children, className, href, target}) => {
  const modifiers = []
  const classNames = joinClassNames('link', className, modifiers)

  return (
    <a href={href} className={classNames} target={target}>{children}</a>
  )
}


const LinkButton = ({ children, className, align }) => {
  const modifiers = [
    'link--button',
    align && `link--${align}`,
  ]

  const classNames = joinClassNames('link', className, modifiers)

  return (
    <button className={classNames}>{children}</button>
  )
}


export {
  LinkAnchor,
  LinkButton,
}
