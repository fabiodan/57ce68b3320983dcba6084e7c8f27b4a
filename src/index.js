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

// Sample Page
import SamplePage from './pages/_sample'

// Pages (Common)
import ColorSchemePage from './pages/common/color-scheme'
import ButtonsPage from './pages/common/buttons'
import LinksPage from './pages/common/links'
import IconsPage from './pages/common/icons'
import BrandPage from './pages/common/brand'

// Pages (Web)
import TypographyPage from './pages/web/typography'
import LayoutPage from './pages/web/layout'
import SpacingPage from './pages/web/spacing'
import SpecialButtonsPage from './pages/web/special-buttons'
import TextFieldsPage from './pages/web/text-fields'
import DropdownsPage from './pages/web/dropdowns'
import TooltipsPage from './pages/web/tooltips'
import InputControlsPage from './pages/web/input-controls'
import ModalsPage from './pages/web/modals'
import AccordionsPage from './pages/web/accordions'

// Pages (Content)
import ContentOverviewPage from './pages/content/overview'

// Pages (iOS)
import IOSIntroductionPage from './pages/ios/introduction'
import IOSLayoutPage from './pages/ios/layout'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {

    if (!this.state.menuVisible) {
      document.body.classList.add('sg-menu--scroll-lock')
    } else {
      document.body.classList.remove('sg-menu--scroll-lock')
    }

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
        <Route exact path="/" render={() => <Redirect to="/common" />} />

        {/* Common */}
        <Route exact path="/common" render={() => <Redirect to="/common/color-scheme" />} />
        <Route path="/common/color-scheme" component={ColorSchemePage} />
        <Route path="/common/buttons" component={ButtonsPage} />
        <Route path="/common/links" component={LinksPage} />
        <Route path="/common/icons" component={IconsPage} />
        <Route path="/common/brand" component={BrandPage} />

        {/* Content */}
        <Route exact path="/content" render={() => <Redirect to="/content/overview" />} />
        <Route path="/content/overview" component={ContentOverviewPage} />

        {/* Web */}
        <Route exact path="/web" render={() => <Redirect to="/web/typography" />} />
        <Route path="/web/typography" component={TypographyPage} />
        <Route path="/web/special-buttons" component={SpecialButtonsPage} />
        <Route path="/web/layout" component={LayoutPage} />
        <Route path="/web/spacing" component={SpacingPage} />
        <Route path="/web/text-fields" component={TextFieldsPage} />
        <Route path="/web/dropdowns" component={DropdownsPage} />
        <Route path="/web/tooltips" component={TooltipsPage} />
        <Route path="/web/input-controls" component={InputControlsPage} />
        <Route path="/web/modals" component={ModalsPage} />
        <Route path="/web/accordions" component={AccordionsPage} />

        {/* iOS */}
        <Route exact path="/ios" render={() => <Redirect to="/ios/introduction" />} />
        <Route path="/ios/introduction" component={IOSIntroductionPage} />
        <Route path="/ios/layout" component={IOSLayoutPage} />

        {/* Sample (Don't delete) */}
        <Route path="/sample" component={SamplePage} />
      </Page>
    </Router>
  ), document.querySelector('.sg-layout'),
)
