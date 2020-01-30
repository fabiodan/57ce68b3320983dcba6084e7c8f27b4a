// Libs
import React from 'react'

// Components (from atomic to composite)
import Button from '@asda/button'
import { LinkText } from '@asda/link'
import { Label, TextField } from '@asda/form'
import Recommendation, { RecommendationStatus } from '@sg/sg-recommendation'
import Modal, {
  ModalHeader,
  ModalContent,
  ModalContainer,
  ModalCloseIcon,
} from '@asda/modal'
import {
  Heading1,
  Heading2,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import './_style.scss'

const Container = ({ children }) => (
  <div className="content-style-usage-page__container">{children}</div>
)

const Strong = ({ children }) => (
  <strong className="words-to-avoid-page__modal-strong">{children}</strong>
)

const WordsToAvoidPage = () => (
  <article className="words-to-avoid-page">

    <Heading1>Words to avoid</Heading1>

    <Section>
      <Heading2>Your versus My</Heading2>
      <Paragraph noMargin>
        Use {'"'}Your{'"'} to indicate areas that the user can interact with once they
        are registered with the site. Using {'"'}Your{'"'} lets the user know we{'\''}re
        addressing them and we are at their service.
        <Container>
          <Recommendation className="words-to-avoid-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="words-to-avoid-page__recommendation__paragraph">
              Your account
            </Paragraph>
          </Recommendation>
          <Recommendation className="words-to-avoid-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="words-to-avoid-page__recommendation__paragraph">
              My account
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Walmart versus Wal-Mart</Heading2>
      <Paragraph noMargin>
        We are part of Walmart. Walmart no longer refers to Wal-Mart Stores, Inc.
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Please</Heading2>
      <Paragraph>
        Avoid please. It adds content without adding value.
      </Paragraph>
      <Paragraph>
        UX writing does not seem impolite without it and adding it looks old
        fashioned and formal.
      </Paragraph>
      <Paragraph noMargin>
        {'"'}Please{'"'} can also imply there’s a choice. But a choice between doing the
        thing we ask and not getting to use the service is not really a choice
        <Container>
          <Recommendation className="words-to-avoid-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="words-to-avoid-page__recommendation__paragraph">
              The price may vary
            </Paragraph>
          </Recommendation>
          <Recommendation className="words-to-avoid-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="words-to-avoid-page__recommendation__paragraph">
              Please note that the price may vary
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Thank you</Heading2>
      <Paragraph noMargin>
        Use it sparingly and genuinely. Use “thanks” rather than thank you to stay concise.
        <Container>
          <Recommendation className="words-to-avoid-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="words-to-avoid-page__recommendation__paragraph">
              Thanks for your order
            </Paragraph>
          </Recommendation>
          <Recommendation className="words-to-avoid-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="words-to-avoid-page__recommendation__paragraph">
              Order placed
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Sorry</Heading2>
      <Paragraph>
        Sorry does not help fix anything and quickly becomes meaningless. Use it
        only where we prevented something or denied access to something.
        <Container>
          <Recommendation className="words-to-avoid-page__recommendation__fields">
            <RecommendationStatus recommended />
            <Modal className="words-to-avoid-page__modal" scrollLock={false}>
              <ModalContainer className="words-to-avoid-page__modal-container" focusLock={false}>
                <ModalHeader>Not available</ModalHeader>
                <ModalContent>
                  Sorry, we do not currently offer home delivery or Click &
                  Collect for <Strong>{'<postcode>'}</Strong>. Try another postcode:
                  <TextField
                    placeholder="Enter postcode"
                    className="words-to-avoid-page__modal-textfield"
                  />
                  <Button className="words-to-avoid-page__modal-button">Check postcode</Button>
                  <div className="words-to-avoid-page__modal-paragraph">
                    <Strong>New build house?</Strong><br />
                    It may not be on our system yet.
                    {' '}<LinkText>Contact us</LinkText>{' '}
                    and we will add it for you.
                  </div>
                </ModalContent>
                <ModalCloseIcon />
              </ModalContainer>
            </Modal>
          </Recommendation>
          <Recommendation className="words-to-avoid-page__recommendation__fields">
            <RecommendationStatus />
            <Modal className="words-to-avoid-page__modal" scrollLock={false}>
              <ModalContainer className="words-to-avoid-page__modal-container" focusLock={false}>
                <ModalHeader>Not available</ModalHeader>
                <ModalContent>
                  We do not currently offer home delivery or Click &
                  Collect for <Strong>{'<postcode>'}</Strong>. Try another postcode:
                  <TextField
                    placeholder="Enter postcode"
                    className="words-to-avoid-page__modal-textfield"
                  />
                  <Button className="words-to-avoid-page__modal-button">Check postcode</Button>
                  <div className="words-to-avoid-page__modal-paragraph">
                    <Strong>New build house?</Strong><br />
                    It may not be on our system yet.
                    {' '}<LinkText>Contact us</LinkText>{' '}
                    and we will add it for you.
                  </div>
                </ModalContent>
                <ModalCloseIcon />
              </ModalContainer>
            </Modal>
          </Recommendation>
          <div>{/* Empty field */}</div>
          <Recommendation className="words-to-avoid-page__recommendation__fields">
            <RecommendationStatus />
            <Modal className="words-to-avoid-page__modal" scrollLock={false}>
              <ModalContainer className="words-to-avoid-page__modal-container" focusLock={false}>
                <ModalHeader>Sorry</ModalHeader>
                <ModalContent>
                  We do not currently offer home delivery or Click &
                  Collect for <Strong>{'<postcode>'}</Strong>. Try another postcode:
                  <TextField
                    placeholder="Enter postcode"
                    className="words-to-avoid-page__modal-textfield"
                  />
                  <Button className="words-to-avoid-page__modal-button">Check postcode</Button>
                  <div className="words-to-avoid-page__modal-paragraph">
                    <Strong>New build house?</Strong><br />
                    It may not be on our system yet.
                    {' '}<LinkText>Contact us</LinkText>{' '}
                    and we will add it for you.
                  </div>
                </ModalContent>
                <ModalCloseIcon />
              </ModalContainer>
            </Modal>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph noMargin>
        Do not use sorry in validation messages.
        <Container>
          <Recommendation className="words-to-avoid-page__recommendation__fields">
            <RecommendationStatus />
            <div className="words-to-avoid-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Input Text"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="We do not recognise that postcode"
                validate
              />
            </div>
          </Recommendation>
          <Recommendation className="words-to-avoid-page__recommendation__fields">
            <RecommendationStatus />
            <div className="words-to-avoid-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Input Text"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Sorry, we do not recognise that postcode"
                validate
              />
            </div>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

  </article>
)

export default WordsToAvoidPage
