// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)

// Assets
import './_style.scss'

const Tooltip = ({
  className,
  children,
  arrowPosX,
  arrowPosY,
  title,
  size,
  error,
}) => {
  const modifiers = [
    error && 'tooltip--error',
    !!title && 'tooltip--with-title',
    !title && size === 'small' && 'tooltip--small',
  ]
  const classNames = joinClassNames('tooltip', className, modifiers)

  return (
    <div className={classNames}>
      {title && <h2 className="tooltip__title">{title}</h2>}
      {children}
      <TooltipArrow arrowPosX={arrowPosX} arrowPosY={arrowPosY} />
    </div>
  )
}

Tooltip.defaultValue = {
  arrosPos: 'bottomLeft',
}

const TooltipArrow = ({
  className,
  arrowPosX,
  arrowPosY,
}) => {
  const modifiers = [
    !!arrowPosX && `tooltip__arrow--pos-x-${arrowPosX}`,
    !!arrowPosY && `tooltip__arrow--pos-y-${arrowPosY}`,
  ]
  const classNames = joinClassNames('tooltip__arrow', className, modifiers)

  return (
    <svg className={classNames} viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="m0 0h11.5999294l-4.19996471 5.24989793c-.1137085.14213406-.24838867.26839532-.4.37499586-.8836556.62131349-2.1372583.45342212-2.8-.37499586z" />
    </svg>
  )
}

export default Tooltip
