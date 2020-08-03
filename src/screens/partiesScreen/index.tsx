import React, { memo } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { shuffle } from 'lodash'

import persons from '../../data/persons'
import { getCurrentCandidate, getPartyCandidates } from '../../helpers'
import { CandidateType, Parties } from '../../types'

const mapPartyToLogo: { [s: string]: string } = {
  er: require('../../images/parties/er.png'),
  kprf: require('../../images/parties/kprf.png'),
  newPeople: require('../../images/parties/nl.jpg'),
  rodina: require('../../images/parties/rodina.svg'),
  yabloko: require('../../images/parties/yabloko.jpg'),
  ldpr: require('../../images/parties/ldpr.png'),
  sr: require('../../images/parties/sr.jpg'),
  zaPravdu: require('../../images/parties/za_pravdu.png'),
}

export default memo(() => {
  const type =
    (localStorage.getItem('type') as keyof typeof CandidateType) ||
    (Object.keys(CandidateType) as Array<keyof typeof CandidateType>)[0]
  const currentPersons = persons.filter((p) => getCurrentCandidate(p, type))
  const noPartyCandidates = currentPersons.filter((p) => !getCurrentCandidate(p, type)?.party)

  return (
    <Container fluid>
      <h1>Партии</h1>
      <Row>
        <Col xs={6} sm={4} md={3} lg={2} className='border py-3'>
          <Link to={'/parties/noParty'}>
            <Image
              width={'100%'}
              className=''
              src={require('../../images/parties/noparty.jpg')}
              alt={'Самовыдвиженцы'}
            />
            <div className='text-center'>Самовыдвиженцы</div>
            <div>Кандидатов: {noPartyCandidates.length}</div>
          </Link>
        </Col>

        {shuffle(Object.keys(Parties) as Array<keyof typeof Parties>).map((partyAlias) => {
          const partyCandidates = getPartyCandidates(partyAlias, type)

          if (!partyCandidates.length) {
            return null
          }

          return (
            <Col xs={6} sm={4} md={3} lg={2} key={partyAlias} className='border py-3'>
              <Link to={`/parties/${partyAlias}`} className='text-center d-block'>
                <Image
                  style={{ maxWidth: '100%', maxHeight: '100px' }}
                  src={mapPartyToLogo[partyAlias]}
                  alt={`Логотип ${Parties[partyAlias]}`}
                />
                <div className='text-center'>{Parties[partyAlias]}</div>
                <div>Кандидатов: {partyCandidates.length}</div>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
})
