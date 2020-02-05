// Libs
import React from 'react'

// Components (from atomic to composite)
import { LinkText } from '@asda/link'

import {
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Figure,
  ListItem,
  List,
  Paragraph,
  Section,
} from '@sg/sg-layout'

// Assets
import enthusiasticPNGSource from './images/enthusiastic-matter-of-fact.png'
import formalPNGSource from './images/formal-casual.png'
import respectfulPNGSource from './images/respectful-irreverent.png'
import seriousPNGSource from './images/serious-funny.png'
import './_style.scss'

const SentenceContainer = ({ children }) => (
  <div className="content-asda-voice-page__sentence-container">
    { children }
  </div>
)

const Sentence = ({ children, caption }) => (
  <div className="content-asda-voice-page__sentence">
    <Caption className="content-asda-voice-page__sentence-caption">
      { caption }
    </Caption>
    { children }
  </div>
)

const ContentAsdaVoicePage = () => (
  <article className="content-asda-voice-page">

    <Heading1>The Asda voice</Heading1>

    <Section>
      <Paragraph>
        When you talk to a good friend you use a different manner and tone than
        when you talk to a senior manager. But it’s always you speaking.
      </Paragraph>
      <Paragraph>
        In the same way, Asda as a brand has a distinct personality, but the
        tone changes depending on who we are speaking to and why.
      </Paragraph>
      <Paragraph noMargin>
        The Asda brand personality is defined and set by the Marketing team.
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Emotions</Heading2>
      <Paragraph>
        We are human. We do not do anything in a neutral state. We experience
        emotions as we move through a service.
      </Paragraph>
      <Paragraph>
        We cannot know every user’s individual state of mind, but we do need to
        reflect likely emotional states in our language choices.
      </Paragraph>
      <Paragraph>
        For example, we should not be flippant or jolly when telling someone
        their payment has been rejected.
      </Paragraph>
      <Paragraph>
        While the full range of emotion is very nuanced, for our purposes we can
        consider 4 main states.
      </Paragraph>

      <Heading3>
        <span className="content-asda-voice-page__state content-asda-voice-page__state--curious" />
        Curious
      </Heading3>
      <Paragraph>
        The user is assessing, browsing or looking around speculatively. They
        may not have any specific course of action in mind. Or they may be
        looking at options before they decide what to do next. Language should
        be encouraging and inspirational but not pushy.
      </Paragraph>

      <Heading3>
        <span className="content-asda-voice-page__state content-asda-voice-page__state--positive" />
        Positive
      </Heading3>
      <Paragraph>
        The user is taking an action that moves them towards a goal or completes
        a task. Remember shopping for groceries is a low key win. You are not
        deliriously happy; you crossed a task off your to-do list. Language
        should be positive and affirming but not gushing.
      </Paragraph>

      <Heading3>
        <span className="content-asda-voice-page__state content-asda-voice-page__state--negative" />
        Negative
      </Heading3>
      <Paragraph>
        The user is blocked from acheiving their goal or task. While doing
        grocery shopping may not be a big win, not being able to do it can be a
        serious frustration. Especially at holidays and on special occasions.
        Language should be sincere and serious but not formal or fawning.
      </Paragraph>

      <Heading3>
        <span className="content-asda-voice-page__state" />
        Neutral
      </Heading3>
      <Paragraph noMargin>
        The user is interacting with their account settings or doing something
        that does not directly lead to ordering their groceries. Language should
        be clear, concise and helpful but not cold.
      </Paragraph>
    </Section>

    <Section>
      <Heading2>The 4 dimensions of tone</Heading2>
      <Paragraph>
        Norman Nielsen Institute research has identified
        {' '}
        <LinkText
          href="https://www.nngroup.com/articles/tone-of-voice-dimensions/"
          target="_blank"
        >
          4&nbsp;ranges for tone&nbsp;of&nbsp;voice
        </LinkText>
        {' '}
        for commerce websites.
      </Paragraph>
      <Paragraph>
        <div className="content-asda-voice-page__range">
          <div className="content-asda-voice-page__tone">Formal</div>
          <div className="content-asda-voice-page__dashes" />
          <div className="content-asda-voice-page__tone">Casual</div>

          <div className="content-asda-voice-page__tone">Respectful</div>
          <div className="content-asda-voice-page__dashes" />
          <div className="content-asda-voice-page__tone">Irreverant</div>

          <div className="content-asda-voice-page__tone">Serious</div>
          <div className="content-asda-voice-page__dashes" />
          <div className="content-asda-voice-page__tone">Funny</div>

          <div className="content-asda-voice-page__tone">Enthusiastic</div>
          <div className="content-asda-voice-page__dashes" />
          <div className="content-asda-voice-page__tone">Matter of fact</div>
        </div>
      </Paragraph>
    </Section>

    <Section>
      <Heading3>Formal to Casual</Heading3>
      <Paragraph>
        <List>
          <ListItem>We are friendly without being pushy</ListItem>
          <ListItem>We have a can-do attitude and work tirelessly for our customers</ListItem>
          <ListItem>We are casual, not over familiar</ListItem>
          <ListItem>We are colloquial but avoid emoji and slang</ListItem>
        </List>
      </Paragraph>

      <Figure maxWidth="942px" src={formalPNGSource} fluid />

      <SentenceContainer>
        <Sentence caption="Formal">
          “Dear sir. Many thanks for your order, which we have now received”
        </Sentence>
        <Sentence caption="Casual">
          “Hey, just seen your order come through”
        </Sentence>
      </SentenceContainer>
    </Section>

    <Section>
      <Heading3>Respectful to Irreverent</Heading3>
      <Paragraph>
        <List>
          <ListItem>We are respectful, not stuffy or old fashioned</ListItem>
          <ListItem>We are warm and appreciative without being fawning </ListItem>
          <ListItem>We use open and inclusive language</ListItem>
          <ListItem>We are honest and open about our faults</ListItem>
        </List>
      </Paragraph>

      <Figure maxWidth="962px" src={respectfulPNGSource} fluid />

      <SentenceContainer>
        <Sentence caption="Respectful">
          “Dear customer, thanks for your order”
        </Sentence>
        <Sentence caption="Irreverent">
          “Yo dude, got your order”
        </Sentence>
      </SentenceContainer>
    </Section>

    <Section>
      <Heading3>Serious to Funny</Heading3>
      <Paragraph>
        <List>
          <ListItem>
            We do not take ourselves too seriously and our optimism is infectious
          </ListItem>
          <ListItem>
            Our brand personality is playful and cheeky but we need to be
            cautious in UX
          </ListItem>
          <ListItem>
            We avoid colloquial, local humour that may not be understood by all
          </ListItem>
          <ListItem>
            When we deal with serious topics, we take a serious tone
          </ListItem>
        </List>
      </Paragraph>

      <Figure maxWidth="945px" src={seriousPNGSource} fluid />

      <SentenceContainer>
        <Sentence caption="Serious">
          “We have received an order from you”
        </Sentence>
        <Sentence caption="Funny">
          “Yes sir, order received loud and clear, sir!”
        </Sentence>
      </SentenceContainer>
    </Section>

    <Section>
      <Heading3>Enthusiastic to matter of fact</Heading3>
      <Paragraph>
        <List>
          <ListItem>We are spirited and generous</ListItem>
          <ListItem>
            We are straight talking. We have confidence in our products and
            services so there’s no need for flowery language
          </ListItem>
          <ListItem>We are concise but not abrupt</ListItem>
          <ListItem>When users want to get things done we are matter of fact but friendly</ListItem>
        </List>
      </Paragraph>

      <Figure maxWidth="972px" src={enthusiasticPNGSource} fluid />

      <SentenceContainer>
        <Sentence caption="Enthusiastic">
          “Woohoo! We are high fiving each other here in the office as your order just arrived”
        </Sentence>
        <Sentence caption="Matter of fact">
          “We have got your order”
        </Sentence>
      </SentenceContainer>
    </Section>

  </article>
)

export default ContentAsdaVoicePage
