import React, { memo, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
// @ts-ignore
import MetaTags from 'react-meta-tags'

import candidats from '../../data/candidats'
import { Parties } from '../../types'
import { CandidateCard } from '../../components'

export default memo(() => {
  const { partyAlias } = useParams<{ partyAlias: keyof typeof Parties }>()

  const areaCandidats = useMemo(() => candidats.filter((c) => c.party === Parties[partyAlias]), [partyAlias])

  return (
    <Container fluid>
      <MetaTags>
        <title>Партия «{Parties[partyAlias]}»</title>
        <meta name='description' content={`Кандидаты в депутаты от партии ${Parties[partyAlias]}`} />
        <meta property='og:title' content={'Партия «{Parties[partyAlias]}»'} />
        {/*<meta property='og:image' content={areasImages[areaNumber]} />*/}
      </MetaTags>

      <div className='border-bottom pb-2 text-center'>
        <h1>Партия «{Parties[partyAlias]}»</h1>
      </div>

      <div className='py-3'>
        <h2>Список кандидатов в депутаты</h2>
        <Row className='border-bottom'>
          {areaCandidats.map((candidate) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={candidate.name}
              className='border-xs-bottom border-md-none py-3'
            >
              <Link to={`/candidates/${candidate.alias}`}>
                <CandidateCard {...{ candidate }} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
})
