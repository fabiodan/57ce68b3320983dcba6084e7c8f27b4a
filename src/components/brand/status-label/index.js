// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Button from '@asda/button'

// Assets
import './_style.scss'

const StatusLabel = ({
  className,
  status,
  children,
}) => {
  const modifiers = [
    !!status && `status-label--${status}`,
  ]
  const classNames = joinClassNames('status-label', className, modifiers)

  return (
    <span className={classNames}>
      {children}
    </span>
  )
}

StatusLabel.defaultProps = {
  status: 'progress',
}

export default StatusLabel
