import React, { memo, useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import candidats from '../../data/candidats'
import CandidateCard from '../../components/candidateCard'
import { Candidate } from '../../types'

export default memo(() => {
  const { candidateAlias } = useParams()
  const [areaNumber, setAreaNumber] = useState<string>()
  const [candidate, setCandidate] = useState<Candidate>()

  useEffect(() => {
    for (const [an, areaCandidates] of Object.entries(candidats)) {
      const resultCandidate = areaCandidates.find((ac) => ac.alias === candidateAlias)
      if (resultCandidate) {
        setAreaNumber(an)
        setCandidate(resultCandidate)
      }
    }
  }, [candidateAlias])

  if (!candidate || !areaNumber) {
    return null
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className='py-3'>
          <div>
            {candidate.photo && <Image width='100%' src={candidate.photo} rounded />}

            <div>{candidate.name}</div>
            {candidate.party && <div>{candidate.party}</div>}
            {candidate.role && <div>{candidate.role}</div>}
            {candidate.project && <div>{candidate.project}</div>}
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
      </Row>

      <h2>Другие кандидаты {areaNumber} округа</h2>
      <Row>
        {areaNumber &&
          candidats[areaNumber]
            .filter((c) => c.alias !== candidateAlias)
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
                  <CandidateCard {...{ candidate: areaCandidate }} />
                </Link>
              </Col>
            ))}
      </Row>
      <Row />
    </Container>
  )
})
