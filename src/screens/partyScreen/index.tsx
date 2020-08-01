import React, { memo, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
// @ts-ignore
import MetaTags from 'react-meta-tags'

import persons from '../../data/persons'
import { Parties } from '../../types'
import { CandidateCard } from '../../components'
import { getCurrentCandidate } from '../../helpers'

export default memo(() => {
  const { partyAlias } = useParams<{ partyAlias: keyof typeof Parties }>()
  // @ts-ignore
  const isNoParty = partyAlias === 'noParty'
  const title = isNoParty ? 'Самовыдвиженцы' : `Партия «${Parties[partyAlias]}»`

  const partyCandidates = useMemo(
    () =>
      persons.filter((p) => {
        const party = getCurrentCandidate(p)?.party
        return isNoParty ? !party : party === Parties[partyAlias]
      }),
    [isNoParty, partyAlias]
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
            .sort((a, b) => (getCurrentCandidate(a)?.areaNumber || 0) - (getCurrentCandidate(b)?.areaNumber || 0))
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
                <Link to={`/areas/${getCurrentCandidate(person)?.areaNumber}`}>
                  <h4>{getCurrentCandidate(person)?.areaNumber} округ</h4>
                </Link>
                <Link to={`/candidates/${person.alias}`}>
                  <CandidateCard {...{ person }} />
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </Container>
  )
})
