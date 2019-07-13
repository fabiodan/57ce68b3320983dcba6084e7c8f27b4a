// Libs
import React, { Component } from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import { IconButton } from '@asda/icon'
import Button from '@asda/button'
import FocusLock from 'react-focus-lock'

// Assets
import './_style.scss'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.handleEscKeydown = this.handleEscKeydown.bind(this)
  }

  componentDidMount() {
    const { onEscKeydown } = this.props

    document.body.classList.add('modal--scroll-lock')

    if (onEscKeydown) {
      document.addEventListener('keydown', this.handleEscKeydown, false)
    }
  }

  componentWillUnmount() {
    const { onEscKeydown } = this.props

    document.body.classList.remove('modal--scroll-lock')

    if (onEscKeydown) {
      document.removeEventListener('keydown', this.handleEscKeydown, false)
    }
  }

  handleEscKeydown(e) {
    const { onEscKeydown } = this.props

    if (e.keyCode === 27) onEscKeydown()
  }

  render() {
    const {
      children,
      className,
      scrollable,
      size,
    } = this.props

    const modifiers = [
      scrollable && 'modal--scrollable',
      !!size && `modal--size-${size}`,
    ]
    const classNames = joinClassNames('modal', className, modifiers)

    return (
      <div
        className={classNames}
        role="alertdialog"
        aria-modal="true"
        aria-describedby="modal__content"
        aria-labelledby="modal__header"
      >
        { children }
      </div>
    )
  }
}

const ModalBackdrop = ({ children, className, onClick }) => {
  const modifiers = []
  const classNames = joinClassNames('modal__backdrop', className, modifiers)

  return (
    <div className={classNames} onClick={onClick} tabIndex="-1">
      { children }
    </div>
  )
}

const ModalHeader = ({ children, className }) => {
  const modifiers = []
  const classNames = joinClassNames('modal__header', className, modifiers)

  return (
    <h2 className={classNames}>
      { children }
    </h2>
  )
}

const ModalContainer = ({ children, className }) => {
  const modifiers = []
  const classNames = joinClassNames('modal__container', className, modifiers)

  return (
    // modal__outer-container is needed to fix scroll issues on IE11 :P
    <FocusLock className="modal__outer-container">
      <div className={classNames}>
        { children }
      </div>
    </FocusLock>
  )
}

const ModalContent = ({ children, className }) => {
  const modifiers = []
  const classNames = joinClassNames('modal__content', className, modifiers)

  return (
    <section className={classNames}>
      { children }
    </section>
  )
}

const ModalActionBar = ({ children, className }) => {
  const modifiers = []
  const classNames = joinClassNames('modal__action-bar', className, modifiers)

  return (
    <footer className={classNames}>
      { children }
    </footer>
  )
}

const ModalButton = ({ children, className, ...rest }) => {
  const modifiers = []
  const classNames = joinClassNames('modal__button', className, modifiers)

  return (
    <Button className={classNames} {...rest}>
      { children }
    </Button>
  )
}


const ModalCloseIcon = ({ className, onClick }) => {
  const modifiers = []
  const classNames = joinClassNames('modal__close-icon', className, modifiers)

  return (
    <IconButton
      className={classNames}
      name="close"
      size="small"
      onClick={onClick}
    />
  )
}

export {
  Modal as default,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalActionBar,
  ModalButton,
  ModalCloseIcon,
  ModalBackdrop,
}
