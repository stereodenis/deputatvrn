import { groupBy, shuffle } from 'lodash'
import React, { memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import { CandidateCard } from '../../components'
import persons from '../../data/persons'
import { getAreaCandidates, getCurrentCandidate } from '../../helpers'

export default memo(() => {
  const { locationType } = useParams()
  const currentPersons = persons.filter((p) => getCurrentCandidate(p, locationType))

  return (
    <Container fluid>
      <h1>Кандидаты в депутаты ({currentPersons.length})</h1>
      {Object.keys(groupBy(currentPersons, (p) => getCurrentCandidate(p, locationType)?.areaNumber)).map(
        (areaNumber) => {
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
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    key={person.name}
                    className='border-xs-top border-sm-none py-3'
                  >
                    <Link to={`/${locationType}/candidates/${person.alias}`} className={'d-block'}>
                      <CandidateCard {...{ person, type: locationType }} withParty />
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          )
        }
      )}
    </Container>
  )
})
