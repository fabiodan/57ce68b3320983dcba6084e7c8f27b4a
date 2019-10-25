// Libs
import React from 'react'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import Button from '@asda/button'
import { LinkText } from '@asda/link'
import { Label, TextField } from '@asda/form'
import Recommendation, { RecommendationStatus } from '@sg/sg-recommendation'
import Modal, {
  ModalHeader,
  ModalContent,
  ModalActionBar,
  ModalContainer,
  ModalBackdrop,
  ModalButton,
  ModalCloseIcon,
} from '@asda/modal'
import {
  Heading1,
  Heading2,
  Heading3,
  Figure,
  Paragraph,
  ListItem,
  List,
  Section,
} from '@sg/sg-layout'


// Assets
import './_style.scss'

const Container = ({ children }) => (
  <div className="content-style-usage-page__container">{children}</div>
)

const Strong = ({ children }) => (
  <strong className="content-punctuation-page__modal-strong">{children}</strong>
)

const ContentStyleUsagePage = () => (
  <article className="content-style-usage-page">
    <Heading1>Style & usage</Heading1>

    <Section>
      <Heading2>Abbreviation</Heading2>
      <Paragraph noMargin>
        Avoid abbreviations if possible. Otherwise write out in full on the
        first usage, followed by abbreviation in brackets.
        <Container>
          <Recommendation>
            <RecommendationStatus recommended />
            <div className="content-style-usage-page__recommendation__slot">
              <span className="content-style-usage-page__recommendation__slot-text">Full</span>
              <LinkText>Collect?</LinkText>
            </div>
          </Recommendation>
          <Recommendation>
            <RecommendationStatus />
            <div className="content-style-usage-page__recommendation__slot">
              <span className="content-style-usage-page__recommendation__slot-text">Full</span>
              <LinkText>Try C&C</LinkText>
            </div>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Contraction</Heading2>
      <Paragraph>
        Do not contract “have”. Research shows that contractions of “have” can
        be confusing. In the case of “should have”, many people think of this as
        “should of”. It’s also hard for people with dyslexia and similar
        conditions to understand.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              We should have passed this to you sooner
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              We should’ve passed this to you sooner
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph>
        Use positive and neutral contractions.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              We’ll get back to you shortly.
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              We will get back to you shortly.
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph noMargin>
        Do not contract negatives. Research shows that the negative can be
        missed when scanning.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              We would not usually wait this long.
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              We wouldn’t usually wait this long.
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Date</Heading2>
      <Paragraph noMargin>
        Write dates as DD Month YYYY. No commas in dates. Avoid “st”, “rd” or “th” as it makes it harder to scan.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__cell-group">
              <span className="content-style-usage-page__recommendation__cell">
                16 June 2019
              </span>
              <span className="content-style-usage-page__recommendation__cell">
                17 June 2019
              </span>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__cell-group">
              <span className="content-style-usage-page__recommendation__cell">
                16th June 2019
              </span>
              <span className="content-style-usage-page__recommendation__cell">
                17th June 2019
              </span>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Day and month</Heading2>
      <Paragraph noMargin>
        Weekdays and months can be abbreviated to 3 letters if space is tight. Avoid commas between days and months.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__cell-group">
              <span className="content-style-usage-page__recommendation__cell">Wed 9 May</span>
              <span className="content-style-usage-page__recommendation__cell">Thu 10 May</span>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__cell-group">
              <span className="content-style-usage-page__recommendation__cell">
                Wed, 9 May
              </span>
              <span className="content-style-usage-page__recommendation__cell">
                Thu, 10 May
              </span>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Ranges: price, date and time</Heading2>
      <Paragraph noMargin>
        Use “to” for ranges. This is easier to read when scanning and less likely
        to be mistaken for a minus sign.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              £3 to £5
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              £3 - £5
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              24 Jun to 30 Jun
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              24 Jun - 30 Jun
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              11:30am to 12:30am
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              11:30am - 12:30am
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Time</Heading2>
      <Paragraph>
        It is important to keep times easy to read at a glance. Remove visual
        clutter by taking out unnecessary zeros. Avoid 24 hour clock as this is
        hard to read. Use “to” for ranges.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              11:00am to 12:00pm
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              1100 to 1200
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph noMargin>
        Avoid full stops. No space between number and am/pm.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              11:00am to 12:00pm
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              11.00 a.m. to 12.00 p.m.
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Your versus My</Heading2>
      <Paragraph noMargin>
        Use "Your" to indicate areas that the user can interact with once they
        are registered with the site. Using "Your" lets the user know we're
        addressing them and we are at their service.
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              Your account
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
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
        UX writing does not seem impolite without it and adding it looks old fashioned and formal.
      </Paragraph>
      <Paragraph noMargin>
        "Please" can also imply there’s a choice. But a choice between doing the
        thing we ask and not getting to use the service is not really a choice
        <Container>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              The price may vary
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
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
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
              Thanks for your order
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-style-usage-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-style-usage-page__recommendation__paragraph">
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
          <Recommendation className="content-punctuation-page__recommendation__fields">
            <RecommendationStatus recommended />
            <Modal className="content-punctuation-page__modal" scrollLock={false}>
              <ModalContainer className="content-punctuation-page__modal-container" focusLock={false}>
                <ModalHeader>Not available</ModalHeader>
                <ModalContent>
                  Sorry, we do not currently offer home delivery or Click &
                  Collect for <Strong>{`<postcode>`}</Strong>. Try another postcode:
                  <TextField placeholder="Enter postcode" className="content-punctuation-page__modal-textfield"/>
                  <Button className="content-punctuation-page__modal-button">Check postcode</Button>
                  <div className="content-punctuation-page__modal-paragraph">
                    <Strong>New build house?</Strong><br/>
                    It may not be on our system yet.
                    {' '}<LinkText>Contact us</LinkText>{' '}
                    and we will add it for you.
                  </div>
                </ModalContent>
                <ModalCloseIcon />
              </ModalContainer>
            </Modal>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation__fields">
            <RecommendationStatus />
            <Modal className="content-punctuation-page__modal" scrollLock={false}>
              <ModalContainer className="content-punctuation-page__modal-container" focusLock={false}>
                <ModalHeader>Not available</ModalHeader>
                <ModalContent>
                  We do not currently offer home delivery or Click &
                  Collect for <Strong>{`<postcode>`}</Strong>. Try another postcode:
                  <TextField placeholder="Enter postcode" className="content-punctuation-page__modal-textfield"/>
                  <Button className="content-punctuation-page__modal-button">Check postcode</Button>
                  <div className="content-punctuation-page__modal-paragraph">
                    <Strong>New build house?</Strong><br/>
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
          <Recommendation className="content-punctuation-page__recommendation__fields">
            <RecommendationStatus />
            <Modal className="content-punctuation-page__modal" scrollLock={false}>
              <ModalContainer className="content-punctuation-page__modal-container" focusLock={false}>
                <ModalHeader>Sorry</ModalHeader>
                <ModalContent>
                  We do not currently offer home delivery or Click &
                  Collect for <Strong>{`<postcode>`}</Strong>. Try another postcode:
                  <TextField placeholder="Enter postcode" className="content-punctuation-page__modal-textfield"/>
                  <Button className="content-punctuation-page__modal-button">Check postcode</Button>
                  <div className="content-punctuation-page__modal-paragraph">
                    <Strong>New build house?</Strong><br/>
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
          <Recommendation className="content-punctuation-page__recommendation__fields">
            <RecommendationStatus />
            <div className="content-patterns-page__recommendation-item">
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
          <Recommendation className="content-punctuation-page__recommendation__fields">
            <RecommendationStatus />
            <div className="content-patterns-page__recommendation-item">
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

export default ContentStyleUsagePage
