/* Input Component */

// Libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash/uniqueId'
import classNames from 'classnames'

// Utils
import { creditCards } from '../../utils'

// Style
import './_style.scss'


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || '',
      id: uniqueId('input'),
      icon: ''
    }
  }

  componentWillReceiveProps = ({ icon }) => {
    if (icon && creditCards.includes(icon)) {
      import(`../../images/creditcards/${icon}.png`).then((image) => {
        this.setState({ icon: image })
      })
    } else {
      this.setState({ icon: '' })
    }
  }

  updateInput = ({ target: { value } }) => this.setState({ value })

  render() {
    const { value, id, icon } = this.state
    const {
       label,
       placeholder,
       message,
       status,
       type,
       icon: unusedIcon,
       ...props
    } = this.props

    const background = icon ? `url(${icon}) white no-repeat 10px` : 'white',
          classes = classNames('input', this.props.className, [
                      { 'input--icon': this.props.icon.length }
                    ])

    let color = 'gray'
    if (message && message.type) {
      if (message.type === 'error') {
        color = 'red'
      } else if (message.type === 'success') {
        color = 'green'
      }
    }

    return (
      <div className="input__wrapper">
        {label && label.length &&
          <label
            className="input__label"
            htmlFor={id}
          >
            {label}
          </label>
        }
        <input
          aria-disabled={props.disabled}
          className={classes}
          id={id}
          defaultValue={value}
          onChange={this.updateInput}
          placeholder={placeholder}
          style={{ background }}
        />
        {message && message.type &&
          <span
            className={classNames('input__message', [
              { 'input__message--error': message.type === 'error' },
              { 'input__message--success': message.type === 'success' },
            ] )}
          >
            {message.text || ''}
          </span>
        }
      </div>
    )
  }
}

Input.propTypes = {
  /** Which type of credit card icon should be displayed, or false if none */
  icon: PropTypes.oneOf([
    '',
    ...creditCards
  ]),
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Message object to be displayed below the input */
  message: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.oneOf([
      '', 'success', 'error'
    ])
  }),
  /** Pre-fill the input's default value */
  defaultValue: PropTypes.string
}

Input.defaultProps = {
  label: null,
  icon: '',
  message: null,
  placeholder: '',
  defaultValue: '',
}

export default Input
