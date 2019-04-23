// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Label from './label'
import Input from './input'

// Assets
import './_style.scss'

const Form = ({
  children,
  className,
}) => {
  const modifiers = []
  const classNames = joinClassNames('form', className, modifiers)

  return (
    <form className={classNames}>{children}</form>
  )
}

export {
  Form as default,
  Label,
  Input,
}
