import React, { memo } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { shuffle } from 'lodash'

import candidats from '../../data/candidats'
import { Parties } from '../../types'

const mapPartyToLogo: { [s: string]: string } = {
  er: require('../../images/parties/er.png'),
  kprf: require('../../images/parties/kprf.png'),
  newPeople: require('../../images/parties/nl.jpg'),
  rodina: require('../../images/parties/rodina.svg'),
  yabloko: require('../../images/parties/yabloko.jpg'),
  ldpr: require('../../images/parties/ldpr.png'),
  sr: require('../../images/parties/sr.jpg'),
}

export default memo(() => {
  const noPartyCandidates = candidats.filter((c) => !c.party)

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
          const partyCandidates = candidats.filter((c) => c.party === Parties[partyAlias])

          if (!partyCandidates.length) {
            return null
          }

          return (
            <Col xs={6} sm={4} md={3} lg={2} key={partyAlias} className='border py-3'>
              <Link to={`/parties/${partyAlias}`}>
                <Image
                  width={'100%'}
                  className=''
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
