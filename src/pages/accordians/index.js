// Libs
import React, { Component } from 'react'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import CreditCardIcon from '@asda/credit-card-icon'
import Accordian, {
  AccordianTitle,
  AccordianButton,
  AccordianHeader,
  AccordianContent,
} from '@asda/accordian'
import { Caption, Figure, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import paddingExamplePNGSource from '../../assets/images/accordians-page-padding-example.png'
import './_style.scss'

const Grid = ({ children }) => (
  <ul className="accordians-page__grid">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="accordians-page__grid-item">{children}</li>
)

const DeliveryDetails = () => (
  <ul className="accordians-page__delivery-details">
    <li className="accordians-page__delivery-details__item">
      <div className="accordians-page__delivery-details__icon">
        <Icon name="truck" />
      </div>
      <div className="accordians-page__delivery-details__info">
        100 My Street<br/>
        Sutton-under-Whitestonecliff<br/>
        SW105LQ
      </div>
    </li>
    <li className="accordians-page__delivery-details__item">
      <div className="accordians-page__delivery-details__icon">
        <Icon name="clock" />
      </div>
      <div className="accordians-page__delivery-details__info">
        Thursday, 9&nbsp;November&nbsp;2017<br/>
        9:30pm - 10:30pm
      </div>
    </li>
  </ul>
)

class AccordiansPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openAccordian1: false,
      openAccordian2: false,
      openAccordian3: false,
      openAccordian4: true,
      openAccordian5: true,
    }

    this.toggleAccordian1 = this.toggleAccordian1.bind(this)
    this.toggleAccordian2 = this.toggleAccordian2.bind(this)
    this.toggleAccordian3 = this.toggleAccordian3.bind(this)
    this.toggleAccordian4 = this.toggleAccordian4.bind(this)
    this.toggleAccordian5 = this.toggleAccordian5.bind(this)
  }

  toggleAccordian1() {
    this.setState({ openAccordian1: !this.state.openAccordian1 })
  }

  toggleAccordian2() {
    this.setState({ openAccordian2: !this.state.openAccordian2 })
  }

  toggleAccordian3() {
    this.setState({ openAccordian3: !this.state.openAccordian3 })
  }

  toggleAccordian4() {
    this.setState({ openAccordian4: !this.state.openAccordian4 })
  }

  toggleAccordian5() {
    this.setState({ openAccordian5: !this.state.openAccordian5 })
  }

  render() {
    const {
      openAccordian1,
      openAccordian2,
      openAccordian3,
      openAccordian4,
      openAccordian5
    } = this.state

    return (
      <article className="accordians-page">

        <Heading>Accordians</Heading>

        <Section>
          <Subheading>Bordered Accordians</Subheading>
          <Paragraph>
            Accordians are a list of headers, that can be clicked to hide or reveal
            additional information. The width of the accordian is based on the page
            layout and the grid, while the height of the accordian is dependant on
            the content inside.
          </Paragraph>

          <Grid>
            <GridItem>
              <Caption position="top">Closed accordian</Caption>
              <Accordian open={openAccordian1}>
                <AccordianHeader onClick={this.toggleAccordian1}>
                  <AccordianTitle>Accordian Title</AccordianTitle>
                  <AccordianButton onClick={this.toggleAccordian1}>
                    { openAccordian1 ? 'Hide' : 'View'}
                  </AccordianButton>
                </AccordianHeader>
                <AccordianContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                </AccordianContent>
              </Accordian>
            </GridItem>
            <GridItem>
              <Caption position="top">Closed accordian on hover</Caption>
              <Accordian open={openAccordian2} hover>
                <AccordianHeader onClick={this.toggleAccordian2}>
                  <AccordianTitle>Accordian Title</AccordianTitle>
                  <AccordianButton onClick={this.toggleAccordian2}>
                    { openAccordian2 ? 'Hide' : 'View'}
                  </AccordianButton>
                </AccordianHeader>
                <AccordianContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                </AccordianContent>
              </Accordian>
            </GridItem>
            <GridItem>
              <Caption position="top">Closed accordian with payment card (edge case)</Caption>
              <Accordian open={openAccordian3}>
                <AccordianHeader onClick={this.toggleAccordian3}>
                  <AccordianTitle>Payment card:
                    <span className="accordians-page__credit-card-info">
                      <CreditCardIcon name="visa" className="accordians-page__credit-card-icon"/>
                      <span>5792</span>
                    </span>
                  </AccordianTitle>
                  <AccordianButton onClick={this.toggleAccordian3}>
                    { openAccordian3 ? 'Cancel' : 'Change'}
                  </AccordianButton>
                </AccordianHeader>
                <AccordianContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ratione itaque, quia consectetur iure velit, vitae tenetur voluptatem odio asperiores labore quas aliquid odit, natus laudantium voluptate beatae, repellendus nesciunt.
                </AccordianContent>
              </Accordian>
            </GridItem>
            <GridItem>
              <Caption position="top">Open accordian</Caption>
              <Accordian open={openAccordian4}>
                <AccordianHeader onClick={this.toggleAccordian4}>
                  <AccordianTitle>Delivery Details</AccordianTitle>
                  <AccordianButton onClick={this.toggleAccordian4}>
                    Change Slot
                  </AccordianButton>
                </AccordianHeader>
                <AccordianContent>
                  <DeliveryDetails />
                </AccordianContent>
              </Accordian>
            </GridItem>
            <GridItem>
              <Caption position="top">Open Disabled accordian</Caption>
              <Accordian open={openAccordian5}>
                <AccordianHeader onClick={this.toggleAccordian5}>
                  <AccordianTitle>Delivery Details</AccordianTitle>
                  <AccordianButton onClick={this.toggleAccordian5} disabled>
                    Change Slot
                  </AccordianButton>
                </AccordianHeader>
                <AccordianContent>
                  <DeliveryDetails />
                </AccordianContent>
              </Accordian>
            </GridItem>
          </Grid>

        </Section>

        <Section>
          <Subheading className="accordians-page__padding-example">
            Padding Example
          </Subheading>
          <Figure maxWidth="811px" src={paddingExamplePNGSource} fluid />
        </Section>

      </article>
    )
  }
}

export default AccordiansPage
