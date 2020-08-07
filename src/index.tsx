import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { YMInitializer } from 'react-yandex-metrika'
import moment from 'moment'
import 'moment/locale/ru'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Router from './router'
import * as serviceWorker from './serviceWorker'
import { HeaderNavigation } from './components'

moment.locale('ru')

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderNavigation />
      <Router />
      <YMInitializer accounts={[51480913]} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
