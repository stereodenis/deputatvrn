import React, { memo } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { times } from 'lodash'

import areas from '../../data/areas'
import { getAreaCandidates, getPersonWithCurrentDeputat } from '../../helpers'
import { CandidateType } from '../../types'

export default memo(() => {
  const type =
    (localStorage.getItem('type') as keyof typeof CandidateType) ||
    (Object.keys(CandidateType) as Array<keyof typeof CandidateType>)[0]

  return (
    <Container fluid>
      <Row>
        {times(24).map((rawAreaNumber) => {
          const areaNumber = rawAreaNumber + 1
          const area = areas[areaNumber]
          const areaCandidates = getAreaCandidates(areaNumber, type)
          const deputatPerson = getPersonWithCurrentDeputat(areaNumber)

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
