// Libs
import React, { Component } from 'react'

// Components (from atomic to composite)
import { IconButton } from '@asda/icon'
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
import modalSVGSource from '../../assets/images/modals-page-modal.svg'
import infoModal768SVGSource from '../../assets/images/modals-page-info-modal-768.svg'
import infoModal360SVGSource from '../../assets/images/modals-page-info-modal-360.svg'
import infoModal360WithIconSVGSource from '../../assets/images/modals-page-info-modal-360-with-icon.svg'
import scrollableModal768SVGSource from '../../assets/images/modals-page-scrollable-modal-768.svg'
import scrollableModal360SVGSource from '../../assets/images/modals-page-scrollable-modal-360.svg'
import avoidLinksSVGSource from '../../assets/images/modals-page-avoid-links.svg'
import paddingModal768SVGSource from '../../assets/images/modals-page-padding-modal-768.svg'
import paddingModal360SVGSource from '../../assets/images/modals-page-padding-modal-360.svg'
import './_style.scss'

class ModalsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true,
    }

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.setState({ showModal: false })
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

          {this.state.showModal &&
            <Modal onEscKeydown={this.closeModal}>
              <ModalContainer>
                <ModalHeader>
                  Header
                </ModalHeader>
                <ModalContent>
                  <a href="#">Lorem ipsum dolor sit amet</a>, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus velit quibusdam nulla sint ea tenetur ex corporis, eaque rem, quaerat quo consectetur nostrum consequatur culpa aperiam distinctio non quae commodi!
                </ModalContent>
                <ModalActionBar>
                  <ModalButton category="secondary" onClick={this.closeModal}>Cancel</ModalButton>
                  <ModalButton onClick={this.closeModal}>Continue</ModalButton>
                </ModalActionBar>
                <ModalCloseIcon onClick={this.closeModal} />
              </ModalContainer>
              <ModalBackdrop onClick={this.closeModal} />
            </Modal>
          }
        </Section>

        <Section>
          <Subheading>Modal</Subheading>
          <Paragraph>
            A modal is a type of modal window that provides critical information or
            asks for a decision before user can continue with the journey.
          </Paragraph>
          <Figure
            maxWidth="772px"
            src={modalSVGSource}
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
          <Figure
            maxWidth="768px"
            src={infoModal768SVGSource}
            caption="Informational Modal (768px)"
          />
          <div className="modals-page__img-container">
            <Figure
              className="modals-page__figure"
              maxWidth="360px"
              src={infoModal360SVGSource}
              caption="Informational Modal (360px)"
            />
            <Figure
              maxWidth="360px"
              src={infoModal360WithIconSVGSource}
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
          <Figure
            maxWidth="768px"
            src={scrollableModal768SVGSource}
            caption="Scrollable Modal (768px)"
          />
          <Figure
            maxWidth="768px"
            src={scrollableModal360SVGSource}
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
            maxWidth="768px"
            src={avoidLinksSVGSource}
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
            maxWidth="798px"
            src={paddingModal768SVGSource}
            caption="Informational Modal (768px)"
          />
          <Figure
            maxWidth="387px"
            src={paddingModal360SVGSource}
            caption="Informational Modal (360px)"
            noMargin
          />
        </Section>
      </article>
    )
  }
}

export default ModalsPage
