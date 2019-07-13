// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import { LinkButton, LinkText } from '@asda/link'

// Assets
import './_style.scss'

const Accordion = ({
  className,
  children,
  open,

  // For demonstration purposes only
  hover,
}) => {
  const modifiers = [
    open && 'accordion--open',
    hover && 'accordion--hover',
  ]
  const classNames = joinClassNames('accordion', className, modifiers)

  return (
    <div className={classNames}>{children}</div>
  )
}

const AccordionHeader = ({
  className,
  children,
  onClick,
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordion__header', className, modifiers)

  return (
    <header className={classNames} onClick={onClick}>{children}</header>
  )
}

const AccordionContent = ({
  className,
  children,
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordion__content', className, modifiers)

  return (
    <section className={classNames}>{children}</section>
  )
}

const AccordionTitle = ({
  className,
  children,
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordion__title', className, modifiers)

  return (
    <h2 className={classNames}>{children}</h2>
  )
}

const AccordionButton = ({
  className,
  children,
  ...rest
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordion__button', className, modifiers)

  return (
    <LinkButton className={classNames} align="right" {...rest}>
      {children}
    </LinkButton>
  )
}

const AccordionLink = ({
  className,
  children,
  ...rest
}) => {
  const modifiers = []
  const classNames = joinClassNames('accordion__button', className, modifiers)

  return (
    <LinkText className={classNames} align="right" {...rest}>
      {children}
    </LinkText>
  )
}

export {
  Accordion as default,
  AccordionHeader,
  AccordionContent,
  AccordionTitle,
  AccordionButton,
  AccordionLink,
}
