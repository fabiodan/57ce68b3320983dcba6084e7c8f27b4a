// Libs
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

// Assets
import MenuSvgSource from './assets/images/asda-menu.svg'
import './_style.scss'

// Components (from atomic to composite)
import Logo from './pages/components/sg-logo'
import Menu from './pages/components/sg-menu'
import { Header, Aside, Main } from './pages/components/sg-layout'

// Pages
import OverviewPage from './pages/overview'
import TypographyPage from './pages/typography'
import ColorSchemePage from './pages/color-scheme'
import ButtonsPage from './pages/buttons'
import SpecialButtonsPage from './pages/special-buttons'

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
            <button className="sg-layout__header__menu-button" onClick={this.toggleMenu}>
              <img src={MenuSvgSource} alt="Menu" />
            </button>
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
            <Redirect to="/overview" />
        }
        />
        <Route
          exact
          path="/pages/ukgr/asda-design-system/"
          render={() =>
            <Redirect to="/overview" />
        }
        />
        <Route path="/overview" component={OverviewPage} />
        <Route path="/typography" component={TypographyPage} />
        <Route path="/color-scheme" component={ColorSchemePage} />
        <Route path="/buttons" component={ButtonsPage} />
        <Route path="/special-buttons" component={SpecialButtonsPage} />
      </Page>
    </Router>
  ), document.querySelector('.sg-layout'),
)
