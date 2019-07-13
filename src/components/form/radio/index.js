// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const Radio = ({
  className,
  checked,
  disabled,
  indeterminate,
  name,
  id,

  // For demo purposes only
  hover,
}) => {
  const modifiers = [
    hover && 'radio--hover',
  ]
  const classNames = joinClassNames('radio', className, modifiers)

  return (
    <div className={classNames}>
      <input
        type="radio"
        className="radio__input"
        defaultChecked={indeterminate || checked}
        disabled={disabled}
        id={id}
        name={name}
      />
      <div className="radio__background" />
    </div>
  )
}

export default Radio
