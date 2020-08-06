import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'

import persons from '../../data/persons'
import { youtube_parser } from '../../helpers'
import { Video, Person } from '../../types'

export default memo(() => {
  const videosAndPersons = persons
    .filter((p) => p.videos)
    .reduce((list, p, index, ps) => {
      p.videos?.forEach((video) => list.push([video, p]))
      return list
    }, [] as [Video, Person][])
    .sort((a, b) => {
      return moment(b[0].date, 'DD.MM.YYYY').unix() - moment(a[0].date, 'DD.MM.YYYY').unix()
    })

  return (
    <Container fluid>
      <h2>Видео</h2>
      <Row>
        {videosAndPersons.map((videoAndPerson) => (
          <Col xs={12} xl={6} key={videoAndPerson[0].url}>
            <iframe
              title={videoAndPerson[0].title}
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${youtube_parser(videoAndPerson[0].url)}`}
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
