import React, { memo } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useParams } from 'react-router-dom'

import { LocationType } from '../../types'

export default memo(() => {
  const { locationType } = useParams()

  return (
    <Navbar className='' expand='lg'>
      <Navbar.Brand as={Link} to={'/'} className='header-title'>
        <span className='header-title-bold'>Депутаты</span> Воронежа
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          {(Object.keys(LocationType) as Array<keyof typeof LocationType>).map((type) => (
            <NavDropdown title={LocationType[type]} id='basic-nav-dropdown' active={type === locationType} key={type}>
              <LinkContainer to={`/${type}/areas`}>
                <NavDropdown.Item>Округа</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={`/${type}/candidates`}>
                <NavDropdown.Item>Кандидаты</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={`/${type}/parties`}>
                <NavDropdown.Item>Партии</NavDropdown.Item>
              </LinkContainer>
              {/*<NavDropdown.Divider />*/}
            </NavDropdown>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
})
