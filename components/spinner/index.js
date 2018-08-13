/* Spinner Component */

// Libs
import React from 'react'

// Utils
import getClasses from '../base'

// Config
import { BLOCK, MODIFIERS } from './constants'

// Styles
import './_style.scss'

const Spinner = (props) => {
  const circles = []

  for (let deg = 30; deg <= 330; deg += 30) {
    circles.push(<SpinnerCircle deg={deg} key={`deg${deg}`} />)
  }

  return (
    <div className={getClasses(BLOCK, MODIFIERS, props)}>
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

export default Spinner
