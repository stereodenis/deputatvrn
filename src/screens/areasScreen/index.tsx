import React, { memo } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import areas from '../../data/areas'
import candidats from '../../data/candidats'
import deputats from '../../data/deputats'

export default memo(() => {
  return (
    <Container fluid>
      <Row>
        {Object.keys(deputats).map((areaNumber) => {
          const area = areas[areaNumber]
          const areaCandidates = candidats[areaNumber]
          const deputat = deputats[areaNumber]
          return (
            <Col xs={6} sm={4} md={3} lg={2} xl={2} key={areaNumber} className='border py-3'>
              <Link to={`/area/${areaNumber}`} className=''>
                <div className='text-center'>{areaNumber} округ</div>
                <div>Избирателей: {area.people}</div>
                <div>Кандидатов: {areaCandidates.length}</div>
                <div>Депутат: {deputat.name}</div>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
})
