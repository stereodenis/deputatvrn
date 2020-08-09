import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import { LocationType } from '../../types'

export declare let ymaps: any

export default function Map() {
  return (
    <Container fluid>
      <Row>
        {(Object.keys(LocationType) as Array<keyof typeof LocationType>).map((locationType) => (
          <Col xs={12} sm={6} key={locationType} className='text-center mb-3'>
            <h2>{LocationType[locationType]}</h2>
            <Link to={`/${locationType}/areas`} className='d-block'>
              Округа
            </Link>
            <Link to={`/${locationType}/candidates`} className='d-block'>
              Кандидаты
            </Link>
            <Link to={`/${locationType}/deputates`} className='d-block'>
              Депутаты
            </Link>
            <Link to={`/${locationType}/parties`} className='d-block'>
              Партии
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
