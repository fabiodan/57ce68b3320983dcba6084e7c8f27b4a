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
import Logo from './pages/components/logo'
import Menu from './pages/components/menu'
import { Header, Aside, Main } from './pages/components/layout'

// Pages
import OverviewPage from './pages/overview'
import TypographyPage from './pages/typography'
import ColorSchemePage from './pages/color-scheme'
import ButtonsPage from './pages/buttons'

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
    const asideModifier = this.state.menuVisible ? 'layout__aside--visible' : ''

    return (
      <Fragment>
        <Header>
          <MediaQuery query="(max-width: 767px)">
            <button className="layout__header__menu-button" onClick={this.toggleMenu}>
              <img src={MenuSvgSource} alt="Menu" />
            </button>
          </MediaQuery>
          <Logo className="layout__header__logo" />
        </Header>
        <div className="layout__container">
          <Aside className={asideModifier}>
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
      </Page>
    </Router>
  ), document.querySelector('.layout'),
)
