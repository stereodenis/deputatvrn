import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'

import { youtube_parser } from '../../helpers'
import videos from '../../data/videos'

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
            <iframe
              title={video.title}
              width='560'
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
