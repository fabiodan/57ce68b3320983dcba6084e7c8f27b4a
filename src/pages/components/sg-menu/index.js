// Libs
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import MediaQuery from 'react-responsive'

// Assets
import CloseSvgSource from '../../../assets/images/asda-close.svg'
import './_style.scss'

const Menu = ({ toggleMenu }) => {
  const menuItems = [
    { name: 'Overview (WIP)', url: '/overview' },
    { name: 'Typography', url: '/typography' },
    { name: 'Color Scheme', url: '/color-scheme' },
    { name: 'Buttons', url: '/buttons' },
  ]

  return (
    <Fragment>
      <MediaQuery query="(max-width: 767px)">
        <ItemsList toggleMenu={toggleMenu} items={menuItems} />
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <ItemsList items={menuItems} />
      </MediaQuery>
    </Fragment>
  )
}

const ItemsList = (props) => {
  const { toggleMenu } = props
  const items = props.items.map(item => (
    <Item
      key={item.name}
      name={item.name}
      url={item.url}
      toggleMenu={toggleMenu}
    />
  ))

  return (
    <nav className="sg-menu">
      <MediaQuery query="(max-width: 767px)">
        <button className="sg-menu__close-button" onClick={toggleMenu}>
          <img src={CloseSvgSource} alt="Close" />
        </button>
      </MediaQuery>
      <ul className="sg-menu__list">{items}</ul>
    </nav>
  )
}

const Item = (props) => {
  const { toggleMenu } = props
  return (
    <li className="sg-menu__item">
      <NavLink
        className="sg-menu__anchor"
        to={props.url}
        onClick={toggleMenu}
        activeClassName="sg-menu--active"
      >
        {props.name}
      </NavLink>
    </li>
  )
}

export default Menu
