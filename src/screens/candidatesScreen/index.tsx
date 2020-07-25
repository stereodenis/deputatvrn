import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { shuffle, groupBy } from 'lodash'

import candidats from '../../data/candidats'
import { CandidateCard } from '../../components'

export default memo(() => {
  return (
    <Container fluid>
      <h1>Кандидаты в депутаты</h1>
      {Object.keys(groupBy(candidats, 'areaNumber')).map((areaNumber) => {
        const areaCandidats = candidats.filter((c) => c.areaNumber === Number(areaNumber))
        return (
          <div key={areaNumber} className='border-bottom py-3'>
            <h3>
              <Link to={`/area/${areaNumber}`}>{areaNumber} округ</Link>
            </h3>
            <Row>
              {areaCandidats.length > 0 ? (
                shuffle(areaCandidats).map((candidate) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    key={candidate.name}
                    className='border-xs-top border-sm-none py-3'
                  >
                    <Link to={`/candidates/${candidate.alias}`}>
                      <CandidateCard {...{ candidate }} withParty />
                    </Link>
                  </Col>
                ))
              ) : (
                <div>
                  Мы пока не знаем о кандидатах на этот округ. Напишите нам пожалуйста (telegram:{' '}
                  <a href='http://t.me/stereodenis' target='_blank' rel='noopener noreferrer'>
                    @stereodenis
                  </a>
                  )
                </div>
              )}
            </Row>
          </div>
        )
      })}
    </Container>
  )
})
