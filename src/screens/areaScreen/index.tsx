import React, { memo } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
// @ts-ignore
import MetaTags from 'react-meta-tags'
import { Image } from 'react-bootstrap'

import candidats from '../../data/candidats'
import deputats from '../../data/deputats'
import { DeputatCard, CandidateCard } from '../../components'
import areas from '../../data/areas'
import areasImages from '../../images/areas'

export default memo(() => {
  const { areaNumber } = useParams()
  const area = areas[areaNumber]
  const deputat = deputats[areaNumber]
  const areaCandidats = candidats[areaNumber]

  return (
    <Container fluid>
      <MetaTags>
        <title>{`Избирательный округ ${areaNumber}`}</title>
        <meta
          name='description'
          content={`Вся информация о кандидатах в депутаты избирательного округа №${areaNumber}`}
        />
        <meta property='og:title' content={`Избирательный округ ${areaNumber}`} />
        <meta property='og:image' content={areasImages[areaNumber]} />
      </MetaTags>

      <div className='border-bottom pb-2 text-center'>
        <h1>{areaNumber} округ</h1>
        <h4>Количество избирателей: {area.people}</h4>
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

      <div className='border-bottom pb-3'>
        <h2 className='mt-3'>Текущий депутат</h2>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <DeputatCard {...{ deputat, areaNumber }} />
          </Col>
        </Row>
      </div>

      <Row className='border-bottom py-3'>
        <Col xs={12} md={6}>
          <Image src={areasImages[areaNumber]} width='100%' />
        </Col>
      </Row>

      {area.streets && (
        <div className='pt-3'>
          <h2>Список улиц</h2>
          <div>
            {area.streets.map((street, index) => (
              <div key={index}>{street}</div>
            ))}
          </div>
        </div>
      )}
    </Container>
  )
})
