import React, { memo, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Form, ButtonGroup, Button } from 'react-bootstrap'
// @ts-ignore
import MetaTags from 'react-meta-tags'
import { flatten } from 'lodash'

import persons from '../../data/persons'
import { CandidateStatuses, Parties } from '../../types'
import { CandidateCard, StatusesChart } from '../../components'
import { getCurrentCandidates, getPartyCandidates } from '../../helpers'

export default memo(() => {
  const { partyAlias } = useParams<{ partyAlias: keyof typeof Parties }>()
  const [disabled, setDisabled] = useState(true)
  const [isList, setIsList] = useState(false)
  // @ts-ignore
  const isNoParty = partyAlias === 'noParty'
  const title = isNoParty ? 'Самовыдвиженцы' : `Партия «${Parties[partyAlias]}»`

  const { locationType } = useParams()
  const currentPersons = useMemo(
    () => persons.filter((p) => getCurrentCandidates(p, locationType).length > 0),
    [locationType]
  )
  const partyPersons = useMemo(
    () =>
      isNoParty
        ? currentPersons.filter((p) => p.candidate.some((c) => c && !c.party))
        : getPartyCandidates(partyAlias, locationType),
    [isNoParty, currentPersons, partyAlias, locationType]
  )

  const partyCandidates = useMemo(
    () =>
      flatten(partyPersons.map((p) => getCurrentCandidates(p, locationType).map((c) => ({ person: p, candidate: c }))))
        .filter((pc) => (isNoParty ? !pc.candidate.party : pc.candidate.party === Parties[partyAlias]))
        .filter((pc) => (disabled ? pc.candidate.status === CandidateStatuses.registered : true))
        .filter((pc) => (isList ? pc.candidate.listNumber : !pc.candidate.listNumber)),
    [disabled, isList, isNoParty, locationType, partyAlias, partyPersons]
  )

  return (
    <Container fluid>
      <MetaTags>
        <title>{title}</title>
        <meta name='description' content={`Кандидаты в депутаты от ${Parties[partyAlias]}`} />
        <meta property='og:title' content={title} />
        {/*<meta property='og:image' content={areasImages[areaNumber]} />*/}
      </MetaTags>

      <div className='pb-2 text-center'>
        <h1>{title}</h1>
      </div>

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

      <StatusesChart persons={partyPersons} {...{ locationType }} />

      <div className='py-3'>
        <h2>Список кандидатов в депутаты ({partyCandidates.length})</h2>
        <Row className='border-bottom'>
          {partyCandidates
            .sort((a, b) => a.candidate.areaNumber - b.candidate.areaNumber)
            .map((personAndCandidate, index) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className='border-xs-bottom border-md-none py-3'>
                <Link to={`/${locationType}/areas/${personAndCandidate.candidate.areaNumber}`}>
                  <h4>
                    {personAndCandidate.candidate.areaNumber === 0
                      ? `По общему списку, №${personAndCandidate.candidate.listNumber}`
                      : `${personAndCandidate.candidate.areaNumber} округ`}
                  </h4>
                </Link>
                <Link to={`/persons/${personAndCandidate.person.alias}`}>
                  <CandidateCard
                    {...{
                      name: personAndCandidate.person.name,
                      photo: personAndCandidate.person.photo,
                      candidate: personAndCandidate.candidate,
                      locationType,
                    }}
                  />
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </Container>
  )
})
