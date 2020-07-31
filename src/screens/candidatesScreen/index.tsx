import { groupBy } from 'lodash'
import React, { memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CandidateCard } from '../../components'
import candidats from '../../data/candidats'

export default memo(() => {
  return (
    <Container fluid>
      <h1>Кандидаты в депутаты</h1>
      {Object.keys(groupBy(candidats, 'areaNumber')).map((areaNumber) => {
        const areaCandidats = candidats.filter((c) => c.areaNumber === Number(areaNumber))

        return (
          <div key={areaNumber} className='border-bottom py-3'>
            <div>
              <h3>
                <Link to={`/areas/${areaNumber}`}>{areaNumber} округ</Link>
              </h3>
            </div>

            <Row>
              {areaCandidats.map((candidate) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  key={candidate.name}
                  className='border-xs-top border-sm-none py-3'
                >
                  <Link to={`/candidates/${candidate.alias}`} className={'d-block'}>
                    <CandidateCard {...{ candidate }} withParty />
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        )
      })}
    </Container>
  )
})
