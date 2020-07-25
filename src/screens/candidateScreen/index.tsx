import React, { memo, useMemo } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import candidats from '../../data/candidats'
import CandidateCard from '../../components/candidateCard'
import { Parties } from '../../types'

export default memo(() => {
  const { candidateAlias } = useParams()

  const candidate = useMemo(() => candidats.find((c) => c.alias === candidateAlias), [candidateAlias])
  const partyAlias = useMemo(() => Object.entries(Parties).find((e) => e[1] === candidate?.party), [candidate])

  if (!candidate) {
    return null
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className='py-3'>
          <div>
            {candidate.photo && <Image width='100%' src={candidate.photo} rounded />}

            {Boolean(candidate.program) && (
              <a href={candidate.program} className='d-block' rel='noopener noreferrer' target='_blank'>
                Программа
              </a>
            )}
            {candidate.links && candidate.links.length > 0 && (
              <div>
                {candidate.links.map((link) => (
                  <a key={link.url} href={link.url} className='d-block' rel='noopener noreferrer' target='_blank'>
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Col>
        <Col className='py-3'>
          <h1>{candidate.name}</h1>
          {candidate.project && <div>{candidate.project}</div>}
          {candidate.party && partyAlias && <Link to={`/parties/${partyAlias[0]}`}>{candidate.party}</Link>}

          {candidate.role && <div>{candidate.role}</div>}
          {Boolean(candidate.bio) && (
            <div>
              <h5>Биография</h5>
              <p>{candidate.bio}</p>
            </div>
          )}
          {Boolean(candidate.message) && (
            <div>
              <p>«{candidate.message}»</p>
            </div>
          )}
        </Col>
      </Row>

      <h2>
        Другие кандидаты <Link to={`/area/${candidate.areaNumber}`}>{candidate.areaNumber} округа</Link>
      </h2>
      <Row>
        {candidats
          .filter((c) => c.areaNumber === Number(candidate.areaNumber) && c.alias !== candidateAlias)
          .map((areaCandidate) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={areaCandidate.name}
              className='border-xs-top border-sm-none py-3'
            >
              <Link to={`/candidates/${areaCandidate.alias}`}>
                <CandidateCard {...{ candidate: areaCandidate }} withParty />
              </Link>
            </Col>
          ))}
      </Row>
      <Row />
    </Container>
  )
})
