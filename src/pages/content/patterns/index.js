// Libs
import React, { Fragment } from 'react'

// Components (from atomic to composite)
import CreditCardIcon from '@asda/credit-card-icon'
import { LinkText } from '@asda/link'
import Button, { ButtonLink } from '@asda/button'
import {
  Heading1,
  Heading2,
  Heading3,
  List,
  ListItem,
  Paragraph,
  Section,
} from '@sg/sg-layout'
import Recommendation, { RecommendationStatus } from '@sg/sg-recommendation'
import { TextField, Checkbox, Label, Radio } from '@asda/form'

// Assets
import './_style.scss'
import callToActionPDFSource from '../heuristics/images/heuristics-call-to-action.pdf'
import emptyStatesPDFSource from '../heuristics/images/heuristics-empty-states.pdf'
import formsPDFSource from '../heuristics/images/heuristics-forms.pdf'
import headingsPDFSource from '../heuristics/images/heuristics-headings.pdf'
import instructionsPDFSource from '../heuristics/images/heuristics-instructions-and-help-text.pdf'
import linksPDFSource from '../heuristics/images/heuristics-links.pdf'
import modalsPDFSource from '../heuristics/images/heuristics-modals.pdf'
import notificationsAlertsPDFSource from '../heuristics/images/heuristics-notifications-and-alerts.pdf'
import onboardingPDFSource from '../heuristics/images/heuristics-onboarding.pdf'
import promoLabelsPDFSource from '../heuristics/images/heuristics-promotional-labels.pdf'
import serviceEmailsPDFSource from '../heuristics/images/heuristics-service-emails.pdf'
import statementsWarningsPDFSource from '../heuristics/images/heuristics-statements-and-warnings.pdf'

const Container = ({ children }) => (
  <div className="content-patterns-page__container">{children}</div>
)

const ActionBar = ({ children }) => (
  <div className="content-patterns-page__action-bar">{children}</div>
)

const CustomRecommendation = ({ children }) => (
  <div className="content-patterns-page__custom-recommendation">
    <table className="content-patterns-page__custom-recommendation-table">
      <thead>
        <tr>
          <td><RecommendationStatus className="content-patterns-page__recommendation-status" /></td>
          <td><RecommendationStatus className="content-patterns-page__recommendation-status" recommended /></td>
        </tr>
      </thead>
      <tbody>
        { children }
      </tbody>
    </table>
  </div>
)

