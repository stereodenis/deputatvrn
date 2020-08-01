import React, { memo } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { times } from 'lodash'

import { CURRENT_CALL_NUMBER } from '../../constants'
import areas from '../../data/areas'
import persons from '../../data/persons'

export default memo(() => {
  return (
    <Container fluid>
      <Row>
        {times(24).map((rawAreaNumber) => {
          const areaNumber = rawAreaNumber + 1
          const area = areas[areaNumber]
          const areaCandidates = persons.filter((p) => p.candidate.find((c) => c.areaNumber === areaNumber))
          const deputatPerson = persons.find((p) =>
            p.deputat?.find((d) => d.callNumber === CURRENT_CALL_NUMBER && d.areaNumber === areaNumber)
          )
          return (
            <Col xs={6} sm={4} md={3} lg={2} xl={2} key={areaNumber} className='border py-3'>
              <Link to={`/areas/${areaNumber}`} className=''>
                <div className='text-center'>{areaNumber} округ</div>
                <div>Избирателей: {area.people}</div>
                <div>Кандидатов: {areaCandidates.length}</div>
                <div>Депутат: {deputatPerson?.name}</div>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
})
