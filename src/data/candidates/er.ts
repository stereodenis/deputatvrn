import * as photos from '../../images/candidates'
import { CandidateStatuses, Parties, Person } from '../../types'

const er: Person[] = [
  {
    name: 'Ходырев Владимир Фёдорович',
    alias: 'hodyrev_vladimir',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/hodyrev_vf.jpg',
    candidate: [
      {
        callNumber: 5,
        areaNumber: 1,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
    deputat: [
      {
        areaNumber: 1,
        callNumber: 4,
        office: 'ул. Дубовая д. 12',
        phones: ['+79531191757'],
        website: 'http://gorduma-voronezh.ru/hodyrev-vladimir-fedorovich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'shvetsov',
    name: 'Швецов Дмитрий Сергеевич',
    photo: photos.shvezov_dmitriy,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 2,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'kochetov_ruslan',
    name: 'Кочетов Руслан Львович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kochetov_rl.jpg',
    candidate: [
      {
        callNumber: 4,
        areaNumber: 5,
        party: Parties.er,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 5,
        office: 'Ленинский пр-т, 86',
        phones: ['+74732547703', '+79515567899'],
        website: 'http://gorduma-voronezh.ru/kochetov-ruslan-lvovich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'chercasov',
    name: 'Черкасов Олег Николаевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/cherkasov_on.jpg',
    candidate: [
      {
        party: Parties.er,
        status: CandidateStatuses.registered,
        areaNumber: 3,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        areaNumber: 3,
        callNumber: 4,
        office: 'ул. Переверткина, 11',
        phones: ['+79515415914'],
        website: 'http://gorduma-voronezh.ru/cherkasov-oleg-nikolaevich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'avdeev',
    name: 'Авдеев Сергей Алексеевич',
    photo: photos.avdeev_sergey,
    candidate: [
      {
        areaNumber: 4,
        callNumber: 5,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'pinigin',
    name: 'Пинигин Алексей Юрьевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/pinigin_ay.jpg',
    candidate: [
      {
        areaNumber: 5,
        callNumber: 5,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
    deputat: [
      {
        areaNumber: 2,
        callNumber: 4,
        office: 'ул. Переверткина, 11',
        phones: ['+79102453128', '+74732281687'],
        website: 'http://gorduma-voronezh.ru/pinigin-aleksej-yurevich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'tatarintsev',
    name: 'Татаринцев Сергей Сергеевич',
    photo: photos.tatarinzev_sergey,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 6,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
  },

  {
    alias: 'rusakov',
    name: 'Русаков Владимир Владимирович',
    photo: photos.rusakov_vladimir,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 7,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
  },

  {
    alias: 'chufinev',
    name: 'Чуфинев Александр Валентинович',
    photo: photos.chufinev_aleksandr,
    candidate: [
      {
        areaNumber: 8,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'provotorov',
    name: 'Провоторов Александр Анатольевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/provotorov_aa.jpg',
    candidate: [
      {
        areaNumber: 9,
        party: Parties.er,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        areaNumber: 9,
        callNumber: 4,
        office: 'ул. 121 Стрелковой дивизии, 9',
        phones: ['+74732297672', '+79202116301'],
        website: 'http://gorduma-voronezh.ru/provotorov-aleksandr-anatolevich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'zolotarev',
    name: 'Золотарёв Алексей Алексеевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/zolotarev_aa.jpg',
    candidate: [
      {
        callNumber: 5,
        areaNumber: 10,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
    deputat: [
      {
        areaNumber: 11,
        callNumber: 4,
        office: 'ул. Космонавтов, 8',
        phones: ['+74732946065'],
        website: 'http://gorduma-voronezh.ru/zolotaryov-aleksej-alekseevich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'boyko',
    name: 'Бойко Андрей Николаевич',
    photo: photos.boiko_andrei,
    candidate: [
      {
        areaNumber: 11,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
  },
  {
    alias: 'sobolev',
    name: 'Соболев Андрей Иванович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/sobolev_ai.jpg',
    candidate: [
      {
        callNumber: 5,
        areaNumber: 12,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 12,
        party: Parties.er,
        office: 'мкр Придонской, ул. Латненская, д. 3',
        phones: ['+74732434249', '+79202290846'],
        website: 'http://gorduma-voronezh.ru/sobolev-andrej-ivanovich/',
      },
    ],
  },
  {
    alias: 'kostyrev',
    name: 'Костырев Игорь Владимирович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kostyrev_iv.jpg',
    candidate: [
      {
        party: Parties.er,
        status: CandidateStatuses.registered,
        areaNumber: 13,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 13,
        office: 'ул.Грамши, 70',
        phones: ['+74732362643'],
        website: 'http://gorduma-voronezh.ru/kostyrev-igor-vladimirovich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'solomatina',
    name: 'Соломатина Елена Дмитриевна',
    photo: photos.solomatina_elena,
    candidate: [
      {
        callNumber: 5,
        areaNumber: 14,
        party: Parties.er,
        status: CandidateStatuses.registered,
      },
    ],
  },
  {
    alias: 'koliukh',
    name: 'Колиух Сергей Михайлович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/koliuh_sm.jpg',
    candidate: [
      {
        areaNumber: 15,
        party: Parties.er,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 15,
        office: 'ул. 20-летия Октября, 115',
        phones: ['+79525405337'],
        website: 'http://gorduma-voronezh.ru/koliuh-sergej-mihajlovich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'zhukov',
    name: 'Жуков Александр Алексеевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/zhukov_aa.jpg',
    candidate: [
      {
        areaNumber: 16,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        areaNumber: 16,
        callNumber: 4,
        office: 'ул 9 Января, 108, ДК Машиностроителей, комн.119',
        phones: ['+74732599091', '+74732799512', '+74732227342'],
        website: 'http://gorduma-voronezh.ru/zhukov-aleksandr-alekseevich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'kandybin',
    name: 'Кандыбин Иван Владимирович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kandybin_iv.jpg',
    candidate: [
      {
        areaNumber: 17,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 17,
        office: 'ул. Вл. Невского, 11',
        phones: ['+74732509445', '+79081452363'],
        website: 'http://gorduma-voronezh.ru/kandybin-ivan-vladimirovich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'kudryavtsev',
    name: 'Кудрявцев Сергей Николаевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kudryavtsev_sn.jpg',
    candidate: [
      {
        areaNumber: 18,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 18,
        office: 'ул. Лизюкова, 36',
        phones: ['+74732695025', '+79050512332'],
        website: 'http://gorduma-voronezh.ru/kudryavcev-sergej-nikolaevich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'chistyakov',
    name: 'Чистяков Александр Александрович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/chistyakov_aa.jpg',
    candidate: [
      {
        areaNumber: 19,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 19,
        office: 'ул.Вл. Невского, 11 1-й этаж',
        phones: ['+74732320850'],
        website: 'http://gorduma-voronezh.ru/chistyakov-aleksandr-aleksandrovich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'krutskikh',
    name: 'Крутских Дмитрий Борисович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/krutskih_db.jpg',
    candidate: [
      {
        areaNumber: 20,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
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
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/popova_yv.jpg',
    candidate: [
      {
        areaNumber: 21,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        areaNumber: 21,
        office: 'пер. Ботанический, 47, поликлиника №3, 1 этаж, каб. 117',
        phones: ['+74732210515', '+79518768067'],
        website: 'http://gorduma-voronezh.ru/popova-yuliya-vladimirovna/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'klevtsov',
    name: 'Клецов Вадим Владимирович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kletsov_vv.jpg',
    candidate: [
      {
        areaNumber: 22,
        party: Parties.er,
        status: CandidateStatuses.registered,
        callNumber: 5,
      },
    ],
    deputat: [
      {
        areaNumber: 22,
        callNumber: 4,
        office: 'Московский проспект, 58',
        phones: ['+74732392787', '+79204050597'],
        website: 'http://gorduma-voronezh.ru/klecov-vadim-vladimirovich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'trubetskoy',
    name: 'Трубецкой Александр Николаевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/trubetskoy_an.jpg',
    candidate: [
      {
        areaNumber: 23,
        party: Parties.er,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
    deputat: [
      {
        areaNumber: 23,
        callNumber: 4,
        office: 'ул. Никитинская, д. 8',
        phones: ['+79515563273'],
        website: 'http://gorduma-voronezh.ru/trubeckoj-aleksandr-nikolaevich/',
        party: Parties.er,
      },
    ],
  },
  {
    alias: 'sysoev',
    name: 'Сысоев Александр Владимирович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/sysoev_av.jpg',
    candidate: [
      {
        areaNumber: 24,
        party: Parties.er,
        callNumber: 5,
        status: CandidateStatuses.registered,
      },
    ],
    deputat: [
      {
        areaNumber: 24,
        callNumber: 4,
        office: 'ул. Никитинская, д. 8 каб. 102а',
        phones: ['+74732227351'],
        website: 'http://gorduma-voronezh.ru/sysoev-aleksandr-vladimirovich/',
        party: Parties.er,
      },
    ],
  },

  {
    alias: 'kovalev_viktor',
    name: 'Ковалев Виктор Викторович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kovalev_vv.jpg',
    candidate: [
      {
        areaNumber: 6,
        callNumber: 4,
        party: Parties.er,
      },
    ],
    deputat: [
      {
        areaNumber: 6,
        callNumber: 4,
        party: Parties.er,
        office: 'Ленинский пр-т, д. 86',
        phones: ['+74732547703', '+79081446549'],
        website: 'http://gorduma-voronezh.ru/kovalev-viktor-viktorovich/',
      },
    ],
  },
  {
    alias: 'turin_aleksandr',
    name: 'Тюрин Александр Борисович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/tyurin_ab.jpg',
    candidate: [
      {
        callNumber: 4,
        party: Parties.er,
        areaNumber: 8,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        party: Parties.er,
        areaNumber: 8,
        office: 'ул. Ростовская, 50',
        phones: ['+74732299191', '+79202299191'],
        website: 'http://gorduma-voronezh.ru/tyurin-aleksandr-borisovich/',
      },
    ],
  },
  {
    alias: 'oganezov_sergey',
    name: 'Оганезов Сергей Иванович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/oganezov_si.jpg',
    candidate: [
      {
        callNumber: 4,
        party: Parties.er,
        areaNumber: 10,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        party: Parties.er,
        areaNumber: 10,
        office: 'Ул. Космонавта Комарова, 13',
        phones: ['+79521002728'],
        website: 'http://gorduma-voronezh.ru/oganezov-sergej-ivanovich/',
      },
    ],
  },
  {
    alias: 'golovin_aleksandr',
    name: 'Головин Александр Иванович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/golovin_ai.jpg',
    candidate: [
      {
        callNumber: 4,
        party: Parties.er,
        areaNumber: 14,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        party: Parties.er,
        areaNumber: 14,
        office: 'ул. Грамши, 70',
        phones: ['+74732906412', '+79191835774'],
        website: 'http://gorduma-voronezh.ru/golovin-aleksandr-ivanovich/',
      },
    ],
  },
  {
    alias: 'grebenkin_nikolay',
    name: 'Гребенкин Николай Тимофеевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/grebenkin_nt.jpg',
    candidate: [
      {
        callNumber: 4,
        party: Parties.er,
        areaNumber: 20,
      },
    ],
    deputat: [
      {
        callNumber: 4,
        party: Parties.er,
        areaNumber: 20,
        office: 'Владимира Невского, 35',
        phones: ['+74732289206', '+74732623484'],
        website: 'http://gorduma-voronezh.ru/grebenkin-nikolaj-timofeevich/',
      },
    ],
  },
]

export default er
