import React, { useEffect } from 'react'
import './App.css'

import data from './data'
declare let ymaps: any

function App() {
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
        const areaNumber = obj.properties.description
        // @ts-ignore
        const deputat = deputats[areaNumber]
        // @ts-ignore
        obj.properties.balloonContent = balloonContent(deputat, areaNumber)
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
  }, [])

  return <div className='b-map' id='map' style={{ height: '100%' }} />
}

export default App

interface Deputat {
  name: string
  office: string
  phones: string[]
  photo: string
  website: string
}

const deputats: { [d: number]: Deputat } = {
  1: {
    name: 'Ходырев Владимир Фёдорович',
    office: 'ул. Дубовая д. 12',
    phones: ['+79531191757'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/hodyrev_vf.jpg',
    website: 'http://gorduma-voronezh.ru/hodyrev-vladimir-fedorovich/',
  },
  2: {
    name: 'Пинигин Алексей Юрьевич',
    office: 'ул. Переверткина, 11',
    phones: ['+79102453128', '+74732281687'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/pinigin_ay.jpg',
    website: 'http://gorduma-voronezh.ru/pinigin-aleksej-yurevich/',
  },
  3: {
    name: 'Черкасов Олег Николаевич',
    office: 'ул. Переверткина, 11',
    phones: ['+79515415914'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/cherkasov_on.jpg',
    website: 'http://gorduma-voronezh.ru/cherkasov-oleg-nikolaevich/',
  },
  4: {
    name: 'Образцов Николай Николаевич',
    office: 'ул. Туполева, 39',
    phones: ['+74732224305', '+79300112583'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/obraztsov_nn.jpg',
    website: 'http://gorduma-voronezh.ru/obrazcov-nikolaj-nikolaevich/',
  },
  5: {
    name: 'Кочетов Руслан Львович',
    office: 'Ленинский пр-т, 86',
    phones: ['+74732547703', '+79515567899'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kochetov_rl.jpg',
    website: 'http://gorduma-voronezh.ru/kochetov-ruslan-lvovich/',
  },
  6: {
    name: 'Ковалев Виктор Викторович',
    office: 'Ленинский пр-т, д. 86',
    phones: ['+74732547703', '+79081446549'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kovalev_vv.jpg',
    website: 'http://gorduma-voronezh.ru/kovalev-viktor-viktorovich/',
  },
  7: {
    name: 'Калинин Владимир Александрович',
    office: 'Ленинский проспект, 15 оф 203',
    phones: ['+74732585816', '+79290064478'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kalinin_va.jpg',
    website: 'http://gorduma-voronezh.ru/kalinin-vladimir-aleksandrovich/',
  },
  8: {
    name: 'Тюрин Александр Борисович',
    office: 'ул. Ростовская, 50',
    phones: ['+74732299191', '+79202299191'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/tyurin_ab.jpg',
    website: 'http://gorduma-voronezh.ru/tyurin-aleksandr-borisovich/',
  },
  9: {
    name: 'Провоторов Александр Анатольевич',
    office: 'ул. 121 Стрелковой дивизии, 9',
    phones: ['+74732297672', '+79202116301'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/provotorov_aa.jpg',
    website: 'http://gorduma-voronezh.ru/provotorov-aleksandr-anatolevich/',
  },
  10: {
    name: 'Оганезов Сергей Иванович',
    office: 'Ул. Космонавта Комарова, 13',
    phones: ['+79521002728'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/oganezov_si.jpg',
    website: 'http://gorduma-voronezh.ru/oganezov-sergej-ivanovich/',
  },
  11: {
    name: 'Золотарёв Алексей Алексеевич',
    office: 'ул. Космонавтов, 8',
    phones: ['+74732946065'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/zolotarev_aa.jpg',
    website: 'http://gorduma-voronezh.ru/zolotaryov-aleksej-alekseevich/',
  },
  12: {
    name: 'Соболев Андрей Иванович',
    office: 'мкр Придонской, ул. Латненская, д. 3',
    phones: ['+74732434249', '+79202290846'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/sobolev_ai.jpg',
    website: 'http://gorduma-voronezh.ru/sobolev-andrej-ivanovich/',
  },
  13: {
    name: 'Костырев Игорь Владимирович',
    office: 'ул.Грамши, 70',
    phones: ['+74732362643'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kostyrev_iv.jpg',
    website: 'http://gorduma-voronezh.ru/kostyrev-igor-vladimirovich/',
  },
  14: {
    name: 'Головин Александр Иванович',
    office: 'ул. Грамши, 70',
    phones: ['+74732906412', '+79191835774'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/golovin_ai.jpg',
    website: 'http://gorduma-voronezh.ru/golovin-aleksandr-ivanovich/',
  },
  15: {
    name: 'Колиух Сергей Михайлович',
    office: 'ул. 20-летия Октября, 115',
    phones: ['+79525405337'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/koliuh_sm.jpg',
    website: 'http://gorduma-voronezh.ru/koliuh-sergej-mihajlovich/',
  },
  16: {
    name: 'Жуков Александр Алексеевич',
    office: 'ул 9 Января, 108, ДК Машиностроителей, комн.119',
    phones: ['+74732599091', '+74732799512', '+74732227342'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/zhukov_aa.jpg',
    website: 'http://gorduma-voronezh.ru/zhukov-aleksandr-alekseevich/',
  },
  17: {
    name: 'Кандыбин Иван Владимирович',
    office: 'ул. Вл. Невского, 11',
    phones: ['+74732509445', '+79081452363'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kandybin_iv.jpg',
    website: 'http://gorduma-voronezh.ru/kandybin-ivan-vladimirovich/',
  },
  18: {
    name: 'Кудрявцев Сергей Николаевич',
    office: 'ул. Лизюкова, 36',
    phones: ['+74732695025', '+79050512332'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kudryavtsev_sn.jpg',
    website: 'http://gorduma-voronezh.ru/kudryavcev-sergej-nikolaevich/',
  },
  19: {
    name: 'Чистяков Александр Александрович',
    office: 'ул.Вл. Невского, 11 1-й этаж',
    phones: ['+74732320850'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/chistyakov_aa.jpg',
    website: 'http://gorduma-voronezh.ru/chistyakov-aleksandr-aleksandrovich/',
  },
  20: {
    name: 'Гребенкин Николай Тимофеевич',
    office: 'Владимира Невского, 35',
    phones: ['+74732289206', '+74732623484'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/grebenkin_nt.jpg',
    website: 'http://gorduma-voronezh.ru/grebenkin-nikolaj-timofeevich/',
  },
  21: {
    name: 'Попова Юлия Владимировна',
    office: 'пер. Ботанический, 47, поликлиника №3, 1 этаж, каб. 117',
    phones: ['+74732210515', '+79518768067'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/popova_yv.jpg',
    website: 'http://gorduma-voronezh.ru/popova-yuliya-vladimirovna/',
  },
  22: {
    name: 'Клецов Вадим Владимирович',
    office: 'Московский проспект, 58',
    phones: ['+74732392787', '+79204050597'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kletsov_vv.jpg',
    website: 'http://gorduma-voronezh.ru/klecov-vadim-vladimirovich/',
  },
  23: {
    name: 'Трубецкой Александр Николаевич',
    office: 'ул. Никитинская, д. 8',
    phones: ['+79515563273'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/trubetskoy_an.jpg',
    website: 'http://gorduma-voronezh.ru/trubeckoj-aleksandr-nikolaevich/',
  },
  24: {
    name: 'Сысоев Александр Владимирович',
    office: 'ул. Никитинская, д. 8 каб. 102а',
    phones: ['+74732227351'],
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/sysoev_av.jpg',
    website: 'http://gorduma-voronezh.ru/sysoev-aleksandr-vladimirovich/',
  },
}

const balloonContent = (deputat: Deputat, areaNumber: number) => {
  const { website, phones } = deputat
  const phonesLinks = phones
    .map((phone) => {
      return `<a href='tel:${phone}'>${phone}</a>`
    })
    .join(', ')

  return `
  <div style="display: flex; flex-direction: row; align-items: flex-start">
    <img style="margin-right: 10px;" src="${deputat.photo}" alt="фото депутата ${deputat.name}" />
    <div>
      <div style="font-size: 18px;">${deputat.name}</div>
      <div style="margin-top: 10px;">Округ № ${areaNumber}</div>
      <div style="margin-top: 10px;">Адрес приёмной:</div>
      <div>${deputat.office}</div>
      <div style="margin-top: 10px;">Телефон приёмной:</div>
      <div>
        ${phonesLinks}
      </div>
      <a style="display: block; margin-top: 10px;" href="${website}" target="_blank">Перейти на сайт депутата</a>
    </div>
  </div>
`
}
