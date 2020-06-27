import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Map } from './screens'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/*<Route path="/about">*/}
        {/*  <About />*/}
        {/*</Route>*/}
        {/*<Route path="/users">*/}
        {/*  <Users />*/}
        {/*</Route>*/}
        <Route path='/'>
          <Map />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