const ContentPatternsPage = () => (
  <article className="content-patterns-page">

    <Heading1>Patterns</Heading1>

    <Section>
      <Heading2>Error Messaging</Heading2>
      <Heading3>Guiding principles</Heading3>

      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem>Be specific – general errors help no-one</ListItem>
          <ListItem>No humorous or patronising messaging like {'"'}Oops{'"'}, {'"'}Whoops{'"'}</ListItem>
          <ListItem>
            Give only the information the user needs in order to understand how
            to move forward
          </ListItem>
          <ListItem>State how to fix it (or what to do/try next)</ListItem>
          <ListItem>
            If the customer is trying to do something - register, sign in, check
            out etc - then we need to use direct, instructional microcopy so
            they can complete their task as fast as possible. Now is not the
            time to be cute.
          </ListItem>
        </List>

        <Container>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Postcode</Label>
            <TextField
              placeholder="Default"
              value="Input Text"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="Error message"
              validate
            />
          </Recommendation>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus />
            <div className="content-patterns-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Default"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="There's a problem with the details you submitted. Please complete postcode and try again."
                validate
              />
            </div>
            <div className="content-patterns-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Default"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Oops, you entered that postcode wrong!"
                validate
              />
            </div>
            <div className="content-patterns-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Default"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Sorry, something went wrong"
                validate
              />
            </div>
            <div className="content-patterns-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Default"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Attention! Field input validation error"
                validate
              />
            </div>
          </Recommendation>
        </Container>

      </Paragraph>

      <Heading3>Style notes</Heading3>

      <Paragraph>
        <List>
          <ListItem>No full stop on single sentence error messages</ListItem>
          <ListItem>
            If there are two or more sentences, apply full stops to all but the
            last sentence
          </ListItem>
          <ListItem>Use sentence case</ListItem>
          <ListItem>No ALL CAPS</ListItem>
          <ListItem>If we say sorry, comma goes after sorry</ListItem>
        </List>

        <Container>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Postcode</Label>
            <TextField
              placeholder="Default"
              value="Input Text"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="We do not recognise that postcode"
              validate
            />
          </Recommendation>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus />
            <div className="content-patterns-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Default"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Oops, you entered that postcode wrong."
                validate
              />
            </div>
            <div className="content-patterns-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Default"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="There's a problem with the details you submitted. Please complete postcode and try again."
                validate
              />
            </div>
            <div className="content-patterns-page__recommendation-item">
              <Label>Postcode</Label>
              <TextField
                placeholder="Default"
                value="123456"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Sorry. Something Went Wrong."
                validate
              />
            </div>
          </Recommendation>
        </Container>
      </Paragraph>

      <Heading3>Use cases</Heading3>
      <List>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Already registered</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Email address</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              placeholder="Default"
              value="jane.doe@abc.com"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="Error message"
              validate
            />
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Not eligible/barred from applying</span>
            <span>User error, major serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Email address</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              placeholder="Default"
              value="jane.doe@abc.com"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="Sorry, you are not currently able to apply for [service name]. [Give reason where possible]"
              validate
            />
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Technical error with registration</span>
            <span>System error, major serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Card number</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              extraPaddingLeft="medium"
              placeholder="Default"
              value="1234 5678 1230 5670"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="Sorry, we cannot [register your card etc] right now. Try again later"
              validate
            >
              <CreditCardIcon className="text-fields-page__credit-card-icon" name="amex" />
            </TextField>
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Field left blank</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Enter CVV number</Label>
            <div className="content-patterns-page__recommendation-cvv">
              <TextField
                placeholder="3 digits"
                value=""
                pattern="12345"
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Fill in [field name] to continue"
                required
                validate
              />
              <CreditCardIcon className="content-patterns-page__cvv-icon" name="cvv" size="large" />
            </div>
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Can{'\''}t deliver</span>
            <span>System error, major serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Postcode</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              placeholder="Default"
              value="NX16XE"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="Sorry, we do not deliver to [address/postcode]"
              validate
            />
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Address not found in postcode finder</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Postcode</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              placeholder="Default"
              value="NX16XE"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="We could not find an address for this postcode. Try again or enter your address manually."
              validate
            />
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Not valid or mistyped</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Postcode</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              placeholder="Default"
              value="123456"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="We do not recognise that [date, phone number, postcode etc]"
              validate
            />
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Too few characters</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Card number</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              extraPaddingLeft="medium"
              placeholder="Default"
              value="123456"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="[Field name] must be at least [xx] characters"
              validate
            >
              <CreditCardIcon className="text-fields-page__credit-card-icon" name="amex" />
            </TextField>
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Too many characters</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Card number</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              extraPaddingLeft="medium"
              placeholder="Default"
              value="1234 5678 1234 5670 1234"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="[Field name] must be [less than xx] characters"
              validate
            >
              <CreditCardIcon className="text-fields-page__credit-card-icon" name="amex" />
            </TextField>
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Checkbox not selected</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            Select your favourite fruits:
            <div className="content-patterns-page__recommendation-checkbox">
              <Checkbox id="content-patterns-page__checkbox1" />
              <Label inline htmlFor="content-patterns-page__checkbox1">Apple</Label>
            </div>
            <div className="content-patterns-page__recommendation-checkbox">
              <Checkbox id="content-patterns-page__checkbox2" />
              <Label inline htmlFor="content-patterns-page__checkbox2">Banana</Label>
            </div>
            <div className="content-patterns-page__recommendation-checkbox">
              <Checkbox id="content-patterns-page__checkbox3" />
              <Label inline htmlFor="content-patterns-page__checkbox3">Grapes</Label>
            </div>
            <Button className="content-patterns-page__select-button">Select</Button>
            <span className="content-patterns-page__select-button-error-message">
              Select [whatever they are choosing, eg fruits] to continue
            </span>
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Date must be in past or future</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Expiry date</Label>
            <TextField
              className="content-patterns-page__recommendation__text-field"
              placeholder="Default"
              value="11/2018"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="[Name of field eg Date of birth] must be in the future / past"
              validate
            />
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Radio button not selected</span>
            <span>User error, minor serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            Select your favourite fruits:
            <div className="content-patterns-page__recommendation-radio">
              <Radio id="content-patterns-page__radio1" />
              <Label inline htmlFor="content-patterns-page__radio1">Apple</Label>
            </div>
            <div className="content-patterns-page__recommendation-radio">
              <Radio id="content-patterns-page__radio2" />
              <Label inline htmlFor="content-patterns-page__radio2">Banana</Label>
            </div>
            <div className="content-patterns-page__recommendation-radio">
              <Radio id="content-patterns-page__radio3" />
              <Label inline htmlFor="content-patterns-page__radio3">Grapes</Label>
            </div>
            <Button className="content-patterns-page__select-button">Select</Button>
            <span className="content-patterns-page__select-button-error-message">
              If [rephrase question] then select [Yes/No/option]
            </span>
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Page not found</span>
            <span>System error, major serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <div className="content-patterns-page__text-block">
              We can{'\''}t find that page.<br />
              Try these useful links instead:<br />
              <LinkText>Homepage</LinkText><br />
              <LinkText>Search</LinkText><br />
              <LinkText>[Others]</LinkText><br />
            </div>
          </Recommendation>
        </ListItem>
        <ListItem className="content-patterns-page__use-case-item">
          <div className="content-patterns-page__use-case-text">
            <span>Server error/technical problem (page cannot be refreshed due to SPA)</span>
            <span>System error, major serverity</span>
          </div>
          <Recommendation className="content-patterns-page__recommendation">
            <RecommendationStatus recommended />
            <div className="content-patterns-page__text-block">
              Something went wrong<br /><br />
              We are working hard to make it right. Refresh will not work on
              this page. Go back to the previous page and try again to see if we
              fixed it. Or go to asda.com for an update on what we{'\''}re doing to fix this.
              <br /><br />
              Go back<br />
              Go to Asda.com
            </div>
          </Recommendation>
        </ListItem>
      </List>

    </Section>

    <Section>
      <Heading2>Call to action patterns</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.

        <List>
          <ListItem><span className="content-patterns-page--semibold">Concise</span> – keep button labels and calls to action to 3 words or less</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Positive</span> - use active language. Start with a verb where possible. Focus on the positive</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Relevant</span> - Give only the information the user needs in order to understand how to move forward</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Natural</span> - Use self explanatory, natural language – try to role play the action to see what you{'\''}d say to a friend.</ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={callToActionPDFSource}
            download={callToActionPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/call-to-action"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>

      <Paragraph>
        <CustomRecommendation>
          <Fragment>
            <tr><td>Check postcode</td><td /></tr>
            <tr><td>Sign in</td><td /></tr>
            <tr><td>Create an account</td><td>Register</td></tr>
            <tr><td>Help</td><td>Need some help?</td></tr>
            <tr><td>Start shopping</td><td /></tr>
            <tr><td>Book a slot</td><td /></tr>
            <tr><td>Find out more</td><td /></tr>
            <tr><td>Shop now</td><td /></tr>
            <tr><td>Book a delivery</td><td>Book home delivery</td></tr>
            <tr><td>Book a collection</td><td>Book click & collect</td></tr>
            <tr><td>Add</td><td /></tr>
            <tr><td>View</td><td /></tr>
            <tr><td>Back</td><td /></tr>
            <tr><td>Checkout</td><td /></tr>
            <tr><td>Back to shop</td><td /></tr>
            <tr><td>Find out more</td><td /></tr>
            <tr><td>View as a list</td><td /></tr>
            <tr><td>Select this location</td><td /></tr>
            <tr><td>Use previous trolley</td><td /></tr>
            <tr><td>Use current trolley</td><td /></tr>
            <tr><td>Your account</td><td /></tr>
            <tr><td>Continue checkout</td><td /></tr>
            <tr><td>Yes</td><td /></tr>
            <tr><td>No</td><td /></tr>
            <tr><td>Got it</td><td>OK</td></tr>
            <tr><td>Continue</td><td /></tr>
          </Fragment>
        </CustomRecommendation>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Heading patterns</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.

        <List>
          <ListItem><span className="content-patterns-page--semibold">Concise</span> – 3 words or less wherever possible</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Descriptive</span> - Can I tell what will be in this section from the heading? Marketing phrases should not be used as headings as they are inspirational, not descriptive.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Logical</span> - Headings should have a logical flow and make sense even without their supporting content.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Active</span> - Use active, positive and personal language. For example, {'"'}Account area{'"'} is passive. But {'"'}View your account{'"'} is active and personal.</ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={headingsPDFSource}
            download={headingsPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/headings"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>

      <Paragraph>
        <CustomRecommendation>
          <Fragment>
            <tr><td>Check postcode</td><td /></tr>
            <tr><td>Sign in</td><td /></tr>
            <tr><td>Create an account</td><td>Register</td></tr>
            <tr><td>Help</td><td>Need some help?</td></tr>
          </Fragment>
        </CustomRecommendation>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Instructions and help text patterns</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem>
            <span className="content-patterns-page--semibold">
              Informative
            </span>
             - Users know enough to decide and continue
          </ListItem>
          <ListItem>
            <span className="content-patterns-page--semibold">
              Helpful
            </span>
             - Help the user succeed first time. Users have enough context to
             begin a multi - step task. Give routes to get more help eg offline
             where needed
          </ListItem>
          <ListItem>
            <span className="content-patterns-page--semibold">
              Guiding
            </span>
             - Friction points are addressed with reassuring guidance
          </ListItem>
          <ListItem>
            <span className="content-patterns-page--semibold">
              Intuitive
            </span>
             - Make the design clear and intuitive so that instructions are minimal.
             Instructions should not be added to solve design problems.
          </ListItem>
          <ListItem>
            <span className="content-patterns-page--semibold">
              Positive
            </span>
             - Be warm and supportive. Keep language positive
          </ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={instructionsPDFSource}
            download={instructionsPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/instructions-and-help-text"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>

      <Paragraph>
        <CustomRecommendation>
          <Fragment>
            <tr><td>Check postcode</td><td /></tr>
            <tr><td>Sign in</td><td /></tr>
            <tr><td>Create an account</td><td>Register</td></tr>
            <tr><td>Help</td><td>Need some help?</td></tr>
          </Fragment>
        </CustomRecommendation>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Links</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem>
            <span className="content-patterns-page--semibold">
              Concise
            </span>
            - As short as possible
          </ListItem>
          <ListItem>
            <span className="content-patterns-page--semibold">
              Helpful
            </span>
            - Use descriptive language
          </ListItem>
          <ListItem>
            <span className="content-patterns-page--semibold">
              Active
            </span>
            - Use positive language and focus on verbs. Avoid device specific
            language where possible. So “Find out more in our Privacy Centre”,
            not “Click here to visit our Privacy Centre”. If this is not possible,
            use “tap” rather than click
          </ListItem>
        </List>
        <span className="content-patterns-page--semibold">Never use {'"'}Click here{'"'}</span>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={linksPDFSource}
            download={linksPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/links"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>

      <Paragraph>
        <CustomRecommendation>
          <Fragment>
            <tr><td>Empty trolley</td><td /></tr>
            <tr><td>Add to shopping list</td><td /></tr>
            <tr><td>View full trolley</td><td /></tr>
          </Fragment>
        </CustomRecommendation>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Promotional labels</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Concise</span> - No fluff.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Meaningful</span> - Use honest, authentic language.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Consistent</span> - Agree labels with marketing.</ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={promoLabelsPDFSource}
            download={promoLabelsPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/promotional-labels"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Statements and warnings</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Minimal</span> - Never overuse warnings and callouts. Aim to change the design to not need them in the first instance</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Meaningful</span> - Use honest, authentic language</ListItem>
        </List>
        <span className="content-patterns-page--semibold">Never use {'"'}Click here{'"'}</span>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={statementsWarningsPDFSource}
            download={statementsWarningsPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/statements-and-warnings"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>

      <Paragraph>
        <CustomRecommendation>
          <Fragment>
            <tr><td>Out of stock</td><td /></tr>
            <tr><td>No longer being stocked</td><td>No longer being stocked</td></tr>
          </Fragment>
        </CustomRecommendation>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Compliance and disclaimers</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Accurate</span> - Sign off must be agreed with legal/compliance.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Meaningful</span> - Use honest, authentic language. Use language our customers use.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Concise</span> - Short and without fluff.</ListItem>
        </List>
        <span className="content-patterns-page--semibold">Never use {'"'}Click here{'"'}</span>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={callToActionPDFSource}
            download="heuristics-call-to-action.pdf"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/call-to-action"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>

      <Paragraph>
        <CustomRecommendation>
          <Fragment>
            <tr>
              <td>I have read and accept the terms and conditions</td>
              <td>I{'\''}ve read and accept the terms and conditions</td>
            </tr>
            <tr>
              <td>Yes I want to get exclusive offers and news from Asda</td>
              <td>
                We{'\''}d love to keep in touch with exclusive offers and the latest
                info from Asda. You can ask us to stop anytime, but if you don{'\''}t
                want to hear from us, please tick the box.
              </td>
            </tr>
            <tr>
              <td>
                In our <LinkText>Privacy Centre</LinkText> you can learn about
                your rights and how we use your information
              </td>
              <td>
                You can find out about your rights and choices, and how we use
                the information in our <LinkText>Privacy Centre</LinkText>
              </td>
            </tr>
            <tr>
              <td>
                We sell some things by weight, usually fresh produce like meat
                and vegetables. We{'\''}ll let you know what we think the cost will
                be now but this may change on the day depending on exact weight.
                {' '}<LinkText>Find out more</LinkText>
              </td>
              <td>
                Please note: for items sold by weight, the exact price may vary
                depending on the exact weight of items available.
                {' '}<LinkText>Find out more</LinkText>
              </td>
            </tr>
          </Fragment>
        </CustomRecommendation>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Empty states</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Concise</span> - Subject lines are around 30 characters</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Front-loaded</span> - The most important info comes first in the heading and subject line (especially actions people need to take)+</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Friendly</span> - Headlines are conversational and reiterate the subject (but not verbatim)</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Essential</span> - Body text is short and scannable</ListItem>
        </List>
        <span className="content-patterns-page--semibold">Never use {'"'}Click here{'"'}</span>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={emptyStatesPDFSource}
            download={emptyStatesPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/empty-states"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>

      <Paragraph>
        <CustomRecommendation>
          <Fragment>
            <tr>
              <td>I have read and accept the terms and conditions</td>
              <td>I{'\''}ve read and accept the terms and conditions</td>
            </tr>
            <tr>
              <td>Yes I want to get exclusive offers and news from Asda</td>
              <td>
                We{'\''}d love to keep in touch with exclusive offers and the
                latest info from Asda. You can ask us to stop anytime, but if
                you don{'\''}t want to hear from us, please tick the box.
              </td>
            </tr>
            <tr>
              <td>
                In our <LinkText>Privacy Centre</LinkText> you can learn about
                your rights and how we use your information
              </td>
              <td>
                You can find out about your rights and choices, and how we use
                the information in our <LinkText>Privacy Centre</LinkText>.
              </td>
            </tr>
            <tr>
              <td>
                We sell some things by weight, usually fresh produce like meat
                and vegetables. We{'\''}ll let you know what we think the cost
                will be now but this may change on the day depending on exact
                weight. <LinkText>Find out more</LinkText>
              </td>
              <td>
                Please note: for items sold by weight, the exact price may vary
                depending on the exact weight of items available.
                {' '}<LinkText>Find out more</LinkText>
              </td>
            </tr>
          </Fragment>
        </CustomRecommendation>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Service emails</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Concise</span> - Subject lines are around 30 characters.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Front-loaded</span> - The most important info comes first in the heading and subject line (especially actions people need to take).</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Friendly</span> - Headlines are conversational and reiterate the subject (but not verbatim).</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Essential</span> - Body text is short and scannable.</ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={serviceEmailsPDFSource}
            download={serviceEmailsPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/service-mails"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Onboarding</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Actionable</span> - The user knows what to do and what the benefits are.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">No fluff</span> - Only the essential info is provided.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Consistent</span> messaging  - Reflects marketing messaging.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Timely</span> - Content is presented at the right point in the journey. Reasoning is explained where the user is asked to grant access to eg location or give personal information.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Proactive</span>  - Content anticipates friction points and works to prevent drop off.</ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={onboardingPDFSource}
            download={onboardingPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/onboarding"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Modals</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Focused</span> - Content reiterates the end goal, and then the action needed to get there.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Intuitive</span> - Button actions set clear expectations.</ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={modalsPDFSource}
            download={modalsPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/modals"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Forms</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Logically</span> grouped - Similar fields are grouped together into sections.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Clear</span> - Fields and sections are clearly labelled.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Helpful</span> - Hint text is present, actionable, and helpful.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Proactive</span> - Hint text proactively prevents errors (shows an example or provides instructions for complex formatting).</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Unique</span> - Labels and hint text avoid redundancy.</ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={formsPDFSource}
            download={formsPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/forms"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Notifications and alerts</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.
        <List>
          <ListItem><span className="content-patterns-page--semibold">Consistent</span> - Messages align.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Meaningful</span> - Message is meaningful to the user right now.</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Appropriate</span> - The tone is appropriate for the user’s emotional context.</ListItem>
        </List>
      </Paragraph>

      <Paragraph>
        <ActionBar>
          <ButtonLink
            href={notificationsAlertsPDFSource}
            download={notificationsAlertsPDFSource.substr(16)}
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Download worksheet
          </ButtonLink>
          {/* <ButtonLink
            href="#/content/heuristics/notifications-and-alerts"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink> */}
        </ActionBar>
      </Paragraph>
    </Section>
  </article>
)

export default ContentPatternsPage
