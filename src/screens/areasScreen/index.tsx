import React, { memo, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import { times } from 'lodash'

import areas from '../../data/areas'
import { getAreaCandidates, getPersonWithCurrentDeputat } from '../../helpers'
import { StatusesChart } from '../../components'
import { LocationType } from '../../types'

import data from './data'

export declare let ymaps: any

export default memo(() => {
  const history = useHistory()
  const { locationType } = useParams<{ locationType: keyof typeof LocationType }>()

  useEffect(() => {
    if (locationType === 'city') {
      ymaps.ready(['polylabel.create']).then(function () {
        const map = new ymaps.Map('map', {
            center: [39.218432, 51.649998],
            zoom: 11,
            controls: ['zoomControl'],
          }),
          objectManager = new ymaps.ObjectManager()
        map.behaviors.disable('scrollZoom')
        map.controls.get('zoomControl').options.set({ size: 'small' })
        data.features.forEach((obj) => {
          // const areaNumber = obj.properties.description
          // const deputat = deputats[areaNumber]
          // obj.properties.balloonContent = balloonContent(deputat, areaNumber)
          // @ts-ignore
          obj.options = {
            labelDefaults: 'dark',
            openHintOnHover: false,
            labelLayout: '<div>{{properties.description}}</div>',
            labelTextSize: { '3_6': 14, '7_18': 18 },
            cursor: 'grab',
            labelDotCursor: 'pointer',
            labelPermissibleInaccuracyOfVisibility: 4,
            fillColor: `${obj.properties.fill}75`,
          }
        })
        objectManager.add(data)
        map.geoObjects.add(objectManager)
        new ymaps.polylabel.create(map, objectManager)
        objectManager.events.add(['click', 'labelclick'], (event: any) => {
          const objectId = event.get('objectId')
          const area = objectManager.objects.getById(objectId).properties
          history.push(`/${locationType}/areas/${area.description}`)
        })
        objectManager.events.add(['mouseenter', 'labelmouseenter', 'labelmouseleave', 'mouseleave'], (event: any) => {
          const objectId = event.get('objectId')
          const eventType = event.get('type')
          const isSelected = eventType === 'mouseenter' || eventType === 'labelmouseenter'
          const stroke = isSelected ? 3 : 1
          objectManager.objects.setObjectOptions(objectId, {
            strokeWidth: stroke,
          })
        })
      })
    }
  }, [history, locationType])

  return (
    <Container fluid>
      <Row>
        {/*TODO*/}
        {times(locationType === 'city' ? 24 : 28).map((rawAreaNumber) => {
          const areaNumber = rawAreaNumber + 1
          const area = areas[locationType][areaNumber]
          const areaCandidates = getAreaCandidates(areaNumber, locationType)
          const deputatPerson = getPersonWithCurrentDeputat(areaNumber, locationType)

          return (
            <Col xs={6} sm={4} md={3} lg={2} xl={2} key={areaNumber} className='border py-3'>
              <Link to={`/${locationType}/areas/${areaNumber}`} className=''>
                <div className='text-center'>{areaNumber} округ</div>
                <div>Избирателей: {area.people}</div>
                <div>Кандидатов: {areaCandidates.length}</div>
                {deputatPerson && <div>Депутат: {deputatPerson.name}</div>}
                <StatusesChart persons={areaCandidates} locationType={locationType} />
              </Link>
            </Col>
          )
        })}
      </Row>
      <Row>
        <div className='flex-fill' style={{ height: '100vh' }} id='map' />
      </Row>
    </Container>
  )
})
