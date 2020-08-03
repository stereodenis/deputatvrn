import * as photos from '../../images/candidates'
import { CandidateStatuses, CandidateType, Parties, Person } from '../../types'

const er: Person[] = [
  {
    name: 'Ходырев Владимир Фёдорович',
    alias: 'hodyrev_vladimir',
    birthdate: '23.05.1957',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/hodyrev_vf.jpg',
    candidate: [
      {
        callNumber: 5,
        type: CandidateType.city,
        areaNumber: 1,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
      {
        areaNumber: 1,
        callNumber: 4,
        type: CandidateType.city,
        party: Parties.er,
        deputat: {
          office: 'ул. Дубовая д. 12',
          phones: ['+79531191757'],
          website: 'http://gorduma-voronezh.ru/hodyrev-vladimir-fedorovich/',
        },
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
        type: CandidateType.city,
        areaNumber: 2,
        party: Parties.er,
        status: CandidateStatuses.registered,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
      },
      {
        areaNumber: 3,
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
        party: Parties.er,
        status: CandidateStatuses.registered,
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
        type: CandidateType.city,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
      {
        areaNumber: 2,
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
      },
      {
        areaNumber: 9,
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
        areaNumber: 10,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
      {
        areaNumber: 11,
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
        areaNumber: 12,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
      {
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
      },
      {
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
      {
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
      },
      {
        areaNumber: 16,
        callNumber: 4,
        type: CandidateType.city,
        party: Parties.er,
        deputat: {
          office: 'ул 9 Января, 108, ДК Машиностроителей, комн.119',
          phones: ['+74732599091', '+74732799512', '+74732227342'],
          website: 'http://gorduma-voronezh.ru/zhukov-aleksandr-alekseevich/',
        },
      },
    ],
  },
  {
    alias: 'kandybin',
    name: 'Кандыбин Иван Владимирович',
    birthdate: '16.02.1976',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kandybin_iv.jpg',
    candidate: [
      {
        areaNumber: 17,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
        type: CandidateType.city,
      },
      {
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
      },
      {
        callNumber: 4,
        type: CandidateType.city,
        areaNumber: 18,
        party: Parties.er,
        deputat: {
          office: 'ул. Лизюкова, 36',
          phones: ['+74732695025', '+79050512332'],
          website: 'http://gorduma-voronezh.ru/kudryavcev-sergej-nikolaevich/',
        },
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
        type: CandidateType.city,
      },
      {
        callNumber: 4,
        type: CandidateType.city,
        areaNumber: 19,
        party: Parties.er,
        deputat: {
          office: 'ул.Вл. Невского, 11 1-й этаж',
          phones: ['+74732320850'],
          website: 'http://gorduma-voronezh.ru/chistyakov-aleksandr-aleksandrovich/',
        },
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
        type: CandidateType.city,
        role:
          'Заместитель председателя постоянной комиссии по транспорту, промышленности, развитию малого и среднего бизнеса. Член постоянной комиссии по образованию, культуре и социальной поддержке населения.',
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
        type: CandidateType.city,
      },
      {
        areaNumber: 21,
        party: Parties.er,
        callNumber: 4,
        type: CandidateType.city,
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
        type: CandidateType.city,
      },
      {
        areaNumber: 22,
        party: Parties.er,
        callNumber: 4,
        type: CandidateType.city,
        deputat: {
          office: 'Московский проспект, 58',
          phones: ['+74732392787', '+79204050597'],
          website: 'http://gorduma-voronezh.ru/klecov-vadim-vladimirovich/',
        },
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
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
        status: CandidateStatuses.registered,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
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
        type: CandidateType.city,
        party: Parties.er,
        areaNumber: 20,
        deputat: {
          office: 'Владимира Невского, 35',
          phones: ['+74732289206', '+74732623484'],
          website: 'http://gorduma-voronezh.ru/grebenkin-nikolaj-timofeevich/',
        },
      },
    ],
  },
  {
    alias: 'verzilin_vladimir',
    name: 'Верзилин Владимир Александрович',

    birthdate: '06.08.1955',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 2,
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
        type: CandidateType.region,
        areaNumber: 16,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'gaponenko_evgenij',
    name: 'Гапоненко Евгений Николаевич',

    birthdate: '11.10.1985',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 23,
        status: CandidateStatuses.registered,
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
        type: CandidateType.region,
        areaNumber: 8,
        status: CandidateStatuses.registered,
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
        type: CandidateType.region,
        areaNumber: 1,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'domnich_nikolaj',
    name: 'Домнич Николай Сергеевич',

    birthdate: '29.02.1980',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 27,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'evseev_aleksandr',
    name: 'Евсеев Александр Васильевич',

    birthdate: '01.10.1956',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 17,
        status: CandidateStatuses.registered,
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
        type: CandidateType.region,
        areaNumber: 21,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'zubkov_artem',
    name: 'Зубков Артем Николаевич',

    birthdate: '10.01.1983',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 25,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kitaev_evgenij',
    name: 'Китаев Евгений Петрович',

    birthdate: '23.02.1969',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 3,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'klimentov_andrej',
    name: 'Климентов Андрей Владимирович',

    birthdate: '04.07.1971',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 7,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'klyuchnikov_vladimir',
    name: 'Ключников Владимир Иванович',

    birthdate: '16.04.1949',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 14,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'koloskov_nikolaj',
    name: 'Колосков Николай Васильевич',

    birthdate: '29.07.1953',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 18,
        status: CandidateStatuses.registered,
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
        type: CandidateType.region,
        areaNumber: 22,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'lukinov_dmitrij',
    name: 'Лукинов Дмитрий Валериевич',

    birthdate: '14.07.1978',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 9,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'moshurov_ivan',
    name: 'Мошуров Иван Петрович',

    birthdate: '15.09.1966',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 10,
        status: CandidateStatuses.registered,
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
        type: CandidateType.region,
        areaNumber: 24,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'peshikov_aleksandr',
    name: 'Пешиков Александр Александрович',

    birthdate: '01.11.1978',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 28,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'povarov_vladimir',
    name: 'Поваров Владимир Петрович',

    birthdate: '19.04.1957',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 13,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'prytykin_andrej',
    name: 'Прытыкин Андрей Александрович',

    birthdate: '01.12.1966',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 11,
        status: CandidateStatuses.registered,
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
        type: CandidateType.region,
        areaNumber: 4,
        status: CandidateStatuses.registered,
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
        type: CandidateType.region,
        areaNumber: 20,
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
        type: CandidateType.region,
        areaNumber: 6,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'tribunskij_sergej',
    name: 'Трибунский Сергей Иванович',

    birthdate: '08.04.1973',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 26,
        status: CandidateStatuses.registered,
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
        type: CandidateType.region,
        areaNumber: 15,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'chernov_aleksej',
    name: 'Чернов Алексей Викторович',

    birthdate: '04.03.1978',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
        areaNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'chuzhikov_aleksandr',
    name: 'Чужиков Александр Владимирович',

    birthdate: '25.02.1977',
    candidate: [
      {
        party: Parties.er,
        callNumber: 7,
        type: CandidateType.region,
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
        type: CandidateType.region,
        areaNumber: 19,
        status: CandidateStatuses.registered,
      },
    ],
  },
]

export default er
