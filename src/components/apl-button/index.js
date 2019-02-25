/* Button Component */

// Libs
import React from 'react'

// Utils
import getClassList from '@asda/apl-base/utils'

// Components (from atomic to composite)
import { Link, NavLink } from 'react-router-dom'
import Spinner from '@asda/apl-spinner'

// Assets
import './_style.scss'

// Config
import { BLOCK, MOD_ATTRS } from './constants'

const ButtonSpinner = props => (
  <Spinner show={props.loading} small className={`${BLOCK}__spinner`} />
)

const ButtonIcon = props => (
  <span className={`${BLOCK}__icon`}>
    {props.children}
  </span>
)

const Button = props => (
  <button
    className={getClassList(BLOCK, MOD_ATTRS, props)}
    disabled={props.disabled}
    onClick={props.onClick}
    type={props.type}
  >
    <ButtonSpinner {...props} />
    {props.children}
  </button>
)

const ButtonAnchor = props => (
  <a
    className={getClassList(BLOCK, MOD_ATTRS, props)}

    // Omit href when anchor is disabled, since this attrib is not required:
    // https://www.w3.org/TR/html5/links.html#links-created-by-a-and-area-elements
    href={props.disabled ? null : props.href}
    onClick={props.onClick}
    target={props.target}
    role="button"
  >
    <ButtonSpinner {...props} />
    {props.children}
  </a>
)

const ButtonLink = (props) => {
  // Return ButtonAnchor instead to suppress the href attribute when disabled
  if (props.disabled) return <ButtonAnchor {...props} />

  return (
    <Link
      className={getClassList(BLOCK, MOD_ATTRS, props)}
      innerRef={props.innerRef}
      replace={props.replace}
      to={props.to}
      role="button"
    >
      <ButtonSpinner {...props} />
      {props.children}
    </Link>
  )
}

const ButtonNavLink = (props) => {
  // Return ButtonAnchor instead to suppress the href attribute when disabled
  if (props.disabled) return <ButtonAnchor {...props} />

  return (
    <NavLink
      activeClassName="apl-button--active"
      activeStyle={props.activeStyle}
      exact={props.exact}
      className={getClassList(BLOCK, MOD_ATTRS, props)}
      isActive={props.isActive}
      strict={props.strict}
      to={props.to}
      role="button"
    >
      <ButtonSpinner {...props} />
      {props.children}
    </NavLink>
  )
}

export {
  Button,
  ButtonAnchor,
  ButtonLink,
  ButtonNavLink,
  ButtonIcon,
}
