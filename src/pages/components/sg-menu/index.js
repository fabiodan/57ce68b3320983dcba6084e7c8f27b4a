// Libs
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import MediaQuery from 'react-responsive'

// Components (from atomic to composite)
import Icon, { IconButton } from '@asda/icon'

// Assets
import './_style.scss'

const Menu = ({ toggleMenu }) => {
  const menuItems = [
    // { name: 'Sample', url: '/sample' }, // Don't delete
    { name: 'Common library',
      url: '/common',
      children: [
        { name: 'Color Scheme', url: '/common/color-scheme' },
        { name: 'Buttons', url: '/common/buttons' },
        { name: 'Links', url: '/common/links' },
        { name: 'Icons', url: '/common/icons' },
        { name: 'Brand', url: '/common/brand' },
      ]
    },
    { name: 'rWeb library',
      url: '/web',
      children: [
        { name: 'Typography', url: '/web/typography' },
        { name: 'Special Buttons', url: '/web/special-buttons' },
        { name: 'Layout', url: '/web/layout' },
        { name: 'Spacing', url: '/web/spacing' },
        { name: 'Text Fields', url: '/web/text-fields' },
        { name: 'Dropdowns', url: '/web/dropdowns' },
        { name: 'Tooltips', url: '/web/tooltips' },
        { name: 'Input Controls', url: '/web/input-controls' },
        { name: 'Modals', url: '/web/modals' },
        { name: 'Accordions', url: '/web/accordions' },
        // { name: 'Navigation (WIP)', url: '/navigation' },
      ]
    }
  ]

  return (
    <Fragment>
      <MediaQuery query="(max-width: 767px)">
        <List toggleMenu={toggleMenu} items={menuItems} />
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <List items={menuItems} />
      </MediaQuery>
    </Fragment>
  )
}

const List = (props) => {
  const { toggleMenu } = props
  const items = props.items.map(item => {
    return (
      <ListItem
        key={item.name}
        name={item.name}
        url={item.url}
        toggleMenu={toggleMenu}
        items={item.children}
      />
    )
  })

  return (
    <nav className="sg-menu">
      <MediaQuery query="(max-width: 767px)">
        <IconButton name="close" className="sg-menu__close-button" onClick={toggleMenu} />
      </MediaQuery>
      <ul className="sg-menu__list">{items}</ul>
    </nav>
  )
}

const ListItem = ({ name, items, toggleMenu, url }) => {
  return (
    <li className="sg-menu__list-item">
      <NavLink
        className="sg-menu__anchor"
        to={url}
        activeClassName="sg-menu--active"
      >
        {name}
        <Icon name="chevron-down" size="x-small" className="sg-menu__icon" />
      </NavLink>
      <SubList subMenuItems={items} toggleMenu={toggleMenu} />
    </li>
  )
}

const SubList = ({ subMenuItems, toggleMenu }) => {
  const items = subMenuItems.map(item => (
    <SubListItem
      key={item.name}
      name={item.name}
      url={item.url}
      onClick={toggleMenu}
    />
  ))

  return (
    <ul className="sg-menu__sublist">{items}</ul>
  )
}

const SubListItem = ({ url, name, onClick }) => {
  return (
    <li className="sg-menu__sublist-item">
      <NavLink
        className="sg-menu__sublist-anchor"
        to={url}
        activeClassName="sg-menu__sublist-anchor--active"
        onClick={onClick}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default Menu
