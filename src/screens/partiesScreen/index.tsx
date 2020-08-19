import React, { memo } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { shuffle, flatten } from 'lodash'

import { StatusesChart } from '../../components'
import persons from '../../data/persons'
import { getCurrentCandidates, getPartyCandidates } from '../../helpers'
import { Parties } from '../../types'

const mapPartyToLogo: { [s: string]: string } = {
  dem: require('../../images/parties/dem.png'),
  er: require('../../images/parties/er.png'),
  kprf: require('../../images/parties/kprf.png'),
  newPeople: require('../../images/parties/nl.jpg'),
  rodina: require('../../images/parties/rodina.svg'),
  yabloko: require('../../images/parties/yabloko.jpg'),
  ldpr: require('../../images/parties/ldpr.png'),
  sr: require('../../images/parties/sr.jpg'),
  zaPravdu: require('../../images/parties/za_pravdu.png'),
  zaSprav: require('../../images/parties/za_sprav.jpg'),
  rosta: require('../../images/parties/rosta.png'),
}

export default memo(() => {
  const { locationType } = useParams()
  const currentPersons = persons.filter((p) => getCurrentCandidates(p, locationType).length > 0)
  const noPartyPersons = currentPersons.filter((p) => p.candidate.some((c) => !c.party))

  return (
    <Container fluid>
      <h1>Партии</h1>
      <Row>
        <Col xs={12} sm={4} md={3} lg={2} className='border py-3'>
          <Link to={`/${locationType}/parties/noParty`}>
            <Image
              width={'100%'}
              className=''
              src={require('../../images/parties/noparty.jpg')}
              alt={'Самовыдвиженцы'}
            />
            <div className='text-center'>Самовыдвиженцы</div>
            <div>Кандидатов: {noPartyPersons.length}</div>
            <StatusesChart persons={noPartyPersons} locationType={locationType} />
          </Link>
        </Col>

        {shuffle(Object.keys(Parties) as Array<keyof typeof Parties>).map((partyAlias) => {
          const partyCandidates = getPartyCandidates(partyAlias, locationType)

          if (!partyCandidates.length) {
            return null
          }

          return (
            <Col xs={12} sm={4} md={3} lg={2} key={partyAlias} className='border py-3'>
              <Link to={`/${locationType}/parties/${partyAlias}`} className='text-center d-block'>
                <Image
                  style={{ maxWidth: '100%', maxHeight: '100px' }}
                  src={mapPartyToLogo[partyAlias]}
                  alt={`Логотип ${Parties[partyAlias]}`}
                />
                <div className='text-center'>{Parties[partyAlias]}</div>
                <div>Кандидатов: {partyCandidates.length}</div>
                <StatusesChart persons={partyCandidates} locationType={locationType} />
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
})
