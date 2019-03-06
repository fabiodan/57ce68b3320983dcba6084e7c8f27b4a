/* Button Component */

// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const Spinner = ({ className, color }) => {
  const modifiers = [
    !!color && `spinner--${color}`,
  ]
  const classNames = joinClassNames('spinner', className, modifiers)

  return (
    <div className={classNames} />
  )
}

export default Spinner
