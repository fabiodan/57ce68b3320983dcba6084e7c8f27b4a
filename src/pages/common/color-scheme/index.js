// Libs
import React from 'react'

// Components (from atomic to composite)
import {
  Heading1,
  Heading2,
  Paragraph,
  Section
} from '@sg/sg-layout'

// Assets
import './_style.scss'

const ColorList = ({ children }) => (
  <ul className="color-page__color-list">{children}</ul>
)

const ColorItem = ({ children }) => (
  <li className="color-page__color-item">{children}</li>
)

const ColorSample = ({
  color, name, hex, rgb, rgba,
}) => (
  <div className={`color-page__color-sample ${!!color && `color-page--${color}`}`}>
    <h3 className="color-page__color-name">{name}</h3>
    <div className="color-page__color-hex">#{hex}</div>
    <div className="color-page__color-rgb">
      {rgb ? (`rgb(${rgb})`) : (`rgba(${rgba})`)}
    </div>
  </div>
)

const ColorDescription = ({ children }) => (
  <p className="color-page__description">{children}</p>
)

const ColorSchemePage = () => (
  <article className="color-page">
    <Heading1>Color scheme</Heading1>

    <Section>
      <Heading2>Asda Green</Heading2>
      <Paragraph>
        Green is our primary color and should be used for elements that must
        reflect Asda’s brand. For compliance to accessibility standards, we use
        two different greens, Asda green is used with font size size 18px and
        above, while in situations requiring a smaller font size, emerald green
        is deployed.
      </Paragraph>
      <ColorList>
        <ColorItem>
          <ColorSample color="green" name="Asda Green" hex="68A51C" rgb="83, 121, 22" />
        </ColorItem>
        <ColorItem>
          <ColorSample color="dark-green" name="Emerald Green" hex="538316" rgb="104, 165, 28" />
        </ColorItem>
      </ColorList>
    </Section>

    <Section>
      <Heading2>Secondary Colors</Heading2>
      <Paragraph>
        Use these colors for elements peripheral to core user journey.
      </Paragraph>
      <ColorList>
        <ColorItem>
          <ColorSample color="blue" name="Cobalt Blue" hex="0073B1" rgb="0, 115, 177" />
          <ColorDescription>
            Used for secondary actions like checkout, sign-in, sign-up,
            registering, hints and value toolkit
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="red" name="Crimson Red" hex="D43030" rgb="212, 48, 48" />
          <ColorDescription>
            Used for errors, warnings, promotions & value toolkit
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="yellow" name="California Gold" hex="F7CC00" rgb="83, 121, 22" />
          <ColorDescription>
            Used for warnings, out of stock or unavailable labels
          </ColorDescription>
        </ColorItem>
      </ColorList>
    </Section>

    <Section>
      <Heading2>Disabled Button Colors</Heading2>
      <ColorList>
        <ColorItem>
          <ColorSample color="green-disabled" name="Asda Green (Disabled)" hex="B4D28E" rgb="180, 210, 142" />
          <ColorDescription>
            Used for disabled green buttons
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="blue-disabled" name="Cobalt Blue (Disabled)" hex="68A51C" rgb="127, 185, 216" />
          <ColorDescription>
            Used for disabled blue buttons
          </ColorDescription>
        </ColorItem>
      </ColorList>
    </Section>

    <Section>
      <Heading2>Blacks & Grays</Heading2>
      <Paragraph>
        Blacks and grays are used for text, lines, borders, backgrounds, icons
        etc. The first two dark shades are accessibile friendly and can be used
        with white type.
      </Paragraph>
      <ColorList>
        <ColorItem>
          <ColorSample color="charcoal" name="Charcoal" hex="3D3D3D" rgb="61, 61, 61" />
          <ColorDescription>
            Used for active/hover clickable icons, main texts, input texts,
            headings
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="dark-gray" name="Dark Gray" hex="767676" rgb="118, 118, 118" />
          <ColorDescription>
            Used for default clickable icons, secondary texts, placeholder
            texts, input Labels
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="medium-gray" name="Medium Gray" hex="CCCCCC" rgb="204, 204, 204" />
          <ColorDescription>
            Used for informative non-clickable icons, empty review stars
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="light-gray" name="Light Gray" hex="EEEEEE" rgb="238, 238, 238" />
          <ColorDescription>
            Used for cell headers, tags
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="background-gray" name="Background Gray" hex="F6F6F6" rgb="246, 246, 246" />
          <ColorDescription>
            Used for backgrounds
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="white" name="White" hex="FFFFFF" rgb="255, 255, 255" />
          <ColorDescription>
            White
          </ColorDescription>
        </ColorItem>
      </ColorList>
    </Section>

    <Section>
      <Heading2>Transparent Background</Heading2>
      <ColorList>
        <ColorItem>
          <ColorSample color="charcoal-transparent" name="Charcoal (50%)" hex="3D3D3D" rgba="61, 61, 61, 0.5" />
          <ColorDescription>
            Use charcoal with 50% opacity for overlays below modals, popups, etc.
          </ColorDescription>
        </ColorItem>
        <ColorItem>
          <ColorSample color="yellow-transparent" name="Carlifornia Gold (20%)" hex="F7CC00" rgba="247, 204, 0, 0.2" />
          <ColorDescription>
            Use California Gold with 20% opacity for alerts.
          </ColorDescription>
        </ColorItem>
      </ColorList>
    </Section>
  </article>
)

export default ColorSchemePage
