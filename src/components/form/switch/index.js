// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const Switch = ({
  className,
  checked,
  id,
  disabled,
}) => {
  const modifiers = []
  const classNames = joinClassNames('switch', className, modifiers)

  return (
    <div className={classNames}>
      <input type="checkbox" className="switch__input" defaultChecked={checked} id={id} disabled={disabled} />
      <div className="switch__background">
        <div className="switch__thumb" />
      </div>
    </div>
  )
}

export default Switch
