import React, { memo, useMemo } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
// @ts-ignore
import MetaTags from 'react-meta-tags'
import { Image } from 'react-bootstrap'

import { DeputatCard, CandidateCard } from '../../components'
import areas from '../../data/areas'
import areasImages from '../../images/areas'
import { getAreaCandidates, getPersonWithCurrentDeputat } from '../../helpers'

function youtube_parser(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}

export default memo(() => {
  const { locationType, areaNumber } = useParams()
  const area = areas[locationType][areaNumber]

  const personWithCurrentDeputat = getPersonWithCurrentDeputat(Number(areaNumber), locationType)
  const areaCandidats = useMemo(() => getAreaCandidates(Number(areaNumber), locationType), [areaNumber, locationType])

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
          {areaCandidats.map((person) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={2} key={person.name} className='border-xs-bottom border-md-none py-3'>
              <Link to={`/${locationType}/candidates/${person.alias}`}>
                <CandidateCard {...{ person, type: locationType }} withParty />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      {personWithCurrentDeputat && (
        <div className='border-bottom pb-3'>
          <h2 className='mt-3'>Текущий депутат</h2>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} xl={2}>
              <DeputatCard {...{ person: personWithCurrentDeputat }} />
            </Col>
          </Row>
        </div>
      )}
      {area.videos?.length && (
        <div className='border-bottom py-3'>
          <h2>Видео</h2>
          <div>
            {area.videos?.map((newsItem) => (
              <iframe
                key={newsItem.url}
                title={newsItem.title}
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${youtube_parser(newsItem.url)}`}
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            ))}
          </div>
        </div>
      )}
      {area.news?.length && (
        <div className='border-bottom py-3'>
          <h2>Упоминания в СМИ</h2>
          <div>
            {area.news?.map((newsItem) => (
              <a href={newsItem.url} className='d-block' target='_blank' rel='noopener noreferrer' key={newsItem.url}>
                {newsItem.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {locationType === 'city' && ( // TODO
        <Row className='border-bottom py-3'>
          <Col xs={12} md={6}>
            <Image src={areasImages[areaNumber]} width='100%' />
          </Col>
        </Row>
      )}
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
