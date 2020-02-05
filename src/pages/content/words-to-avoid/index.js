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

const CustomRecommendation = () => (
  <div className="content-words-to-avoid-page__custom-recommendation">
    <table className="content-words-to-avoid-page__custom-recommendation-table">
      <thead>
        <tr>
          <td><RecommendationStatus className="content-words-to-avoid-page__custom-recommendation-status" /></td>
          <td><RecommendationStatus className="content-words-to-avoid-page__custom-recommendation-status" recommended /></td>
        </tr>
      </thead>
      <tbody>
        <tr><td>Click</td><td>Tap, select</td></tr>
        <tr><td>Click here</td><td><del>Omit this</del></td></tr>
        <tr><td>Click</td><td>Tap, select</td></tr>
        <tr><td>Revert</td><td>Go back to, change to, change back to</td></tr>
        <tr><td>Verify</td><td>Confirm</td></tr>
        <tr><td>Purchase</td><td>Buy</td></tr>
        <tr><td>View</td><td>See</td></tr>
        <tr><td>Unit</td><td>Product</td></tr>
        <tr><td>Item</td><td>Rephrase to avoid if possible</td></tr>
        <tr><td>Utilise</td><td>Use</td></tr>
        <tr><td>Pick (products)</td><td>Select, choose</td></tr>
        <tr>
          <td>Fulfil, Fulfilment</td>
          <td>Deliver, delivery option (or be specific about method, or rephrase to avoid)</td>
        </tr>
        <tr><td>Via</td><td>By</td></tr>
        <tr><td>Preferences</td><td>Rephrase to avoid</td></tr>
        <tr><td>Dispatch</td><td>Send, on the way</td></tr>
        <tr><td>Process</td><td>Describe the action instead</td></tr>
        <tr><td>Awaiting</td><td>Wait for</td></tr>
        <tr><td>Uh oh</td><td>Rephrase to avoid</td></tr>
        <tr><td>Ooops</td><td>Rephrase to avoid</td></tr>
        <tr><td>Initialise</td><td>-</td></tr>
        <tr><td>Ensure</td><td>Make sure</td></tr>
        <tr><td>Import</td><td>-</td></tr>
        <tr><td>Please</td><td>Unnecessary, overly formal, implies choice - omit</td></tr>
        <tr><td>Sorry</td><td>Use sparingly and only where we have caused inconvenience</td></tr>
        <tr><td>Check out, checkout</td><td>PayNote, please note</td></tr>
        <tr><td>Note, please note</td><td><del>Omit this</del></td></tr>
        <tr>
          <td>Valid</td>
          <td>
            For error messaging use recognise instead eg {'"'}We do not recognise
            that postcode{'"'} rather than {'"'}That is not a valid postcode{'"'}
          </td>
        </tr>
        <tr><td>Proceed</td><td>Continue</td></tr>
        <tr><td>Minimise</td><td>Reduce, cut down on</td></tr>
        <tr><td>Lessen</td><td>Reduce, cut down on</td></tr>
        <tr><td>Check out in, checking out</td><td>Pay</td></tr>
        <tr><td>Select</td><td>Choose</td></tr>
        <tr><td>Edit</td><td>Change</td></tr>
        <tr><td>Advise</td><td>Tell, say</td></tr>
      </tbody>
    </table>
  </div>
)

const WordsToAvoidPage = () => (
  <article className="content-words-to-avoid-page">

    <Heading1>Words to avoid</Heading1>

    <Section>
      <Paragraph>
        Using the wrong words makes our language sound stilted and hard to understand.
        It is very easy to slip into jargon and corporate speak so ruthlessly edit
        your work.
      </Paragraph>

      <CustomRecommendation />
    </Section>
  </article>
)

export default WordsToAvoidPage
