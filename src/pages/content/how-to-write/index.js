// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  Heading1,
  Heading2,
  Heading3,
  FeaturedSection,
  Paragraph,
  Section,
} from '@sg/sg-layout'
import { RecommendationStatus } from '@sg/sg-recommendation'

// Assets
import './_style.scss'

const CustomRecommendation = () => (
  <div className="content-how-to-write-page__custom-recommendation">
    <table className="content-how-to-write-page__custom-recommendation-table">
      <thead>
        <tr>
          <td><RecommendationStatus className="content-how-to-write-page__custom-recommendation-status" /></td>
          <td><RecommendationStatus className="content-how-to-write-page__custom-recommendation-status" recommended /></td>
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

const ContentGuidingPrinciplesPage = () => (
  <article className="content-how-to-write-page">

    <Heading1>How to write for digital</Heading1>

    <Section>
      <Paragraph>
        Sometimes Asda aims to inspire and sell. Sometimes Asda aims to help and
        support. Whether we are in marketing or UX, we need to be clear and
        understandable if we are to succeed.
      </Paragraph>
      <Paragraph>
        How we write must be driven by how users read online.
      </Paragraph>
      <Paragraph>
        Content for Asda Groceries should be approved by a trained native British
        English speaking Content Designer.
      </Paragraph>
      <Paragraph>
        Use the Hemingway app to flag up basic problems with your copy.
      </Paragraph>
      <Paragraph>
        Sentences marked as hard or very hard to read should be broken down into
        smaller sentences. Aim for a reading grade of around Grade 4 to 6.
      </Paragraph>
      <Paragraph noMargin>
        Use the Asda Groceries heuristics to check if content meets content
        design principles and the Asda approach.
      </Paragraph>
    </Section>

    <Section>
      <Heading2>4 UX principles</Heading2>
      <Paragraph>
        Content should follow these 4 best practice principles. These principles
        are not always in harmony. For example, sometimes you may have to write
        something longer to make sure it is clear.
      </Paragraph>

      <FeaturedSection>
        <Paragraph>
          <Heading3>Be useful</Heading3>
          Don’t decide what to write. Don’t let the business tell you what to write.
          Discover what the user needs to know at each stage of the process.
        </Paragraph>
        <Paragraph>
          Use research and evidence to learn about your users, their goals and
          their context of use.
        </Paragraph>
        <Paragraph>
          <Heading3>Be clear</Heading3>
          Keep it simple and active. Be authentic and honest. Use words our
          users would use.
        </Paragraph>
        <Paragraph>
          The average reading age in the UK is 9. Not everyone speaks English as
          their first language. Some people have learning difficulties. Even
          highly literate users slow down and retain less if language is complex.
        </Paragraph>
        <Paragraph>
          <Heading3>Be concise</Heading3>
          Be efficient with your writing and edit ruthlessly. We read 25% slower
          online and even slower on mobile. Every word must work hard.
        </Paragraph>
        <Paragraph>
          Avoid marketing speak. Marketing speak slows user reading speed,
          reduces information retention and erodes trust.
        </Paragraph>
        <Paragraph>
          <Heading3>Write for how we read</Heading3>
          Frontload: put the most important things first.
        </Paragraph>
        <Paragraph>
          Users scan, skim and skip around a page, so signpost clearly. Use
          white space, headings and bullet points to break up longer text. Keep
          punctuation minimal and functional.
        </Paragraph>
      </FeaturedSection>
    </Section>
  </article>
)

export default ContentGuidingPrinciplesPage
