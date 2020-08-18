import React, { memo, useEffect } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useParams, useHistory } from 'react-router-dom'
import ym from 'react-yandex-metrika'

import { LocationType } from '../../types'
import Search from '../search'

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
          <iframe
            title='yandex-donation'
            className='ml-1'
            src='https://money.yandex.ru/quickpay/button-widget?targets=%D0%9D%D0%B0%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%D0%BF%D1%80%D0%BE%20%D0%B4%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D1%82%D0%BE%D0%B2%20%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D0%B0&default-sum=100&button-text=14&yamoney-payment-type=on&button-size=m&button-color=orange&successURL=&quickpay=small&account=41001883464146&'
            width='228'
            height='36'
            frameBorder='0'
            allowTransparency
            scrolling='no'
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
})
