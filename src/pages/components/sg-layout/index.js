// Libs
import React from 'react'
import joinClassNames from 'classnames'

import './_style.scss'

// Components (from atomic to composite)
// import Menu from './sg-menu'

const Layout = ({ children, className = '' }) => (
  <div className={`sg-layout ${className}`}>{children}</div>
)

const Aside = ({ children, className = '' }) => (
  <aside className={`sg-layout__aside ${className}`}>{children}</aside>
)

const Header = ({ children, className = '' }) => (
  <header className={`sg-layout__header ${className}`}>
    <div className="sg-layout__header__content">{children}</div>
  </header>
)

const Main = ({ children, className = '' }) => (
  <main className={`sg-layout__main ${className}`}>{children}</main>
)

const Section = ({ children, className = '' }) => (
  <section className={`sg-layout__section ${className}`}>{children}</section>
)

const Heading = ({ children, className = '' }) => (
  <h2 className={`sg-layout__heading ${className}`}>{children}</h2>
)

const Paragraph = ({ children, className, noMargin }) => {
  const modifiers = [
    noMargin && 'sg-layout__paragraph--no-margin',
  ]
  const classNames = joinClassNames('sg-layout__paragraph', className, modifiers)

  return (
    <div className={classNames}>{children}</div>
  )
}

const Subheading = ({ children, className = '' }) => (
  <h3 className={`sg-layout__subheading ${className}`}>{children}</h3>
)

const Figure = ({
  src, alt, className = '', maxWidth = 'none', caption = null, noMargin, fluid,
}) => {
  const modifiers = [
    noMargin && 'sg-layout__figure--no-margin',
    fluid && 'sg-layout__figure--fluid',
  ]
  const classNames = joinClassNames('sg-layout__figure', className, modifiers)
  const style = { maxWidth }

  return (
    <figure className={classNames} style={style}>
      { caption && <figcaption className="sg-layout__figure__caption">{caption}</figcaption> }
      <img className="sg-layout__figure__img" src={src} alt={alt} />
    </figure>
  )
}

const Caption = ({ children, className, position = 'bottom' }) => {
  const modifiers = [
    position && `sg-layout__caption--position-${position}`,
  ]
  const classNames = joinClassNames('sg-layout__caption', className, modifiers)

  return (
    <div className={classNames}>
      { children }
    </div>
  )
}

export {
  Layout as default,
  Aside,
  Header,
  Main,
  Section,
  Heading,
  Subheading,
  Paragraph,
  Figure,
  Caption,
}
