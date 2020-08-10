import React, { memo, useEffect } from 'react'
import { Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useParams, useHistory } from 'react-router-dom'
import ym from 'react-yandex-metrika'

import { LocationType } from '../../types'
import { Search } from '../index'

export default memo(() => {
  const { locationType } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      history.listen((location) => {
        ym('hit', location.pathname)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              <LinkContainer to={`/${type}/deputates`}>
                <NavDropdown.Item>Депутаты</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={`/${type}/parties`}>
                <NavDropdown.Item>Партии</NavDropdown.Item>
              </LinkContainer>
              {/*<NavDropdown.Divider />*/}
            </NavDropdown>
          ))}
          <LinkContainer to={'/videos'}>
            <Nav.Link>Видео</Nav.Link>
          </LinkContainer>
          <Search />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
})
