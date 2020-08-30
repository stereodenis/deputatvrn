import { groupBy, shuffle, flatten } from 'lodash'
import React, { memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import { CandidateCard, StatusesChart } from '../../components'
import persons from '../../data/persons'
import { getCurrentCandidates } from '../../helpers'

export default memo(() => {
  const { locationType } = useParams()
  const currentPersons = persons.filter((p) => getCurrentCandidates(p, locationType))
  // TODO: filter empty arrays
  const personsAndCandidates = flatten(
    persons.map((p) => getCurrentCandidates(p, locationType).map((c) => ({ person: p, candidate: c })))
  )
  const grouppedCandidates = groupBy(personsAndCandidates, (pc) => pc.candidate.areaNumber)

  return (
    <Container fluid>
      <h1>Кандидаты в депутаты ({personsAndCandidates.length})</h1>

      <StatusesChart persons={currentPersons} locationType={locationType} />

      {Object.keys(grouppedCandidates).map((areaNumber) => {
        const areaPersonsAndCandidates = grouppedCandidates[areaNumber]

        return (
          <div key={areaNumber} className='border-bottom py-3'>
            <div>
              <h3>
                <Link to={`/${locationType}/areas/${areaNumber}`}>
                  {areaNumber === '0' ? 'По общему списку' : `${areaNumber} округ`}
                </Link>
              </h3>
            </div>

            <Row>
              {shuffle(areaPersonsAndCandidates).map((pc) => (
                <Col
                  xs={6}
                  md={4}
                  lg={3}
                  xl={2}
                  key={pc.person.name}
                  className='border-xs-top border-sm-none py-3'
                >
                  <Link to={`/persons/${pc.person.alias}`} className={'d-block'}>
                    <CandidateCard
                      {...{ candidate: pc.candidate, name: pc.person.name, photo: pc.person.photo, locationType }}
                      withParty
                    />
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
