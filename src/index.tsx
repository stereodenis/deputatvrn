import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Router from './router'
import * as serviceWorker from './serviceWorker'

// function RouteWrapper({ component: Component, layout: Layout, ...rest }: RouteProps & { layout: any; component: any }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//         <Layout {...props}>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand as={Link} to={'/'}>
          Депутаты Воронежа
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to={'/areas'}>
              Округа
            </Nav.Link>
            <Nav.Link as={Link} to={'/candidates'}>
              Кандидаты
            </Nav.Link>
            <Nav.Link as={Link} to={'/parties'}>
              Партии
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
