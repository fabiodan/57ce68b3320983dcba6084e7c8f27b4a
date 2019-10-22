// Libs
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import joinClassNames from 'classnames'

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
    { name: 'Content library',
      url: '/content',
      children: [
        { name: 'Overview', url: '/content/overview' },
        { name: 'Our Approach', url: '/content/our-approach' },
        { name: 'How to Write', url: '/content/how-to-write' },
        { name: 'Patterns', url: '/content/patterns' },
        { name: 'Punctuation', url: '/content/punctuation', wip: true },
      ]
    },
    { name: 'Web library',
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
    },
    { name: 'Android library',
      url: '/android',
      children: [
        { name: 'Typography', url: '/android/typography' },
        { name: 'Layout', url: '/android/layout' },
        { name: 'Spacing', url: '/android/spacing' },
        { name: 'Native UI', url: '/android/native-ui' },
        { name: 'App Bars', url: '/android/app-bars' },
        { name: 'Modals', url: '/android/modals', wip: true },
      ]
    },
    { name: 'iOS library',
      url: '/ios',
      children: [
        { name: 'Introduction', url: '/ios/introduction' },
        { name: 'Layout', url: '/ios/layout' },
        { name: 'Search Bars', url: '/ios/search-bars' },
        { name: 'Status Bars', url: '/ios/status-bars' },
        { name: 'Bottom Nav (Tab Bar)', url: '/ios/bottom-nav' },
        { name: 'Action Sheets', url: '/ios/action-sheets' },
        { name: 'Alerts', url: '/ios/alerts', wip: true },
        // { name: 'Tab Bar', url: '/ios/tab-bar', wip: true },
        // { name: 'Spacing', url: '/ios/spacing', wip: true },
        // { name: 'Navigation Bars', url: '/ios/navigation-bars', wip: true },
        // { name: 'Tables', url: '/ios/tables', wip: true },
        // { name: 'Product Module', url: '/ios/product-module', wip: true },
        // { name: 'Buttons', url: '/ios/buttons', wip: true },
        // { name: 'Controls', url: '/ios/controls', wip: true },
        // { name: 'Pickers', url: '/ios/pickers', wip: true },
        // { name: 'Progress Indicators', url: '/ios/progress-indicators', wip: true },
        // { name: 'Segmented Controls', url: '/ios/segmented-controls', wip: true },
        // { name: 'Steppers', url: '/ios/steppers', wip: true },
        // { name: 'Switches', url: '/ios/switches', wip: true },
        // { name: 'Text Fields', url: '/ios/text-fields', wip: true },
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
        key={item.url}
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
      key={item.url}
      name={item.name}
      url={item.url}
      wip={item.wip}
      onClick={toggleMenu}
    />
  ))

  return (
    <ul className="sg-menu__sublist">{items}</ul>
  )
}

const SubListItem = ({ className, url, name, onClick, wip }) => {
  const modifiers = [
    wip && 'sg-menu__sublist-item--wip',
  ]
  const classNames = joinClassNames('sg-menu__sublist-item', className, modifiers)
  const handleClick = function(e) {
    if (wip) {
      e.preventDefault()
    } else if (onClick) {
      onClick()
    }
  }


  return (
    <li className={classNames}>
      <NavLink
        className="sg-menu__sublist-anchor"
        to={url}
        activeClassName="sg-menu__sublist-anchor--active"
        onClick={handleClick}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default Menu
