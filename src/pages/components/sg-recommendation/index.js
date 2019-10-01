// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon from '@asda/icon'

// Assets
import './_style.scss'

const Recommendation = ({ className, children, isRecommended }) => {
  const modifiers = [
    isRecommended && 'sg-recommendation--do',
  ]
  const classNames = joinClassNames('sg-recommendation', className, modifiers)

  return (
    <div className={classNames}>
      <div className="sg-recommendation__status">
        <Icon className="sg-recommendation__icon-close" name="close" color="white" />
        <Icon className="sg-recommendation__icon-check" name="check" color="white" />
      </div>
      {children}
    </div>
  )
}

export default Recommendation
