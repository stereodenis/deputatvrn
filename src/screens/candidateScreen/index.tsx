import React, { memo, useMemo } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import CandidateCard from '../../components/candidateCard'
import CandidateStatus from '../../components/CandidateStatus'
import persons from '../../data/persons'
import { getCurrentCandidate } from '../../helpers'
import { Parties } from '../../types'

export default memo(() => {
  const { candidateAlias } = useParams()

  const person = useMemo(() => persons.find((c) => c.alias === candidateAlias), [candidateAlias])
  const candidate = getCurrentCandidate(person)
  const partyAlias = useMemo(() => Object.entries(Parties).find((e) => e[1] === candidate?.party), [candidate])

  if (!person || !candidate) {
    return null
  }

  return (
    <Container fluid>
      <Row itemScope itemType='http://schema.org/ImageObject'>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className='py-3'>
          <div>
            <Image width='100%' src={person.photo} rounded itemProp='contentUrl' />

            {Boolean(candidate.program) && (
              <a href={candidate.program} className='d-block' rel='noopener noreferrer' target='_blank'>
                Программа
              </a>
            )}
            {person.links && person.links.length > 0 && (
              <div>
                {person.links.map((link) => (
                  <a key={link.url} href={link.url} className='d-block' rel='noopener noreferrer' target='_blank'>
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Col>
        <Col className='py-3'>
          <>
            <h1 itemProp='name'>{person.name} </h1>
            <>
              <CandidateStatus status={candidate.status} />
            </>
          </>
          {candidate.party && partyAlias ? (
            <Link className='d-block' to={`/parties/${partyAlias[0]}`}>
              {candidate.party}
            </Link>
          ) : (
            <Link className='d-block' to={'/parties/noParty'}>
              Самовыдвиженец
            </Link>
          )}
          {candidate.role && <div itemProp='description'>{candidate.role}</div>}
          {candidate.project && <div>{candidate.project}</div>}
          {Boolean(candidate.message) && (
            <div className='mt-3'>
              <p>«{candidate.message}»</p>
            </div>
          )}
          {Boolean(person.bio) && (
            <div>
              <h5>Биография</h5>
              <p>{person.bio}</p>
            </div>
          )}
          {candidate.problems?.length && (
            <div className='mt-2'>
              <h5>
                Проблемы <Link to={`/areas/${candidate.areaNumber}`}>{candidate.areaNumber} округа</Link>
              </h5>
              {candidate.problems.map((problem, index) => (
                <p key={index}>{problem}</p>
              ))}
            </div>
          )}
        </Col>
      </Row>

      <h2>
        Другие кандидаты <Link to={`/areas/${candidate.areaNumber}`}>{candidate.areaNumber} округа</Link>
      </h2>
      <Row>
        {persons
          .filter(
            (p) => getCurrentCandidate(p)?.areaNumber === Number(candidate.areaNumber) && p.alias !== candidateAlias
          )
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
                <CandidateCard {...{ person: areaCandidate }} withParty />
              </Link>
            </Col>
          ))}
      </Row>
      <Row />
    </Container>
  )
})
