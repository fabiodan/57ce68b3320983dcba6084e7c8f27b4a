/* Icon Component */

// Libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'

// Style
import { colors } from '@asda/../utils'
import './_style.scss'

export const iconOptions = [
  'alert',
  'bag',
  'browse',
  'calendar',
  'check',
  'chevron_left',
  'chevron_right',
  'chevron_up',
  'chevron_down',
  'circle_minus',
  'circle_plus',
  'click_&_collect',
  'clock',
  'close',
  'facebook',
  'feedback',
  'google+',
  'heart',
  'heart_outline',
  'help',
  'home',
  'info',
  'list',
  'lock',
  'mail',
  'orders',
  'printer',
  'rollback',
  'search',
  'settings',
  'star',
  'trash',
  'trolley',
  'truck',
  'twitter',
  'upload',
  'user'
]

class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: ''
    };
  }

  componentWillReceiveProps = ({ icon }) => {
    if (iconOptions.includes(icon)) {
      import(`@asda/../images/icons/${icon}.svg`).then((image) => {
        this.svgDefs = null
        this.setState({ icon: image })
      });
    }
  }

  componentWillUpdate = ({ icon: iconName, scale, overlay, color }, { icon }) => {
    const classNames = ['icon-wrapper', `icon-wrapper--${color}`];
    if (iconName === 'check') classNames.push('icon-wrapper--check');

    if (icon && !this.svgDefs) {
      this.content = (
        <ReactSVG
          path={icon}
          alt={iconName}
          className={classNames.join(' ')}
          evalScripts="always"
          {...overlay && { onInjected: this.ensurePortalTarget }}
          svgStyle={{
            width: `${scale * 30}px`,
            height: `${scale * 30}px`,
          }}
        />
      );
    }
  }

  ensurePortalTarget = (svg) => {
    const svgDefs = svg.getElementsByTagName('defs')[0]

    if (svgDefs) {
      this.svgDefs = svgDefs;
      svg.setAttribute('filter', 'url(#icon-dropshadow)')
      this.forceUpdate()
    }
  }

  render() {
    const { icon, scale, color, overlay, ...props } = this.props;
    return (
      <div>
        {this.content}
        {this.svgDefs && overlay && ReactDOM.createPortal(
           <filter id="icon-dropshadow" height="150%">
             <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
             <feOffset dx="0" dy="0" result="offsetblur"/>
             <feComponentTransfer>
               <feFuncA type="linear" slope="0.4"/>
             </feComponentTransfer>
             <feMerge>
               <feMergeNode/>
               <feMergeNode in="SourceGraphic"/>
             </feMerge>
           </filter>,
           this.svgDefs
        )}
      </div>
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  scale: PropTypes.number,
  overlay: PropTypes.bool
}

Icon.defaultProps = {
  color: 'green',
  scale: 1,
  overlay: false
}

export default Icon
