// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon from '@asda/icon'

// Assets
import './_style.scss'

const Checkbox = ({
  className,
  checked,
  disabled,
  indeterminate,
  id,

  // For demo purposes only
  hover,
}) => {
  const modifiers = [
    indeterminate && 'checkbox--indeterminate',
    hover && 'checkbox--hover',
  ]
  const classNames = joinClassNames('checkbox', className, modifiers)

  return (
    <div className={classNames}>
      <input
        type="checkbox"
        className="checkbox__input"
        defaultChecked={indeterminate || checked}
        disabled={disabled}
        id={id}
      />
      <Icon className="checkbox__icon checkbox__icon-check" name="check" size="x-small" color="white"></Icon>
      <Icon className="checkbox__icon checkbox__icon-minus" name="minus" size="x-small" color="white"></Icon>
      <div className="checkbox__background"></div>
    </div>
  )
}

export default Checkbox
