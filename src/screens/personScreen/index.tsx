import moment from 'moment'
import React, { memo, useMemo } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'

import persons from '../../data/persons'
import { isCurrentCallNumber, locationTypeFromName, youtube_parser, getCurrentCandidate } from '../../helpers'
import { noPhoto } from '../../images/candidates'
import { Candidate, LocationType } from '../../types'
import { CandidateStatus, PartyLink, AreaLink, CandidateCard } from '../../components'
import videos from '../../data/videos'

function sortCandidate(a: Candidate, b: Candidate) {
  if (a.locationType === LocationType.city) {
    if (b.locationType === LocationType.city) {
      return b.callNumber - a.callNumber
    } else {
      return 1
    }
  } else {
    if (b.locationType === LocationType.region) {
      return a.callNumber - b.callNumber
    } else {
      return -1
    }
  }
}

export default memo(() => {
  const { personAlias } = useParams()

  const person = useMemo(() => persons.find((c) => c.alias === personAlias), [personAlias]) || persons[0]
  const personVideos = videos.filter((v) => v.objects.some((obj) => obj.type === 'person' && obj.id === person.alias))

  return (
    <Container fluid>
      <h1 itemProp='name'>{person.name} </h1>
      <Row itemScope itemType='http://schema.org/ImageObject'>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className=''>
          <Image width='100%' src={person.photo || noPhoto} rounded itemProp='contentUrl' />
          <div>Возвраст: {moment(person.birthdate, 'DD.MM.YYYY').toNow(true)}</div>
          {person.links && person.links.length > 0 && (
            <div>
              {person.links.map((link) => (
                <a key={link.url} href={link.url} className='d-block' rel='noopener noreferrer' target='_blank'>
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </Col>

        <Col>
          <Row>
            {person.candidate.sort(sortCandidate).map((candidate) => (
              <div key={`${candidate.locationType}_${candidate.areaNumber}`} className='border-left pl-3 mb-3'>
                <div>
                  {candidate.deputat && 'Депутат. '}
                  {candidate.locationType}. {candidate.callNumber} созыв.{' '}
                  <AreaLink areaNumber={candidate.areaNumber} locationName={candidate.locationType} />
                  {'. '}
                  <PartyLink party={candidate.party} locationName={candidate.locationType} />
                  {'. '}
                  {isCurrentCallNumber(candidate) && <CandidateStatus status={candidate.status} />}
                </div>
                {Boolean(candidate.program) && (
                  <a href={candidate.program} className='d-block' rel='noopener noreferrer' target='_blank'>
                    Программа
                  </a>
                )}
                {Boolean(candidate.message) && (
                  <div className='mt-3'>
                    <p>«{candidate.message}»</p>
                  </div>
                )}
                {/*{candidate.role && <div itemProp='description'>{candidate.role}</div>}*/}
                {/*{candidate.project && <div>{candidate.project}</div>}*/}
                {candidate.problems?.length && (
                  <div className='mt-2'>
                    <h5>
                      Проблемы{' '}
                      <Link to={`/${locationTypeFromName(candidate.locationType)}/areas/${candidate.areaNumber}`}>
                        {candidate.areaNumber} округа
                      </Link>
                    </h5>
                    {candidate.problems.map((problem, index) => (
                      <p key={index}>{problem}</p>
                    ))}
                  </div>
                )}
                {isCurrentCallNumber(candidate) && (
                  <>
                    <h2>
                      Другие кандидаты{' '}
                      <Link to={`/${locationTypeFromName(candidate.locationType)}/areas/${candidate.areaNumber}`}>
                        {candidate.areaNumber} округа
                      </Link>
                    </h2>
                    <Row>
                      {persons
                        .filter(
                          (p) =>
                            getCurrentCandidate(p, locationTypeFromName(candidate.locationType))?.areaNumber ===
                              Number(candidate.areaNumber) && p.alias !== personAlias
                        )
                        .map((areaCandidate) => (
                          <Col
                            xs={6}
                            md={4}
                            lg={3}
                            xl={2}
                            key={areaCandidate.name}
                            className='border-xs-top border-sm-none py-3'
                          >
                            <Link to={`/persons/${areaCandidate.alias}`}>
                              <CandidateCard
                                {...{
                                  person: areaCandidate,
                                  locationType: locationTypeFromName(candidate.locationType),
                                }}
                                withParty
                              />
                            </Link>
                          </Col>
                        ))}
                    </Row>
                  </>
                )}
              </div>
            ))}
          </Row>
          <Row>
            {Boolean(person.bio) && (
              <div>
                <h5>Биография</h5>
                <p>{person.bio}</p>
              </div>
            )}
          </Row>
          <Row>
            {personVideos.length && (
              <div className='border-bottom py-3'>
                <h2>Видео</h2>
                <div>
                  {personVideos.map((video) => (
                    <iframe
                      key={video.url}
                      title={video.title}
                      width='560'
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
          </Row>
        </Col>
      </Row>
    </Container>
  )
})
