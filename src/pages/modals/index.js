// Libs
import React, { Component } from 'react'
import joinClassNames from 'classnames'

// Components (from atomic to composite)
import { IconButton } from '@asda/icon'
import { LinkText } from '@asda/link'
import Button from '@asda/button'
import Modal, {
  ModalHeader,
  ModalContent,
  ModalActionBar,
  ModalContainer,
  ModalBackdrop,
  ModalButton,
  ModalCloseIcon,
} from '@asda/modal'

import { Figure, Paragraph, Subheading, Section, Heading } from '../components/sg-layout'

// Assets
import modalPNGSource from '../../assets/images/modals-page-modal.png'
import infoModal768PNGSource from '../../assets/images/modals-page-info-modal-768.png'
import infoModal360PNGSource from '../../assets/images/modals-page-info-modal-360.png'
import infoModal360WithIconPNGSource from '../../assets/images/modals-page-info-modal-360-with-icon.png'
import scrollableModal768PNGSource from '../../assets/images/modals-page-scrollable-modal-768.png'
import scrollableModal360PNGSource from '../../assets/images/modals-page-scrollable-modal-360.png'
import avoidLinksPNGSource from '../../assets/images/modals-page-avoid-links.png'
import paddingModal768PNGSource from '../../assets/images/modals-page-padding-modal-768.png'
import paddingModal360PNGSource from '../../assets/images/modals-page-padding-modal-360.png'
import './_style.scss'

const ModalsPageParagraph = ({ className, children, noMargin, weight }) => {
  const modifiers = [
    noMargin && 'modals-page__paragraph--no-margin',
    !!weight && `modals-page__paragraph--${weight}`,
  ]
  const classNames = joinClassNames('modals-page__paragraph', className, modifiers)

  return (
    <p className={ classNames }>{ children }</p>
  )
}

class ModalsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal1: false,
      showModal2: false,
    }

    this.toggleModal1 = this.toggleModal1.bind(this)
    this.toggleModal2 = this.toggleModal2.bind(this)
  }

  toggleModal1() {
    this.setState({ showModal1: !this.state.showModal1 })
  }

  toggleModal2() {
    this.setState({ showModal2: !this.state.showModal2 })
  }

  render() {
    return (
      <article className="modals-page">

        <Heading>Modals</Heading>

        <Section>
          <Subheading>Definition</Subheading>
          <Paragraph>
            A modal window is an element that sits on top. It creates a mode that
            disables the main window but keeps it visible with the modal window as
            a child window in front of it. Users must interact with the modal window
            before they can return to the parent application.
          </Paragraph>
          <Paragraph noMargin>
            Modals are purposefully interruptive and should be used sparingly.
          </Paragraph>

        </Section>

        <Section>
          <Subheading>Modal</Subheading>
          <Paragraph>
            A modal is a type of modal window that provides critical information or
            asks for a decision before user can continue with the journey.
          </Paragraph>
          <Figure
            fluid
            maxWidth="772px"
            src={modalPNGSource}
            caption="Slot reserved Modal (768PX)"
            noMargin
          />
        </Section>

        <Section>
          <Subheading>Informational Modal</Subheading>
          <Paragraph>
            These modals appear in response to an user action, with relevant or
            contextual information. Titles should contain be brief and contain a
            concise statement or a questions explaining the purpose of the modal.
          </Paragraph>
          <Paragraph>
            Use the grid to control the width of the modal, and the content for the
            height of the modal (middle align the entire modal to the screen).
            Ideally, the content should be short and digestible, avoid long content
            as the modal will interupt the user journey.
          </Paragraph>

          <div>
            <Button onClick={this.toggleModal1}>Show example</Button>
            <br/><br/><br/>

            {this.state.showModal1 &&
              <Modal onEscKeydown={this.toggleModal1}>
                <ModalContainer>
                  <ModalHeader>
                    Brief Title
                  </ModalHeader>
                  <ModalContent>
                    <ModalsPageParagraph weight="semi-bold">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Temporibus quod modi sunt, illum ratione quam quas
                      incidunt inventore sequi reiciendis officia est maiores
                      beatae ducimus voluptatum labore nulla unde voluptate.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph noMargin>
                      Click here to view <LinkText href="#/modals">terms and conditions.</LinkText>
                    </ModalsPageParagraph>
                  </ModalContent>
                  <ModalActionBar>
                    <ModalButton onClick={this.toggleModal1}>Continue shopping</ModalButton>
                  </ModalActionBar>
                  <ModalCloseIcon onClick={this.toggleModal1} />
                </ModalContainer>
                <ModalBackdrop onClick={this.toggleModal1} />
              </Modal>
            }
          </div>

          <Figure
            fluid
            maxWidth="768px"
            src={infoModal768PNGSource}
            caption="Informational Modal (768px)"
          />
          <div className="modals-page__img-container">
            <Figure
              fluid
              className="modals-page__figure"
              maxWidth="360px"
              src={infoModal360PNGSource}
              caption="Informational Modal (360px)"
            />
            <Figure
              fluid
              maxWidth="360px"
              src={infoModal360WithIconPNGSource}
              caption="Informational Modal with icon (360px)"
              noMargin
            />
          </div>
        </Section>

        <Section>
          <Subheading>Scrollable Modal</Subheading>
          <Paragraph>
            Modals where the content is more than the height of the screen, use
            scrollable version. Maintain substantial padding around the modal to
            remind the user that he is a modal, while giving him enough space to
            perform the tasks.
          </Paragraph>

          <div>
            <Button onClick={this.toggleModal2}>Show example</Button>
            <br/><br/><br/>

            {this.state.showModal2 &&
              <Modal onEscKeydown={this.toggleModal2} scrollable>
                <ModalContainer>
                  <ModalHeader>
                    Brief Title
                  </ModalHeader>
                  <ModalContent>
                    <ModalsPageParagraph weight="semi-bold">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Temporibus quod modi sunt, illum ratione quam quas
                      incidunt inventore sequi reiciendis officia est maiores
                      beatae ducimus voluptatum labore nulla unde voluptate.
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Temporibus quod modi sunt, illum ratione quam quas
                      incidunt inventore sequi reiciendis officia est maiores
                      beatae ducimus voluptatum labore nulla unde voluptate.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph weight="semi-bold">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Temporibus quod modi sunt, illum ratione quam quas
                      incidunt inventore sequi reiciendis officia est maiores
                      beatae ducimus voluptatum labore nulla unde voluptate.
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Temporibus quod modi sunt, illum ratione quam quas
                      incidunt inventore sequi reiciendis officia est maiores
                      beatae ducimus voluptatum labore nulla unde voluptate.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph weight="semi-bold">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Temporibus quod modi sunt, illum ratione quam quas
                      incidunt inventore sequi reiciendis officia est maiores
                      beatae ducimus voluptatum labore nulla unde voluptate.
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Temporibus quod modi sunt, illum ratione quam quas
                      incidunt inventore sequi reiciendis officia est maiores
                      beatae ducimus voluptatum labore nulla unde voluptate.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </ModalsPageParagraph>

                    <ModalsPageParagraph noMargin>
                      Click here to view <LinkText href="#/modals">terms and conditions.</LinkText>
                    </ModalsPageParagraph>
                  </ModalContent>
                  <ModalActionBar>
                    <ModalButton category="secondary" onClick={this.toggleModal2}>Cancel</ModalButton>
                    <ModalButton onClick={this.toggleModal2}>Continue</ModalButton>
                  </ModalActionBar>
                  <ModalCloseIcon onClick={this.toggleModal2} />
                </ModalContainer>
                <ModalBackdrop onClick={this.toggleModal2} />
              </Modal>
            }
          </div>

          <Figure
            fluid
            maxWidth="768px"
            src={scrollableModal768PNGSource}
            caption="Scrollable Modal (768px)"
          />
          <Figure
            fluid
            maxWidth="360px"
            src={scrollableModal360PNGSource}
            caption="Scrollable Modal (360px)"
            noMargin
          />
        </Section>

        <Section>
          <Subheading>Avoid Links in Modal</Subheading>
          <Paragraph>
            Most modal content should avoid links or actions which navigate away
            from the modal, creating further friction in the user journey.
          </Paragraph>
          <Paragraph>
            In situations when links are neccessary, open a new tab in the
            background while leaving the modal and the user on the current screen.
          </Paragraph>

          <Figure
            fluid
            maxWidth="768px"
            src={avoidLinksPNGSource}
            noMargin
          />
        </Section>

        <Section>
          <Subheading>Padding in Modals</Subheading>
          <Paragraph>
            For screens above 768, use 32px all around margin inside in the modal.
            For smaller size, 24px all around margin should be maintained, for case
            with limited space, the side margins can be reduced to 16px.
          </Paragraph>
          <Figure
            fluid
            maxWidth="798px"
            src={paddingModal768PNGSource}
            caption="Informational Modal (768px)"
          />
          <Figure
            fluid
            maxWidth="387px"
            src={paddingModal360PNGSource}
            caption="Informational Modal (360px)"
            noMargin
          />
        </Section>
      </article>
    )
  }
}

export default ModalsPage
