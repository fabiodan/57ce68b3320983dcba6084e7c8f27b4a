// Libs
import React from 'react'

// Components (from atomic to composite)
import { ButtonLink } from '@asda/button'
import {
  Figure,
  Paragraph,
  Heading2,
  Heading3,
  Section,
  Heading1,
  List,
  ListItem,
  FeaturedSection,
} from '@sg/sg-layout'
import Recommendation, { RecommendationStatus } from '@sg/sg-recommendation'
import { TextField, Label } from '@asda/form'

// Assets
import './_style.scss'
import callToActionPDFSource from '../heuristics/images/heuristics-call-to-action.pdf'

const Container = ({ children }) => (
  <div className="content-patterns-page__container">{children}</div>
)

const ActionBar = ({ children }) => (
  <div className="content-patterns-page__action-bar">{children}</div>
)

const CustomRecommendation = ({ children }) => {
  return (
    <div className="content-patterns-page__custom-recommendation">
      <table className="content-patterns-page__custom-recommendation-table">
        <thead>
          <tr>
            <td><RecommendationStatus className="content-patterns-page__recommendation-status" /></td>
            <td><RecommendationStatus className="content-patterns-page__recommendation-status" recommended /></td>
          </tr>
        </thead>
        <tbody>
          <tr><td>Check postcode</td><td></td></tr>
          <tr><td>Sign in</td><td></td></tr>
          <tr><td>Create an account</td><td>Register</td></tr>
          <tr><td>Help</td><td>Need some help?</td></tr>
          <tr><td>Start shopping</td><td></td></tr>
          <tr><td>Book a slot</td><td></td></tr>
          <tr><td>Find out more</td><td></td></tr>
          <tr><td>Shop now</td><td></td></tr>
          <tr><td>Book a delivery</td><td>Book home delivery</td></tr>
          <tr><td>Book a collection</td><td>Book click & collect</td></tr>
          <tr><td>Add</td><td></td></tr>
          <tr><td>View</td><td></td></tr>
          <tr><td>Back</td><td></td></tr>
          <tr><td>Checkout</td><td></td></tr>
          <tr><td>Back to shop</td><td></td></tr>
          <tr><td>Find out more</td><td></td></tr>
          <tr><td>View as a list</td><td></td></tr>
          <tr><td>Select this location</td><td></td></tr>
          <tr><td>Use previous trolley</td><td></td></tr>
          <tr><td>Use current trolley</td><td></td></tr>
          <tr><td>Your account</td><td></td></tr>
          <tr><td>Continue checkout</td><td></td></tr>
          <tr><td>Yes</td><td></td></tr>
          <tr><td>No</td><td></td></tr>
          <tr><td>Got it</td><td>OK</td></tr>
          <tr><td>Continue</td><td></td></tr>
        </tbody>
      </table>
    </div>
  )
}

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
          <ListItem>No humorous or patronising messaging like "Oops", "Whoops"</ListItem>
          <ListItem>Give only the information the user needs in order to understand how to move forward</ListItem>
          <ListItem>State how to fix it (or what to do/try next)</ListItem>
          <ListItem>
            If the customer is trying to do something – register, sign in, check
            out etc – then we 	need to use direct, instructional microcopy so
            they can complete their task as fast as 	possible. Now is not the
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
                errorMessage="There’s a problem with the details you submitted. Please complete postcode and try again."
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

      <Paragraph noMargin>
        <List>
          <ListItem>No full stop on single sentence error messages</ListItem>
          <ListItem>If there are two or more sentences, apply full stops to all but the last sentence</ListItem>
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
                errorMessage="There’s a problem with the details you submitted. Please complete postcode and try again."
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
    </Section>

    <Section>
      <Heading2>Call to action patterns</Heading2>
      <Heading3>Guiding principles & heuristics</Heading3>
      <Paragraph>
        These are our guiding principles. But context always come first.

        <List>
          <ListItem><span className="content-patterns-page--semibold">Concise</span> – keep button labels and calls to action to 3 words or less</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Positive</span> - use active language. Start with a verb where possible. Focus on the positive</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Relevant</span> - Give only the information the user needs in order to understand how to	move forward</ListItem>
          <ListItem><span className="content-patterns-page--semibold">Natural</span> - Use self explanatory, natural language – try to role play the action to see	what you’d say to a friend.</ListItem>
        </List>
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
          <ButtonLink
            href="/#/content/heuristics/call-to-action"
            target="_blank"
            type="submit"
            category="secondary"
            className="content-patterns-page__button"
          >
            Online worksheet
          </ButtonLink>
        </ActionBar>
      </Paragraph>

      <Paragraph>
        <CustomRecommendation />
      </Paragraph>
    </Section>
  </article>
)

export default ContentPatternsPage
