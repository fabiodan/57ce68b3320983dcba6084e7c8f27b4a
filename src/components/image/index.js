// Libs
import React from 'react'
import joinClassNames from 'classnames'

const Image = ({
  className, src, alt, title,
}) => {
  const modifiers = []

  const classNames = joinClassNames('image', className, modifiers)

  return (
    <img className={classNames} src={src} alt={alt} title={title} />
  )
}

export { Image as default }
