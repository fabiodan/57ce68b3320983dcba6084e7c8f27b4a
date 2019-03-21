// Libs
import React, { Component } from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import Button from '@asda/button'

// Assets
import './_style.scss'

const UnitSelector = ({ onUnitChange }) => {
  const onChange = (e) => {
    const isWeighted = e.target[e.target.selectedIndex].value === 'kg'

    if (isWeighted) {
      onUnitChange('weighted')
    } else {
      onUnitChange('both')
    }
  }
  return (
    <div className="add-button__unit-selector">
      <select className="add-button__unit-selector__select" onChange={onChange}>
        <option className="add-button__unit-selector__option" value="qt">Qt</option>
        <option className="add-button__unit-selector__option" value="kg">Kg</option>
      </select>
      <Icon className="add-button__unit-selector__icon" name="chevron-down" size="xx-small" color="white" />
    </div>
  )
}

const Weight = () => (
  <span className="add-button__weight">Kg</span>
)

const Quantity = ({
  className,
  unit,
  quantity,
  onIncrement,
  onDecrement,
  onUnitChange,
  onValueInput,
  setInputFocus,
}) => {
  const modifiers = [
    !!unit && `add-button__quantity--${unit}`,
  ]
  const classNames = joinClassNames('add-button__quantity', className, modifiers)
  const onChange = (e) => {
    // onValueInput(parseFloat(e.target.value))
  }

  const setFocus = (e) => {
    setInputFocus(e.type === 'focus')
  }
  return (
    <div className={classNames}>
      <div className="add-button__quantity__container">
        <Button iconName="minus" className="add-button__minus" onClick={onDecrement} hiddenText />
        <input
          className="add-button__input"
          type="number"
          value={quantity}
          onChange={onChange}
          onFocus={setFocus}
          onBlur={setFocus}
        />
        <Button iconName="plus" className="add-button__plus" onClick={onIncrement} hiddenText />
        {unit === 'both' && <UnitSelector onUnitChange={onUnitChange} />}
      </div>
      {unit === 'weighted' && <Weight />}
    </div>
  )
}

class AddButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // quantity: 0,
      isDecimal: false,
      inputFocused: false,
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.changeUnit = this.changeUnit.bind(this)
    this.setQuantity = this.setQuantity.bind(this)
    this.setInputFocus = this.setInputFocus.bind(this)
  }

  componentDidMount() {
    if (this.props.unit === 'weighted') {
      this.setState({ isDecimal: true })
    }
  }

  increment(quantity) {
    this.setState({ quantity: this.state.quantity += 1 })
  }

  decrement(quantity) {
    this.setState({ quantity: this.state.quantity -= 1 })
  }

  setQuantity(value) {
    const { isDecimal } = this.state

    this.setState({ quantity: value })
  }

  changeUnit(unit) {
    if (unit === 'weighted') {
      this.setState({ isDecimal: true })
    } else {
      this.setState({ isDecimal: false })
    }
  }

  setInputFocus(isFocused) {
    this.setState({
      inputFocused: isFocused,
    })
  }

  render() {
    const { children, className, unit, quantity } = this.props
    const { isDecimal, inputFocused } = this.state
    const kgPerUnit = 6.25
    const value = isDecimal ? (quantity * kgPerUnit).toFixed(2) : quantity

    return (
      <div className="add-button">
        {quantity ? (
          <Quantity
            quantity={value}
            unit={unit}
            onIncrement={this.increment}
            onDecrement={this.decrement}
            onUnitChange={this.changeUnit}
            onValueInput={this.setQuantity}
            setInputFocus={this.setInputFocus}
          />
        ) : (
          <Button className="add-button__button" onClick={this.increment} fluid>Add</Button>
        )}
      </div>
    )
  }
}

AddButton.defaultProps = {
  unit: 'count',
}

export default AddButton
