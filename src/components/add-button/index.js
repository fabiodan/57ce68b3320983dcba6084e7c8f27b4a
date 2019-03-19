// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Components
import Icon from '@asda/icon'
import Button, { ButtonIcon } from '@asda/button'

// Assets
import './_style.scss'

const UnitSelector = () => (
  <div className="add-button__unit-selector">
    <select className="add-button__unit-selector__select">
      <option className="add-button__unit-selector__option" value="qt">Qt</option>
      <option className="add-button__unit-selector__option" value="kg">Kg</option>
    </select>
    <Icon className="add-button__unit-selector__icon" name="chevron-down" size="xx-small" color="white" />
  </div>
)

const Weight = () => (
  <span className="add-button__weight">Kg</span>
)

const Quantity = ({ chilren, className, unit }) => {
  const modifiers = [
    !!unit && `add-button__quantity--${unit}`,
  ]
  const classNames = joinClassNames('add-button__quantity', className, modifiers)

  return (
    <div className={classNames}>
      <div className="add-button__quantity__container">
        <Button iconName="minus" className="add-button__minus" />
        <input className="add-button__input" type="text" value="10.00"/>
        <Button iconName="plus" className="add-button__plus" />
        {unit === 'both' && <UnitSelector />}
      </div>
      {unit === 'weighted' && <Weight />}
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
      <Button className="add-button__button" fluid>Add</Button>
      <Quantity />
      <Quantity unit="both" />
      <Quantity unit="weighted" />
    </div>
  )
}

export default AddButton
