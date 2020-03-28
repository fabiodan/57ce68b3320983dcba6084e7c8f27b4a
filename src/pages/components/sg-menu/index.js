// Libs
import React, { Component, Fragment } from 'react'
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
    {
      name: 'Introduction',
      url: '/introduction',
      children: [
        { name: 'About ASDA Design Language', url: '/introduction/about' },
        { name: 'Guiding principles', url: '/introduction/guiding-principles' },
        { name: 'Atomic design', url: '/introduction/atomic-design' },
      ],
    },
    {
      name: 'Common library',
      url: '/common',
      children: [
        { name: 'Typography', url: '/common/typography' },
        { name: 'Color scheme', url: '/common/color-scheme' },
        { name: 'Buttons', url: '/common/buttons' },
        { name: 'Links', url: '/common/links' },
        { name: 'Icons', url: '/common/icons' },
        { name: 'Brand', url: '/common/brand' },
      ],
    },
    {
      name: 'Content library',
      url: '/content',
      children: [
        { name: 'Guiding principles', url: '/content/guiding-principles' },
        { name: 'How to write for digital', url: '/content/how-to-write' },
        { name: 'Patterns and heuristics', url: '/content/patterns' },
        { name: 'The Asda voice', url: '/content/asda-voice' },
        { name: 'Words to avoid', url: '/content/words-to-avoid' },
        { name: 'Style & usage', url: '/content/style-usage' },
        { name: 'Punctuation', url: '/content/punctuation' },
        { name: 'Formatting', url: '/content/formatting' },
      ],
    },
    {
      name: 'Web library',
      url: '/web',
      children: [
        { name: 'Layout', url: '/web/layout' },
        { name: 'Special buttons', url: '/web/special-buttons' },
        { name: 'Spacing', url: '/web/spacing' },
        { name: 'Text fields', url: '/web/text-fields' },
        { name: 'Dropdowns', url: '/web/dropdowns' },
        { name: 'Tooltips', url: '/web/tooltips' },
        { name: 'Input controls', url: '/web/input-controls' },
        { name: 'Modals', url: '/web/modals' },
        { name: 'Accordions', url: '/web/accordions' },
        // { name: 'Navigation (WIP)', url: '/navigation' },
      ],
    },
    {
      name: 'Android library',
      url: '/android',
      children: [
        { name: 'Typography', url: '/android/typography' },
        { name: 'Layout', url: '/android/layout' },
        { name: 'Spacing', url: '/android/spacing' },
        { name: 'Native UI', url: '/android/native-ui' },
        { name: 'App bars', url: '/android/app-bars' },
        { name: 'Modals', url: '/android/modals' },
        { name: 'Lists', url: '/android/lists' },
        { name: 'Menus', url: '/android/menus' },
        { name: 'Miscellaneous', url: '/android/miscellaneous' },
        { name: 'Selection controls', url: '/android/selection-controls' },
        { name: 'Text Fields', url: '/android/text-fields' },
        { name: 'Notifications', url: '/android/notifications' },
      ],
    },
    {
      name: 'iOS library',
      url: '/ios',
      children: [
        { name: 'Introduction', url: '/ios/introduction' },
        { name: 'Layout', url: '/ios/layout' },
        { name: 'Spacing', url: '/ios/spacing' },
        { name: 'Navigation Bars', url: '/ios/navigation-bars' },
        { name: 'Search bars', url: '/ios/search-bars' },
        { name: 'Status bars', url: '/ios/status-bars' },
        { name: 'Bottom nav (tab bar)', url: '/ios/bottom-nav' },
        { name: 'Action sheets', url: '/ios/action-sheets' },
        { name: 'Alerts', url: '/ios/alerts' },
        { name: 'Tables', url: '/ios/tables' },
        { name: 'Controls', url: '/ios/controls' },
        { name: 'Pickers', url: '/ios/pickers' },
        { name: 'Progress Indicators', url: '/ios/progress-indicators' },
        { name: 'Segmented Controls', url: '/ios/segmented-controls' },
        { name: 'Text Fields', url: '/ios/text-fields' },
        { name: 'Push Notifications', url: '/ios/push-notifications' },
        { name: 'Keyboards', url: '/ios/keyboards' },
      ],
    },
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

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: null,
    }
    this.setSelectedIndex = this.setSelectedIndex.bind(this)
  }

  setSelectedIndex(index) {
    this.setState({
      selectedIndex: index,
    })
  }

  render() {
    const { selectedIndex } = this.state
    const { toggleMenu, items } = this.props
    const listItems = items.map((item, index) => {
      let isActive = selectedIndex === index

      if (selectedIndex === null) {
        isActive = !!window.location.href.match(item.url)
      }

      return (
        <ListItem
          isActive={isActive}
          key={item.url}
          index={index}
          name={item.name}
          url={item.url}
          toggleMenu={toggleMenu}
          items={item.children}
          setSelectedIndex={this.setSelectedIndex}
        />
      )
    })

    return (
      <nav className="sg-menu">
        <MediaQuery query="(max-width: 767px)">
          <IconButton name="close" className="sg-menu__close-button" onClick={toggleMenu} />
        </MediaQuery>
        <ul className="sg-menu__list">{listItems}</ul>
      </nav>
    )
  }
}

const ListItem = ({
  className, name, items, toggleMenu, url, index, setSelectedIndex, isActive
}) => {

  const modifiers = [
     isActive && 'sg-menu--active',
  ]
  const classNames = joinClassNames('sg-menu__list-item', className, modifiers)
  return (
    <li className={classNames}>
      <a className="sg-menu__anchor" onClick={() => setSelectedIndex(index)}>
        {name}
        {items.length > 0 &&
          <Icon name="chevron-down" size="x-small" className="sg-menu__icon" />
        }
      </a>
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

const SubListItem = ({
  className, url, name, onClick, wip,
}) => {
  const modifiers = [
    wip && 'sg-menu__sublist-item--wip',
  ]
  const classNames = joinClassNames('sg-menu__sublist-item', className, modifiers)
  const handleClick = function (e) {
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
