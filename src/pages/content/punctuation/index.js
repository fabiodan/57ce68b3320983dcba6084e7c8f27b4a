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
  <div className="content-punctuation-page__container">{children}</div>
)

const ContentPunctuationPage = () => (
  <article className="content-punctuation-page">
    <Heading1>Punctuation</Heading1>
    <Section>
      <Heading2>Ampersand (&)</Heading2>
      <Paragraph>
        The ampersand saves space in navigation, links and other tight spaces.
      </Paragraph>
      <Paragraph noMargin>
        Use for navigation and links
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <ul className="content-punctuation-page__menu">
              <li className="content-punctuation-page__menu-item">
                Vegetables & Potatoes
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
              <li className="content-punctuation-page__menu-item">
                Salads & Stir Fry
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
              <li className="content-punctuation-page__menu-item">
                Meat & Poultry
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
            </ul>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <ul className="content-punctuation-page__menu">
              <li className="content-punctuation-page__menu-item">
                Vegetables and Potatoes
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
              <li className="content-punctuation-page__menu-item">
                Salads and Stir Fry
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
              <li className="content-punctuation-page__menu-item">
                Meat and Poultry
                <Icon name="chevron-right" color="dark-gray" size="x-small" />
              </li>
            </ul>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <LinkText className="content-punctuation-page__recommendation-link">
              Terms & conditions
            </LinkText>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <LinkText className="content-punctuation-page__recommendation-link">
              Terms and conditions
            </LinkText>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Bullets (•)</Heading2>
      <Paragraph>
        Bullets with a lead-in line do not start with a capital or end with a full stop.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Add the following to your basket:
              <br /><br />
              <List className="content-punctuation-page__list">
                <ListItem className="content-punctuation-page__list-item">
                  apples
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  bananas
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  cherries
                </ListItem>
              </List>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Add the following to your basket:
              <br /><br />
              <List className="content-punctuation-page__list">
                <ListItem className="content-punctuation-page__list-item">
                  Apples.
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  Bananas.
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  Cherries.
                </ListItem>
              </List>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph noMargin>
        Bullets with no lead-in line start with a capital and do not end with a full stop.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Add the following to your basket:
              <br /><br />
              <List className="content-punctuation-page__list">
                <ListItem className="content-punctuation-page__list-item">
                  Apples
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  Bananas
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  Cherries
                </ListItem>
              </List>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Add the following to your basket:
              <br /><br />
              <List className="content-punctuation-page__list">
                <ListItem className="content-punctuation-page__list-item">
                  apples.
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  bananas.
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  cherries.
                </ListItem>
              </List>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Colon (:)</Heading2>
      <Paragraph>
        Leaving out colons in forms cuts down on visual clutter—rely on white
        space and proximity instead.
      </Paragraph>
      <Paragraph>
        Use for frontloading titles
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <Heading3>Substitutions: how we keep you informed</Heading3>
              <span className="content-punctuation-page__recommendation__text-example">
                Hi John,<br/>
                We’re sorry about the problem with your groceries order.<br/>
              </span>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <Heading3>How we keep you informed about the substitutions</Heading3>
              <span className="content-punctuation-page__recommendation__text-example">
                Hi John,<br/>
                We’re sorry about the problem with your groceries order.<br/>
              </span>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph noMargin>
        Do not use on form fields. This cuts down on visual clutter.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <div className="content-punctuation-page__recommendation__text-field">
              <Label>Postcode</Label>
              <TextField />
            </div>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <div className="content-punctuation-page__recommendation__text-field">
              <Label>Postcode:</Label>
              <TextField />
            </div>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Comma (,)</Heading2>
      <Paragraph>
        For minimal punctuation, use a comma if it helps to clarify what is
        being said. Multiple sub clauses make sentences hard to understand and
        add to visual clutter without adding meaning.
      </Paragraph>
      <Paragraph>
        Avoid using more than one comma in same sentence. Break the sentence up
        into shorter sentences or rephrase instead.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <span className="content-punctuation-page__recommendation__text-example">
                Let us know in your delivery instructions if you would struggle
                without bags. For example, because of poor mobility.
              </span>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <span className="content-punctuation-page__recommendation__text-example">
                If you will need extra help, for example due to mobility issues,
                let us know in the delivery instructions section when you check
                out.
              </span>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph noMargin>
        Avoid oxford or serial commas. Rephrase or use bulleted lists.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Mushrooms, tomatoes and peppers
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Mushrooms, tomatoes, and peppers
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Dash (—) and hyphen (-)</Heading2>
      <Paragraph>
        Avoid use of dashes and hyphens. They can be misread as minus(-) signs
        and are less easy to scan than “to” when using ranges for example number
        range.
      </Paragraph>
      <Paragraph>
        Avoid using more than one comma in same sentence. Break the sentence up
        into shorter sentences or rephrase instead.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              420 to 520
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              420 - 520
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Re-evaluate
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Reevaluate
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Reuse
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Re-use
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph noMargin>
        Avoid subclauses. Rewrite into shorter sentences.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <span className="content-punctuation-page__recommendation__text-example">
                Let us know in your delivery instructions if you would struggle
                without bags. For example, because of poor mobility.
              </span>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <span className="content-punctuation-page__recommendation__text-example">
                If you will need extra help — for example due to mobility
                issues — let us know in the delivery instructions section when
                you check out.
              </span>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Exclamation mark (!)</Heading2>
      <Paragraph noMargin>
        Avoid use of exclamation mark. Convey excitement through colour,
        placement, imagery and text treatment.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <span className="content-punctuation-page__recommendation__text-example">
                Exclamation marks quickly become annoying and seem a bit hyper.
                And then you have to use 2 of them when things get really exciting.
              </span>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <span className="content-punctuation-page__recommendation__text-example">
                Exclamation marks quickly becomes annoying! And seem a bit hyper!
                And then you have to use 2 of them when things get really exciting!!
              </span>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Full stop (.)</Heading2>
      <Paragraph>
        Do not use a full stop in headings or subheadings.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <Heading3>Substitutions</Heading3>
              <span className="content-punctuation-page__recommendation__text-example">
                If we do not have a product in stock we can choose a substitute for you.
              </span>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              <Heading3>Substitutions.</Heading3>
              <span className="content-punctuation-page__recommendation__text-example">
                If we do not have a product in stock we can choose a substitute for you.
              </span>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph>
        Do not use full stops for bulleted list items with a lead-in line.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Add the following to your basket:
              <br /><br />
              <List className="content-punctuation-page__list">
                <ListItem className="content-punctuation-page__list-item">
                  apples
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  bananas
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  cherries
                </ListItem>
              </List>
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              Add the following to your basket:
              <br /><br />
              <List className="content-punctuation-page__list">
                <ListItem className="content-punctuation-page__list-item">
                  apples.
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  bananas.
                </ListItem>
                <ListItem className="content-punctuation-page__list-item">
                  cherries.
                </ListItem>
              </List>
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
      <Paragraph noMargin>
        Do not add a full stop to the last sentence of an error message.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation__fields">
            <RecommendationStatus recommended />
            <div className="content-patterns-page__recommendation-item">
              <Label>Label</Label>
              <TextField
                placeholder="Input Text"
                value="Input Text"

                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Error Message"
                validate
              />
            </div>
            <div className="content-patterns-page__recommendation-item">
              <Label>Password</Label>
              <TextField
                type="password"
                placeholder="Default"
                value="12"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Sorry, you need to create a password that has
                between 8 and 128 characters"
                validate
              />
            </div>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation__fields">
            <RecommendationStatus />
            <div className="content-patterns-page__recommendation-item">
              <Label>Label</Label>
              <TextField
                placeholder="Input Text"
                value="Input Text"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Error Message"
                validate
              />
            </div>
            <div className="content-patterns-page__recommendation-item">
              <Label>Password</Label>
              <TextField
                type="password"
                placeholder="Default"
                value="12"
                pattern=""
                helperText="Helper text"
                successMessage="Success message"
                errorMessage="Sorry, you need to create a password that has
                between 8 and 128 characters."
                validate
              />
            </div>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Quotation mark (“”)</Heading2>
      <Paragraph noMargin>
        Avoid use of exclamation mark. Convey excitement through colour,
        placement, imagery and text treatment.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              If you want to take something out of your trolley, tap “remove”.
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              If you want to take something out of your trolley, tap remove.
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>

    <Section>
      <Heading2>Semicolon (;)</Heading2>
      <Paragraph noMargin>
        Simplify the sentence so it does not require a semicolon.
        <Container>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus recommended />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              If you want to take something out of your trolley, tap “remove”.
            </Paragraph>
          </Recommendation>
          <Recommendation className="content-punctuation-page__recommendation">
            <RecommendationStatus />
            <Paragraph noMargin className="content-punctuation-page__recommendation__paragraph">
              We will let you know when your delivery is due; you will get a
              text message and e-delivery note.
            </Paragraph>
          </Recommendation>
        </Container>
      </Paragraph>
    </Section>
  </article>
)

export default ContentPunctuationPage
