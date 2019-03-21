// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Button from '@asda/button'

// Assets
import './_style.scss'

const ExternalButton = ({
  children,
  className,
}) => {
  const modifiers = []
  const classNames = joinClassNames('external-button', className, modifiers)

  return (
    <button className={classNames}>{children}</button>
  )
}

const AppleWalletButton = () => (
  <ExternalButton>Add to Apple Wallet</ExternalButton>
)
const GooglePayButton = () => (
  <ExternalButton>Add to Google Pay</ExternalButton>
)
const AppStoreButton = () => (
  <ExternalButton>Add to App Store</ExternalButton>
)
const GooglePlayButton = () => (
  <ExternalButton>Add go Google Play</ExternalButton>
)

ExternalButton.defaultProps = {

}

export {
  AppleWalletButton,
  GooglePayButton,
  AppStoreButton,
  GooglePlayButton,
}
