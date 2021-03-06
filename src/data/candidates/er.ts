import * as photos from '../../images/candidates'
import { CandidateStatuses, LinkTitle, LocationType, Parties, Person } from '../../types'

const er: Person[] = [
  {
    name: 'Ходырев Владимир Фёдорович',
    alias: 'hodyrev_vladimir',
    birthdate: '23.05.1957',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/hodyrev_vf.jpg',
    candidate: [
      {
        callNumber: 5,
        locationType: LocationType.city,
        areaNumber: 1,
        party: Parties.er,
        status: CandidateStatuses.registered,
        deputat: {
          office: 'ул. Дубовая д. 12',
          phones: ['+79531191757'],
          website: 'http://gorduma-voronezh.ru/hodyrev-vladimir-fedorovich/',
        },
      },
      {
        areaNumber: 1,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. Дубовая д. 12',
          phones: ['+79531191757'],
          website: 'http://gorduma-voronezh.ru/hodyrev-vladimir-fedorovich/',
        },
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 0,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shvetsov',
    name: 'Швецов Дмитрий Сергеевич',
    birthdate: '10.01.1988',
    photo: photos.shvezov_dmitriy,
    candidate: [
      {
        callNumber: 5,
        locationType: LocationType.city,
        areaNumber: 2,
        party: Parties.er,
        status: CandidateStatuses.registered,
        deputat: {
          // TODO
        },
      },
    ],
  },
  {
    alias: 'kochetov_ruslan',
    name: 'Кочетов Руслан Львович',
    birthdate: '5.05.1974',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kochetov_rl.jpg',
    candidate: [
      {
        callNumber: 4,
        locationType: LocationType.city,
        areaNumber: 5,
        party: Parties.er,
        deputat: {
          office: 'Ленинский пр-т, 86',
          phones: ['+74732547703', '+79515567899'],
          website: 'http://gorduma-voronezh.ru/kochetov-ruslan-lvovich/',
        },
      },
    ],
  },
  {
    alias: 'chercasov',
    name: 'Черкасов Олег Николаевич',
    birthdate: '27.01.1968',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/cherkasov_on.jpg',
    candidate: [
      {
        party: Parties.er,
        status: CandidateStatuses.registered,
        areaNumber: 3,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {
          office: 'ул. Переверткина, 11',
          phones: ['+79515415914'],
          website: 'http://gorduma-voronezh.ru/cherkasov-oleg-nikolaevich/',
        },
      },
      {
        areaNumber: 3,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. Переверткина, 11',
          phones: ['+79515415914'],
          website: 'http://gorduma-voronezh.ru/cherkasov-oleg-nikolaevich/',
        },
      },
    ],
  },
  {
    alias: 'avdeev',
    name: 'Авдеев Сергей Алексеевич',
    birthdate: '17.02.1960',
    photo: photos.avdeev_sergey,
    candidate: [
      {
        areaNumber: 4,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.er,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'pinigin',
    name: 'Пинигин Алексей Юрьевич',
    birthdate: '01.07.1973',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/pinigin_ay.jpg',
    candidate: [
      {
        areaNumber: 5,
        callNumber: 5,
        locationType: LocationType.city,
        party: Parties.er,
        status: CandidateStatuses.registered,
        deputat: {
          // office: 'ул. Переверткина, 11',
          // phones: ['+79102453128', '+74732281687'],
          website: 'http://gorduma-voronezh.ru/pinigin-aleksej-yurevich/',
        },
      },
      {
        areaNumber: 2,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. Переверткина, 11',
          phones: ['+79102453128', '+74732281687'],
          website: 'http://gorduma-voronezh.ru/pinigin-aleksej-yurevich/',
        },
      },
    ],
  },
  {
    alias: 'tatarintsev',
    name: 'Татаринцев Сергей Сергеевич',
    birthdate: '09.11.1972',
    photo: photos.tatarinzev_sergey,
    candidate: [
      {
        callNumber: 5,
        locationType: LocationType.city,
        areaNumber: 6,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rusakov',
    name: 'Русаков Владимир Владимирович',
    birthdate: '25.05.1985',
    photo: photos.rusakov_vladimir,
    candidate: [
      {
        callNumber: 5,
        locationType: LocationType.city,
        areaNumber: 7,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'chufinev',
    name: 'Чуфинев Александр Валентинович',
    birthdate: '12.04.1981',
    photo: photos.chufinev_aleksandr,
    candidate: [
      {
        areaNumber: 8,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {
          // TODO
        },
      },
    ],
  },
  {
    alias: 'provotorov',
    name: 'Провоторов Александр Анатольевич',
    birthdate: '03.06.1972',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/provotorov_aa.jpg',
    candidate: [
      {
        areaNumber: 9,
        party: Parties.er,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
        deputat: {
          office: 'ул. 121 Стрелковой дивизии, 9',
          phones: ['+74732297672', '+79202116301'],
          website: 'http://gorduma-voronezh.ru/provotorov-aleksandr-anatolevich/',
        },
      },
      {
        areaNumber: 9,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. 121 Стрелковой дивизии, 9',
          phones: ['+74732297672', '+79202116301'],
          website: 'http://gorduma-voronezh.ru/provotorov-aleksandr-anatolevich/',
        },
      },
    ],
  },
  {
    alias: 'zolotarev',
    name: 'Золотарёв Алексей Алексеевич',
    birthdate: '08.03.1974',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/zolotarev_aa.jpg',
    candidate: [
      {
        callNumber: 5,
        locationType: LocationType.city,
        areaNumber: 10,
        party: Parties.er,
        status: CandidateStatuses.registered,
        deputat: {
          // office: 'ул. Космонавтов, 8',
          // phones: ['+74732946065'],
          website: 'http://gorduma-voronezh.ru/zolotaryov-aleksej-alekseevich/',
        },
      },
      {
        areaNumber: 11,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. Космонавтов, 8',
          phones: ['+74732946065'],
          website: 'http://gorduma-voronezh.ru/zolotaryov-aleksej-alekseevich/',
        },
      },
    ],
  },
  {
    alias: 'boyko',
    name: 'Бойко Андрей Николаевич',
    birthdate: '10.06.1979',
    photo: photos.boiko_andrei,
    candidate: [
      {
        areaNumber: 11,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {},
      },
    ],
  },
  {
    alias: 'sobolev',
    name: 'Соболев Андрей Иванович',
    birthdate: '11.08.1974',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/sobolev_ai.jpg',
    candidate: [
      {
        callNumber: 5,
        locationType: LocationType.city,
        areaNumber: 12,
        party: Parties.er,
        status: CandidateStatuses.registered,
        deputat: {
          office: 'мкр Придонской, ул. Латненская, д. 3',
          phones: ['+74732434249', '+79202290846'],
          website: 'http://gorduma-voronezh.ru/sobolev-andrej-ivanovich/',
        },
      },
      {
        callNumber: 4,
        locationType: LocationType.city,
        areaNumber: 12,
        party: Parties.er,
        deputat: {
          office: 'мкр Придонской, ул. Латненская, д. 3',
          phones: ['+74732434249', '+79202290846'],
          website: 'http://gorduma-voronezh.ru/sobolev-andrej-ivanovich/',
        },
      },
    ],
  },
  {
    alias: 'kostyrev',
    name: 'Костырев Игорь Владимирович',
    birthdate: '29.03.1964',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kostyrev_iv.jpg',
    candidate: [
      {
        party: Parties.er,
        status: CandidateStatuses.registered,
        areaNumber: 13,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {
          // office: 'ул.Грамши, 70',
          // phones: ['+74732362643'],
          website: 'http://gorduma-voronezh.ru/kostyrev-igor-vladimirovich/',
        },
      },
      {
        callNumber: 4,
        locationType: LocationType.city,
        areaNumber: 13,
        party: Parties.er,
        deputat: {
          office: 'ул.Грамши, 70',
          phones: ['+74732362643'],
          website: 'http://gorduma-voronezh.ru/kostyrev-igor-vladimirovich/',
        },
      },
    ],
  },
  {
    alias: 'solomatina',
    name: 'Соломатина Елена Дмитриевна',
    birthdate: '27.11.1977',
    photo: photos.solomatina_elena,
    candidate: [
      {
        callNumber: 5,
        locationType: LocationType.city,
        areaNumber: 14,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'koliukh',
    name: 'Колиух Сергей Михайлович',
    birthdate: '27.10.1960',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/koliuh_sm.jpg',
    candidate: [
      {
        areaNumber: 15,
        party: Parties.er,
        locationType: LocationType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
        deputat: {
          // office: 'ул. 20-летия Октября, 115',
          // phones: ['+79525405337'],
          website: 'http://gorduma-voronezh.ru/koliuh-sergej-mihajlovich/',
        },
      },
      {
        callNumber: 4,
        locationType: LocationType.city,
        areaNumber: 15,
        party: Parties.er,
        deputat: {
          office: 'ул. 20-летия Октября, 115',
          phones: ['+79525405337'],
          website: 'http://gorduma-voronezh.ru/koliuh-sergej-mihajlovich/',
        },
      },
    ],
  },
  {
    alias: 'zhukov',
    name: 'Жуков Александр Алексеевич',
    birthdate: '29.12.1954',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/zhukov_aa.jpg',
    candidate: [
      {
        areaNumber: 16,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {},
      },
      {
        areaNumber: 16,
        status: CandidateStatuses.lost,
        callNumber: 5,
        locationType: LocationType.city,
      },
      {
        areaNumber: 16,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул 9 Января, 108, ДК Машиностроителей, комн.119',
          phones: ['+74732599091', '+74732799512', '+74732227342'],
          website: 'http://gorduma-voronezh.ru/zhukov-aleksandr-alekseevich/',
        },
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 16,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kandybin',
    name: 'Кандыбин Иван Владимирович',
    birthdate: '16.02.1976',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kandybin_iv.jpg',
    links: [{ title: LinkTitle.vk, url: 'https://vk.com/id595089399' }],
    candidate: [
      {
        areaNumber: 17,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {
          // office: 'ул. Вл. Невского, 11',
          // phones: ['+74732509445', '+79081452363'],
          website: 'http://gorduma-voronezh.ru/kandybin-ivan-vladimirovich/',
        },
      },
      {
        callNumber: 4,
        locationType: LocationType.city,
        areaNumber: 17,
        party: Parties.er,
        deputat: {
          office: 'ул. Вл. Невского, 11',
          phones: ['+74732509445', '+79081452363'],
          website: 'http://gorduma-voronezh.ru/kandybin-ivan-vladimirovich/',
        },
      },
    ],
  },
  {
    alias: 'kudryavtsev',
    name: 'Кудрявцев Сергей Николаевич',
    birthdate: '13.09.1971',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kudryavtsev_sn.jpg',
    candidate: [
      {
        areaNumber: 18,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {
          office: 'ул. Лизюкова, 36',
          phones: ['+74732695025', '+79050512332'],
          website: 'http://gorduma-voronezh.ru/kudryavcev-sergej-nikolaevich/',
        },
      },
      {
        callNumber: 4,
        locationType: LocationType.city,
        areaNumber: 18,
        party: Parties.er,
        deputat: {
          office: 'ул. Лизюкова, 36',
          phones: ['+74732695025', '+79050512332'],
          website: 'http://gorduma-voronezh.ru/kudryavcev-sergej-nikolaevich/',
        },
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 18,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'chistyakov',
    name: 'Чистяков Александр Александрович',
    birthdate: '21.01.1970',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/chistyakov_aa.jpg',
    candidate: [
      {
        areaNumber: 19,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {
          office: 'ул.Вл. Невского, 11 1-й этаж',
          phones: ['+74732320850'],
          website: 'http://gorduma-voronezh.ru/chistyakov-aleksandr-aleksandrovich/',
        },
      },
      {
        callNumber: 4,
        locationType: LocationType.city,
        areaNumber: 19,
        party: Parties.er,
        deputat: {
          office: 'ул.Вл. Невского, 11 1-й этаж',
          phones: ['+74732320850'],
          website: 'http://gorduma-voronezh.ru/chistyakov-aleksandr-aleksandrovich/',
        },
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 19,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'krutskikh',
    name: 'Крутских Дмитрий Борисович',
    birthdate: '23.02.1980',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/krutskih_db.jpg',
    candidate: [
      {
        areaNumber: 20,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        role: 'Заместитель председателя постоянной комиссии по транспорту, промышленности, развитию малого и среднего бизнеса. Член постоянной комиссии по образованию, культуре и социальной поддержке населения.',
        deputat: {
          website: 'http://gorduma-voronezh.ru/krutskih-dmitrij-borisovich/',
          office: 'Адрес приемной: Московский пр-т, 131, КДЦ «Северный»',
          phones: ['228-43-43'],
          helpers: ['Быковская Маргарита Викторовна'],
        },
      },
    ],
    bio:
      'Родился 23 февраля 1980 года в городе Воронеже.' +
      'Получив степень магистра менеджмента в Воронежском Государственном Университете по специальности «Государственное и муниципальное управление», продолжил обучение в аспирантуре и в 2012 году получил ученую степень: кандидат экономических наук.' +
      'В 2011 году окончил юридический факультет Воронежского филиала «Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации» по специальности гражданское право.' +
      'Трудовую деятельность начал в области автомобильного транспорта и дорожного хозяйства.' +
      'С 2004 по 2006 г. — генеральный директор ООО «Автолайн».' +
      'С 2006 по 2008 г. — генеральный директор ОАО «Автомобилист-10».' +
      'С 2008 по 2010 г. — руководитель Управления организации городских пассажирских перевозок Администрации ГО город Воронеж.' +
      'С 2010 по 2011 г. — директор Департамента организации дорожной деятельности и пассажирских перевозок Администрации ГО город Воронеж.' +
      'С октября 2011 г. по настоящее время Председатель совета директоров ЗАО ГК «Автолайн», Председатель «Совета руководителей городского пассажирского транспорта Администрации ГО город Воронеж.' +
      '13 сентября 2015 года избран депутатом Воронежской городской Думы по списку избирательного объединения «Воронежское региональное отделение Всероссийской политической партии «ЕДИНАЯ РОССИЯ».',
  },
  {
    alias: 'popova',
    name: 'Попова Юлия Владимировна',
    birthdate: '17.09.1976',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/popova_yv.jpg',
    candidate: [
      {
        areaNumber: 21,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {
          office: 'пер. Ботанический, 47, поликлиника №3, 1 этаж, каб. 117',
          phones: ['+74732210515', '+79518768067'],
          website: 'http://gorduma-voronezh.ru/popova-yuliya-vladimirovna/',
        },
      },
      {
        areaNumber: 21,
        party: Parties.er,
        callNumber: 4,
        locationType: LocationType.city,
        deputat: {
          office: 'пер. Ботанический, 47, поликлиника №3, 1 этаж, каб. 117',
          phones: ['+74732210515', '+79518768067'],
          website: 'http://gorduma-voronezh.ru/popova-yuliya-vladimirovna/',
        },
      },
    ],
  },
  {
    alias: 'kletsov_vadim',
    name: 'Клецов Вадим Владимирович',
    birthdate: '07.06.1969',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kletsov_vv.jpg',
    candidate: [
      {
        areaNumber: 22,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        locationType: LocationType.city,
        deputat: {
          // office: 'Московский проспект, 58',
          // phones: ['+74732392787', '+79204050597'],
          website: 'http://gorduma-voronezh.ru/klecov-vadim-vladimirovich/',
        },
      },
      {
        areaNumber: 22,
        party: Parties.er,
        callNumber: 4,
        locationType: LocationType.city,
        deputat: {
          office: 'Московский проспект, 58',
          phones: ['+74732392787', '+79204050597'],
          website: 'http://gorduma-voronezh.ru/klecov-vadim-vladimirovich/',
        },
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 22,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'trubetskoy',
    name: 'Трубецкой Александр Николаевич',
    birthdate: '29.11.1953',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/trubetskoy_an.jpg',
    candidate: [
      {
        areaNumber: 23,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. Никитинская, д. 8',
          phones: ['+79515563273'],
          website: 'http://gorduma-voronezh.ru/trubeckoj-aleksandr-nikolaevich/',
        },
      },
      {
        areaNumber: 23,
        party: Parties.er,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sysoev',
    name: 'Сысоев Александр Владимирович',
    birthdate: '04.10.1965',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/sysoev_av.jpg',
    candidate: [
      {
        areaNumber: 24,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. Никитинская, д. 8 каб. 102а',
          phones: ['+74732227351'],
          website: 'http://gorduma-voronezh.ru/sysoev-aleksandr-vladimirovich/',
        },
      },
      {
        areaNumber: 24,
        party: Parties.er,
        callNumber: 5,
        locationType: LocationType.city,
        status: CandidateStatuses.registered,
        deputat: {
          office: 'ул. Никитинская, д. 8 каб. 102а',
          phones: ['+74732227351'],
          website: 'http://gorduma-voronezh.ru/sysoev-aleksandr-vladimirovich/',
        },
      },
    ],
  },
  {
    alias: 'kovalev_viktor',
    name: 'Ковалев Виктор Викторович',
    birthdate: '01.01.1979', // TODO
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kovalev_vv.jpg',
    candidate: [
      {
        areaNumber: 6,
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        deputat: {
          office: 'Ленинский пр-т, д. 86',
          phones: ['+74732547703', '+79081446549'],
          website: 'http://gorduma-voronezh.ru/kovalev-viktor-viktorovich/',
        },
      },
    ],
  },
  {
    alias: 'turin_aleksandr',
    name: 'Тюрин Александр Борисович',
    birthdate: '08.01.1980',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/tyurin_ab.jpg',
    candidate: [
      {
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        areaNumber: 8,
        deputat: {
          office: 'ул. Ростовская, 50',
          phones: ['+74732299191', '+79202299191'],
          website: 'http://gorduma-voronezh.ru/tyurin-aleksandr-borisovich/',
        },
      },
    ],
  },
  {
    alias: 'oganezov_sergey',
    name: 'Оганезов Сергей Иванович',
    birthdate: '07.12.1959',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/oganezov_si.jpg',
    candidate: [
      {
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        areaNumber: 10,
        deputat: {
          office: 'Ул. Космонавта Комарова, 13',
          phones: ['+79521002728'],
          website: 'http://gorduma-voronezh.ru/oganezov-sergej-ivanovich/',
        },
      },
    ],
  },
  {
    alias: 'golovin_aleksandr',
    name: 'Головин Александр Иванович',
    birthdate: '28.10.1964',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/golovin_ai.jpg',
    candidate: [
      {
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        areaNumber: 14,
        deputat: {
          office: 'ул. Грамши, 70',
          phones: ['+74732906412', '+79191835774'],
          website: 'http://gorduma-voronezh.ru/golovin-aleksandr-ivanovich/',
        },
      },
    ],
  },
  {
    alias: 'grebenkin_nikolay',
    name: 'Гребенкин Николай Тимофеевич',
    birthdate: '14.05.1960',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/grebenkin_nt.jpg',
    candidate: [
      {
        callNumber: 4,
        locationType: LocationType.city,
        party: Parties.er,
        areaNumber: 20,
        deputat: {
          office: 'Владимира Невского, 35',
          phones: ['+74732289206', '+74732623484'],
          website: 'http://gorduma-voronezh.ru/grebenkin-nikolaj-timofeevich/',
        },
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 12,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'verzilin_vladimir',
    name: 'Верзилин Владимир Александрович',
    birthdate: '06.08.1955',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/0b8/0b864fbc8f81dce788361cd4a56cbbb1.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 16,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/verzilin-vladimir-aleksandrovich/',
        },
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 2,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 17,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'vorobev_ivan',
    name: 'Воробьев Иван Николаевич',
    birthdate: '06.03.1981',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 16,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 16,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gaponenko_evgenij',
    name: 'Гапоненко Евгений Николаевич',
    birthdate: '11.10.1985',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/fcd/fcdc01466ccec35adcb9e1af44895dd6.jpg',
    candidate: [
      {
        callNumber: 6,
        locationType: LocationType.region,
        areaNumber: 23,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/gaponenko-nikolay-ivanovich/',
        },
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 23,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'gubina_elena',
    name: 'Губина Елена Геннадьевна',
    birthdate: '11.03.1985',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 8,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'gusev_mihail',
    name: 'Гусев Михаил Николаевич',
    birthdate: '01.11.1982',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 1,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'domnich_nikolaj',
    name: 'Домнич Николай Сергеевич',
    birthdate: '29.02.1980',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/5e5/5e57fa945b249f47504e610eea34eb40.jpg',
    candidate: [
      {
        callNumber: 6,
        locationType: LocationType.region,
        areaNumber: 27,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/domnich-nikolay-sergeevich/',
        },
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 27,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 27,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'evseev_aleksandr',
    name: 'Евсеев Александр Васильевич',
    birthdate: '01.10.1956',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/912/9127f3b763dc71d402f2729664368b32.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 17,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/evseev-aleksandr-vasilevich/',
        },
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 17,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'esaulenko_igor',
    name: 'Есауленко Игорь Эдуардович',
    birthdate: '18.03.1956',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 21,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'zubkov_artem',
    name: 'Зубков Артем Николаевич',
    birthdate: '10.01.1983',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/155/155f39f1e471bf68c160b56879fdc420.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 25,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/zubkov-artem-nikolaevich/',
        },
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 25,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'kitaev_evgenij',
    name: 'Китаев Евгений Петрович',
    birthdate: '23.02.1969',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/ce4/ce490c8036d533d607a456d6bf977072.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 3,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/kitaev-evgeniy-petrovich/',
        },
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 3,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'klimentov_andrej',
    name: 'Климентов Андрей Владимирович',
    birthdate: '04.07.1971',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/313/3138d1781b9fd1e4466d9a77e18ddc14.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 7,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/klimentov-andrey-vladimirovich/',
        },
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 7,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'klyuchnikov_vladimir',
    name: 'Ключников Владимир Иванович',
    birthdate: '16.04.1949',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/a97/a976a73ae29cbb1674a78bcec13dae69.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/klyuchnikov-vladimir-ivanovich/',
        },
        areaNumber: 14,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 14,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'koloskov_nikolaj',
    name: 'Колосков Николай Васильевич',
    birthdate: '29.07.1953',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/7b8/7b82d268f462c4500898d882040a039d.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/koloskov-nikolay-vasilevich/',
        },
        areaNumber: 18,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 18,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'litvinov_roman',
    name: 'Литвинов Роман Александрович',
    birthdate: '07.02.1978',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 22,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 22,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lukinov_dmitrij',
    name: 'Лукинов Дмитрий Валериевич',
    birthdate: '14.07.1978',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/0d4/0d4e4781f6daf1f2776bc515d6915388.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/lukinov-dmitriy-valerievich/',
        },
        areaNumber: 9,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 9,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'moshurov_ivan',
    name: 'Мошуров Иван Петрович',
    birthdate: '15.09.1966',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/3f8/3f80667f394349ba6079acc21ab2c39c.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/moshurov-ivan-petrovich/',
        },
        areaNumber: 10,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 10,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'ortina_olga',
    name: 'Ортина Ольга Алексеевна',
    birthdate: '08.08.1987',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 24,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 24,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'peshikov_aleksandr',
    name: 'Пешиков Александр Александрович',
    birthdate: '01.11.1978',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/0db/0db9ea702e25f469fed0750f40d44f4e.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/peshikov-aleksandr-aleksandrovich/',
        },
        areaNumber: 28,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 28,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'povarov_vladimir',
    name: 'Поваров Владимир Петрович',
    birthdate: '19.04.1957',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/512/5121e2c57b5903f2c75cc2517eb687d0.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/povarov-vladimir-petrovich/',
        },
        areaNumber: 13,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 13,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'prytykin_andrej',
    name: 'Прытыкин Андрей Александрович',
    birthdate: '01.12.1966',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/3cc/3cc491b61c3319d165b02be6f5b57954.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/prytykin-andrey-aleksandrovich/',
        },
        areaNumber: 11,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 11,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'rozhkov_vladimir',
    name: 'Рожков Владимир Иванович',
    birthdate: '12.04.1967',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 4,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'sazhin_sergej',
    name: 'Сажин Сергей Михайлович',
    birthdate: '24.08.1961',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 20,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 20,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'taldykin_sergej',
    name: 'Талдыкин Сергей Иванович',
    birthdate: '30.09.1978',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 6,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'tribunskij_sergej',
    name: 'Трибунский Сергей Иванович',
    birthdate: '08.04.1973',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/4a7/4a73dbea81dd9edce894794b57e6c171.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/tribunskiy-sergey-ivanovich/',
        },
        areaNumber: 26,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 26,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'habarov_andrej',
    name: 'Хабаров Андрей Михайлович',
    birthdate: '04.09.1981',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 15,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'chernov_aleksej',
    name: 'Чернов Алексей Викторович',
    birthdate: '04.03.1978',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/159/15951de3a788054978532d6aec5c5543.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/chernov-aleksey-viktorovich/',
        },
        areaNumber: 5,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 5,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'chuzhikov_aleksandr',
    name: 'Чужиков Александр Владимирович',
    birthdate: '25.02.1977',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/2f2/2f27aa3fc00b4e6d7e19ef1b49357855.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/chuzhikov-aleksandr-vladimirovich/',
        },
        areaNumber: 12,
        party: Parties.er,
      },
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 12,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shiryaev_dmitrij',
    name: 'Ширяев Дмитрий Геннадьевич',
    birthdate: '01.06.1989',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        locationType: LocationType.region,
        areaNumber: 19,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 19,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'alimenko_igor',
    name: 'Алименко Игорь Анатольевич',
    birthdate: '09.05.1961',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/14d/14d693d75a22c630684d754d0643dfba.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 20,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/alimenko-igor-anatolevich/' },
      },
    ],
  },
  {
    alias: 'barinov_artur',
    name: 'Баринов Артур Валерьевич',
    birthdate: '10.09.1980',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/542/5426336789650b6db12ea752525e5aa5.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 19,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/barinov-artur-valerevich/' },
      },
    ],
  },
  {
    alias: 'blagov_andrej',
    name: 'Благов Андрей Викторович',
    birthdate: '12.12.1968',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/ad8/ad82c2559f39839260926dc8be2bb4fb.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 21,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/blagov-andrey-viktorovich/' },
      },
    ],
  },
  {
    alias: 'buzdalin_viktor',
    name: 'Буздалин Виктор Иванович',
    birthdate: '28.01.1962',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/eca/ecaca46c7a9130e8aa2fb4e7f5778a20.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 17,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/buzdalin-viktor-ivanovich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 17,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'verikovskij_aleksandr',
    name: 'Вериковский Александр Евгеньевич',
    birthdate: '20.05.1949',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/46d/46d9df2f5e0485b590ab614222dc5daa.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 21,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/verikovskiy-aleksandr-evgenevich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 21,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'golovacheva_tatyana',
    name: 'Головачева Татьяна Валентиновна',
    birthdate: '28.10.1956',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/3d4/3d4fbfa4057f04b7b8ea760c33014af0.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 2,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/golovacheva-tatyana-valentinovna/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 2,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'goncharov_sergej',
    name: 'Гончаров Сергей Викторович',
    birthdate: '22.05.1981',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/ff9/ff977beac986a4941bbc65d9a4e4f54c.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 24,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/goncharov-sergey-viktorovich/' },
      },
    ],
    bio:
      'Образование:\n' +
      '2004 г. – Воронежский государственный технический университет (квалификация «инженер»)\n' +
      '2012 г. – профессиональная переподготовка в Московском государственном строительном университете (квалификация «инженер»)\n' +
      '\n' +
      'Трудовая деятельность:\n' +
      '2004 – 2009 гг. – генеральный директор ООО Веб-студия «ЮНОНА»\n' +
      '2010 г. – по н. в. – генеральный директор саморегулируемой организации «Некоммерческое партнерство «Региональное объединение строителей «Развитие»\n' +
      '2010 г. – по н. в. – генеральный директор Автономной некоммерческой образовательной организации «Региональный инженерный учебный центр «Эксперт» (по совместительству)\n' +
      '2011 г. – по н. в. – генеральный директор Некоммерческого партнёрства «Объединение компаний энергетического обследования «Развитие» (по совместительству)\n' +
      '2013 г. – по н. в. – генеральный директор ООО «Региональное управление экспертизы капитального строительства» (по совместительству)\n' +
      '2013 г. – по н. в. – генеральный директор строительной организации ООО «Строительная компания «Град» (по совместительству)\n' +
      '2014 г. – по н. в. – генеральный директор ООО «Ремонтно-строительное управление «Развитие» (по совместительству)\n' +
      'В марте 2015 г. возглавил Группу компаний «Развитие» (объединяет строительные и проектные компании, а также саморегулируемые организации в сфере строительства, проектирования и энергоаудита)',
  },
  {
    alias: 'goncharov_yurij',
    name: 'Гончаров Юрий Федорович',
    birthdate: '30.05.1963',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/900/900a8290dea33d64981e98c0ceddaee3.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 2,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/goncharov-yuriy-fedorovich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 27,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'endovickij_dmitrij',
    name: 'Ендовицкий Дмитрий Александрович',
    birthdate: '3.12.1970',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/8e2/8e24afb85d5c33324916d0d37b3a45e4.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 1,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/endovitskiy-dmitriy-aleksandrovich/',
        },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 1,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'zhogov_roman',
    name: 'Жогов Роман Владимирович',
    birthdate: '01.02.1977',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/d65/d651c58859916a8e988bd7fa4041799c.jpg',
    bio:
      'Образование:\n' +
      '1999г. – Воронежский государственный университет, квалификация «историк», специализация «социология и политология»;\n' +
      '2002г. – Воронежская государственная технологическая академия. Аспирантура кафедры истории и политологии.\n' +
      '\n' +
      'Трудовая деятельность:\n' +
      '1999-2011гг. - ассистент, старший преподаватель, доцент кафедры истории и политологии Воронежской государственной технологической академии;\n' +
      '2009-2015гг. - первый заместитель руководителя Воронежского регионального исполнительного комитета ВПП «Единая Россия»;\n' +
      '2010-2015гг. - советник губернатора Воронежской области А.В.Гордеева (на внештатной основе);\n' +
      '2015-2018гг. - председатель комитета Воронежской областной Думы по местному самоуправлению, СМИ и массовым коммуникациям (на постоянной основе);\n' +
      '2018-по н.вр. - председатель комитета Воронежской областной Думы по имущественным и земельным отношениям (на постоянной основе),\n' +
      'член Комитета Воронежской областной Думы по бюджетной политике, налогам и финансам.\n' +
      '\n' +
      'Общественная деятельность:\n' +
      'Руководитель фракции «Единая Россия» в Воронежской областной Думе;\n' +
      'Заместитель Секретаря Воронежского регионального отделения Всероссийской политической партии «Единая Россия»;\n' +
      'Член Президиума Регионального политического совета Воронежского регионального отделения Всероссийской политической партии «Единая Россия»;\n' +
      'Председатель комиссии по реабилитации жертв политических репрессий при Воронежской областной Думе.\n' +
      '\n' +
      'Почетные звания и награды, ученая степень:\n' +
      '2014-Почетный знак правительства ВО «Благодарность земли Воронежской»;\n' +
      '2017-Почетная грамота правительства Воронежской области;\n' +
      '2018-Благодарственное письмо Президента РФ;\n' +
      '2019-Почетный знак правительства ВО «За добросовестный труд и профессионализм»;\n' +
      '2019-Почетная грамота Воронежской областной Думы.\n' +
      'Кандидат политических наук, доцент ВАК.\n' +
      '\n' +
      'Семейное положение:\n' +
      'Женат, воспитывает дочь.',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 22,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/zhogov-roman-vladimirovich/' },
      },
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 0,
        listNumber: 3,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'zubarev_konstantin',
    name: 'Зубарев Константин Вячеславович',
    birthdate: '25.07.1974',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/b7f/b7f036a30f2c88ded973a28424abe236.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 24,
        party: Parties.er,
        deputat: {
          website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/zubarev-konstantin-vyacheslavovich/',
        },
      },
    ],
  },
  {
    alias: 'ilin_aleksandr',
    name: 'Ильин Александр Анатольевич',
    birthdate: '27.03.1975',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/731/7311fec528e01493c6dc62595a31d876.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 20,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/ilin-aleksandr-anatolevich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 20,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'knyazev_aleksandr',
    name: 'Князев Александр Викторович',
    birthdate: '26.03.1968',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/9e0/9e0e92c9f0f83aec779dd7aadfdbddb4.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 13,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/knyazev-aleksandr-viktorovich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 13,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'kolyhalin_vladimir',
    name: 'Колыхалин Владимир Михайлович',
    birthdate: '06.01.1972',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/eea/eea987396c3385b0c9f38e5af8d055cd.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 28,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/kolykhalin-vladimir-mikhaylovich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 28,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'korobov_vladimir',
    name: 'Коробов Владимир Валентинович',
    birthdate: '28.10.1964',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/646/646e0eca6cac88a91fba8d6bf86b5162.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 19,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/korobov-vladimir-valentinovich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 19,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'kulikov_ivan',
    name: 'Куликов Иван Иванович',
    birthdate: '4.03.1953',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/18c/18c2a107c0069dfd15ea93b70a928f09.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 18,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/kulikov-ivan-ivanovich/' },
      },
    ],
  },
  {
    alias: 'mihin_petr',
    name: 'Михин Петр Валентинович',
    birthdate: '21.06.1956',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/7af/7afd2516be9d02f24972dd727b698917.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 23,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/mikhin-petr-valentinovich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 23,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'nazarov_nikolaj',
    name: 'Назаров Николай Романович',
    birthdate: '28.01.1947',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/69c/69cd7005a8cc1c45702ed9687039db02.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 1,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/nazarov-nikolay-romanovich/' },
      },
    ],
  },
  {
    alias: 'ostroushko_vasilij',
    name: 'Остроушко Василий Иванович',
    birthdate: '25.09.1955',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/0c6/0c6eb1aef854c50e0973ae469430a8c8.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 27,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/ostroushko-vasiliy-ivanovich/' },
      },
    ],
  },
  {
    alias: 'pinkevich_sergej',
    name: 'Пинкевич Сергей Николаевич',
    birthdate: '27.07.1956',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/995/995f919a7fe1e5d0ec4aa633710fa64e.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 26,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/pinkevich-sergey-nikolaevich/' },
      },
    ],
  },
  {
    alias: 'pochivalov_sergej',
    name: 'Почивалов Сергей Николаевич',
    birthdate: '8.01.1965',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/728/7289fb79d33f7e41ed3ce36696eff91b.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 4,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/pochivalov-sergey-nikolaevich/' },
      },
    ],
  },
  {
    alias: 'rybenko_aleksandr',
    name: 'Рыбенко Александр Николаевич',
    birthdate: '13.08.1965',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/564/564873d00ab6fce3192d56eed15590a4.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 22,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/rybenko-aleksandr-nikolaevich/' },
      },
    ],
  },
  {
    alias: 'sviridov_vladimir',
    name: 'Свиридов Владимир Валериевич',
    birthdate: '17.04.1973',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/4de/4deef1725bfcd62c37472b910cb3266d.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 6,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/sviridov-vladimir-valerievich/' },
      },
    ],
  },
  {
    alias: 'semenov_petr',
    name: 'Семенов Петр Иванович',
    birthdate: '2.05.1957',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/976/976d17c166e187e76870456ce5af6b46.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 16,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/semenov-petr-ivanovich/' },
      },
    ],
  },
  {
    alias: 'taratin_ivan',
    name: 'Таратин Иван Владимирович',
    birthdate: '14.04.1979',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/0c8/0c8200e8c2750fcc9485247f8a48edc7.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 6,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/taratin-ivan-vladimirovich/' },
      },
    ],
  },
  {
    alias: 'hamin_evgenij',
    name: 'Хамин Евгений Николаевич',
    birthdate: '12.10.1966',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/6cd/6cd2619dbb6b04233f047db063cd55a9.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 5,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/khamin-evgeniy-nikolaevich/' },
      },
    ],
  },
  {
    alias: 'cyban_aleksandr',
    name: 'Цыбань Александр Иванович',
    birthdate: '3.10.1963',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/752/7525c7c3dce750e68034c152f9d04589.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 14,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/tsyban-aleksandr-ivanovich/' },
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 14,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'chertov_evgenij',
    name: 'Чертов Евгений Дмитриевич',
    birthdate: '4.08.1952',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/7f4/7f4a86152581edc426e4f35f43126d4b.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 8,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/chertov-evgeniy-dmitrievich/' },
      },
    ],
  },
  {
    alias: 'chujko_grigorij',
    name: 'Чуйко Григорий Владимирович',
    birthdate: '14.03.1969',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/fc0/fc054afa003935fc3f63f4a49e865e98.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 25,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/chuyko-grigoriy-vladimirovich/' },
      },
    ],
  },
  {
    alias: 'shipilov_vasilij',
    name: 'Шипилов Василий Николаевич',
    birthdate: '4.02.1954',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/ba4/ba4d3201120f35d04b7ac1c01bcffb7c.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 15,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/shipilov-vasiliy-nikolaevich/' },
      },
    ],
  },
  {
    alias: 'yarkovaya_oksana',
    name: 'Ярковая Оксана Николаевна',
    birthdate: '14.11.1965',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/21d/21d280fe5250fa92de7fd1efa3ea01fd.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 15,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/shmygalyev-anatoliy-petrovich/' },
      },
    ],
  },
  {
    alias: 'kolodyazhnyj_sergej',
    name: 'Колодяжный Сергей Александрович',
    birthdate: '13.04.1972',
    photo: 'http://www.vrnoblduma.ru/upload/iblock/cfd/cfdae35a1d3b5b1af636aaa204c7f92b.jpg',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 6,
        areaNumber: 7,
        party: Parties.er,
        deputat: { website: 'http://www.vrnoblduma.ru/struktura/deputatskiy-korpus/yarkovaya-oksana-nikolaevna/' },
      },
    ],
  },
  {
    alias: 'kovalev_sergej',
    name: 'Ковалев Сергей Алексеевич',
    birthdate: '27.04.1961',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 0,
        listNumber: 2,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'novomlinskij_vladislav',
    name: 'Новомлинский Владислав Валерьевич',
    birthdate: '04.12.1989',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 1,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'izhokin_gennadij',
    name: 'Ижокин Геннадий Васильевич',
    birthdate: '29.04.1969',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 2,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'artemenko_konstantin',
    name: 'Артеменко Константин Петрович',
    birthdate: '16.06.1962',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 2,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'rusanova_nadezhda',
    name: 'Русанова Надежда Владимировна',
    birthdate: '01.02.1975',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 3,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'glumnoj_andrej',
    name: 'Глумной Андрей Викторович',
    birthdate: '18.10.1963',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 3,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lobkova_elena',
    name: 'Лобкова Елена Владимировна',
    birthdate: '14.04.1980',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 4,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ternovyh_olga',
    name: 'Терновых Ольга Михайловна',
    birthdate: '03.12.1958',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 4,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'anufrieva_irina',
    name: 'Ануфриева Ирина Сергеевна',
    birthdate: '31.10.1977',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 5,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'korzhov_nikolaj',
    name: 'Коржов Николай Александрович',
    birthdate: '07.12.1989',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 5,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'vorobyov_maksim',
    name: 'Воробьёв Максим Владимирович',
    birthdate: '15.05.1980',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 6,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gracheva_elena',
    name: 'Грачева Елена Константиновна',
    birthdate: '01.10.1983',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 6,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'andronnikov_leonid',
    name: 'Андронников Леонид Анатольевич',
    birthdate: '29.06.1984',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 7,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zhuravlyov_dmitrij',
    name: 'Журавлёв Дмитрий Сергеевич',
    birthdate: '03.09.1998',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 7,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'andreeshchev_aleksandr',
    name: 'Андреещев Александр Александрович',
    birthdate: '04.07.1970',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 8,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'revenko_marina',
    name: 'Ревенко Марина Игоревна',
    birthdate: '24.07.1982',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 8,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'bushaev_sergej',
    name: 'Бушаев Сергей Владимирович',
    birthdate: '05.03.1976',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 9,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'bolotova_svetlana',
    name: 'Болотова Светлана Александровна',
    birthdate: '30.01.1967',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 9,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'mihin_maksim',
    name: 'Михин Максим Петрович',
    birthdate: '22.02.1988',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 10,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'parinov_denis',
    name: 'Паринов Денис Александрович',
    birthdate: '09.09.1985',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 10,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'fomin_konstantin',
    name: 'Фомин Константин Валентинович',
    birthdate: '17.04.1976',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 11,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'banin_igor',
    name: 'Банин Игорь Николаевич',
    birthdate: '04.06.1976',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 11,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'grobovenko_andrej',
    name: 'Гробовенко Андрей Игоревич',
    birthdate: '25.07.1977',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 12,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zachupejko_andrej',
    name: 'Зачупейко Андрей Викторович',
    birthdate: '15.01.1986',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 13,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kamynin_sergej',
    name: 'Камынин Сергей Викторович',
    birthdate: '01.07.1991',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 13,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kopylov_evgenij',
    name: 'Копылов Евгений Николаевич',
    birthdate: '16.09.1977',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 14,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'nekhaev_aleksej',
    name: 'Нехаев Алексей Викторович',
    birthdate: '10.07.1984',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 14,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'chernyshov_aleksej',
    name: 'Чернышов Алексей Борисович',
    birthdate: '24.06.1963',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 15,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 8,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'falkovich_tatyana',
    name: 'Фалькович Татьяна Анатольевна',
    birthdate: '03.10.1955',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 15,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'starodubcev_stanislav',
    name: 'Стародубцев Станислав Сергеевич',
    birthdate: '29.08.1983',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 16,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'alekseeva_elena',
    name: 'Алексеева Елена Николаевна',
    birthdate: '01.07.1974',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 17,
        listNumber: 1,
        status: CandidateStatuses.lost,
      },
    ],
  },
  {
    alias: 'klimenchenkov_aleksej',
    name: 'Клименченков Алексей Александрович',
    birthdate: '28.11.1972',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 17,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lisovskij_vladimir',
    name: 'Лисовский Владимир Сергеевич',
    birthdate: '28.07.1968',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 18,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'holodov_igor',
    name: 'Холодов Игорь Викторович',
    birthdate: '15.07.1987',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 19,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'voblenko_elena',
    name: 'Вобленко Елена Александровна',
    birthdate: '24.05.1972',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 20,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 9,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'polkovnikova_yuliya',
    name: 'Полковникова Юлия Александровна',
    birthdate: '28.04.1987',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 21,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 11,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'soldatov_ilya',
    name: 'Солдатов Илья Сергеевич',
    birthdate: '09.01.2000',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 21,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'solomatina_nataliya',
    name: 'Соломатина Наталия Владимировна',
    birthdate: '13.04.1957',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 22,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sorokina_natalya',
    name: 'Сорокина Наталья Алексеевна',
    birthdate: '27.11.1979',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 23,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'obolenskij_roman',
    name: 'Оболенский Роман Михайлович',
    birthdate: '21.07.1986',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 23,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'bocharova_marina',
    name: 'Бочарова Марина Викторовна',
    birthdate: '18.02.1972',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 24,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'karpov_sergej',
    name: 'Карпов Сергей Викторович',
    birthdate: '05.10.1955',
    candidate: [
      {
        locationType: LocationType.city,
        callNumber: 5,
        party: Parties.er,
        areaNumber: 24,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gusev_aleksandr',
    name: 'Гусев Александр Викторович',
    birthdate: '27.07.1963',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 0,
        listNumber: 1,
        status: CandidateStatuses.mandatRejected,
      },
    ],
  },
  {
    alias: 'netyosov_vladimir',
    name: 'Нетёсов Владимир Иванович',
    birthdate: '07.03.1970',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 0,
        listNumber: 2,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'ippolitova_lyudmila',
    name: 'Ипполитова Людмила Ивановна',
    birthdate: '27.12.1964',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 0,
        listNumber: 3,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'sokratova_anna',
    name: 'Сократова Анна Николаевна',
    birthdate: '23.06.1980',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 1,
        listNumber: 2,
        status: CandidateStatuses.lost,
      },
    ],
  },
  {
    alias: 'grishaev_oleg',
    name: 'Гришаев Олег Викторович',
    birthdate: '25.04.1966',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 1,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'grishin_andrej',
    name: 'Гришин Андрей Евгеньевич',
    birthdate: '03.11.1969',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 2,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ognev_mihail',
    name: 'Огнев Михаил Александрович',
    birthdate: '16.01.1980',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 2,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'procenko_albert',
    name: 'Проценко Альберт Анатольевич',
    birthdate: '08.06.1969',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 3,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'borovikov_andrej',
    name: 'Боровиков Андрей Владимирович',
    birthdate: '22.07.1961',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 3,
        listNumber: 2,
        status: CandidateStatuses.lost,
      },
    ],
  },
  {
    alias: 'elfimov_andrej',
    name: 'Елфимов Андрей Александрович',
    birthdate: '25.12.1986',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 3,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'pronyaev_evgenij',
    name: 'Проняев Евгений Леонидович',
    birthdate: '14.04.1967',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 4,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'uskova_tatyana',
    name: 'Ускова Татьяна Владиславовна',
    birthdate: '11.01.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 4,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'parshin_sergej',
    name: 'Паршин Сергей Васильевич',
    birthdate: '20.08.1956',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 4,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'natarov_aleksej',
    name: 'Натаров Алексей Алексеевич',
    birthdate: '12.07.1985',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 5,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'suhova_olga',
    name: 'Сухова Ольга Александровна',
    birthdate: '15.03.1971',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 5,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'alekhin_roman',
    name: 'Алехин Роман Петрович',
    birthdate: '23.11.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 5,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kovalev_sergej',
    name: 'Ковалев Сергей Викторович',
    birthdate: '12.11.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 6,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zhigulin_andrej',
    name: 'Жигулин Андрей Анатольевич',
    birthdate: '17.05.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 6,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ponomarev_vyacheslav',
    name: 'Пономарев Вячеслав Владимирович',
    birthdate: '06.10.1980',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 6,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'andrejchuk_marina',
    name: 'Андрейчук Марина Александровна',
    birthdate: '20.02.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 7,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'safonov_fyodor',
    name: 'Сафонов Фёдор Сергеевич',
    birthdate: '04.12.1993',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 7,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'ivchenko_borislav',
    name: 'Ивченко Борислав Вячеславович',
    birthdate: '21.07.1986',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 7,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zaharchenko_mihail',
    name: 'Захарченко Михаил Юрьевич',
    birthdate: '30.05.1989',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 8,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kurbakov_dmitrij',
    name: 'Курбаков Дмитрий Егорович',
    birthdate: '20.04.1984',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 8,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'reznikova_olga',
    name: 'Резникова Ольга Викторовна',
    birthdate: '18.09.1967',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 9,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zvereva_inna',
    name: 'Зверева Инна Петровна',
    birthdate: '03.09.1968',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 9,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'bojkova_elena',
    name: 'Бойкова Елена Александровна',
    birthdate: '13.07.1990',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 10,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kucherova_tatyana',
    name: 'Кучерова Татьяна Владимировна',
    birthdate: '04.08.1964',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 10,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'muratov_georgij',
    name: 'Муратов Георгий Георгиевич',
    birthdate: '30.06.1965',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 10,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kuleshova_kristina',
    name: 'Кулешова Кристина Евгеньевна',
    birthdate: '05.09.1994',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 11,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'esakov_yurij',
    name: 'Есаков Юрий Станиславович',
    birthdate: '07.01.1989',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 11,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'belozerova_elena',
    name: 'Белозерова Елена Владимировна',
    birthdate: '28.04.1964',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 12,
        listNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'smyshnikov_yurij',
    name: 'Смышников Юрий Анатольевич',
    birthdate: '24.02.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 12,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kucenko_tatyana',
    name: 'Куценко Татьяна Михайловна',
    birthdate: '19.06.1986',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 12,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'murashkin_vadim',
    name: 'Мурашкин Вадим Викторович',
    birthdate: '21.08.1970',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 13,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'mukasheva_sofya',
    name: 'Мукашева Софья Васильевна',
    birthdate: '20.11.1979',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 13,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'yakovlev_aleksandr',
    name: 'Яковлев Александр Александрович',
    birthdate: '18.10.1980',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 14,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'grad_larisa',
    name: 'Град Лариса Борисовна',
    birthdate: '22.09.1971',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 14,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'logvinov_viktor',
    name: 'Логвинов Виктор Иванович',
    birthdate: '09.03.1967',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 15,
        listNumber: 1,
        status: CandidateStatuses.mandatRejected,
      },
    ],
  },
  {
    alias: 'fedorov_dmitrij',
    name: 'Федоров Дмитрий Александрович',
    birthdate: '22.04.1972',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 15,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zubashchenko_yaroslav',
    name: 'Зубащенко Ярослав Викторович',
    birthdate: '26.03.1992',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 15,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'maslov_oleg',
    name: 'Маслов Олег Васильевич',
    birthdate: '21.03.1969',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 16,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'telkova_larisa',
    name: 'Телкова Лариса Анатольевна',
    birthdate: '08.05.1970',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 16,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lukin_sergej',
    name: 'Лукин Сергей Николаевич',
    birthdate: '07.07.1954',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 17,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'kulikov_vyacheslav',
    name: 'Куликов Вячеслав Иванович',
    birthdate: '29.09.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 18,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'erofeeva_tatyana',
    name: 'Ерофеева Татьяна Александровна',
    birthdate: '25.02.1987',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 18,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'chufickaya_nataliya',
    name: 'Чуфицкая Наталия Анатольевна',
    birthdate: '29.08.1977',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 18,
        listNumber: 3,
        status: CandidateStatuses.lost,
      },
    ],
  },
  {
    alias: 'leonova_larisa',
    name: 'Леонова Лариса Валерьевна',
    birthdate: '26.03.1965',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 19,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'korabejnikova_mariya',
    name: 'Корабейникова Мария Васильевна',
    birthdate: '15.02.1992',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 20,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'shabadaev_ivan',
    name: 'Шабадаев Иван Иванович',
    birthdate: '12.03.1969',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 21,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'plyushcheva_galina',
    name: 'Плющева Галина Юрьевна',
    birthdate: '24.03.1964',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 21,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kruglik_vitalij',
    name: 'Круглик Виталий Владимирович',
    birthdate: '21.01.1958',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 22,
        listNumber: 2,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'blinova_irina',
    name: 'Блинова Ирина Ивановна',
    birthdate: '13.11.1968',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 22,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kopylov_artem',
    name: 'Копылов Артем Николаевич',
    birthdate: '14.03.1989',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 23,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'glotov_sergej',
    name: 'Глотов Сергей Иванович',
    birthdate: '04.05.1958',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 23,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zarudnyj_valerij',
    name: 'Зарудный Валерий Владимирович',
    birthdate: '03.05.1965',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 24,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'vatutin_vladimir',
    name: 'Ватутин Владимир Сергеевич',
    birthdate: '28.03.1987',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 24,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'konovalov_ivan',
    name: 'Коновалов Иван Аркадьевич',
    birthdate: '28.03.1982',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 25,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'korolyuk_aleksandr',
    name: 'Королюк Александр Сергеевич',
    birthdate: '27.11.1975',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 25,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'polunin_vladimir',
    name: 'Полунин Владимир Иванович',
    birthdate: '21.07.1959',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 25,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'losev_anatolij',
    name: 'Лосев Анатолий Николаевич',
    birthdate: '17.11.1967',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 26,
        listNumber: 1,
        status: CandidateStatuses.registered,
        deputat: {},
      },
    ],
  },
  {
    alias: 'shulekin_vasilij',
    name: 'Шулекин Василий Иванович',
    birthdate: '05.01.1965',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 26,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'leshchenko_sergej',
    name: 'Лещенко Сергей Васильевич',
    birthdate: '09.07.1986',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 26,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'sisyuk_vladimir',
    name: 'Сисюк Владимир Михайлович',
    birthdate: '01.07.1962',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 27,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'tkachev_roman',
    name: 'Ткачев Роман Александрович',
    birthdate: '08.08.1982',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 28,
        listNumber: 2,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'goncharova_anna',
    name: 'Гончарова Анна Владимировна',
    birthdate: '01.02.1982',
    candidate: [
      {
        locationType: LocationType.region,
        callNumber: 7,
        party: Parties.er,
        areaNumber: 28,
        listNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default er
