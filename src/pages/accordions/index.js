// Libs
import React, { Component } from 'react'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import CreditCardIcon from '@asda/credit-card-icon'
import Accordion, {
  AccordionTitle,
  AccordionButton,
  AccordionHeader,
  AccordionContent,
} from '@asda/accordion'
import { TextField, Label } from '@asda/form'
import { Caption, Figure, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import paddingExamplePNGSource from '../../assets/images/accordions-page-padding-example.png'
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="accordions-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="accordions-page__grid-item">{children}</li>
)

const DeliveryDetails = () => (
  <ul className="accordions-page__delivery-details">
    <li className="accordions-page__delivery-details__item">
      <div className="accordions-page__delivery-details__icon">
        <Icon name="truck" />
      </div>
      <div className="accordions-page__delivery-details__info">
        100 My Street<br/>
        Sutton-under-Whitestonecliff<br/>
        SW105LQ
      </div>
    </li>
    <li className="accordions-page__delivery-details__item">
      <div className="accordions-page__delivery-details__icon">
        <Icon name="clock" />
      </div>
      <div className="accordions-page__delivery-details__info">
        Thursday, 9&nbsp;November&nbsp;2017<br/>
        9:30pm - 10:30pm
      </div>
    </li>
  </ul>
)

class AccordionsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openAccordion1: false,
      openAccordion2: false,
      openAccordion3: false,
      openAccordion4: true,
      openAccordion5: true,
    }

    this.toggleAccordion1 = this.toggleAccordion1.bind(this)
    this.toggleAccordion2 = this.toggleAccordion2.bind(this)
    this.toggleAccordion3 = this.toggleAccordion3.bind(this)
    this.toggleAccordion4 = this.toggleAccordion4.bind(this)
    this.toggleAccordion5 = this.toggleAccordion5.bind(this)
  }

  toggleAccordion1() {
    this.setState({ openAccordion1: !this.state.openAccordion1 })
  }

  toggleAccordion2() {
    this.setState({ openAccordion2: !this.state.openAccordion2 })
  }

  toggleAccordion3() {
    this.setState({ openAccordion3: !this.state.openAccordion3 })
  }

  toggleAccordion4() {
    this.setState({ openAccordion4: !this.state.openAccordion4 })
  }

  toggleAccordion5() {
    this.setState({ openAccordion5: !this.state.openAccordion5 })
  }

  render() {
    const {
      openAccordion1,
      openAccordion2,
      openAccordion3,
      openAccordion4,
      openAccordion5
    } = this.state

    return (
      <article className="accordions-page">

        <Heading>Accordions</Heading>

        <Section>
          <Subheading>Bordered Accordions</Subheading>
          <Paragraph>
            Accordions are a list of headers, that can be clicked to hide or reveal
            additional information. The width of the accordion is based on the page
            layout and the grid, while the height of the accordion is dependant on
            the content inside.
          </Paragraph>

          <Grid>
            <GridItem>
              <Caption position="top">Closed accordion</Caption>
              <Accordion open={openAccordion1}>
                <AccordionHeader onClick={this.toggleAccordion1}>
                  <AccordionTitle>Accordion Title</AccordionTitle>
                  <AccordionButton onClick={this.toggleAccordion1}>
                    { openAccordion1 ? 'Hide' : 'View'}
                  </AccordionButton>
                </AccordionHeader>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                </AccordionContent>
              </Accordion>
            </GridItem>
            <GridItem>
              <Caption position="top">Closed accordion on hover</Caption>
              <Accordion open={openAccordion2} hover>
                <AccordionHeader onClick={this.toggleAccordion2}>
                  <AccordionTitle>Accordion Title</AccordionTitle>
                  <AccordionButton onClick={this.toggleAccordion2}>
                    { openAccordion2 ? 'Hide' : 'View'}
                  </AccordionButton>
                </AccordionHeader>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                </AccordionContent>
              </Accordion>
            </GridItem>
            <GridItem>
              <Caption position="top">Closed accordion with payment card (edge case)</Caption>
              <Accordion open={openAccordion3}>
                <AccordionHeader onClick={this.toggleAccordion3}>
                  <AccordionTitle className="accordions-page__credit-card-title">Payment card:
                    <span className="accordions-page__credit-card-info">
                      <CreditCardIcon name="visa" className="accordions-page__credit-card-icon"/>
                      <span>5792</span>
                    </span>
                  </AccordionTitle>
                  <AccordionButton onClick={this.toggleAccordion3}>
                    { openAccordion3 ? 'Close' : 'Change'}
                  </AccordionButton>
                </AccordionHeader>
                <AccordionContent>
                  <Label>Card number</Label>
                  <TextField
                    className="accordions-page__text-field__credit-card"
                    extraPaddingLeft="medium"
                  >
                    <CreditCardIcon className="accordions-page__text-field__credit-card-icon" name="blank" />
                  </TextField>
                </AccordionContent>
              </Accordion>
            </GridItem>
            <GridItem>
              <Caption position="top">Open accordion</Caption>
              <Accordion open={openAccordion4}>
                <AccordionHeader onClick={this.toggleAccordion4}>
                  <AccordionTitle>Delivery Details</AccordionTitle>
                  <AccordionButton>
                    Change Slot
                  </AccordionButton>
                </AccordionHeader>
                <AccordionContent>
                  <DeliveryDetails />
                </AccordionContent>
              </Accordion>
            </GridItem>
            <GridItem>
              <Caption position="top">Open Disabled accordion</Caption>
              <Accordion open={openAccordion5}>
                <AccordionHeader onClick={this.toggleAccordion5}>
                  <AccordionTitle>Delivery Details</AccordionTitle>
                  <AccordionButton onClick={this.toggleAccordion5} disabled>
                    Change Slot
                  </AccordionButton>
                </AccordionHeader>
                <AccordionContent>
                  <DeliveryDetails />
                </AccordionContent>
              </Accordion>
            </GridItem>
          </Grid>

        </Section>

        <Section>
          <Subheading className="accordions-page__padding-example">
            Padding Example
          </Subheading>
          <Figure maxWidth="811px" src={paddingExamplePNGSource} fluid />
        </Section>

      </article>
    )
  }
}

export default AccordionsPage
