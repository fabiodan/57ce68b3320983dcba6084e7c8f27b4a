/* Spinner Component */

// Libs
import React from 'react'

// Utils
import getClassList from '@asda/apl-base/utils'

// Assets
import './_style.scss'

// Config
import { BLOCK, MOD_ATTRS } from './constants'

const Spinner = (props) => {
  const circles = []

  for (let deg = 30; deg <= 330; deg += 30) {
    circles.push(<SpinnerCircle deg={deg} key={`deg${deg}`} />)
  }

  return (
    <div className={getClassList(BLOCK, MOD_ATTRS, props)}>
      <div className={`${BLOCK}__container`}>
        <div className={`${BLOCK}__circle`} />
        { circles }
      </div>
    </div>
  )
}

const SpinnerCircle = props => (
  <div className={`${BLOCK}__circle ${BLOCK}--rotate-${props.deg}deg`} />
)

const SpinnerOverlay = (props) => {
  if (!props.show) return null

  if (props.showOverlay) {
    return (
      <div className={`${BLOCK}__overlay`}>
        <Spinner {...props} />
      </div>
    )
  }

  return <Spinner {...props} />
}

export default SpinnerOverlay
