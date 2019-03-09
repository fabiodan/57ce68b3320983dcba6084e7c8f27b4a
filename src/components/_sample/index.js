/* Sample Component */

// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components
import Button from '@asda/button'

// Assets
import './_style.scss'

const Component = ({ children }) => (
  <p className="sample__paragraph">{children}</p>
)

const Sample = ({
  children,
  className,
  color,
  hidden,
}) => {
  const modifiers = [
    !!color && `button--${color}`,
    hidden && 'button--hidden',
  ]
  const classNames = joinClassNames('sample', className, modifiers)

  return (
    <div className="sample">
      <Button>Click Here</Button>
      <Component>Some text</Component>
    </div>
  )
}

export default Sample
