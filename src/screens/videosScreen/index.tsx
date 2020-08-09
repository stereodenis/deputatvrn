import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { youtube_parser } from '../../helpers'
import videos from '../../data/videos'
import persons from '../../data/persons'

export default memo(() => {
  const sortedVideos = videos.sort((a, b) => {
    return moment(b.date, 'DD.MM.YYYY').unix() - moment(a.date, 'DD.MM.YYYY').unix()
  })

  return (
    <Container fluid>
      <h2>Видео</h2>
      <Row>
        {sortedVideos.map((video) => (
          <Col xs={12} xl={6} key={video.url}>
            {video.objects.map((object) => {
              if (object.type === 'person') {
                const person = persons.find((p) => p.alias === object.id)
                return (
                  <Link to={`/persons/${object.id}`} className='d-block' key={object.id}>
                    {person?.name}
                  </Link>
                )
              }
              const id = object.id.split('_')

              return (
                <Link to={`/${id[0]}/areas/${id[1]}`} className='d-block' key={object.id}>
                  {id[1]} округ
                </Link>
              )
            })}
            <iframe
              title={video.title}
              width='100%'
              height='315'
              src={`https://www.youtube.com/embed/${youtube_parser(video.url)}`}
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
})
