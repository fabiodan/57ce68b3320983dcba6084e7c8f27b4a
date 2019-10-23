// Libs
import React from 'react'

// Components (from atomic to composite)
import Icon from '@asda/icon'
import { LinkText } from '@asda/link'
import { Label, TextField } from '@asda/form'
import Recommendation, { RecommendationStatus } from '@sg/sg-recommendation'
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

const ContentStyleUsagePage = () => (
  <article className="content-style-usage-page">
    <Heading1>Style & usage</Heading1>

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

  </article>
)

export default ContentStyleUsagePage
