import { groupBy, shuffle } from 'lodash'
import React, { memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CandidateCard } from '../../components'
import persons from '../../data/persons'
import { getCurrentCandidate } from '../../helpers'

export default memo(() => {
  return (
    <Container fluid>
      <h1>Кандидаты в депутаты</h1>
      {Object.keys(groupBy(persons, (p) => getCurrentCandidate(p)?.areaNumber)).map((areaNumber) => {
        const areaCandidats = persons.filter((p) => p.candidate.find((c) => c.areaNumber === Number(areaNumber)))

        return (
          <div key={areaNumber} className='border-bottom py-3'>
            <div>
              <h3>
                <Link to={`/areas/${areaNumber}`}>{areaNumber} округ</Link>
              </h3>
            </div>

            <Row>
              {shuffle(areaCandidats).map((person) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  key={person.name}
                  className='border-xs-top border-sm-none py-3'
                >
                  <Link to={`/candidates/${person.alias}`} className={'d-block'}>
                    <CandidateCard {...{ person }} withParty />
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
