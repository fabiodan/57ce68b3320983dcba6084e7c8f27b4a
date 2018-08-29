/* CreditCard (image) Component */

// Libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Style
import './_style.scss'

export const creditCards = [
  '',
  'blank',
  'amex',
  'cirrus',
  'diners',
  'discover',
  'maestro',
  'mastercard',
  'plus',
  'visa'
];

class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = { icon: this.props.icon }
  }

  componentWillReceiveProps = ({ icon }) => {
    if (icon && creditCards.includes(icon)) {
      import(`@asda/../images/creditcards/${icon}.svg`).then((image) => {
        this.setState({ icon: image })
      })
    } else {
      this.setState({ icon: '' })
    }
  }

  render() {
    const { small, style } = this.props,
          { icon } = this.state;

    if (!icon.length) return

    return (
      <img
        className={`creditcard ${small && 'creditcard--small'}`}
        style={style}
        src={icon}
      />
    )
  }
}

CreditCard.propTypes = {
  icon: PropTypes.string.isRequired,
  small: PropTypes.bool,
  style: PropTypes.object
}

CreditCard.defaultProps = {
  icon: '',
  small: false,
  style: {}
}

export default CreditCard
