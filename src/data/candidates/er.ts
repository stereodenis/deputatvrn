import * as photos from '../../images/candidates'
import { Candidate, Parties, CandidateStatuses } from '../../types'

const er: Candidate[] = [
  {
    areaNumber: 1,
    alias: 'hodyrev_vladimir',
    name: 'Ходырев Владимир Фёдорович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/hodyrev_vf.jpg',
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 2,
    alias: 'shvetsov',
    name: 'Швецов Дмитрий Сергеевич',
    photo: photos.shvezov_dmitriy,
    party: Parties.er,
  },
  {
    areaNumber: 3,
    alias: 'chercasov',
    name: 'Черкасов Олег Николаевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/cherkasov_on.jpg',
    party: Parties.er,
  },
  {
    areaNumber: 4,
    alias: 'avdeev',
    name: 'Авдеев Сергей Алексеевич',
    photo: photos.avdeev_sergey,
    party: Parties.er,
  },
  {
    areaNumber: 5,
    alias: 'pinigin',
    name: 'Пинигин Алексей Юрьевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/pinigin_ay.jpg',
    party: Parties.er,
  },
  {
    areaNumber: 6,
    alias: 'tatarintsev',
    name: 'Татаринцев Сергей Сергеевич',
    photo: photos.tatarinzev_sergey,
    party: Parties.er,
  },

  {
    areaNumber: 7,
    alias: 'rusakov',
    name: 'Русаков Владимир Владимирович',
    photo: photos.rusakov_vladimir,
    party: Parties.er,
    status: CandidateStatuses.registered,
  },

  {
    areaNumber: 8,
    alias: 'chufinev',
    name: 'Чуфинев Александр Валентинович',
    photo: photos.chufinev_aleksandr,
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 9,
    alias: 'provotorov',
    name: 'Провоторов Александр Анатольевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/provotorov_aa.jpg',
    party: Parties.er,
  },

  {
    areaNumber: 10,
    alias: 'zolotarev',
    name: 'Золотарёв Алексей Алексеевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/zolotarev_aa.jpg',
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 11,
    alias: 'boyko',
    name: 'Бойко Андрей Николаевич',
    photo: photos.boiko_andrei,
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 12,
    alias: 'sobolev',
    name: 'Соболев Андрей Иванович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/sobolev_ai.jpg',
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 13,
    alias: 'kostyrev',
    name: 'Костырев Игорь Владимирович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kostyrev_iv.jpg',
    party: Parties.er,
  },

  {
    areaNumber: 14,
    alias: 'solomatina',
    name: 'Соломатина Елена Дмитриевна',
    photo: photos.solomatina_elena,
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 15,
    alias: 'koliukh',
    name: 'Колиух Сергей Михайлович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/koliuh_sm.jpg',
    party: Parties.er,
  },
  {
    areaNumber: 16,
    alias: 'zhukov',
    name: 'Жуков Александр Алексеевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/zhukov_aa.jpg',
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 17,
    alias: 'kandybin',
    name: 'Кандыбин Иван Владимирович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kandybin_iv.jpg',
    party: Parties.er,
  },

  {
    areaNumber: 18,
    alias: 'kudryavtsev',
    name: 'Кудрявцев Сергей Николаевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kudryavtsev_sn.jpg',
    party: Parties.er,
  },
  {
    areaNumber: 19,
    alias: 'chistyakov',
    name: 'Чистяков Александр Александрович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/chistyakov_aa.jpg',
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 20,
    alias: 'krutskikh',
    name: 'Крутских Дмитрий Борисович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/krutskih_db.jpg',
    party: Parties.er,
    status: CandidateStatuses.registered,
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
    role:
      'Заместитель председателя постоянной комиссии по транспорту, промышленности, развитию малого и среднего бизнеса. Член постоянной комиссии по образованию, культуре и социальной поддержке населения.',
  },
  {
    areaNumber: 21,
    alias: 'popova',
    name: 'Попова Юлия Владимировна',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/popova_yv.jpg',
    party: Parties.er,
    status: CandidateStatuses.registered,
  },
  {
    areaNumber: 22,
    alias: 'klevtsov',
    name: 'Клецов Вадим Владимирович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/kletsov_vv.jpg',
    party: Parties.er,
  },
  {
    areaNumber: 23,
    alias: 'trubetskoy',
    name: 'Трубецкой Александр Николаевич',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/trubetskoy_an.jpg',
    party: Parties.er,
  },
  {
    areaNumber: 24,
    alias: 'sysoev',
    name: 'Сысоев Александр Владимирович',
    photo: 'http://gorduma-voronezh.ru/wp-content/uploads/2019/05/sysoev_av.jpg',
    party: Parties.er,
  },
]

export default er
