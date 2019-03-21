// Libs
import React from 'react'

// Assets
import SvgSource from '../../../assets/images/sg-asda-logo.svg'
import './_style.scss'

const Logo = ({ className }) => (
  <h1 className={`sg-asda-logo ${className}`}>
    <img className="sg-asda-logo__image" src={SvgSource} alt="ASDA" />
    <span className="sg-asda-logo__text">Styleguide</span>
  </h1>
)

export default Logo
