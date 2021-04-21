import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"


import Home from './components/Home/Home'
import Button from './components/Button/Button'
import Appointments from './components/Appointments/Appointments'
import Contacts from './components/Contacts/Contacts'
import About from './components/About/About'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="App">
          <Switch>
              <Route history={history} path='/home' component={Home} />
              <Route history={history} path='/button' component={Button} />
              <Route history={history} path='/appointments' component={Appointments} />
              <Route history={history} path='/contacts' component={Contacts} />
              <Route history={history} path='/about' component={About} />
              <Redirect from='/' to='/home'/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App)
