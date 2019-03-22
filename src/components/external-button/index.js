// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Image from '@asda/image'
import Button from '@asda/button'

// Assets
import appleSVGSource from '../../assets/images/apple.svg'
import googlePlaySVGSource from '../../assets/images/google-play.svg'
import googleSVGSource from '../../assets/images/google.svg'
import './_style.scss'

const ExternalButton = ({
  children,
  className,
  fluid,
}) => {
  const modifiers = [
    fluid && 'button--fluid',
  ]
  const classNames = joinClassNames('external-button', className, modifiers)

  return (
    <button className={classNames} fluid={fluid}>{children}</button>
  )
}

const AppleWalletButton = () => (
  <ExternalButton fluid="true">
    Add to
    <Image
      className="external-button__image-apple external-button__image--middle"
      src={appleSVGSource}
    />
    Wallet
  </ExternalButton>
)
const GooglePayButton = () => (
  <ExternalButton fluid="true">
    Add to
    <Image
      className="external-button__image--middle"
      src={googleSVGSource}
    />
    Pay
  </ExternalButton>
)
const AppStoreButton = () => (
  <ExternalButton fluid="true">
    <Image
      className="external-button__image-apple external-button__image--start"
      src={appleSVGSource}
    />
    App Store
  </ExternalButton>
)
const GooglePlayButton = () => (
  <ExternalButton fluid="true">
    <Image
      className="external-button__image--start"
      src={googlePlaySVGSource}
    />
    Google Play
  </ExternalButton>
)

ExternalButton.defaultProps = {

}

export {
  AppleWalletButton,
  GooglePayButton,
  AppStoreButton,
  GooglePlayButton,
}
