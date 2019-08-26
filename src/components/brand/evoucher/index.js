// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Button from '@asda/button'

// Assets
import './_style.scss'

const Evoucher = ({
  className,
  children,
  category,
}) => {
  const modifiers = [
    !!category && `evoucher--${category}`,
  ]
  const classNames = joinClassNames('evoucher', className, modifiers)

  return (
    <div className={classNames}>
      <div className="evoucher__category">{category}</div>
      <div className="evoucher__value">£{children}</div>
    </div>
  )
}

Evoucher.defaultProps = {
  category: 'bronze',
}

export default Evoucher
