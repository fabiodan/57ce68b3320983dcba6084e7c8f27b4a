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
  inline,
  htmlFor,
  disabled,
}) => {
  const modifiers = [
    required && 'label--required',
    optional && 'label--optional',
    inline && 'label--inline',
    htmlFor && 'label--clickable',
    disabled && 'label--disabled'
  ]
  const classNames = joinClassNames('label', className, modifiers)

  return (
    <label className={classNames} htmlFor={htmlFor}>
      { children }
    </label>
  )
}

export default Label
