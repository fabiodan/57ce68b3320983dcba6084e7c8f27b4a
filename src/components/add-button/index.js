/* Button Component */

// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components
import Button, { ButtonIcon } from '@asda/button'

// Assets
import MinusSvgSource from '../../assets/images/asda-minus.svg'
import PlusSvgSource from '../../assets/images/asda-plus.svg'
import ChevronDownSvgSource from '../../assets/images/asda-chevron-down.svg'
import './_style.scss'

const UnitSelector = () => (
  <div className="add-button__unit-selector">
    <select className="add-button__unit-selector__select">
      <option value="qt">Qt</option>
      <option value="kg">Kg</option>
    </select>
  </div>
)

const Quantity = ({ chilren, className, both }) => {
  const modifiers = [
    both && 'add-button__quantity--both',
  ]
  const classNames = joinClassNames('add-button__quantity', className, modifiers)

  return (
    <div className={classNames}>
      <Button iconSrc={MinusSvgSource} className="add-button__plus" />
      <input className="add-button__input" type="text" value="1"/>
      <Button iconSrc={PlusSvgSource} className="add-button__plus" />
      { both && <UnitSelector /> }
    </div>
  )
}

const AddButton = ({
  children,
  className,
}) => {
  const modifiers = [
    // !!color && `button--${color}`,
    // fluid && 'button--fluid',
  ]
  const classNames = joinClassNames('add-button', className, modifiers)

  return (
    <div className={classNames}>
      <Button className="add-button__button" fluid>Add</Button><br/><br/>
      <Quantity /><br/><br/>
      <Quantity both /><br/><br/>
      <Quantity weighted /><br/><br/>
    </div>
  )
}

export default AddButton
