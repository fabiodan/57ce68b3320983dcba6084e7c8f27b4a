// Libs
import React, { Fragment } from 'react'

// Components (from atomic to composite)
import {
  Button,
  ButtonAnchor,
  ButtonLink,
  ButtonNavLink,
  ButtonIcon,
} from '@asda/apl-button'
import { Heading } from '../components/layout'

const ButtonsPage = () => (
  <Fragment>
    <Heading>Buttons</Heading>
    <h3>Primary</h3>
    <h4>Black (default)</h4>
    <Button loading primary>
      Button
    </Button>&nbsp;
    <ButtonAnchor primary href="//groceries.asda.com">
    Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink primary to="/overview">
    Link
    </ButtonLink>&nbsp;
    <ButtonNavLink primary to="/overview">
      NavLink
    </ButtonNavLink>

    <h4>Blue</h4>
    <Button loading primary blue>
      Button
    </Button>&nbsp;
    <ButtonAnchor primary blue href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink primary blue to="/overview">
      Link
    </ButtonLink>&nbsp;
    <ButtonLink primary blue to="/overview">
      NavLink
    </ButtonLink>

    <h4>Red</h4>
    <Button loading primary red>
      Button
    </Button>&nbsp;
    <ButtonAnchor primary red href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink primary red to="/overview">
      Link
    </ButtonLink>&nbsp;
    <ButtonNavLink primary red to="/overview">
      NavLink
    </ButtonNavLink>

    <h4>Green (w/ icon)</h4>
    <Button loading primary green>
      <ButtonIcon>favorite</ButtonIcon>
      Button
    </Button>&nbsp;
    <ButtonAnchor primary green href="//groceries.asda.com">
      <ButtonIcon>favorite</ButtonIcon>
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink primary green to="/overview">
      <ButtonIcon>favorite</ButtonIcon>
      Link
    </ButtonLink>&nbsp;
    <ButtonNavLink primary green to="/overview">
      <ButtonIcon>favorite</ButtonIcon>
      NavLink
    </ButtonNavLink>

    <h4>Disabled</h4>
    <Button loading primary disabled>
      Button
    </Button>&nbsp;
    <ButtonAnchor primary disabled href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink primary disabled to="/overview">
      Link
    </ButtonLink>&nbsp;
    <ButtonNavLink primary disabled to="/overview">
      NavLink
    </ButtonNavLink>

    <h3>Secondary</h3>
    <h4>Black (default)</h4>
    <Button loading secondary>
      Button
    </Button>&nbsp;
    <ButtonAnchor secondary href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink secondary to="/overview">
      Link
    </ButtonLink>&nbsp;
    <ButtonNavLink secondary to="/overview">
      NavLink
    </ButtonNavLink>

    <h4>Blue</h4>
    <Button loading secondary blue>
      Button
    </Button>&nbsp;
    <ButtonAnchor secondary blue href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink secondary blue to="/overview">
      Link
    </ButtonLink>&nbsp;
    <ButtonNavLink secondary blue to="/overview">
      NavLink
    </ButtonNavLink>

    <h4>Red</h4>
    <Button loading secondary red>
      Button
    </Button>&nbsp;
    <ButtonAnchor secondary red href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink secondary red to="/overview">
      Link
    </ButtonLink>&nbsp;
    <ButtonNavLink secondary red to="/overview">
      NavLink
    </ButtonNavLink>

    <h4>Green (w/ icon)</h4>
    <Button loading secondary green>
      <ButtonIcon>favorite</ButtonIcon>
      Button
    </Button>&nbsp;
    <ButtonAnchor secondary green href="//groceries.asda.com">
      <ButtonIcon>favorite</ButtonIcon>
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink secondary green to="/overview">
      <ButtonIcon>favorite</ButtonIcon>
      Link
    </ButtonLink>&nbsp;
    <ButtonNavLink secondary green to="/overview">
      <ButtonIcon>favorite</ButtonIcon>
      NavLink
    </ButtonNavLink>

    <h4>Disabled</h4>
    <Button loading secondary disabled>
      Button
    </Button>&nbsp;
    <ButtonAnchor secondary red disabled href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>&nbsp;
    <ButtonLink secondary red disabled to="/overview">
      Link
    </ButtonLink>&nbsp;
    <ButtonNavLink secondary red disabled to="/overview">
      NavLink
    </ButtonNavLink>

    <h3>Fluid</h3>
    <h4>Regular</h4>
    <Button loading primary fluid>
      Button
    </Button>
    <br /><br />
    <ButtonAnchor primary blue fluid href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>
    <br /><br />
    <ButtonLink primary red fluid to="/overview">
      Link
    </ButtonLink>
    <br /><br />
    <ButtonNavLink primary green fluid to="/overview">
      NavLink
    </ButtonNavLink>
    <br /><br />
    <Button loading secondary fluid>
      Button
    </Button>
    <br /><br />
    <ButtonAnchor secondary blue fluid href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>
    <br /><br />
    <ButtonLink secondary red fluid to="/overview">
      Link
    </ButtonLink>
    <br /><br />
    <ButtonNavLink secondary green fluid to="/overview">
      NavLink
    </ButtonNavLink>

    <h4>Disabled</h4>
    <Button loading primary fluid disabled>
      Button
    </Button>
    <br /><br />
    <ButtonAnchor primary blue fluid disabled href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>
    <br /><br />
    <ButtonLink primary red fluid disabled to="/overview">
      Link
    </ButtonLink>
    <br /><br />
    <ButtonNavLink primary red fluid disabled to="/overview">
      NavLink
    </ButtonNavLink>
    <br /><br />
    <Button loading secondary fluid disabled>
      Button
    </Button>
    <br /><br />
    <ButtonAnchor secondary blue fluid disabled href="//groceries.asda.com">
      Anchor
    </ButtonAnchor>
    <br /><br />
    <ButtonLink secondary red fluid disabled to="/overview">
      Link
    </ButtonLink>
    <br /><br />
    <ButtonNavLink secondary red fluid disabled to="/overview">
      NavLink
    </ButtonNavLink>
  </Fragment>
)

export default ButtonsPage
