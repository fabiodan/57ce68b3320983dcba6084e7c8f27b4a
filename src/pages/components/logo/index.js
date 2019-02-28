// Libs
import React from 'react'

// Assets
import SvgSource from '../../../assets/images/asda-logo.svg'
import './_style.scss'

const Logo = ({ className }) => (
  <img className={`asda-logo ${className}`} src={SvgSource} alt="ASDA" />
)

export default Logo
