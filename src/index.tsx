import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Router from './router'
import * as serviceWorker from './serviceWorker'
import { LocationType } from './types'

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
      <Navbar className='' expand='lg'>
        <Navbar.Brand as={Link} to={'/'} className='header-title'>
          <span className='header-title-bold'>Депутаты</span> Воронежа
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {(Object.keys(LocationType) as Array<keyof typeof LocationType>).map((locationType) => (
              <NavDropdown title={LocationType[locationType]} id='basic-nav-dropdown' key={locationType}>
                <NavDropdown.Item href={`/${locationType}/areas`}>Округа</NavDropdown.Item>
                <NavDropdown.Item href={`/${locationType}/candidates`}>Кандидаты</NavDropdown.Item>
                <NavDropdown.Item href={`/${locationType}/parties`}>Партии</NavDropdown.Item>
                {/*<NavDropdown.Divider />*/}
              </NavDropdown>
            ))}
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
