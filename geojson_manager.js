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
        //console.log('obj', obj)
        obj.properties.balloonContent = `
  <div style="display: flex;">
  <img
    src="${deputats[obj.properties.description][2]}"
    style="margin-right: 10px;"
  />
  <div>
    <div style="font-size: 18px;">${deputats[obj.properties.description][0]}</div>
    <div style="margin-top: 10px;">Округ № ${obj.properties.description}</div>
    <div style="margin-top: 10px;">Адрес приёмной и телефон:</div>
    <div>${deputats[obj.properties.description][1]}</div>
    <a style="display: block; margin-top: 10px;" href="${deputats[obj.properties.description][3]}" target="_blank">Перейти на сайт депутата</a>
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
  1: ['Ходырев Владимир Фёдорович', 'ул. Дубовая д. 12 тел. 89531191757', 'http://www.gorduma-voronezh.ru/dep4/hodyrev_vf.jpg', 'http://www.gorduma-voronezh.ru/dep4/hodyrev_vf.html', 'http://www.gorduma-voronezh.ru/dep4/hodyrev_vf.jpg', 'http://www.gorduma-voronezh.ru/dep4/hodyrev_vf.html'],
  2: ['Пинигин Алексей Юрьевич', 'ул. Переверткина, 11 тел. 89102453128 228-16-87', 'http://www.gorduma-voronezh.ru/dep4/pinigin_ay.jpg', 'http://www.gorduma-voronezh.ru/dep4/pinigin_ay.html', 'http://www.gorduma-voronezh.ru/dep4/pinigin_ay.jpg', 'http://www.gorduma-voronezh.ru/dep4/pinigin_ay.html'],
  3: ['Черкасов Олег Николаевич', 'ул. Переверткина, 11 тел. 89515415914', 'http://www.gorduma-voronezh.ru/dep4/cherkasov_on.jpg', 'http://www.gorduma-voronezh.ru/dep4/cherkasov_on.html', 'http://www.gorduma-voronezh.ru/dep4/cherkasov_on.jpg', 'http://www.gorduma-voronezh.ru/dep4/cherkasov_on.html'],
  4: ['Образцов Николай Николаевич', 'ул. Туполева, 39 тел.222-43-05 89300112583', 'http://www.gorduma-voronezh.ru/dep4/obraztsov_nn.jpg', 'http://www.gorduma-voronezh.ru/dep4/obraztsov_nn.html', 'http://www.gorduma-voronezh.ru/dep4/obraztsov_nn.jpg', 'http://www.gorduma-voronezh.ru/dep4/obraztsov_nn.html'],
  5: ['Кочетов Руслан Львович', 'Ленинский пр-т, 86 тел.2547703 8-951-556-78-99', 'http://www.gorduma-voronezh.ru/dep4/kochetov_rl.jpg', 'http://www.gorduma-voronezh.ru/dep4/kochetov_rl.html', 'http://www.gorduma-voronezh.ru/dep4/kochetov_rl.jpg', 'http://www.gorduma-voronezh.ru/dep4/kochetov_rl.html'],
  6: ['Ковалев Виктор Викторович', 'Ленинский пр-т, д. 86 тел 8 473 254 77 03 89081446549', 'http://www.gorduma-voronezh.ru/dep4/kovalev_vv.jpg', 'http://www.gorduma-voronezh.ru/dep4/kovalev_vv.html', 'http://www.gorduma-voronezh.ru/dep4/kovalev_vv.jpg', 'http://www.gorduma-voronezh.ru/dep4/kovalev_vv.html'],
  7: ['Калинин Владимир Александрович', 'Ленинский проспект, 15 оф 203 тел.  2585816 89290064478', 'http://www.gorduma-voronezh.ru/dep4/kalinin_va.jpg', 'http://www.gorduma-voronezh.ru/dep4/kalinin_va.html', 'http://www.gorduma-voronezh.ru/dep4/kalinin_va.jpg', 'http://www.gorduma-voronezh.ru/dep4/kalinin_va.html'],
  8: ['Тюрин Александр Борисович', 'ул. Ростовская, 50, тел.2299191 89202299191', 'http://www.gorduma-voronezh.ru/dep4/tyurin_ab.jpg', 'http://www.gorduma-voronezh.ru/dep4/tyurin_ab.html', 'http://www.gorduma-voronezh.ru/dep4/tyurin_ab.jpg', 'http://www.gorduma-voronezh.ru/dep4/tyurin_ab.html'],
  9: ['Провоторов Александр Анатольевич', 'ул. 121 Стрелковой дивизии, 9 тел.229-76-72 89202116301', 'http://www.gorduma-voronezh.ru/dep4/provotorov_aa.jpg', 'http://www.gorduma-voronezh.ru/dep4/provotorov_aa.html', 'http://www.gorduma-voronezh.ru/dep4/provotorov_aa.jpg', 'http://www.gorduma-voronezh.ru/dep4/provotorov_aa.html'],
  10: [ 'Оганезов Сергей Иванович', 'Ул. Космонавта Комарова, 13 тел.89521002728', 'http://www.gorduma-voronezh.ru/dep4/oganezov_si.jpg', 'http://www.gorduma-voronezh.ru/dep4/oganezov_si.html', 'http://www.gorduma-voronezh.ru/dep4/oganezov_si.jpg', 'http://www.gorduma-voronezh.ru/dep4/oganezov_si.html'],
  11: [ 'Золотарёв Алексей Алексеевич', 'ул. Космонавтов, 8 тел.294-60-65', 'http://www.gorduma-voronezh.ru/dep4/zolotarev_aa.jpg', 'http://www.gorduma-voronezh.ru/dep4/zolotarev_aa.html', 'http://www.gorduma-voronezh.ru/dep4/zolotarev_aa.jpg', 'http://www.gorduma-voronezh.ru/dep4/zolotarev_aa.html'],
  12: [ 'Соболев Андрей Иванович', 'мкр Придонской, ул. Латненская, д. 3 тел.2434249 89202290846', 'http://www.gorduma-voronezh.ru/dep4/sobolev_ai.jpg', 'http://www.gorduma-voronezh.ru/dep4/sobolev_ai.html', 'http://www.gorduma-voronezh.ru/dep4/sobolev_ai.jpg', 'http://www.gorduma-voronezh.ru/dep4/sobolev_ai.html'],
  13: [ 'Костырев Игорь Владимирович', 'ул.Грамши, 70 тел.236-26-43', 'http://www.gorduma-voronezh.ru/dep4/kostyrev_iv.jpg', 'http://www.gorduma-voronezh.ru/dep4/kostyrev_iv.html', 'http://www.gorduma-voronezh.ru/dep4/kostyrev_iv.jpg', 'http://www.gorduma-voronezh.ru/dep4/kostyrev_iv.html'],
  14: [ 'Головин Александр Иванович', 'ул. Грамши, 70 тел:290-64-12 89191835774', 'http://www.gorduma-voronezh.ru/dep4/golovin_ai.jpg', 'http://www.gorduma-voronezh.ru/dep4/golovin_ai.html', 'http://www.gorduma-voronezh.ru/dep4/golovin_ai.jpg', 'http://www.gorduma-voronezh.ru/dep4/golovin_ai.html'],
  15: [ 'Колиух Сергей Михайлович', 'ул. 20-летия Октября, 115  телефон:8-952-540-53-37', 'http://www.gorduma-voronezh.ru/dep4/koliuh_sm.jpg', 'http://www.gorduma-voronezh.ru/dep4/koliuh_sm.html', 'http://www.gorduma-voronezh.ru/dep4/koliuh_sm.jpg', 'http://www.gorduma-voronezh.ru/dep4/koliuh_sm.html'],
  16: [ 'Жуков Александр Алексеевич', 'ул 9 Января, 108, ДК Машиностроителей, комн.119 Тел. 2599091, 2799512, 2227342.', 'http://www.gorduma-voronezh.ru/dep4/zhukov_aa.jpg', 'http://www.gorduma-voronezh.ru/dep4/zhukov_aa.html', 'http://www.gorduma-voronezh.ru/dep4/zhukov_aa.jpg', 'http://www.gorduma-voronezh.ru/dep4/zhukov_aa.html'],
  17: [ 'Кандыбин Иван Владимирович', 'ул. Вл. Невского, 11 тел.2509445 89081452363', 'http://www.gorduma-voronezh.ru/dep4/kandybin_iv.jpg', 'http://www.gorduma-voronezh.ru/dep4/kandybin_iv.html', 'http://www.gorduma-voronezh.ru/dep4/kandybin_iv.jpg', 'http://www.gorduma-voronezh.ru/dep4/kandybin_iv.html'],
  18: [ 'Кудрявцев Сергей Николаевич', 'ул. Лизюкова, 36 Тел.269-50-25 89050512332', 'http://www.gorduma-voronezh.ru/dep4/kudryavtsev_sn.jpg', 'http://www.gorduma-voronezh.ru/dep4/kudryavtsev_sn.html', 'http://www.gorduma-voronezh.ru/dep4/kudryavtsev_sn.jpg', 'http://www.gorduma-voronezh.ru/dep4/kudryavtsev_sn.html'],
  19: [ 'Чистяков Александр Александрович', 'ул.Вл. Невского, 11 1-й этаж тел. 2320850', 'http://www.gorduma-voronezh.ru/dep4/chistyakov_aa.jpg', 'http://www.gorduma-voronezh.ru/dep4/chistyakov_aa.html', 'http://www.gorduma-voronezh.ru/dep4/chistyakov_aa.jpg', 'http://www.gorduma-voronezh.ru/dep4/chistyakov_aa.html'],
  20: [ 'Гребенкин Николай Тимофеевич', 'Владимира Невского, 35 тел.2289206, 2623484', 'http://www.gorduma-voronezh.ru/dep4/grebenkin_nt.jpg', 'http://www.gorduma-voronezh.ru/dep4/grebenkin_nt.html', 'http://www.gorduma-voronezh.ru/dep4/grebenkin_nt.jpg', 'http://www.gorduma-voronezh.ru/dep4/grebenkin_nt.html'],
  21: [ 'Попова Юлия Владимировна', 'пер. Ботанический, 47, поликлиника №3, 1 этаж, каб. 117 тел.221-05-15 89518768067', 'http://www.gorduma-voronezh.ru/dep4/popova_yv.jpg', 'http://www.gorduma-voronezh.ru/dep4/popova_yv.html', 'http://www.gorduma-voronezh.ru/dep4/popova_yv.jpg', 'http://www.gorduma-voronezh.ru/dep4/popova_yv.html'],
  22: [ 'Клецов Вадим Владимирович', 'Московский проспект, 58, тел. 239-27-87, 89204050597', 'http://www.gorduma-voronezh.ru/dep4/kletsov_vv.jpg', 'http://www.gorduma-voronezh.ru/dep4/kletsov_vv.html', 'http://www.gorduma-voronezh.ru/dep4/kletsov_vv.jpg', 'http://www.gorduma-voronezh.ru/dep4/kletsov_vv.html'],
  23: [ 'Трубецкой Александр Николаевич', 'ул. Никитинская, д. 8 тел.89515563273', 'http://www.gorduma-voronezh.ru/dep4/trubetskoy_an.jpg', 'http://www.gorduma-voronezh.ru/dep4/trubetskoy_an.html', 'http://www.gorduma-voronezh.ru/dep4/trubetskoy_an.jpg', 'http://www.gorduma-voronezh.ru/dep4/trubetskoy_an.html'],
  24: [ 'Сысоев Александр Владимирович', 'ул. Никитинская, д. 8 каб. 102а тел. 222-73-51', 'http://www.gorduma-voronezh.ru/dep4/sysoev_av.jpg', 'http://www.gorduma-voronezh.ru/dep4/sysoev_av.html', 'http://www.gorduma-voronezh.ru/dep4/sysoev_av.jpg', 'http://www.gorduma-voronezh.ru/dep4/sysoev_av.html'],
}
