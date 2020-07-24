import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { shuffle } from 'lodash'

import candidats from '../../data/candidats'
import { Parties } from '../../types'

export default memo(() => {
  return (
    <Container fluid>
      <h1>Партии</h1>
      <Row>
        {shuffle(Object.keys(Parties) as Array<keyof typeof Parties>).map((partyAlias) => {
          const partyCandidates = candidats.filter((c) => c.party === Parties[partyAlias])

          return (
            <Col xs={6} sm={4} md={3} lg={2} key={partyAlias} className='border py-3'>
              <Link to={`/parties/${partyAlias}`}>
                <div className='text-center'>{Parties[partyAlias]}</div>
                <div>Кандидатов: {partyCandidates.length}</div>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
})
