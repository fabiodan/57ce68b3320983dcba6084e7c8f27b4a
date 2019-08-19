// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Button from '@asda/button'

// Assets
import './_style.scss'

const SubComponent = ({ children }) => (
  <p className="status-label__paragraph">{children}</p>
)

const StatusLabel = ({
  className,
  color,
  hidden,
  children,
}) => {
  const modifiers = [
    !!color && `status-label--${color}`,
    hidden && 'status-label--hidden',
  ]
  const classNames = joinClassNames('status-label', className, modifiers)

  return (
    <span className={classNames}>
      {children}
    </span>
  )
}

StatusLabel.defaultProps = {
  color: 'blue',
}

export default StatusLabel
