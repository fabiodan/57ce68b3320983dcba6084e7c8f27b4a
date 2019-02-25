// Libs
import React from 'react'

import './_style.scss'

// Components (from atomic to composite)
// import Menu from './menu'

const Layout = ({ children, className }) => (
  <div className={`layout ${className}`}>{children}</div>
)

const Aside = ({ children, className }) => (
  <aside className={`layout__aside ${className}`}>{children}</aside>
)

const Header = ({ children, className }) => (
  <header className={`layout__header ${className}`}>
    <div className="layout__header__content">{children}</div>
  </header>
)

const Main = ({ children, className }) => (
  <main className={`layout__main ${className}`}>{children}</main>
)

const Section = ({ children, className }) => (
  <section className={`layout__section ${className}`}>{children}</section>
)

const Heading = ({ children, className }) => (
  <h2 className={`layout__heading ${className}`}>{children}</h2>
)

const Paragraph = ({ children, className }) => (
  <p className={`layout__paragraph ${className}`}>{children}</p>
)

const Subheading = ({ children, className }) => (
  <h3 className={`layout__subheading ${className}`}>{children}</h3>
)

export {
  Layout as default,
  Aside,
  Header,
  Main,
  Section,
  Heading,
  Subheading,
  Paragraph,
}
