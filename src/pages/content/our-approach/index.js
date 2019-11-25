// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  Figure,
  Paragraph,
  Heading2,
  Heading3,
  Section,
  Heading1,
  List,
  ListItem,
} from '@sg/sg-layout'
import Recommendation, { RecommendationStatus } from '@sg/sg-recommendation'
import { TextField, Label } from '@asda/form'

// Assets
import './_style.scss'

const Container = ({ children }) => (
  <div className="content-our-approach-page__container">{children}</div>
)

const ContentOurApproachPage = () => (
  <article className="content-our-approach-page">

    <Heading1>Our approach</Heading1>

    <Section>
      <Paragraph>
        We create clear, helpful and friendly content to help our users save
        money and live better.
      </Paragraph>
      <Paragraph>
        When you are in a store you should have a clear sense of what to do and
        where to go. You should be free to shop in the way that suits you. The
        same is true online.
      </Paragraph>
      <Paragraph>
        Help should be available when you need it, without being intrusive when
        you do not need it.
      </Paragraph>
      <Paragraph noMargin>
        This means our messaging:
        <List>
          <ListItem>is supportive, positive and clear</ListItem>
          <ListItem>provides the right amount of help at the right time</ListItem>
        </List>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Be Calm</Heading2>
      <Paragraph>
        Imagine a friend or colleague starts flooding you with messages. Messages
        full of exclamation marks and excitable little phrases like “oops!".
      </Paragraph>
      <Paragraph>
        You would think they were anxious, panicked or hyper.
      </Paragraph>
      <Paragraph>
        Eventually you’d get annoyed. You’d stop reading their messages even if
        you like them and want to hear from them. The sound of your phone buzzing
        would make your eyes roll and your heart sink.
      </Paragraph>
      <Paragraph>
        So how much more true for Asda?
      </Paragraph>
      <Paragraph>
        Users have busy, anxious and stressful lives. Helping our users to live
        better means creating a calm, intuitive and reassuring experience when
        they interact with us.
      </Paragraph>
      <Paragraph noMargin>
        Designing for calm means:
        <List>
          <ListItem>we are minimal and concise with our messaging</ListItem>
          <ListItem>we are sparing with warnings, callouts and overlays</ListItem>
          <ListItem>we avoid visual clutter</ListItem>
          <ListItem>we allow the user to focus on the important choice or call to action</ListItem>
          <ListItem>we tell the user only what they need to know to keep going at that point</ListItem>
          <ListItem>we look for the intuitive path</ListItem>
        </List>

        <Container>
          <Recommendation className="content-our-approach-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Label</Label>
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
          <Recommendation className="content-our-approach-page__recommendation">
            <RecommendationStatus />
            <Label>Postcode</Label>
            <TextField
              placeholder="Default"
              value="123456"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="Oops! Looks like you mistyped that postcode! Try again!"
              validate
            />
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Be Inclusive</Heading2>
      <Paragraph noMargin>
        As Asda we respect the individual and act with integrity. These form part
        of our core values. This means we work hard to understand our user and
        produce content that:
        <List>
          <ListItem>is inclusive and respectful</ListItem>
          <ListItem>is accessible</ListItem>
          <ListItem>speaks to and empowers our users</ListItem>
        </List>

        <Container>
          <Recommendation recommended className="content-our-approach-page__recommendation">
            <RecommendationStatus recommended />
            <Label>Label</Label>
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
          <Recommendation className="content-our-approach-page__recommendation">
            <RecommendationStatus />
            <Label>Postcode</Label>
            <TextField
              placeholder="Default"
              value="123456"
              pattern=""
              helperText="Helper text"
              successMessage="Success message"
              errorMessage="Hey mister, you messed up! You’ll need to go back and type that again, obviously."
              validate
            />
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Design for trust</Heading2>
      <Paragraph>
        We are on a mission to be Britain’s most trusted retailer. Our user
        experience must reflect this.
      </Paragraph>
      <Paragraph>
        Imagine a friend invites you to a party.  You accept the invite and feel
        excited.
      </Paragraph>
      <Paragraph>
        But over the next few weeks you cannot get hold of your friend. Your
        anticipation turns to uncertainty and apprehension.
      </Paragraph>
      <Paragraph>
        You turn up to find you’re overdressed and you bought a bottle of wine
        when everyone else is drinking beer. Your friend welcomes you then
        disappears. You do not know anyone and feel out of place and awkard.
        It’s not much fun and you end up leaving early.
      </Paragraph>
      <Paragraph>
        To trust someone is to be able to rely on them. To feel comfortable
        around them. It means you know they will think of you and consider what
        you need.
      </Paragraph>
      <Paragraph noMargin>
        Designing for trust means we:

        <List>
          <ListItem>are honest and authentic in our use of language</ListItem>
          <ListItem>consistent</ListItem>
          <ListItem>avoid spelling mistakes, typos and jargon</ListItem>
          <ListItem>keep users informed at every step</ListItem>
          <ListItem>put user needs first</ListItem>
          <ListItem>help the user succeed first time</ListItem>
          <ListItem>develop a relationship - and keep our interactions at the right level for the relationship</ListItem>
          <ListItem>behave in a trustworthy manner, for example by rejecting dark UX patterns</ListItem>
        </List>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Responsive design</Heading2>
      <Paragraph noMargin>
        Just as we design visually for a small screen first, the same is true
        for content. We need to design content that will work within a
        responsive setting. Be aware of technical constraints and character
        limits.
      </Paragraph>
    </Section>
  </article>
)

export default ContentOurApproachPage
