import { groupBy, shuffle, flatten } from 'lodash'
import React, { memo, useState, useMemo } from 'react'
import { Col, Container, Row, Form, ButtonGroup, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import { CandidateCard, StatusesChart } from '../../components'
import persons from '../../data/persons'
import { getCurrentCandidates } from '../../helpers'
import { CandidateStatuses } from '../../types'

export default memo(() => {
  const { locationType } = useParams()
  const [disabled, setDisabled] = useState(true)
  const [isList, setIsList] = useState(false)
  const currentPersons = useMemo(() => persons.filter((p) => getCurrentCandidates(p, locationType)), [locationType])
  // TODO: filter empty arrays

  const personsAndCandidates = useMemo(
    () =>
      flatten(persons.map((p) => getCurrentCandidates(p, locationType).map((c) => ({ person: p, candidate: c }))))
        .filter((pc) => (disabled ? pc.candidate.status === CandidateStatuses.registered : true))
        .filter((pc) => (isList ? pc.candidate.listNumber : !pc.candidate.listNumber)),
    [disabled, isList, locationType]
  )
  const grouppedCandidates = useMemo(
    () => groupBy(personsAndCandidates, (pc) => pc.candidate.areaNumber),
    [personsAndCandidates]
  )

  return (
    <Container fluid>
      <h1>Кандидаты в депутаты ({personsAndCandidates.length})</h1>

      <Form.Group>
        <ButtonGroup size='sm'>
          <Button active={!isList} onClick={() => setIsList(false)}>
            Одномандатники
          </Button>
          <Button active={isList} onClick={() => setIsList(true)}>
            По списку
          </Button>
        </ButtonGroup>
        <Form.Check
          type='checkbox'
          label='Показывать только зарегистрированных'
          checked={disabled}
          onClick={() => setDisabled((prev) => !prev)}
        />
      </Form.Group>
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
                <Col xs={6} md={4} lg={3} xl={2} key={pc.person.name} className='border-xs-top border-sm-none py-3'>
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
