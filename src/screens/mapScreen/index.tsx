import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import data from './data'

export declare let ymaps: any

export default function Map() {
  const history = useHistory()

  useEffect(() => {
    ymaps.ready(['polylabel.create']).then(function () {
      const map = new ymaps.Map('map', {
          center: [39.218432, 51.649998],
          zoom: 11,
          controls: ['zoomControl'],
        }),
        objectManager = new ymaps.ObjectManager()
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
        history.push(`/area/${area.description}`)
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
  }, [history])

  return <div className='flex-fill' id='map' />
}