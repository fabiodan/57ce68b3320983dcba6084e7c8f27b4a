// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)

// Assets
import './_style.scss'

const Notification = ({
  className,
  children,
}) => {
  const modifiers = [
    children.length > 1 && 'notification--more-than-two',
  ]
  const classNames = joinClassNames('notification', className, modifiers)

  return (
    <span className={classNames}>
      {children}
    </span>
  )
}

export default Notification
