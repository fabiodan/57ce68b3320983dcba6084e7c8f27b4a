// Libs
import React, { Component } from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon from '@asda/icon'

// Assets
import './_style.scss'

class Input extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  render() {
    const {
      children,
      type,
      className,
      value,
      placeholder,
      pattern,
      validate,
      onChange,
      required,
      helperText,
      successMessage,
      errorMessage,
      extraPaddingLeft,

      // For demonstration purposes only
      hover,
      focus,
    } = this.props

    const modifiers = [
      validate && 'input--validate',
      children && 'input--with-icon',
      !!extraPaddingLeft && `input--extra-padding-left-${extraPaddingLeft}`,

      // For demonstration purposes only
      hover && 'input--hover',
      focus && 'input--focus',
    ]

    const classNames = joinClassNames('input', className, modifiers)

    return (
      <div className={classNames}>
        {children &&
          <span className="input__icon">{children}</span>
        }
        <input
          className="input__element"
          type={type}
          defaultValue={value}
          placeholder={`${placeholder} ${required ? '*' : ''}`.trim()}
          pattern={pattern}
          onChange={onChange}
          ref={this.input}
          required
        />
        <Icon className="input__icon-check" name="check" size="x-small" color="green" />
        <Icon className="input__icon-alert" name="alert" size="x-small" color="red" />
        {helperText &&
          <small className="input__helper-text">{helperText}</small>
        }
        {successMessage &&
          <small className="input__success-message">{successMessage}</small>
        }
        {errorMessage &&
          <small className="input__error-message">{errorMessage}</small>
        }
      </div>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  className: null,
  placeholder: null,
  valid: null,
  pattern: null,
  required: false,
  onChange() {},
}

export default Input
