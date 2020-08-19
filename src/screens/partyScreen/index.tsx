import React, { memo, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
// @ts-ignore
import MetaTags from 'react-meta-tags'
import { flatten } from 'lodash'

import persons from '../../data/persons'
import { Parties } from '../../types'
import { CandidateCard, StatusesChart } from '../../components'
import { getCurrentCandidates, getPartyCandidates } from '../../helpers'

export default memo(() => {
  const { partyAlias } = useParams<{ partyAlias: keyof typeof Parties }>()
  // @ts-ignore
  const isNoParty = partyAlias === 'noParty'
  const title = isNoParty ? 'Самовыдвиженцы' : `Партия «${Parties[partyAlias]}»`

  const { locationType } = useParams()
  const currentPersons = persons.filter((p) => getCurrentCandidates(p, locationType).length > 0)
  const currentCandidates = flatten(currentPersons.map((p) => getCurrentCandidates(p, locationType)))
  const partyCandidates = useMemo(
    () =>
      isNoParty
        ? currentCandidates.filter((c) => !c.party)
        : currentCandidates.filter((c) => c.party === Parties[partyAlias]),
    [currentCandidates, isNoParty, partyAlias]
  )
  const partyPersons = useMemo(
    () =>
      isNoParty
        ? currentPersons.filter((p) => p.candidate.some((c) => c && !c.party))
        : getPartyCandidates(partyAlias, locationType),
    [isNoParty, currentPersons, partyAlias, locationType]
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

      <StatusesChart persons={partyPersons} {...{ locationType }} />

      <div className='py-3'>
        <h2>Список кандидатов в депутаты ({partyPersons.length})</h2>
        <Row className='border-bottom'>
          {partyCandidates
            .sort((a, b) => (a.areaNumber || 0) - (b.areaNumber || 0))
            .map((person, index) => (
              <Col xs={6} md={4} lg={3} xl={2} key={index} className='border-xs-bottom border-md-none py-3'>
                <Link to={`/${locationType}/areas/${person.areaNumber}`}>
                  <h4>{person.areaNumber} округ</h4>
                </Link>
                {/*<Link to={`/persons/${person.alias}`}>*/}
                {/*  <CandidateCard {...{ person, locationType }} />*/}
                {/*</Link>*/}
              </Col>
            ))}
        </Row>
      </div>
    </Container>
  )
})
