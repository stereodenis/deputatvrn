import React, { memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { DeputatCard } from '../../components'
import persons from '../../data/persons'
import { getCurrentDeputate } from '../../helpers'

export default memo(() => {
  const { locationType } = useParams()
  const currentPersons = persons.filter((p) => getCurrentDeputate(p, locationType))

  return (
    <Container fluid>
      <h1>Депутаты ({currentPersons.length})</h1>
      <Row>
        {currentPersons
          .sort(
            (a, b) =>
              (getCurrentDeputate(a, locationType)?.areaNumber || 0) -
              (getCurrentDeputate(b, locationType)?.areaNumber || 0)
          )
          .map((person) => (
            <Col xs={6} md={4} lg={3} xl={2} key={person.name} className='border-xs-top border-sm-none py-3'>
              <DeputatCard {...{ person, locationType }} />
            </Col>
          ))}
      </Row>
    </Container>
  )
})
