// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const Label = ({
  children,
  className,
  required,
  optional,
}) => {
  const modifiers = [
    required && 'label--required',
    optional && 'label--optional',
  ]
  const classNames = joinClassNames('label', className, modifiers)

  return (
    <label className={classNames}>
      { children }
    </label>
  )
}

export default Label
