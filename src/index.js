// Libs
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'
import {
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

// Assets
import './_style.scss'

// Components (from atomic to composite)
import { IconButton } from '@asda/icon'
import Logo from './pages/components/sg-logo'
import Menu from './pages/components/sg-menu'
import { Header, Aside, Main } from './pages/components/sg-layout'

// Pages
import SamplePage from './pages/_sample'
import ColorSchemePage from './pages/color-scheme'
import TypographyPage from './pages/typography'
import LayoutPage from './pages/layout'
import SpacingPage from './pages/spacing'
import ButtonsPage from './pages/buttons'
import LinksPage from './pages/links'
import SpecialButtonsPage from './pages/special-buttons'
import TextFieldsPage from './pages/text-fields'
import DropdownsPage from './pages/dropdowns'
import NavigationPage from './pages/navigation'
import TooltipsPage from './pages/tooltips'
import InputControlsPage from './pages/input-controls'
import MiscellaneousPage from './pages/miscellaneous'
import ModalsPage from './pages/modals'
import AccordiansPage from './pages/accordians'
import IconsPage from './pages/icons'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      menuVisible: !this.state.menuVisible,
    })
  }

  render() {
    const { children } = this.props
    const asideModifier = this.state.menuVisible ? 'sg-layout__aside--visible' : ''

    return (
      <Fragment>
        <MediaQuery query="(max-width: 767px)">
          <Header>
            <IconButton
              className="sg-layout__header__menu-button"
              name="menu"
              onClick={this.toggleMenu}
            />
            <Logo className="sg-layout__header__logo" />
          </Header>
        </MediaQuery>

        <div className="sg-layout__container">
          <Aside className={asideModifier}>
            <MediaQuery query="(min-width: 768px)">
              <Logo className="sg-layout__aside__logo" />
            </MediaQuery>
            <Menu toggleMenu={this.toggleMenu} />
          </Aside>
          <Main>
            {children}
          </Main>
        </div>
      </Fragment>
    )
  }
}

ReactDOM.render(
  (
    <Router>
      <Page>
        <Route
          exact
          path="/"
          render={() =>
            <Redirect to="/color-scheme" />
        }
        />
        <Route
          exact
          path="/pages/ukgr/asda-design-system/"
          render={() =>
            <Redirect to="/color-scheme" />
        }
        />
        <Route path="/sample" component={SamplePage} />
        <Route path="/color-scheme" component={ColorSchemePage} />
        <Route path="/typography" component={TypographyPage} />
        <Route path="/layout" component={LayoutPage} />
        <Route path="/spacing" component={SpacingPage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/links" component={LinksPage} />
        <Route path="/special-buttons" component={SpecialButtonsPage} />
        <Route path="/text-fields" component={TextFieldsPage} />
        <Route path="/dropdowns" component={DropdownsPage} />
        <Route path="/navigation" component={NavigationPage} />
        <Route path="/tooltips" component={TooltipsPage} />
        <Route path="/input-controls" component={InputControlsPage} />
        <Route path="/miscellaneous" component={MiscellaneousPage} />
        <Route path="/modals" component={ModalsPage} />
        <Route path="/accordians" component={AccordiansPage} />
        <Route path="/icons" component={IconsPage} />
      </Page>
    </Router>
  ), document.querySelector('.sg-layout'),
)
