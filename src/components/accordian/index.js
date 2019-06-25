// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import { LinkButton, LinkText } from '@asda/link'

// Assets
import './_style.scss'

const Accordian = ({
  className,
  children,
  open,

  // For demonstration purposes only
  hover,
}) => {
  const modifiers = [
    open && 'accordian--open',
    hover && 'accordian--hover',
  ]
  const classNames = joinClassNames('accordian', className, modifiers)

  return (
    <div className={classNames}>{children}</div>
  )
}

const AccordianHeader = ({
  className,
  children,
  onClick,
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordian__header', className, modifiers)

  return (
    <header className={classNames} onClick={onClick}>{children}</header>
  )
}

const AccordianContent = ({
  className,
  children,
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordian__content', className, modifiers)

  return (
    <section className={classNames}>{children}</section>
  )
}

const AccordianTitle = ({
  className,
  children,
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordian__title', className, modifiers)

  return (
    <h2 className={classNames}>{children}</h2>
  )
}

const AccordianButton = ({
  className,
  children,
  ...rest,
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordian__button', className, modifiers)

  return (
    <LinkButton className={classNames} align="right" {...rest}>
      {children}
    </LinkButton>
  )
}

const AccordianLink = ({
  className,
  children,
  ...rest,
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordian__button', className, modifiers)

  return (
    <LinkText className={classNames} align="right" {...rest}>
      {children}
    </LinkText>
  )
}

export {
  Accordian as default,
  AccordianHeader,
  AccordianContent,
  AccordianTitle,
  AccordianButton,
  AccordianLink,
}
