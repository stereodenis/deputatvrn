import React, { memo, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
// @ts-ignore
import MetaTags from 'react-meta-tags'

import persons from '../../data/persons'
import { CandidateType, Parties } from '../../types'
import { CandidateCard } from '../../components'
import { getCurrentCandidate, getPartyCandidates } from '../../helpers'

export default memo(() => {
  const { partyAlias } = useParams<{ partyAlias: keyof typeof Parties }>()
  // @ts-ignore
  const isNoParty = partyAlias === 'noParty'
  const title = isNoParty ? 'Самовыдвиженцы' : `Партия «${Parties[partyAlias]}»`

  const type =
    (localStorage.getItem('type') as keyof typeof CandidateType) ||
    (Object.keys(CandidateType) as Array<keyof typeof CandidateType>)[0]
  const currentPersons = persons.filter((p) => getCurrentCandidate(p, type))
  const partyCandidates = useMemo(
    () =>
      isNoParty
        ? currentPersons.filter((p) => !getCurrentCandidate(p, type)?.party)
        : getPartyCandidates(partyAlias, type),
    [currentPersons, isNoParty, partyAlias, type]
  )

  return (
    <Container fluid>
      <MetaTags>
        <title>{title}</title>
        <meta name='description' content={`Кандидаты в депутаты от ${Parties[partyAlias]}`} />
        <meta property='og:title' content={title} />
        {/*<meta property='og:image' content={areasImages[areaNumber]} />*/}
      </MetaTags>

      <div className='border-bottom pb-2 text-center'>
        <h1>{title}</h1>
      </div>

      <div className='py-3'>
        <h2>Список кандидатов в депутаты ({partyCandidates.length})</h2>
        <Row className='border-bottom'>
          {partyCandidates
            .sort(
              (a, b) =>
                (getCurrentCandidate(a, type)?.areaNumber || 0) - (getCurrentCandidate(b, type)?.areaNumber || 0)
            )
            .map((person) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={person.name}
                className='border-xs-bottom border-md-none py-3'
              >
                <Link to={`/areas/${getCurrentCandidate(person, type)?.areaNumber}`}>
                  <h4>{getCurrentCandidate(person, type)?.areaNumber} округ</h4>
                </Link>
                <Link to={`/candidates/${person.alias}`}>
                  <CandidateCard {...{ person, type }} />
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </Container>
  )
})
