// Libs
import React, { Component } from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import CreditCardIcon from '@asda/credit-card-icon'
import { Dropdown, DropdownSelect, DropdownOption } from '@asda/form'
import { Caption, Paragraph, Heading2, Section, Heading1 } from '../components/sg-layout'

// Assets
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="dropdowns-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="dropdowns-page__grid-item">{children}</li>
)

class CreditCardDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedCard: 'blank' }
    this.changeCard = this.changeCard.bind(this)
  }

  componentDidMount() {
    const { defaultValue } = this.props
    if (defaultValue) {
      this.changeCard(defaultValue)
    }
  }

  changeCard(cardName) {
    this.setState({ selectedCard: cardName })
  }

  render() {
    const { selectedCard } = this.state
    const { className, defaultValue, ...rest } = this.props
    const modifiers = []
    const classNames = joinClassNames('credit-card-dropdown', className, modifiers)
    const mask = '••••'

    return (
      <Dropdown className={classNames} {...rest}>
        <CreditCardIcon name={selectedCard} className="credit-card-dropdown__icon" />
        <DropdownSelect
          className="credit-card-dropdown__select"
          onChange={e => this.changeCard(e.target.value)}
          defaultValue={defaultValue}
        >
          <DropdownOption value="blank">Select a credit card</DropdownOption>
          <DropdownOption value="amex">Amex {mask} 1004</DropdownOption>
          <DropdownOption value="cirrus">Cirrus {mask} 5519</DropdownOption>
          <DropdownOption value="diners">Diners {mask} 4378</DropdownOption>
          <DropdownOption value="discover">Discover {mask} 9761</DropdownOption>
          <DropdownOption value="maestro">Maestro {mask} 8761</DropdownOption>
          <DropdownOption value="mastercard">Mastercard {mask} 3321</DropdownOption>
          <DropdownOption value="plus">Plus {mask} 4434</DropdownOption>
          <DropdownOption value="visa">Visa {mask} 1202</DropdownOption>
          <DropdownOption value="add-new">Add New</DropdownOption>
        </DropdownSelect>
      </Dropdown>
    )
  }
}

const DropdownPage = () => (
  <article className="dropdowns-page">

    <Heading1>Dropdowns</Heading1>

    <Section>
      <Heading2>Dropdowns</Heading2>
      <Paragraph>
          Input fields let users enter and edit text. Each input field is
          generally used for single entry and should aim to be clear and efficient.
      </Paragraph>

      <Grid>
        <GridItem>
          <Caption position="top">Default</Caption>
          <Dropdown>
            <DropdownSelect>
              <DropdownOption>Select a value</DropdownOption>
              <DropdownOption>Value 1</DropdownOption>
              <DropdownOption>Value 2</DropdownOption>
              <DropdownOption>Value 3</DropdownOption>
              <DropdownOption>Value 4</DropdownOption>
            </DropdownSelect>
          </Dropdown>
        </GridItem>
        <GridItem>
          <Caption position="top">Hover</Caption>
          <Dropdown hover>
            <DropdownSelect>
              <DropdownOption>Select a value</DropdownOption>
              <DropdownOption>Value 1</DropdownOption>
              <DropdownOption>Value 2</DropdownOption>
              <DropdownOption>Value 3</DropdownOption>
              <DropdownOption>Value 4</DropdownOption>
            </DropdownSelect>
          </Dropdown>
        </GridItem>
        <GridItem>
          <Caption position="top">Focus</Caption>
          <Dropdown focus>
            <DropdownSelect>
              <DropdownOption>Select a value</DropdownOption>
              <DropdownOption>Value 1</DropdownOption>
              <DropdownOption>Value 2</DropdownOption>
              <DropdownOption>Value 3</DropdownOption>
              <DropdownOption>Value 4</DropdownOption>
            </DropdownSelect>
          </Dropdown>
        </GridItem>
        <GridItem>
          <Caption position="top">Selected Value</Caption>
          <Dropdown>
            <DropdownSelect defaultValue="Selected Value">
              <DropdownOption>Select a value</DropdownOption>
              <DropdownOption>Value 1</DropdownOption>
              <DropdownOption>Value 2</DropdownOption>
              <DropdownOption>Value 3</DropdownOption>
              <DropdownOption>Selected Value</DropdownOption>
            </DropdownSelect>
          </Dropdown>
        </GridItem>
      </Grid>
    </Section>

    <Section>
      <Heading2>Dropdowns with icons</Heading2>
      <Paragraph>
          Input fields let users enter and edit text. Each input field is
          generally used for single entry and should aim to be clear and efficient.
      </Paragraph>
      <Grid>
        <GridItem>
          <Caption position="top">Default</Caption>
          <CreditCardDropdown />
        </GridItem>
        <GridItem>
          <Caption position="top">Hover</Caption>
          <CreditCardDropdown hover />
        </GridItem>
        <GridItem>
          <Caption position="top">Focus</Caption>
          <CreditCardDropdown focus />
        </GridItem>
        <GridItem>
          <Caption position="top">Selected Value</Caption>
          <CreditCardDropdown hover defaultValue="amex" />
        </GridItem>
      </Grid>
    </Section>

    {/* <Section>
        <Heading2>Contextual Menus</Heading2>
        <Paragraph>
          Contextual menus aren’t triggered by a consistent UI element. They
          appear next to where a user taps, and their actions can vary based on
          the tap target.
        </Paragraph>
        <Paragraph>
          Width of contextual menu should be decided based upon the length of
          list item and the grid.
        </Paragraph>
      </Section> */}

  </article>
)


export default DropdownPage
