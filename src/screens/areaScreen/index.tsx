import React, { memo, useMemo, useState } from 'react'
import { Container, Col, Row, Form, ButtonGroup, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
// @ts-ignore
import MetaTags from 'react-meta-tags'
import { Image } from 'react-bootstrap'
import { flatten } from 'lodash'

import { DeputatCard, CandidateCard, StatusesChart } from '../../components'
import areas from '../../data/areas'
import persons from '../../data/persons'
import areasImages from '../../images/areas'
import { getCurrentCandidates, getPersonWithCurrentDeputat, youtube_parser } from '../../helpers'
import videos from '../../data/videos'
import { CandidateStatuses, LocationType } from '../../types'

export default memo(() => {
  const { locationType, areaNumber: rawAreaNumber } =
    useParams<{ locationType: keyof typeof LocationType; areaNumber: string }>()
  const [disabled, setDisabled] = useState(true)
  const [isList, setIsList] = useState(false)
  const areaNumber = Number(rawAreaNumber)
  const area = areas[locationType][areaNumber]

  const personWithCurrentDeputat = getPersonWithCurrentDeputat(areaNumber, locationType)
  const currentPersons = persons.filter((p) => getCurrentCandidates(p, locationType).length > 0)
  const areaPersons = currentPersons.filter((p) => p.candidate.some((c) => c.areaNumber === areaNumber))
  const areaPersonsAndCandidats = useMemo(
    () =>
      flatten(
        currentPersons.map((p) => getCurrentCandidates(p, locationType).map((c) => ({ person: p, candidate: c })))
      )
        .filter((pc) => pc.candidate.areaNumber === areaNumber)
        .filter((pc) => (disabled ? pc.candidate.status === CandidateStatuses.registered : true))
        .filter((pc) => (isList ? pc.candidate.listNumber : !pc.candidate.listNumber)),
    [areaNumber, currentPersons, disabled, isList, locationType]
  )
  const areaVideos = videos.filter((v) =>
    v.objects.some((obj) => {
      const id = obj.id.split('_')

      return obj.type === 'area' && id.length > 1 && id[0] === locationType && id[1] === rawAreaNumber
    })
  )

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
      <div className='pb-2 text-center d-flex flex-row justify-content-center'>
        <Link to={`/${locationType}/areas/${areaNumber === 0 ? (locationType === 'city' ? 24 : 28) : areaNumber - 1}`}>
          {'<<'}
        </Link>
        <div>
          <h1>{areaNumber === 0 ? 'Общий список' : `${areaNumber} округ`}</h1>
          {area?.people && <h4>Количество избирателей: {area.people}</h4>}
        </div>
        <Link to={`/${locationType}/areas/${areaNumber === (locationType === 'city' ? 24 : 28) ? 0 : areaNumber + 1}`}>
          {'>>'}
        </Link>
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

      <StatusesChart persons={areaPersons} {...{ locationType }} />

      <div className='py-3'>
        <h2>Список кандидатов в депутаты</h2>
        <Row className='border-bottom'>
          {areaPersonsAndCandidats.map((pc) => (
            <Col xs={6} md={4} lg={3} xl={2} key={pc.person.name} className='border-xs-bottom border-md-none py-3'>
              <Link to={`/persons/${pc.person.alias}`}>
                <CandidateCard
                  {...{ name: pc.person.name, photo: pc.person.photo, candidate: pc.candidate, locationType }}
                  withParty
                />
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
              <DeputatCard {...{ person: personWithCurrentDeputat, locationType }} />
            </Col>
          </Row>
        </div>
      )}

      {areaVideos.length && (
        <div className='border-bottom py-3'>
          <h2>Видео</h2>
          <div>
            {areaVideos.map((video) => (
              <iframe
                key={video.url}
                title={video.title}
                width='100%'
                height='315'
                src={`https://www.youtube.com/embed/${youtube_parser(video.url)}`}
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            ))}
          </div>
        </div>
      )}
      {area?.news?.length && (
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
      {area?.streets && (
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
