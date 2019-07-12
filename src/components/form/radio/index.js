// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Button from '@asda/button'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <p className="radio__paragraph">{children}</p>
)

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
      <div className="radio__background"></div>
    </div>
  )
}

export default Radio
