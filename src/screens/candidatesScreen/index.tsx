import { groupBy, shuffle, flatten } from 'lodash'
import React, { memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import { CandidateCard, StatusesChart } from '../../components'
import persons from '../../data/persons'
import { getAreaCandidates, getCurrentCandidates } from '../../helpers'

export default memo(() => {
  const { locationType } = useParams()
  const currentPersons = persons.filter((p) => getCurrentCandidates(p, locationType))
  // TODO: filter empty arrays
  const candidates = flatten(persons.map((p) => getCurrentCandidates(p, locationType)))

  return (
    <Container fluid>
      <h1>Кандидаты в депутаты ({candidates.length})</h1>

      <StatusesChart persons={currentPersons} locationType={locationType} />

      {Object.keys(groupBy(candidates, (c) => c.areaNumber)).map((areaNumber) => {
        const areaCandidats = getAreaCandidates(Number(areaNumber), locationType)

        return (
          <div key={areaNumber} className='border-bottom py-3'>
            <div>
              <h3>
                <Link to={`/${locationType}/areas/${areaNumber}`}>{areaNumber} округ</Link>
              </h3>
            </div>

            <Row>
              {shuffle(areaCandidats).map((person) => (
                <Col
                  xs={6}
                  md={4}
                  lg={3}
                  xl={2}
                  key={person.name}
                  className='border-xs-top border-sm-none py-3'
                >
                  <Link to={`/persons/${person.alias}`} className={'d-block'}>
                    <CandidateCard {...{ person, locationType }} withParty />
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
