// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Button from '@asda/button'

// Assets
import './_style.scss'

const Notification = ({
  className,
  status,
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
