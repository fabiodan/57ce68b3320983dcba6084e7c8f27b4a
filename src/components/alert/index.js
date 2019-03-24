// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon, { IconButton } from '@asda/icon'

// Assets
import './_style.scss'

const Alert = ({
  children,
  className,
  color,
  hidden,
  type,
  iconName,
}) => {
  const modifiers = [
    !!color && `alert--${color}`,
    !!type && `alert--${type}`,
    !!iconName && 'alert--with-icon',
    hidden && 'alert--hidden',
  ]
  const classNames = joinClassNames('alert', className, modifiers)

  return (
    <dialog className={classNames} open>
      <div className="alert__container">
        { iconName &&
        <Icon className="alert__icon" size="x-small" name={iconName} /> }

        { children }

        { type === 'temporary' &&
        <IconButton className="alert__icon-close" size="x-small" name="close" /> }
      </div>
    </dialog>
  )
}

Alert.defaultProps = {
  type: 'persistent',
}

export default Alert
