// Libs
import React, { Component } from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon from '@asda/icon'

// Assets
import './_style.scss'

const Dropdown = ({
  className,
  children,

  // For demonstration purposes only
  hover,
  focus,
}) => {
  const modifiers = [

    // For demonstration purposes only
    hover && 'dropdown--hover',
    focus && 'dropdown--focus',
  ]
  const classNames = joinClassNames('dropdown', className, modifiers)

  return (
    <div className={classNames}>
      {children}
      <Icon className="dropdown__icon" name="caret-down" size="x-small" />
    </div>
  )
}

const DropdownSelect = ({
  className,
  children,
  onChange,
  defaultValue,
}) => {
  const modifiers = []
  const classNames = joinClassNames('dropdown__element', className, modifiers)

  return (
    <select
      className={classNames}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  )
}

const DropdownOption = ({
  className,
  children,
  selected,
  value,
}) => {
  const modifiers = []
  const classNames = joinClassNames('dropdown__option', className, modifiers)

  return (
    <option className={classNames} selected={selected} value={value}>
      {children}
    </option>
  )
}

export {
  Dropdown as default,
  DropdownSelect,
  DropdownOption,
}
