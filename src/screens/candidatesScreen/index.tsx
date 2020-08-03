import { groupBy, shuffle } from 'lodash'
import React, { memo, useCallback, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CandidateCard } from '../../components'
import persons from '../../data/persons'
import { getAreaCandidates, getCurrentCandidate } from '../../helpers'
import { CandidateType } from '../../types'

export default memo(() => {
  const [type, setType] = useState<keyof typeof CandidateType>(
    (localStorage.getItem('type') as keyof typeof CandidateType) ||
      (Object.keys(CandidateType) as Array<keyof typeof CandidateType>)[0]
  )
  const currentPersons = persons.filter((p) => getCurrentCandidate(p, type))

  const handleTypeChange = useCallback((siteType) => {
    setType(siteType)
    localStorage.setItem('type', siteType)
  }, [])

  return (
    <Container fluid>
      <div>
        {(Object.keys(CandidateType) as Array<keyof typeof CandidateType>).map((siteType) => (
          <Button active={siteType === type} key={siteType} onClick={() => handleTypeChange(siteType)}>
            {CandidateType[siteType]}
          </Button>
        ))}
      </div>
      <h1>Кандидаты в депутаты ({currentPersons.length})</h1>
      {Object.keys(groupBy(currentPersons, (p) => getCurrentCandidate(p, type)?.areaNumber)).map((areaNumber) => {
        const areaCandidats = getAreaCandidates(Number(areaNumber), type)

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
                    <CandidateCard {...{ person, type }} withParty />
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
