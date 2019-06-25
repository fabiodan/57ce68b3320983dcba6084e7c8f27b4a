// Libs
import React, { Component } from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import Button from '@asda/button'
import TextareaAutosize from 'react-autosize-textarea';

// Assets
import './_style.scss'

class TextField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      charCount: 0
    }
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
      error,
      rows,
      maxRows,
      maxLength,
      charCounter,

      // For demonstration purposes only
      hover,
      focus,
    } = this.props
    const { charCount } = this.state

    const modifiers = [
      validate && 'text-field--validate',
      !!children && 'text-field--with-icon',
      !!extraPaddingLeft && `text-field--extra-padding-left-${extraPaddingLeft}`,
      rows && 'text-field--multiline',
      type === 'search' && 'text-field--search',

      // For demonstration purposes only
      hover && 'text-field--hover',
      focus && 'text-field--focus',
    ]

    const classNames = joinClassNames('text-field', className, modifiers)
    const changeHandler = (e) => {
      if (charCounter) {
        this.setState({
          charCount: e.target.value.length
        })
      }

      if (onChange) onChange()
    }

    return (
      <div className={classNames}>
        {children}
        {rows ?
          <TextareaAutosize
            className="text-field__element"
            defaultValue={value}
            placeholder={`${placeholder} ${required ? '*' : ''}`.trim()}
            onChange={onChange}
            rows={rows}
            // Add 1 to keep consistency in the textarea size
            maxRows={maxRows && maxRows + 1}
            required={required}
            maxLength={maxLength}
            onChange={changeHandler}
          /> :
          <input
            className="text-field__element"
            type={type}
            defaultValue={value}
            placeholder={`${placeholder} ${required ? '*' : ''}`.trim()}
            pattern={pattern}
            onChange={onChange}
            required={required}
            maxLength={maxLength}
            onChange={changeHandler}
          />
        }
        <Icon className="text-field__icon-check" name="check" size="x-small" color="green" />
        <Icon className="text-field__icon-alert" name="alert" size="x-small" color="red" />
        {helperText &&
          <small className="text-field__helper-text">{helperText}</small>
        }
        {successMessage &&
          <small className="text-field__success-message">{successMessage}</small>
        }
        {errorMessage &&
          <small className="text-field__error-message">{errorMessage}</small>
        }
        {charCounter &&
          <small className="text-field__char-counter">{charCount}/{maxLength}</small>
        }
        {type === 'search' &&
          <Button iconName="search" color="green" className="text-field__search-button" hiddenText>Search</Button>
        }
      </div>
    )
  }
}

TextField.defaultProps = {
  type: 'text',
  className: null,
  placeholder: null,
  valid: null,
  pattern: null,
  required: false,
  rows: null,
  maxRows: 7,
  maxLength: null,
  charCounter: false,
  onChange() {},
}

export default TextField
