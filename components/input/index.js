/* Input Component */

// Libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash/uniqueId'
import classNames from 'classnames'

// Style
import './_style.scss'

// Components
import CreditCard from '@asda/icon/creditcard'


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    }
  }

  updateInput = ({ target: { value } }) => this.setState({ value })

  render() {
    const { value } = this.state,
          id = uniqueId('input')

    const {
       label,
       placeholder,
       message,
       status,
       type,
       icon,
       ...props
    } = this.props

    const classes = classNames('input__field', this.props.className, [
                      { 'input__field--icon': this.props.icon.length },
                      { 'input__field--disabled': this.props.disabled },
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
      <div className="input">
        {label && label.length &&
          <label
            className="input__label"
            htmlFor={id}
          >
            {label}
          </label>
        }
        <input
          aria-disabled={this.props.disabled}
          className={classes}
          id={id}
          defaultValue={value}
          onChange={this.updateInput}
          placeholder={placeholder}
        />
        {icon &&
          <CreditCard
            icon={icon}
            small
            style={{
              top: '34px',
              left: '14px',
              position: 'absolute',
              zIndex: 2
            }}
          />
        }
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
  icon: PropTypes.string,
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
