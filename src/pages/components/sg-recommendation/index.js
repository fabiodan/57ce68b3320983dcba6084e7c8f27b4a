// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon from '@asda/icon'

// Assets
import './_style.scss'

const Recommendation = ({ className, children }) => {
  const modifiers = []
  const classNames = joinClassNames('sg-recommendation', className, modifiers)

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

const RecommendationStatus = ({ className, recommended }) => {
  const modifiers = [
    recommended && 'sg-recommendation__status--do',
  ]
  const classNames = joinClassNames('sg-recommendation__status', className, modifiers)

  return (
    <div className={classNames}>
      <Icon className="sg-recommendation__icon-close" name="close" color="white" />
      <Icon className="sg-recommendation__icon-check" name="check" color="white" />
    </div>
  )
}

export {
  Recommendation as default,
  RecommendationStatus,
}
