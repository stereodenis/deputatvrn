ymaps.ready(function () {
  var map = new ymaps.Map('map', {
      center: [39.218432, 51.649998],
      zoom: 11,
      controls: ['zoomControl']
    }),
    objectManager = new ymaps.ObjectManager();
  map.controls.get('zoomControl').options.set({size: 'small'});
  $.getJSON('Karta_munitsipalnykh_deputatov_Voronezh_03-12-2018_23-38-03_geojson.geojson')
    .done(function (geoJson) {
      geoJson.features.forEach(function (obj) {
        const areaNumber = obj.properties.description
        const deputat = deputats[areaNumber]
        obj.properties.balloonContent = `
          <div style="display: flex; flex-direction: row; align-items: flex-start">
            <img style="margin-right: 10px;" src="${deputat.photo}" />
            <div>
              <div style="font-size: 18px;">${deputat.name}</div>
              <div style="margin-top: 10px;">Округ № ${areaNumber}</div>
              <div style="margin-top: 10px;">Адрес приёмной:</div>
              <div>${deputat.office}</div>
              <div style="margin-top: 10px;">Телефон приёмной:</div>
              <div>
                ${$.map(deputat.phones, function (phone) {
                    return `<a href='tel:${phone}'>${phone}</a>`
                  }).join(', ')}
              </div>
              <a style="display: block; margin-top: 10px;" href="${deputat.website}" target="_blank">Перейти на сайт депутата</a>
            </div>
          </div>
        `
        obj.options = {}
        obj.options.fillColor = `${obj.properties.fill}75`;
      });
      objectManager.add(geoJson);
      map.geoObjects.add(objectManager);
    });
});

const deputats = {
  1: {
    name: 'Ходырев Владимир Фёдорович',
    office: 'ул. Дубовая д. 12',
    phones: ['+79531191757'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/hodyrev_vf.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/hodyrev_vf.html',
  },
  2: {
    name: 'Пинигин Алексей Юрьевич',
    office: 'ул. Переверткина, 11',
    office: ['+79102453128', '+74732281687'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/pinigin_ay.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/pinigin_ay.html',
  },
  3: {
    name: 'Черкасов Олег Николаевич',
    office: 'ул. Переверткина, 11',
    office: ['+79515415914'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/cherkasov_on.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/cherkasov_on.html',
  },
  4: {
    name: 'Образцов Николай Николаевич',
    office: 'ул. Туполева, 39',
    phones: ['+74732224305', '+79300112583'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/obraztsov_nn.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/obraztsov_nn.html',
  },
  5: {
    name: 'Кочетов Руслан Львович',
    office: 'Ленинский пр-т, 86',
    phones: ['+74732547703', '+79515567899'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/kochetov_rl.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/kochetov_rl.html',
  },
  6: {
    name: 'Ковалев Виктор Викторович',
    office: 'Ленинский пр-т, д. 86',
    phones: ['+74732547703', '+79081446549'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/kovalev_vv.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/kovalev_vv.html',
  },
  7: {
    name: 'Калинин Владимир Александрович',
    office: 'Ленинский проспект, 15 оф 203',
    phones: ['+74732585816', '+79290064478'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/kalinin_va.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/kalinin_va.html',
  },
  8: {
    name: 'Тюрин Александр Борисович',
    office: 'ул. Ростовская, 50',
    phones: ['+74732299191', '+79202299191'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/tyurin_ab.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/tyurin_ab.html',
  },
  9: {
    name: 'Провоторов Александр Анатольевич',
    office: 'ул. 121 Стрелковой дивизии, 9',
    phones: ['+74732297672', '+79202116301'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/provotorov_aa.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/provotorov_aa.html',
  },
  10: {
    name: 'Оганезов Сергей Иванович',
    office: 'Ул. Космонавта Комарова, 13',
    phones: ['+79521002728'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/oganezov_si.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/oganezov_si.html',
  },
  11: {
    name: 'Золотарёв Алексей Алексеевич',
    office: 'ул. Космонавтов, 8',
    phones: ['+74732946065'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/zolotarev_aa.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/zolotarev_aa.html',
  },
  12: {
    name: 'Соболев Андрей Иванович',
    office: 'мкр Придонской, ул. Латненская, д. 3',
    phones: ['+74732434249', '+79202290846'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/sobolev_ai.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/sobolev_ai.html',
  },
  13: {
    name: 'Костырев Игорь Владимирович',
    office: 'ул.Грамши, 70',
    phones: ['+74732362643'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/kostyrev_iv.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/kostyrev_iv.html',
  },
  14: {
    name: 'Головин Александр Иванович',
    office: 'ул. Грамши, 70',
    phones: ['+74732906412', '+79191835774'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/golovin_ai.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/golovin_ai.html',
  },
  15: {
    name: 'Колиух Сергей Михайлович',
    office: 'ул. 20-летия Октября, 115',
    phones: ['+79525405337'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/koliuh_sm.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/koliuh_sm.html',
  },
  16: {
    name: 'Жуков Александр Алексеевич',
    office: 'ул 9 Января, 108, ДК Машиностроителей, комн.119',
    phones: ['+74732599091', '+74732799512', '+74732227342'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/zhukov_aa.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/zhukov_aa.html',
  },
  17: {
    name: 'Кандыбин Иван Владимирович',
    office: 'ул. Вл. Невского, 11',
    phones: ['+74732509445', '+79081452363'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/kandybin_iv.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/kandybin_iv.html',
  },
  18: {
    name: 'Кудрявцев Сергей Николаевич',
    office: 'ул. Лизюкова, 36',
    phones: ['+74732695025', '+79050512332'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/kudryavtsev_sn.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/kudryavtsev_sn.html',
  },
  19: {
    name: 'Чистяков Александр Александрович',
    office: 'ул.Вл. Невского, 11 1-й этаж',
    phones: ['+74732320850'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/chistyakov_aa.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/chistyakov_aa.html',
  },
  20: {
    name: 'Гребенкин Николай Тимофеевич',
    office: 'Владимира Невского, 35',
    phones: ['+74732289206', '+74732623484'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/grebenkin_nt.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/grebenkin_nt.html',
  },
  21: {
    name: 'Попова Юлия Владимировна',
    office: 'пер. Ботанический, 47, поликлиника №3, 1 этаж, каб. 117',
    phones: ['+74732210515', '+79518768067'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/popova_yv.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/popova_yv.html',
  },
  22: {
    name: 'Клецов Вадим Владимирович',
    office: 'Московский проспект, 58',
    phones: ['+74732392787', '+79204050597'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/kletsov_vv.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/kletsov_vv.html',
  },
  23: {
    name: 'Трубецкой Александр Николаевич',
    office: 'ул. Никитинская, д. 8',
    phones: ['+79515563273'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/trubetskoy_an.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/trubetskoy_an.html',
  },
  24: {
    name: 'Сысоев Александр Владимирович',
    office: 'ул. Никитинская, д. 8 каб. 102а',
    phones: ['+74732227351'],
    photo: 'http://www.gorduma-voronezh.ru/dep4/sysoev_av.jpg',
    website: 'http://www.gorduma-voronezh.ru/dep4/sysoev_av.html',
  },
}
