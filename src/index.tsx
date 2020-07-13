import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Map, Areas, CandidatsRoute } from './screens'
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
        <Navbar.Brand as={Link} to={'/'}>Депутаты города Воронеж</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to={'/'}>Карта</Nav.Link>
            <Nav.Link as={Link} to={'/area'}>Округа</Nav.Link>
            <Nav.Link as={Link} to={'/candidates'}>Кандидаты</Nav.Link>
            {/*<NavDropdown title='Dropdown' id='basic-nav-dropdown'>*/}
            {/*  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>*/}
            {/*  <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>*/}
            {/*  <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>*/}
            {/*  <NavDropdown.Divider />*/}
            {/*  <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>*/}
            {/*</NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Map} />
        <Route path='/map' component={Map} />
        <Route path='/area' component={Areas} />
        <Route path='/candidates' component={CandidatsRoute} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
